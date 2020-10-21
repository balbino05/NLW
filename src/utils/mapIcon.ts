import leaflet from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

const MapIcon = leaflet.icon({
    iconUrl: mapMarkerImg,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
  })

  export default MapIcon;