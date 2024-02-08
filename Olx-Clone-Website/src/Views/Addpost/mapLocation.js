import {GoogleApiWrapper} from 'google-maps-react';
 
// ...
 
export class MapContainer extends React.Component {}
 
export default GoogleApiWrapper({
  apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE)
})(MapContainer)