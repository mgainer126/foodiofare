import React from "react";
import GoogleMapReact from "google-map-react";
import marker from "../../assets/icons/custom_pin.png";
const DefaultMapPos = ({ marker }) => <img src={marker} alt="marker" />;
const CustIsHere = ({ marker }) => <img src={marker} alt="marker" />;
const VendorIsHere = ({ marker }) => <img src={marker} alt="marker" />;

export default function RenderMap(custcords) {
  const defaultProps = {
    center: {
      lat: 41.0881132,
      lng: -91.2148311,
    },
    zoom: 4.7,
  };
  console.log(custcords.custcords);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDppxNKV5QddpqA90IuS0kWg9HTLOuJsGw" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <DefaultMapPos
          lat={custcords.custcords.lat}
          lng={custcords.custcords.lng}
        />
        <CustIsHere
          lat={custcords.custcords.lat}
          lng={custcords.custcords.lng}
          marker={marker}
          text="You Are Here"
          zoom={6}
        />
        <VendorIsHere lat={43.38413} lng={-79.086761} marker={marker} />
        <VendorIsHere lat={43.938413} lng={-79.086761} marker={marker} />
      </GoogleMapReact>
    </div>
  );
}
