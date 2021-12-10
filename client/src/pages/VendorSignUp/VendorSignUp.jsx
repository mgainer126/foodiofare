import axios from "axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Header from "../../components/Header/Header";

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
    console.log(event);
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
    createNewVendor(newBussiness[0]);
    setVendorID(newBussiness[0].vendorid);
  };

  const createNewVendor = (obj) => {
    axios
      .post("http://localhost:8080/find/vendor", obj)
      .then((response) => {
        // {
        //   setNewVendor(response.data);
        // }
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
          <h1 className="display-4 fw-bold lh-1 mb-3">Sign Up</h1>
          <p className=" fs-4 signup">
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
