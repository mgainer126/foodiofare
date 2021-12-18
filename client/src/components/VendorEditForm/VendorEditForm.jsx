import React from "react";
import { useState } from "react";
import Header from "../../components/Header/Header";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import LocationSearchInput from "../AutoComplete/AutoComplete";
import "../VendorEditForm/VendorEditForm.scss";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Your Location Has Been Updated!!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Thanks For The Update</h4>
        <p>Customers will be able to see your new location immediately!! </p>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/vendorMain">
          <Button onClick={props.onHide}>Back to Business Home Page</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

function VendorEditForm() {
  const [modalShow, setModalShow] = useState(false);
  const [vendor, setVendor] = useState();

  const handleUpdate = (event) => {
    event.preventDefault();
    console.log(event);
    const updatedVendor = [
      {
        address: event.target[0].value,
        // addnum: event.target[0].value,
        // streetname: event.target[1].value,
        // streettype: event.target[2].value,
        // city: event.target[3].value,
        // province: event.target[4].value,
      },
    ];

    axios
      .put(
        `http://localhost:8080/find/update/${vendor.vendorid}`,
        updatedVendor[0]
      )
      .then((response) => console.log(response));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;

    axios
      .get(`http://localhost:8080/find/vendor/${username}/${password}`)
      .then((response) => {
        setVendor(response.data[0]);
      });
  };

  return (
    <>
      <Header />

      <div className="col-md-10 mx-auto col-lg-5 vendoreditform">
        <div>
          <h1 className="display-4 fw-bold lh-1 mb-3 vendoreditform__title">
            Update Location
          </h1>
          <p className=" fs-4 signup vendoreditform__summ">
            Provide your account number, and updated address location so that
            customers can find you today!
          </p>
        </div>
        {!vendor && (
          <form
            onSubmit={handleSubmit}
            className="p-4 p-md-5 border rounded-3 bg-light vendoreditform__form"
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
        )}

        {vendor && (
          <form
            className="vendoreditform p-4 p-md-5 border rounded-3 bg-light"
            onSubmit={handleUpdate}
          >
            <p>
              <strong>Your Current Address:</strong>
              {vendor.address}
            </p>
            <LocationSearchInput />
            {/* <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="newstreeno"
                name="newstreeno"
                // defaultValue={vendor.addnum}
              />
              <label htmlFor="floatingPassword">Current Street Number</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="streetname"
                name="streetname"
                // defaultValue={vendor.streetname}
              />
              <label htmlFor="floatingPassword">Current Street Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="streettype"
                name="city"
                name="streettype"
                // defaultValue={vendor.streettype}
              />
              <label htmlFor="floatingPassword">Updated Street Type</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="city"
                // defaultValue={vendor.city}
              />
              <label htmlFor="floatingPassword">Current City</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="province"
                name="province"
                // defaultValue={vendor.province}
              />
              <label htmlFor="floatingPassword">Current Province</label>
            </div> */}

            <button
              className="w-100 btn btn-lg btn-primary"
              type="submit"
              onClick={() => setModalShow(true)}
            >
              Update
            </button>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </form>
        )}
      </div>
    </>
  );
}

export default VendorEditForm;
