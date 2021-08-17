//https://getbootstrap.com/docs/4.0/components/forms/
import React, { Component } from "react";
import RenderMap from "../../components/RenderMap/RenderMap";
import axios from "axios";
import CustSignUpForm from "../../components/CustSignUpForm/CustSignForm";
const API_KEY = "AIzaSyDppxNKV5QddpqA90IuS0kWg9HTLOuJsGw";

export default class CustVendorSearch extends Component {
  state = {
    addnum: null,
    streetname: null,
    streettype: null,
    city: null,
    province: null,
    custCords: { lat: 43.830711, lng: -79.115668 },
    vendors: null,
  };
  componentDidMount() {
    // if (this.state.vendor !== prevState.vendor) {
    axios
      .get("http://localhost:8080/find/vendor")
      .then((vendors) => {
        console.log(vendors.data);
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
    if (this.state.custCords !== prevState.custCords) {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.addnum}+${this.state.streetname}+${this.state.streettype},
    +${this.state.city},+${this.state.province}&key=${API_KEY}`
        )
        .then((response) => {
          let custCords = response.data.results[0].geometry.location;
          this.setState({
            custCords: custCords,
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
    });
    // console.log(event);
  };

  render() {
    // console.log(this.state.addnum);
    // console.log(this.state.streetname);
    // console.log(this.state.streettype);
    // console.log(this.state.city);
    // console.log(this.state.province);
    console.log(this.state.custCords);
    console.log(this.state.vendors);
    return (
      <>
        {this.state.custCords && this.state.vendors && (
          <div>
            <CustSignUpForm clickHandle={this.handleSubmit} />
            <RenderMap
              custcords={this.state.custCords}
              vendors={this.state.vendors}
            />
          </div>
        )}
      </>
    );
  }
}
