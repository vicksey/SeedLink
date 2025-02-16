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

// County coordinates
const countyCoordinates = {
  "Los Angeles County, CA": { lat: 34.0522, lng: -118.2437 },
  "Cook County, IL": { lat: 41.7377, lng: -87.6976 },
  "Harris County, TX": { lat: 29.8579, lng: -95.3936 },
  "Maricopa County, AZ": { lat: 33.2918, lng: -112.4291 },
  "San Diego County, CA": { lat: 32.7157, lng: -117.1611 },
  "Orange County, CA": { lat: 33.7175, lng: -117.8311 },
  "Miami-Dade County, FL": { lat: 25.7617, lng: -80.1918 },
  "Dallas County, TX": { lat: 32.7767, lng: -96.7970 },
  "Kings County, NY": { lat: 40.6782, lng: -73.9442 },
  "Riverside County, CA": { lat: 33.9533, lng: -117.3962 },
  "Queens County, NY": { lat: 40.7282, lng: -73.7949 },
  "Clark County, NV": { lat: 36.0796, lng: -115.0940 },
  "King County, WA": { lat: 47.6062, lng: -122.3321 },
  "San Bernardino County, CA": { lat: 34.1083, lng: -117.2898 },
  "Tarrant County, TX": { lat: 32.7555, lng: -97.3308 },
  "Bexar County, TX": { lat: 29.4241, lng: -98.4936 },
  "Broward County, FL": { lat: 26.1901, lng: -80.3659 },
  "Santa Clara County, CA": { lat: 37.3541, lng: -121.9552 },
  "Wayne County, MI": { lat: 42.2791, lng: -83.1393 },
  "Alameda County, CA": { lat: 37.6017, lng: -121.7195 },
  "Middlesex County, MA": { lat: 42.4672, lng: -71.2874 },
  "Philadelphia County, PA": { lat: 39.9526, lng: -75.1652 },
  "Suffolk County, NY": { lat: 40.9849, lng: -72.6151 },
  "Sacramento County, CA": { lat: 38.4747, lng: -121.3542 },
  "Bronx County, NY": { lat: 40.8448, lng: -73.8648 },
  "Hillsborough County, FL": { lat: 27.9904, lng: -82.3018 },
  "Nassau County, NY": { lat: 40.6546, lng: -73.5594 },
  "Cuyahoga County, OH": { lat: 41.4339, lng: -81.6758 },
  "Palm Beach County, FL": { lat: 26.7056, lng: -80.0364 },
  "Allegheny County, PA": { lat: 40.4680, lng: -79.9803 },
  "Oakland County, MI": { lat: 42.5920, lng: -83.3362 },
  "Orange County, FL": { lat: 28.4845, lng: -81.2519 },
  "Hennepin County, MN": { lat: 45.0209, lng: -93.5095 },
  "Franklin County, OH": { lat: 39.9667, lng: -83.0127 },
  "Fairfax County, VA": { lat: 38.9085, lng: -77.2405 },
  "Travis County, TX": { lat: 30.2871, lng: -97.7560 },
  "Salt Lake County, UT": { lat: 40.6680, lng: -111.9310 },
  "Fulton County, GA": { lat: 33.8034, lng: -84.3963 },
  "Mecklenburg County, NC": { lat: 35.2633, lng: -80.8042 },
  "Montgomery County, MD": { lat: 39.1547, lng: -77.2405 },
  "Pima County, AZ": { lat: 32.0575, lng: -111.6661 },
  "Honolulu County, HI": { lat: 21.3070, lng: -157.8583 },
  "Westchester County, NY": { lat: 41.1220, lng: -73.7949 },
  "Milwaukee County, WI": { lat: 43.0389, lng: -87.9065 },
  "Wake County, NC": { lat: 35.8032, lng: -78.5661 },
  "Fresno County, CA": { lat: 36.9859, lng: -119.2321 },
  "Shelby County, TN": { lat: 35.1269, lng: -89.9253 },
  "Fairfield County, CT": { lat: 41.2681, lng: -73.3884 },
  "DuPage County, IL": { lat: 41.8241, lng: -88.0690 },
  "Erie County, NY": { lat: 42.9023, lng: -78.8662 },
  "Pinellas County, FL": { lat: 27.8764, lng: -82.7779 },
  "Marion County, IN": { lat: 39.7795, lng: -86.1328 },
  "Hartford County, CT": { lat: 41.7924, lng: -72.8043 },
  "Bergen County, NJ": { lat: 40.9263, lng: -74.0770 },
  "Prince George's County, MD": { lat: 38.7849, lng: -76.8721 },
  "Monroe County, NY": { lat: 43.1610, lng: -77.6109 },
  "Duval County, FL": { lat: 30.3322, lng: -81.6557 },
  "Gwinnett County, GA": { lat: 33.9191, lng: -84.0167 }
};

const Map = ({ selectedCity }) => {
  const [mapCenter, setMapCenter] = useState(defaultCenter);

  useEffect(() => {
    if (selectedCity && countyCoordinates[selectedCity]) {
      setMapCenter(countyCoordinates[selectedCity]);
    }
  }, [selectedCity]);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API}>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={mapCenter} zoom={10}>
        <Marker position={mapCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
