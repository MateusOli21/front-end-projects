import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

import { CustomMarkerIcon } from "../CustomMarkerIcon";
import "leaflet/dist/leaflet.css";

const Map = ({ center, zoom, data }) => {
  const markers = data.map((ev, index) => {
    if (ev.categories[0].id === 8) {
      return (
        <Marker
          key={index}
          icon={CustomMarkerIcon}
          position={[
            ev.geometries[0].coordinates[1],
            ev.geometries[0].coordinates[0],
          ]}
        ></Marker>
      );
    }

    return null;
  });

  return (
    <MapContainer
      id="map"
      center={center}
      zoom={zoom}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {markers}
    </MapContainer>
  );
};

Map.defaultProps = {
  center: [42.3265, -122.8756],
  zoom: 4,
};

export default Map;
