//https://getbootstrap.com/docs/4.0/components/forms/
import "../CustVendorSearch/CustVendorSearch.scss";
import googleAPIKey from "../../data/APIKey";
import React, { useState, useEffect, useRef } from "react";
import RenderMap from "../../components/RenderMap/RenderMap";
import axios from "axios";
import CustSearchForm from "../../components/CustSearchForm/CustSearchForm";

function CustVendorSearch() {
  const [addnum, setAddnum] = useState();
  const [streetname, setStreetName] = useState();
  const [streettype, setStreetType] = useState();
  const [city, setCity] = useState();
  const [province, setProvince] = useState();
  const [category, setCategory] = useState();
  const [area, setArea] = useState();

  const [defaultMapPos, setDefaultMapPos] = useState({
    lat: 43.6532,
    lng: -79.3832,
  });

  const [defaultZoom, setDefaultZoom] = useState(3.2);
  const [custcords, setCustCords] = useState([]);
  const [vendors, setVendors] = useState();
  const [vendorcords, setVendorCords] = useState({
    lat: 39.011902,
    lng: -98.484245,
    //these cords are a temporary fix, need to fix the api key on line 42
  });

  const handleClick = (e) => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${e.addnum}+${e.streetname}+${e.streettype},
    +${e.city},+${e.province}&key=${googleAPIKey}`
      )
      .then((response) => {
        let vendorcords = response.data.results[0].geometry.location;
        setVendorCords(vendorcords);

        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/find/vendor")
      .then((vendors) => {
        // console.log(vendors.data);

        setVendors(vendors.data);

        return vendors.data;
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${addnum}+${streetname}+${streettype},
  +${city},+${province}&key=${googleAPIKey}`
      )
      .then((response) => {
        let custcords = response.data.results[0].geometry.location;
        setDefaultMapPos(custcords);
        setDefaultZoom(10);
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [addnum]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setAddnum(event.target[0].value);
    setStreetName(event.target[1].value);
    setStreetType(event.target[2].value);
    setCity(event.target[3].value);
    setProvince(event.target[4].value);
    setCategory(event.target[5].value);
    setArea(event.target[7].value);
  };

  console.log(sessionStorage);
  return (
    <>
      {defaultMapPos && vendors && vendorcords && custcords && (
        <div>
          <CustSearchForm
            clickHandle={handleSubmit}
            handleClick={handleClick}
            vendors={vendors}
            category={category}
            area={area}
          />
          <RenderMap
            defaultMapPos={defaultMapPos}
            defaultZoom={defaultZoom}
            custcords={custcords}
            vendorcords={vendorcords}
          />
        </div>
      )}
    </>
  );
}

export default CustVendorSearch;
