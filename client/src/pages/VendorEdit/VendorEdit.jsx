import VendorEditForm from "../../components/VendorEditForm/VendorEditForm";
import axios from "axios";
import React from "react";

function VendorEdit() {
  const handleSubmit = (event) => {
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
    console.log(event.target[0].value);

    axios
      .put(
        `http://localhost:8080/find/${event.target[0].value}`,
        updatedVendor[0]
      )
      .then((response) => console.log(response));
  };

  return (
    <>
      <VendorEditForm handleSubmit={handleSubmit} />
    </>
  );
}

export default VendorEdit;
