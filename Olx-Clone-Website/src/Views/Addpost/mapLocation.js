import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from '../../Images/marker.png'

// ...

function GoogleMap(props) {
  const {latitude , longitude} = props.userLocation
  const position = [latitude, longitude]

  const customIcon = new L.Icon({
    iconUrl: {markerIcon},
    iconSize: [35, 45],
    iconAnchor: [17, 45],
    popupAnchor: [0, -32],
  });

  const markers = [
    { id: 1, position: [latitude, longitude], popupContent: 'Liaquatabad No 10' },

  ];

  return <MapContainer style={{ border: '1px solid black' }} center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {markers.map((marker) => {
      <Marker 
      position={marker.position}
      key={marker.id}
      icon={customIcon}
      >
        <Popup >
          {marker.popupContent}
        </Popup>
      </Marker>
    })}

  </MapContainer>
}

export default GoogleMap