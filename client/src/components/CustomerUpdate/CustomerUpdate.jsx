import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
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
        <p>Lets see what whats to eat close by!!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Proceed to Food Search</Button>
      </Modal.Footer>
    </Modal>
  );
}

function CustomerUpdate() {
  const [modalShow, setModalShow] = useState(false);
  const [session, setSession] = useState();
  const [customer, setCustomer] = useState();

  useEffect(() => {
    setSession(sessionStorage.token);
    axios
      .get("http://localhost:8080/customer/customer")
      .then(function (response) {
        const profiles = response.data;
        const token = sessionStorage.getItem("token");
        const stringToken = JSON.parse(token);
        const findProfile = profiles.filter(
          (profile) => profile.uuid === stringToken
        );
        setCustomer(findProfile[0]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCustomer = [
      {
        fname: event.target[0].value,
        lname: event.target[1].value,
        streetno: event.target[2].value,
        streetname: event.target[3].value,
        streettype: event.target[4].value,
        city: event.target[5].value,
        province: event.target[6].value,
        username: event.target[7].value,
        password: event.target[8].value,
        uuid: session,
      },
    ];

    axios
      .put(`http://localhost:8080/customer/${session}`, newCustomer[0])
      .then((response) => {
        console.log(response);
      });
  };

  console.log(customer);
  return (
    <>
      <Header token={sessionStorage} />
      <div className="col-md-10 mx-auto col-lg-5">
        {customer && (
          <>
            <div>
              <h1 className="display-4 fw-bold lh-1 mb-3">
                Customer Update Personal Information
              </h1>
              <p className=" fs-4 signup">
                Please provided the updated infomation below
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
                  defaultValue={customer.fname}
                />
                <label htmlFor="floatingPassword">First Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  name="lastname"
                  defaultValue={customer.lname}
                />
                <label htmlFor="floatingPassword">Last Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="vendorstreetno"
                  id="vendostreetno"
                  defaultValue={customer.streetno}
                />
                <label htmlFor="floatingPassword">Street Number</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="vendorstreetname"
                  id="vendostreetname"
                  defaultValue={customer.streetname}
                />
                <label htmlFor="floatingPassword">Street Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="vendorstreettype"
                  id="vendorstreettype"
                  defaultValue={customer.streettype}
                />
                <label htmlFor="floatingPassword">Street Type</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  defaultValue={customer.city}
                />
                <label htmlFor="floatingPassword">City</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="Province"
                  name="province"
                  defaultValue={customer.province}
                />
                <label htmlFor="floatingPassword">Province</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  defaultValue={customer.username}
                />
                <label htmlFor="floatingPassword">User Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="floatingPassword"
                  defaultValue={customer.password}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <Button
                variant="primary"
                type="submit"
                onClick={() => setModalShow(true)}
              >
                Update
              </Button>

              <hr className="my-4" />
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </form>
          </>
        )}
      </div>
    </>
  );
}

export default CustomerUpdate;