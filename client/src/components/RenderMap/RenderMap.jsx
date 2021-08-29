import React from "react";
import GoogleMapReact from "google-map-react";
import marker from "../../assets/icons/custom_pin.png";
import googleAPIKey from "../../data/APIKey.jsx";
import "../RenderMap/RenderMap.scss";
const CustIsHere = ({ marker }) => <img src={marker} alt="marker" />;
const VendorIsHere = ({ marker }) => <img src={marker} alt="marker" />;

export default function RenderMap({ defaultMapPos, defaultZoom, vendorcords }) {
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
          bootstrapURLKeys={{ key: `${googleAPIKey}` }}
          center={defaultProps.center}
          zoom={defaultProps.zoom}
        >
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
