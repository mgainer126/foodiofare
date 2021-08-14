//https://getbootstrap.com/docs/4.0/components/forms/
import React, { Component } from "react";
import CustSearchForm from "../../components/CustSearchForm/CustSearchForm";
import RenderMap from "../../components/RenderMap/RenderMap";
// import axios from "axios";

export default class CustVendorSearch extends Component {
  render() {
    return (
      <>
        <CustSearchForm />
        {/* <MapContainer /> */}
        {/* <Map2 /> */}
        <RenderMap />
      </>
    );
  }
}
