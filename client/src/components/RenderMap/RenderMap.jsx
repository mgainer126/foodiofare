import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import marker1 from "../../assets/icons/icons8-french-fries-30.png";
import marker from "../../assets/icons/icons8-my-location-24.png";
import axios from "axios";
import "../RenderMap/RenderMap.scss";
const CustIsHere = ({ marker }) => <img src={marker} alt="marker" />;
const VendorIsHere = ({ marker }) => <img src={marker} alt="marker" />;

function RenderMap({ vendorcords, defaultZoom, stores }) {
  const [custlocation, setCustLocation] = useState();
  const [session, setSession] = useState(0);
  const [key, setKey] = useState();

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
    axios
      .get("http://localhost:8080/validate/getcredentials")
      .then(function (response) {
        const credentials = response;
        setKey(credentials);
      });
  }, []);

  return (
    // Important! Always set the container height explicitly

    <>
      {custlocation && vendorcords && session && stores && key && (
        <div className="map">
          {/* This renders the map */}
          <div style={{ height: "60vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: `${key}` }}
              center={custlocation}
              zoom={defaultZoom}
            >
              <CustIsHere
                lat={custlocation.lat}
                lng={custlocation.lng}
                marker={marker}
              />
              {stores.map((store) => {
                return (
                  <VendorIsHere
                    lat={store.lat}
                    lng={store.lng}
                    marker={marker1}
                    name={"Here Is The Vendor"}
                  />
                );
              })}
            </GoogleMapReact>
          </div>
        </div>
      )}
    </>
  );
}

export default RenderMap;
