import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

// Default center (New York)
const defaultCenter = {
  lat: 40.7128,
  lng: -74.006,
};

// City coordinates
const cityCoordinates = {
  "New York": { lat: 40.7128, lng: -74.006 },
  "Los Angeles": { lat: 34.0522, lng: -118.2437 },
  "Chicago": { lat: 41.8781, lng: -87.6298 },
  "Houston": { lat: 29.7604, lng: -95.3698 },
  "Phoenix": { lat: 33.4484, lng: -112.074 },
};

const Map = ({ selectedCity }) => {
  const [mapCenter, setMapCenter] = useState(defaultCenter);

  useEffect(() => {
    if (selectedCity && cityCoordinates[selectedCity]) {
      setMapCenter(cityCoordinates[selectedCity]);
    }
  }, [selectedCity]);

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={mapCenter} zoom={10}>
        <Marker position={mapCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
