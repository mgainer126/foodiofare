import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import marker from "../../assets/icons/custom_pin.png";
import googleAPIKey from "../../data/APIKey.jsx";
import axios from "axios";
import "../RenderMap/RenderMap.scss";
const CustIsHere = ({ marker }) => <img src={marker} alt="marker" />;
const VendorIsHere = ({ marker }) => <img src={marker} alt="marker" />;

function RenderMap({ vendorcords }) {
  const [custlocation, setCustLocation] = useState();
  const [defaultZoom, setDefaultZoom] = useState(10);

  useEffect(() => {
    axios
      .get("http://localhost:8080/customer/customer")
      .then(function (response) {
        const customers = response.data;
        const token = sessionStorage.getItem("token");
        const stringToken = JSON.parse(token);
        const findCustomer = customers.filter(
          (customer) => customer.uuid === stringToken
        );
        coords(findCustomer);
      });
  }, []);

  const coords = (x) => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${x[0].streetno}+${x[0].streetname}+${x[0].streettype},+${x[0].city},+${x[0].province}&key=AIzaSyDppxNKV5QddpqA90IuS0kWg9HTLOuJsGw`
      )
      .then(function (response) {
        setCustLocation(response.data.results[0].geometry.location);
      });
  };

  return (
    // Important! Always set the container height explicitly

    <>
      {custlocation && (
        <div className="map">
          {/* This renders the map */}
          <div style={{ height: "60vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: `${googleAPIKey}` }}
              center={custlocation}
              zoom={defaultZoom}
            >
              <CustIsHere
                lat={custlocation.lat}
                lng={custlocation.lng}
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
      )}
    </>
  );
}

export default RenderMap;
