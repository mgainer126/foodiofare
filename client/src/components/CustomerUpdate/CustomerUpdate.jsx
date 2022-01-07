import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import "../CustomerUpdate/CustomerUpdate.scss";
import LocationSearchInput from "../AutoComplete/AutoComplete";

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
          Update Success!!
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
    const uuid = sessionStorage.getItem("token");
    const parseuuid = JSON.parse(uuid);
    axios
      .get(`http://localhost:8080/customer/customer/${parseuuid}`)
      .then(function (response) {
        const findCustomer = response.data[0];
        setCustomer(findCustomer);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCustomer = [
      {
        fname: event.target[0].value,
        lname: event.target[1].value,
        address: event.target[2].value,
        username: event.target[3].value,
        password: event.target[4].value,
        uuid: session,
      },
    ];

    axios
      .put(`http://localhost:8080/customer/${session}`, newCustomer[0])
      .then((response) => {
        console.log(response, "Updated sucesfully");
      });
  };

  return (
    <>
      <Header token={sessionStorage} />
      <div className="col-md-10 mx-auto col-lg-5">
        {customer && (
          <>
            <div>
              <h1 className="display-4 fw-bold lh-1 mb-3 title__custupdate">
                Customer Update Personal Information
              </h1>
              <p className=" fs-4 signup title__custinst">
                Please provided the updated infomation below
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="p-4 p-md-5 border rounded-3 bg-light form"
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
              <p>
                <strong>Current Address:</strong> {customer.address}
              </p>
              <p>Please provide your new address below:</p>
              <LocationSearchInput />
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
