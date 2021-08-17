import React from "react";
import GoogleMapReact from "google-map-react";
import marker from "../../assets/icons/custom_pin.png";
import "../RenderMap/RenderMap.scss";
const DefaultMapPos = ({ marker }) => <img src={marker} alt="marker" />;
const CustIsHere = ({ marker }) => <img src={marker} alt="marker" />;
const VendorIsHere = ({ marker }) => <img src={marker} alt="marker" />;

export default function RenderMap({ custcords, vendors }) {
  const defaultProps = {
    center: {
      lat: custcords.lat,
      lng: custcords.lng,
    },
    zoom: 4.7,
  };
  console.log(custcords);
  console.log(vendors); //not getting passed for some reason

  return (
    // Important! Always set the container height explicitly
    <div className="map">
      <div style={{ height: "100vh", width: "85%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDppxNKV5QddpqA90IuS0kWg9HTLOuJsGw" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <DefaultMapPos lat={custcords.lat} lng={custcords.lng} />
          <CustIsHere
            lat={custcords.lat}
            lng={custcords.lng}
            marker={{ marker }}
            zoom={6}
          />
          <VendorIsHere lat={43.38413} lng={-79.086761} marker={marker} />
          <VendorIsHere lat={43.938413} lng={-79.086761} marker={marker} />
        </GoogleMapReact>
      </div>
    </div>
  );
}
