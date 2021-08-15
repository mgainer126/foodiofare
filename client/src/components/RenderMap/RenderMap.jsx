import React from "react";
import GoogleMapReact from "google-map-react";
import marker from "../../assets/icons/custom_pin.png";
const CustIsHere = ({ marker }) => <img src={marker} />;
const VendorIsHere = ({ marker }) => <img src={marker} />;

export default function RenderMap() {
  const defaultProps = {
    center: {
      lat: 43.838413,
      lng: -79.086761,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDppxNKV5QddpqA90IuS0kWg9HTLOuJsGw" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <CustIsHere lat={43.838413} lng={-79.086761} marker={marker} />
        <VendorIsHere lat={43.738413} lng={-79.086761} marker={marker} />
        <VendorIsHere lat={43.938413} lng={-79.086761} marker={marker} />
      </GoogleMapReact>
    </div>
  );
}
