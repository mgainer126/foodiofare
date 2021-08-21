import React from "react";
import "../VendorEditForm/VendorEditForm.scss";

function VendorEditForm({ handleSubmit }) {
  return (
    <form className="vendoreditform" onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="accountno"
          name="accountno"
          placeholder="Account Number"
        />
        <label htmlFor="floatingPassword">Account Number</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="newstreeno"
          name="newstreeno"
          placeholder="Updated Street Number"
        />
        <label htmlFor="floatingPassword">Updated Street Number</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="streetname"
          name="streetname"
          placeholder="Street Name"
        />
        <label htmlFor="floatingPassword">Updated Street Name</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="streettype"
          name="streettype"
          placeholder="streettype"
        />
        <label htmlFor="floatingPassword">Street Type</label>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            placeholder="city"
          />
          <label htmlFor="floatingPassword">Updated City</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="province"
            name="province"
            placeholder="province"
          />
          <label htmlFor="floatingPassword">Province</label>
        </div>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Sumbit
      </button>
    </form>
  );
}

export default VendorEditForm;
