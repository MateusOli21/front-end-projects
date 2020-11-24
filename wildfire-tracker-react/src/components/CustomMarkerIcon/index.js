import Leaflet from "leaflet";

import fireIcon from "../../assets/fire.png";

export const CustomMarkerIcon = new Leaflet.Icon({
  iconUrl: fireIcon,
  className: "custom-icon",
  iconSize: [20, 28], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});
