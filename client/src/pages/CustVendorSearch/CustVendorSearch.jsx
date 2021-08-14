//https://getbootstrap.com/docs/4.0/components/forms/
import React, { Component } from "react";
import CustSearchForm from "../../components/CustSearchForm/CustSearchForm";
import MapContainer from "../../components/MapContainer/MapContainer";
import axios from "axios";

export default class CustVendorSearch extends Component {
  render() {
    return (
      <>
        <CustSearchForm />
        <MapContainer />
      </>
    );
  }
}
