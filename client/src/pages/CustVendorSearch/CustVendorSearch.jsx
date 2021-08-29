//https://getbootstrap.com/docs/4.0/components/forms/
import "../CustVendorSearch/CustVendorSearch.scss";
import googleAPIKey from "../../data/APIKey";
import React, { Component } from "react";
import RenderMap from "../../components/RenderMap/RenderMap";
import axios from "axios";
import CustSearchForm from "../../components/CustSearchForm/CustSearchForm";

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
    defaultZoom: 3.2,
    custcords: [],
    vendors: null,
    vendorcords: [],
  };

  handleClick = (e) => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${e.addnum}+${e.streetname}+${e.streettype},
    +${e.city},+${e.province}&key=${googleAPIKey}`
      )
      .then((response) => {
        let vendorcords = response.data.results[0].geometry.location;
        this.setState({
          vendorcords: vendorcords,
        });
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
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
    if (this.state.addnum !== prevState.addnum) {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.addnum}+${this.state.streetname}+${this.state.streettype},
    +${this.state.city},+${this.state.province}&key=${googleAPIKey}`
        )
        .then((response) => {
          let custcords = response.data.results[0].geometry.location;
          console.log(custcords);
          this.setState({
            defaultMapPos: custcords,
            defaultZoom: 10,
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
  };

  render() {
    return (
      <>
        {this.state.defaultMapPos &&
          this.state.vendors &&
          this.state.vendorcords &&
          this.state.custcords && (
            <div>
              <CustSearchForm
                clickHandle={this.handleSubmit}
                handleClick={this.handleClick}
                vendors={this.state.vendors}
                category={this.state.category}
                area={this.state.area}
              />
              <RenderMap
                defaultMapPos={this.state.defaultMapPos}
                defaultZoom={this.state.defaultZoom}
                custcords={this.state.custcords}
                vendorcords={this.state.vendorcords}
              />
            </div>
          )}
      </>
    );
  }
}
