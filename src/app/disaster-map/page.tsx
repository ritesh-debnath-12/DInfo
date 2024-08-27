"use client";

import { useEffect, useState } from "react";
import IndiaMap from "@/components/component/map";
import { GeoJsonObject } from "geojson";

export default function DisasterDataPage() {
  const [data, setData] = useState<GeoJsonObject | null>(null);
  useEffect(() => {
    // Fetch the GeoJSON data from the public folder
    fetch("/geojson/disaster_map_WIP.geojson")
      .then((response) => response.json())
      .then((geojsonData) => setData(geojsonData))
      .catch((error) => console.error("Error loading GeoJSON:", error));
  }, []);

  if (!data) {
    return <p>Loading map...</p>;
  }

  return (
    <div className="flex justify-center items-center h-full p-20 -z-10">
      <IndiaMap data={data} />
    </div>
  );
}
