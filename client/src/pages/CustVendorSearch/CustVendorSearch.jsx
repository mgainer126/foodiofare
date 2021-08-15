//https://getbootstrap.com/docs/4.0/components/forms/
import React, { Component } from "react";
import CustSearchForm from "../../components/CustSearchForm/CustSearchForm";
import RenderMap from "../../components/RenderMap/RenderMap";
import { GoogleComponent } from "react-google-location";
import axios from "axios";
const API_KEY = "AIzaSyDppxNKV5QddpqA90IuS0kWg9HTLOuJsGw";

export default class CustVendorSearch extends Component {
  state = {
    addnum: 1814,
    streetname: "eastbank",
    streettype: "road",
    city: "pickering",
    province: "ontario",
  };

  componentDidMount() {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.addnum}+${this.state.streetname}+${this.state.streettype},
  +${this.state.city},+${this.state.province}&key=${API_KEY}`
      )
      .then(function (response) {
        // handle success
        console.log(response.data.results[0].geometry.location);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <CustSearchForm />
        <RenderMap />
      </>
    );
  }
}
