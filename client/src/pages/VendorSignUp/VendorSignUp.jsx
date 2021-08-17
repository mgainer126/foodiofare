import VendorSignUpForm from "../../components/VendorSignUpForm/VendorSignUpForm";
import React, { Component } from "react";

export default class VendorSignUp extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const newBussiness = [
      {
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
      console.log(event),
    ];
    console.log(newBussiness);
  };

  render() {
    return (
      <>
        <VendorSignUpForm clickhandle={this.handleSubmit} />
      </>
    );
  }
}
