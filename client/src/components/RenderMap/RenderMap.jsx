import React from "react";
import GoogleMapReact from "google-map-react";
import marker from "../../assets/icons/custom_pin.png";
import axios from "axios";
import "../RenderMap/RenderMap.scss";
const DefaultMapPos = ({ marker }) => <img src={marker} />;
const CustIsHere = ({ marker }) => <img src={marker} alt="marker" />;
const VendorIsHere = ({ marker }) => <img src={marker} alt="marker" />;
const API_KEY = "AIzaSyDppxNKV5QddpqA90IuS0kWg9HTLOuJsGw";

export default function RenderMap({ defaultMapPos, custcords }) {
  const defaultProps = {
    center: {
      lat: defaultMapPos.lat,
      lng: defaultMapPos.lng,
    },
    zoom: 4.2,
  };
  console.log(defaultMapPos);
  // console.log(vendors);
  console.log(custcords);

  // let vendorsArr = vendors;

  // const vendorcords = vendorsArr.map((vendor) => {
  //   axios
  //     .get(
  //       `https://maps.googleapis.com/maps/api/geocode/json?address=${vendor.addnum}+${vendor.streetname}+${vendor.streettype},
  //     +${vendor.city},+${vendor.province}&key=${API_KEY}`
  //     )
  //     .then((response) => {
  //       console.log(response.data.results[0].geometry.location);
  //       return response;
  //       console.log(response);
  //     });
  // });

  return (
    // Important! Always set the container height explicitly
    <div className="map">
      <div style={{ height: "60vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDppxNKV5QddpqA90IuS0kWg9HTLOuJsGw" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <DefaultMapPos
            lat={defaultMapPos.lat}
            lng={defaultMapPos.lng}
            marker={null}
          />
          <CustIsHere
            lat={custcords.lat}
            lng={custcords.lng}
            marker={marker}
            text="You are here!"
          />
          <VendorIsHere
            lat={custcords.lat}
            lng={custcords.lat}
            marker={marker}
          />
          {/* <VendorIsHere lat={43.938413} lng={-79.086761} marker={marker} /> */}
        </GoogleMapReact>
      </div>
    </div>
  );
}
