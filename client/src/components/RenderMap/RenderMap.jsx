// import { Loader } from "@googlemaps/js-api-loader";
import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
// import DisplayMap from "../DisplayMap/DisplayMap";
// import MarkerClusterer from "@google/markerclustererplus";

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
        <AnyReactComponent lat={43.838413} lng={-79.086761} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
