import React from "react";
import PopUpVendorEdit from "../PopUpVendorEdit/PopUpVendorEdit";
import { useState } from "react";
import Header from "../../components/Header/Header";
import "../VendorEditForm/VendorEditForm.scss";

function VendorEditForm({ handleSubmit }) {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <Header />
      <div className="vendoreditform">
        <div>
          <h1 className="display-4 fw-bold lh-1 mb-3">Update Location</h1>
          <p className=" fs-4 signup">
            Provide your account number, and updated address location so that
            customers can find you today!
          </p>
        </div>
        <form
          className="vendoreditform p-4 p-md-5 border rounded-3 bg-light"
          onSubmit={handleSubmit}
        >
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
              placeholder="streetname"
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
            <label htmlFor="floatingPassword">Updated Street Type</label>
          </div>
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
            <label htmlFor="floatingPassword">Updated Province</label>
          </div>

          <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            onClick={() => setButtonPopup(true)}
          >
            Submit
          </button>
          <PopUpVendorEdit trigger={buttonPopup} className="popup">
            <h3>Update Processed</h3>
          </PopUpVendorEdit>
        </form>
      </div>
    </>
  );
}

export default VendorEditForm;
