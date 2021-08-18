//https://getbootstrap.com/docs/4.0/components/forms/
import "../CustVendorSearch/CustVendorSearch.scss";
import React, { Component } from "react";
import RenderMap from "../../components/RenderMap/RenderMap";
import axios from "axios";
import CustSearchForm from "../../components/CustSearchForm/CustSearchForm";
import ListVendors from "../../components/ListVendors/ListVendors";
const API_KEY = "AIzaSyDppxNKV5QddpqA90IuS0kWg9HTLOuJsGw";

export default class CustVendorSearch extends Component {
  state = {
    addnum: null,
    streetname: null,
    streettype: null,
    city: null,
    province: null,
    category: null,
    area: null,
    defaultMapPos: { lat: 39.011902, lng: -98.484245 },
    custcords: [],
    vendors: null,
  };
  componentDidMount() {
    // if (this.state.vendor !== prevState.vendor) {
    axios
      .get("http://localhost:8080/find/vendor")
      .then((vendors) => {
        // console.log(vendors.data);
        this.setState({
          vendors: vendors.data,
        });
        return vendors.data;
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.custcords === prevState.custcords) {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.addnum}+${this.state.streetname}+${this.state.streettype},
    +${this.state.city},+${this.state.province}&key=${API_KEY}`
        )
        .then((response) => {
          let custcords = response.data.results[0].geometry.location;
          console.log(custcords);
          this.setState({
            custcords: custcords,
          });
          return response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      addnum: event.target[0].value,
      streetname: event.target[1].value,
      streettype: event.target[2].value,
      city: event.target[3].value,
      province: event.target[4].value,
      category: event.target[5].value,
      area: event.target[7].value,
    });
    console.log(event);
  };

  render() {
    console.log(this.state.category);
    console.log(this.state.area);
    return (
      <>
        {this.state.defaultMapPos && this.state.vendors && (
          // this.state.custcords && (
          <div>
            <CustSearchForm
              clickHandle={this.handleSubmit}
              vendors={this.state.vendors}
              category={this.state.category}
              area={this.state.area}
            />
            <RenderMap
              defaultMapPos={this.state.defaultMapPos}
              custcords={this.state.custcords}
            />
          </div>
        )}
      </>
    );
  }
}
