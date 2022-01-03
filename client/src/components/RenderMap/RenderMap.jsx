import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";

import marker from "../../assets/icons/custom_pin.png";
// import googleAPIKey from "../../data/APIKey.jsx";
import axios from "axios";
import "../RenderMap/RenderMap.scss";
const CustIsHere = ({ marker }) => <img src={marker} alt="marker" />;
const VendorIsHere = ({ marker }) => <img src={marker} alt="marker" />;

function RenderMap({ vendorcords, defaultZoom, stores }) {
  const [custlocation, setCustLocation] = useState();
  const [session, setSession] = useState(0);
  const API = process.env.REACT_APP_API;

  useEffect(() => {
    setSession(sessionStorage.token);
    const uuid = sessionStorage.getItem("token");
    const parseuuid = JSON.parse(uuid);
    axios
      .get(`http://localhost:8080/customer/customer/${parseuuid}`)
      .then(function (response) {
        const findCustomer = response.data[0];
        const custLat = findCustomer.lat;
        const custLng = findCustomer.lng;
        const customerLocation = {
          lat: custLat,
          lng: custLng,
        };
        setCustLocation(customerLocation);
      });
  }, []);

  return (
    // Important! Always set the container height explicitly

    <>
      {custlocation && vendorcords && session && stores && (
        <div className="map">
          {/* This renders the map */}
          <div style={{ height: "60vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: `${API}` }}
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
