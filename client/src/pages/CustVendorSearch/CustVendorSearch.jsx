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
  const [stores, setStores] = useState([]);
  const [consumer, setConsumer] = useState();

  const handleClick = (e) => {
    console.log(e);
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

  const clickhandle = (event) => {
    event.preventDefault();
    console.log(event);
    const uuid = sessionStorage.getItem("token");
    const parseuuid = JSON.parse(uuid);
    axios
      .get(`http://localhost:8080/customer/customer/${parseuuid}`)
      .then(function (response) {
        const findCustomer = response.data[0];
        setConsumer(findCustomer.city);
      });

    axios
      .get("http://localhost:8080/find/vendor")
      .then((response) => {
        const allstores = response.data;
        console.log(allstores);
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
