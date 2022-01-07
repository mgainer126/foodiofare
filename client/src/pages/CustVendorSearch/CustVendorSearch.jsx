//https://getbootstrap.com/docs/4.0/components/forms/
import "../CustVendorSearch/CustVendorSearch.scss";
import React, { useState, useEffect } from "react";
import RenderMap from "../../components/RenderMap/RenderMap";
import axios from "axios";
import CustSearchForm from "../../components/CustSearchForm/CustSearchForm";
import Header from "../../components/Header/Header";

function CustVendorSearch() {
  const [defaultZoom, setDefaultZoom] = useState(10);
  const [vendorcords, setVendorCords] = useState({});
  const [storage, setStorage] = useState(false);
  const [stores, setStores] = useState([]);
  // const [consumer, setConsumer] = useState();

  const handleClick = (e) => {
    const vendorCords = {
      lat: e.lat,
      lng: e.lng,
    };

    setVendorCords(vendorCords);
    setDefaultZoom(14);
  };

  useEffect(() => {
    setStorage(sessionStorage);
  }, []);

  const clickhandle = (event) => {
    event.preventDefault();

    axios
      .get("http://localhost:8080/find/vendor")
      .then((response) => {
        const allstores = response.data;
        const filteredCategory = allstores.filter(
          (store) => store.foodcat === event.target[0].value
        );
        setStores(filteredCategory);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  return (
    <>
      <Header token={storage} />
      {storage && (
        <div>
          <CustSearchForm
            handleClick={handleClick}
            clickhandle={clickhandle}
            stores={stores}
          />
          <RenderMap
            defaultZoom={defaultZoom}
            vendorcords={vendorcords}
            stores={stores}
          />
        </div>
      )}

      {!storage && <div>You are not authenticated. Please log In</div>}
    </>
  );
}

export default CustVendorSearch;
