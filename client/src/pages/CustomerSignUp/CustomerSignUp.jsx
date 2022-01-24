import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import LocationSearchInput from "../../components/AutoComplete/AutoComplete";
import "../CustomerSignUp/CustomerSignUp.scss";

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
        <p>Lets see what whats to eat close by!!</p>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/">
          <Button onClick={props.onHide}>Proceed to Sign In</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

function CustomerSignUp() {
  const [modalShow, setModalShow] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCustomer = [
      {
        fname: event.target[0].value,
        lname: event.target[1].value,
        address: event.target[2].value,
        username: event.target[3].value,
        password: event.target[4].value,
      },
    ];
    createNewCustomer(newCustomer[0]);
  };

  const createNewCustomer = (obj) => {
    axios
      .post("https://foodiofarebackend.herokuapp.com/customer/create", obj)
      .then((response) => {
        console.log(response);
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
          <h1 className="display-4 fw-bold lh-1 mb-3 signup__title">
            Customer Sign Up
          </h1>
          <p className=" fs-4 signup__summ">
            Your enrolment information will allow you to create an account, that
            will be used to reference vendor food locations close to you
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
              id="firstname"
              name="firstname"
              placeholder="First Name"
            />
            <label htmlFor="floatingPassword">First Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              placeholder="Last Name"
            />
            <label htmlFor="floatingPassword">Last Name</label>
          </div>

          <div className="form-floating mb-3">
            <LocationSearchInput
              type="text"
              name="address"
              id="address"
              placeholder="address"
            />
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="User Name"
            />
            <label htmlFor="floatingPassword">Email</label>
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
          />
        </form>
      </div>
    </>
  );
}

export default CustomerSignUp;
