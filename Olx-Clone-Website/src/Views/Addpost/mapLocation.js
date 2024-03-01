import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from '../../Images/marker.png';

function GoogleMap(props) {
  const { latitude, longitude, userLocationName } = props.userLocation;
  const [markers, setMarkers] = useState([{ id: 1, position: [latitude, longitude], popupContent: userLocationName }]);
  const customIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [30, 32],
    iconAnchor: [17, 45],
    popupAnchor: [0, -32],
  });



  const handleMarkerDrag = (markerId, newPosition) => {
    setMarkers(prevMarkers => {
      return prevMarkers.map(marker => {
        if (marker.id === markerId) {
          return { ...marker, position: [newPosition.lat, newPosition.lng] };
        }
        return marker;
      });
    });
  };

  return (
    <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map(marker => (
        <Marker
          key={marker.id}
          position={marker.position}
          draggable={true}
          eventHandlers={{
            dragend: (e) => handleMarkerDrag(marker.id, e.target.getLatLng()),
          }}
          icon={customIcon}
        >
          <Popup>{marker.popupContent}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default GoogleMap;
