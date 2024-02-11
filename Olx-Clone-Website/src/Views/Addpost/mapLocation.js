import Map, { Marker }from 'react-map-gl';
 
// ...
 
function GoogleMap(){
  return <Map
  mapboxAccessToken=""
  initialViewState={{
    longitude: 24.908148,
    latitude: 67.0446932,
    zoom: 14
  }}
  style={{width: 600, height: 400}}
  mapStyle="mapbox://styles/mapbox/streets-v9"
>
     <Marker
                draggable={true}
                onDragEnd={e => console.log(e)}
                offsetLeft={-20}
                offsetTop={-10}
                longitude={24.908148} latitude={67.0446932} anchor="bottom" >
                <p
                        role="img"
                        className="cursor-pointer text-2xl animate-bounce"
                        aria-label="pin"
                      >
                        📍
                      </p>
                      </Marker>
                      <div>
            <i class="fa-solid fa-angle-left text-5xl mt-40 hover:text-blue-900 hover:cursor-pointer"></i>
            <i class="fa-solid fa-angle-right text-5xl mt-40 hover:text-blue-900 hover:cursor-pointer"></i>

                      </div>
  </Map>
}

export default GoogleMap