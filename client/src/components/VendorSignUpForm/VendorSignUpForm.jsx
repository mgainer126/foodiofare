import "../VendorSignUpForm/VendorSignUpForm.scss";
import PopUpVendorSignIn from "../PopUpVendorSignIn/PopUpVendorSignIn";
import { useState } from "react";

function VendorSignUpForm({ clickhandle, vendoraccno }) {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <div className="col-md-10 mx-auto col-lg-5">
        <div>
          <h1 className="display-4 fw-bold lh-1 mb-3">Sign Up</h1>
          <p className=" fs-4 signup">
            Your enrolment information will allow you to create an account,
            where you will be able to post the location of your operation so
            that customers can experience you cusine.
          </p>
        </div>
        <form
          onSubmit={clickhandle}
          className="p-4 p-md-5 border rounded-3 bg-light"
        >
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="company-name"
              name="businessname"
              placeholder="Business Name"
            />
            <label htmlFor="floatingPassword">Business Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="operatorname"
              name="operatorname"
              placeholder="Operator Name"
            />
            <label htmlFor="floatingPassword">Operator Name</label>
          </div>
          <div className="form-floating mb-3">
            <select
              className="form-control"
              name="foodcategory"
              id="foodcategory"
              placeholder="Food Category"
            >
              <option>Click Here to Select a Category</option>
              <option>Barbecue</option>
              <option>Chineese</option>
              <option>Fries and Poutine</option>
              <option>Fusion</option>
              <option>Greek</option>
              <option>Halal</option>
              <option>Ice Cream</option>
              <option>Jamacian</option>
              <option>Mexican</option>
              <option>Thai</option>
              <option>Vegetarian</option>
            </select>

            <label htmlFor="floatingPassword"></label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="vendorstreetno"
              id="vendostreetno"
              placeholder="vendostreetno"
            />
            <label htmlFor="floatingPassword">Steet Number</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="vendorstreetname"
              id="vendostreetname"
              placeholder="vendostreetname"
            />
            <label htmlFor="floatingPassword">Street Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="vendorstreettype"
              id="vendorstreettype"
              placeholder="Street Type"
            />
            <label htmlFor="floatingPassword">Street Type</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              placeholder="city"
            />
            <label htmlFor="floatingPassword">City</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="Province"
              name="province"
              placeholder="Province"
            />
            <label htmlFor="floatingPassword">Province</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="User Name"
            />
            <label htmlFor="floatingPassword">User Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              name="password"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            onClick={() => setButtonPopup(true)}
          >
            Sign Up
          </button>
          <PopUpVendorSignIn trigger={buttonPopup} className="popup">
            <h3>Welcome to the FoodioFare Community!</h3>
            <h3>New Account No: </h3>
            <h4>{vendoraccno}</h4>
          </PopUpVendorSignIn>
          <hr className="my-4" />
        </form>
      </div>
    </>
  );
}

export default VendorSignUpForm;
