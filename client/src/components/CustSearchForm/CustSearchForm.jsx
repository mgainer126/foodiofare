import ListVendors from "../ListVendors/ListVendors";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CustSearchForm/CustSearchForm.scss";

function CustSearchForm({ vendors, area, category, handleClick }) {
  const [stores, setStores] = useState();

  const clickhandle = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    axios
      .get("http://localhost:8080/find/vendor")
      .then((response) => {
        const allstores = response.data;
        const filteredStores = allstores.filter(
          (store) => store.foodcat === event.target[0].value
        );
        setStores(filteredStores);
        console.log(filteredStores);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  console.log(stores);

  return (
    <>
      <div className="layout">
        <div className="pagehead">
          <h1 className="display-4 fw-bold lh-1 mb-3">Search</h1>
          <p className="directions">
            Provide Your Address and Make a Food Category Selection Below, and
            We Will Show You Where They Are Today
          </p>
        </div>
      </div>
      <div className="formandlist">
        <form
          onSubmit={clickhandle}
          className="form"
          className="p-md-5 border rounded-3 bg-light"
        >
          <label htmlFor="category">Category Search</label>
          <select className="form-control" id="category" name="category">
            <option>Select a Food Category</option>
            <option>Barbecue</option>
            <option>Chineese</option>
            <option>Fries and Poutine</option>
            <option>Fusion</option>
            <option>Greek</option>
            <option>Halal</option>
            <option>Ice Cream</option>
            <option>Jamacian</option>
            <option>Mexican</option>
            <option>Thai</option>
            <option>Vegetarian</option>
          </select>
          <button type="submit" className="btn btn-primary btn-lg">
            Find By Category
          </button>
        </form>
        <div className="vendors">
          <h3 className="vendors__list-head">
            1. Select Find By Category and We Show Your Results Below
          </h3>
          <h3 className="vendors__list-head">
            2. Click on the displayed vendor and we will map show it on the map
          </h3>
          <ListVendors
            vendors={vendors}
            // category={category}
            area={area}
            handleClick={handleClick}
            className="vendors__list"
          />
        </div>
      </div>
    </>
  );
}

export default CustSearchForm;
