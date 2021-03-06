import axios from "axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Header from "../../components/Header/Header";
import LocationSearchInput from "../../components/AutoComplete/AutoComplete";

import "../../pages/VendorSignUp/VendorSignUp.scss";

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
          Sign Up Success!!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Welcome to Foodio Fare</h4>
        <p>Let them Come and Find Your Delicious Goodness!!</p>
        <p>Your ID is {props.vendorID}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function VendorSignUp() {
  const [vendorID, setVendorID] = useState();
  const [modalShow, setModalShow] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBussiness = [
      {
        vendorid: uuidv4(),
        bussname: event.target[0].value,
        operatorname: event.target[1].value,
        foodcat: event.target[2].value,
        address: event.target[3].value,
        username: event.target[4].value,
        password: event.target[5].value,
      },
    ];
    createNewVendor(newBussiness[0]);
    setVendorID(newBussiness[0].vendorid);
  };

  const createNewVendor = (obj) => {
    axios
      .post("https://foodiofarebackend.herokuapp.com/find/vendor", obj)
      .then((response) => {
        console.log(response, "Sucesfully Created New Vendor");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Header />
      <div className="col-md-10 mx-auto col-lg-5">
        <div>
          <h1 className="display-4 fw-bold lh-1 mb-3 bussiness__sign">
            Business Sign Up
          </h1>
          <p className=" fs-4 signup bussiness__summ">
            Your enrolment information will allow you to create an account,
            where you will be able to post the location of your operation so
            that customers can experience you cusine.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
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
          <LocationSearchInput />

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

          <Button
            variant="primary"
            type="submit"
            onClick={() => setModalShow(true)}
          >
            Sign Up
          </Button>

          <hr className="my-4" />
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            vendorID={vendorID}
          />
        </form>
      </div>
    </>
  );
}

export default VendorSignUp;
