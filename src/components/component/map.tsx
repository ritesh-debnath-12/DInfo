import { MapContainer, TileLayer, GeoJSON, useMapEvent } from "react-leaflet";
import { GeoJsonObject } from "geojson";
import "leaflet/dist/leaflet.css";

interface IndiaMapProps {
  data: GeoJsonObject;
}

const IndiaMap: React.FC<IndiaMapProps> = ({ data }) => {
  const onEachState = (state: any, layer: L.Layer) => {
    layer.on({
      mouseover: (e: L.LeafletMouseEvent) => {
        const target = e.target as L.Layer;
        target
          .bindPopup(
            `<b>${state.properties.NAME_1}</b><br>HDI: ${state.properties.HDI}<br><b>DATA IS IN BETA STATE, MAY CONTAIN ERRORS<b>`
          )
          .openPopup();
      },
      mouseout: (e: L.LeafletMouseEvent) => {
        const target = e.target as L.Layer;
        target.closePopup();
      },
    });
  };

  return (
    <>
      <MapContainer
        center={[22.9734, 78.6569]}
        zoom={5}
        style={{ height: "500px", width: "50%" }}
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
        <GeoJSON data={data} onEachFeature={onEachState} />
      </MapContainer>
    </>
  );
};

export default IndiaMap;
