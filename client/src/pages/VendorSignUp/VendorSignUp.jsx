import VendorSignUpForm from "../../components/VendorSignUpForm/VendorSignUpForm";
import React, { Component } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default class VendorSignUp extends Component {
  state = {
    newVendor: [],
    vendorID: [],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newBussiness = [
      {
        vendorid: uuidv4(),
        bussname: event.target[0].value,
        operatorname: event.target[1].value,
        foodcat: event.target[2].value,
        addnum: event.target[3].value,
        streetname: event.target[4].value,
        streettype: event.target[5].value,
        city: event.target[6].value,
        province: event.target[7].value,
        username: event.target[8].value,
        password: event.target[9].value,
      },
    ];
    {
      this.createNewVendor(newBussiness[0]);
    }
    this.setState({ vendorID: newBussiness[0].vendorid });
  };

  createNewVendor = (obj) => {
    axios
      .post("http://localhost:8080/find/vendor", obj)
      .then((response) => {
        this.setState({ newVendor: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <VendorSignUpForm
          clickhandle={this.handleSubmit}
          vendoraccno={this.state.vendorID}
        />
      </>
    );
  }
}
