import React from "react";
import PopUpVendorEdit from "../PopUpVendorEdit/PopUpVendorEdit";
import { useState } from "react";
import Header from "../../components/Header/Header";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "../VendorEditForm/VendorEditForm.scss";

function VendorEditForm() {
  const [buttonPopup, setButtonPopup] = useState(false);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const updatedVendor = [
  //     {
  //       addnum: event.target[1].value,
  //       streetname: event.target[2].value,
  //       streettype: event.target[3].value,
  //       city: event.target[4].value,
  //       province: event.target[5].value,
  //     },
  //   ];
  //   console.log(updatedVendor[0]);
  //   console.log(event.target[0].value);

  //   axios
  //     .put(
  //       `http://localhost:8080/find/${event.target[0].value}`,
  //       updatedVendor[0]
  //     )
  //     .then((response) => console.log(response));
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    console.log(username, password);

    axios
      .get(`http://localhost:8080/find/vendor/${username}/${password}`)
      .then((response) => console.log(response));
  };

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
          onSubmit={handleSubmit}
          className="p-4 p-md-5 border rounded-3 bg-light"
        >
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" defaultValue="remember-me" /> Remember me
            </label>
          </div>

          <hr className="my-4" />
          <div className="login__cta">
            {/* <small className="text-muted">
              New to Foodie Fare? <Link to="/custSignUp">Sign Up</Link>
            </small> */}
            <Button
              variant="primary"
              className="login__btn "
              type="submit"
              // onClick={() => setModalShow(true)}
            >
              Log In
            </Button>
          </div>
        </form>
        {/* <form
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
        </form> */}
      </div>
    </>
  );
}

export default VendorEditForm;
