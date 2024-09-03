"use client";

import { useEffect, useState } from "react";
import { GeoJsonObject } from "geojson";
import dynamic from "next/dynamic";

const IndiaMap = dynamic(() => import("@/components/component/map"), {
  ssr: false,
});

export default function DisasterDataPage() {
  const [data, setData] = useState<GeoJsonObject | null>(null);
  useEffect(() => {
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
