import VendorSignUpForm from "../../components/VendorSignUpForm/VendorSignUpForm";
import React, { Component } from "react";

export default class CustSignUp extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  render() {
    return (
      <>
        <VendorSignUpForm clickhandle={this.handleSubmit} />
      </>
    );
  }
}
