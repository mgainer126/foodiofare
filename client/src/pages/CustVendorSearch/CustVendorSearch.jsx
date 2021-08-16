//https://getbootstrap.com/docs/4.0/components/forms/
import React, { Component } from "react";
import CustSearchForm from "../../components/CustSearchForm/CustSearchForm";
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
    custSearch: [],
    custCords: null,
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.custCords);
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
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }

  // componentDidMount() {
  //   axios
  //     .get(
  //       `https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.addnum}+${this.state.streetname}+${this.state.streettype},
  // +${this.state.city},+${this.state.province}&key=${API_KEY}`
  //     )
  //     .then(function (response) {
  //       this.setState({
  //         location: response.data.results[0].geometry.location,
  //       });
  //       console.log(response.data.results[0].geometry.location);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     });
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      addnum: event.target[0].value,
      streetname: event.target[1].value,
      streettype: event.target[2].value,
      city: event.target[3].value,
      province: event.target[4].value,
    });
    console.log(event.target[0].value); //house number
  };

  render() {
    console.log(this.state.addnum);
    console.log(this.state.streetname);
    console.log(this.state.streettype);
    console.log(this.state.city);
    console.log(this.state.province);
    console.log(this.state.custCords);
    return (
      <>
        <CustSignUpForm clickHandle={this.handleSubmit} />
        <RenderMap custcords={this.state.custCords} />
      </>
    );
  }
}
