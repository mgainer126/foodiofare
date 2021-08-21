import React, { Component } from "react";
import VendorEditForm from "../../components/VendorEditForm/VendorEditForm";
import axios from "axios";

export default class VendorEdit extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const updatedVendor = [
      {
        addnum: event.target[1].value,
        streetname: event.target[2].value,
        streettype: event.target[3].value,
        city: event.target[4].value,
        province: event.target[5].value,
      },
    ];
    console.log(updatedVendor[0]);
    axios
      .put(
        `http://localhost:8080/find/${event.target[0].value}`,
        updatedVendor[0]
      )
      .then((response) => console.log(response));
  };

  render() {
    return (
      <div>
        <VendorEditForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
