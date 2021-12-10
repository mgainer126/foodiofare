//https://getbootstrap.com/docs/4.0/components/forms/
import "../CustVendorSearch/CustVendorSearch.scss";
import googleAPIKey from "../../data/APIKey";
import React, { useState, useEffect } from "react";
import RenderMap from "../../components/RenderMap/RenderMap";
import axios from "axios";
import CustSearchForm from "../../components/CustSearchForm/CustSearchForm";
import Header from "../../components/Header/Header";

function CustVendorSearch() {
  const [defaultZoom, setDefaultZoom] = useState(10);
  const [vendorcords, setVendorCords] = useState({});
  const [storage, setStorage] = useState(false);

  const handleClick = (e) => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${e.addnum}+${e.streetname}+${e.streettype},
    +${e.city},+${e.province}&key=${googleAPIKey}`
      )
      .then((response) => {
        let vendorcords = response.data.results[0].geometry.location;
        setVendorCords(vendorcords);
        setDefaultZoom(14);

        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    setStorage(sessionStorage);
  }, []);

  return (
    <>
      <Header token={storage} />
      {storage && (
        <div>
          <CustSearchForm handleClick={handleClick} />
          <RenderMap defaultZoom={defaultZoom} vendorcords={vendorcords} />
        </div>
      )}

      {!storage && <div>You are not authenticated. Please log In</div>}
    </>
  );
}

export default CustVendorSearch;
