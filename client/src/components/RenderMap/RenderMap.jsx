import React from "react";
import GoogleMapReact from "google-map-react";
import marker from "../../assets/icons/custom_pin.png";

import "../RenderMap/RenderMap.scss";
const DefaultMapPos = ({ marker }) => <img src={marker} />;
const CustIsHere = ({ marker }) => <img src={marker} alt="marker" />;
const VendorIsHere = ({ marker }) => <img src={marker} alt="marker" />;
const API_KEY = "AIzaSyDppxNKV5QddpqA90IuS0kWg9HTLOuJsGw";

export default function RenderMap({
  defaultMapPos,
  custcords,
  defaultZoom,
  vendorcords,
}) {
  const defaultProps = {
    center: {
      lat: defaultMapPos.lat,
      lng: defaultMapPos.lng,
    },
    zoom: defaultZoom,
  };

  return (
    // Important! Always set the container height explicitly
    <div className="map">
      {/* This renders the map */}
      <div style={{ height: "60vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDppxNKV5QddpqA90IuS0kWg9HTLOuJsGw" }}
          center={defaultProps.center}
          zoom={defaultProps.zoom}
        >
          {/* This places the marker on the location the customer provided on the form. */}
          <CustIsHere
            lat={defaultMapPos.lat}
            lng={defaultMapPos.lng}
            marker={marker}
          />
          <VendorIsHere
            lat={vendorcords.lat}
            lng={vendorcords.lng}
            marker={marker}
            name={"Here Is The Vendor"}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}
