import "../Hero/Hero.scss";
import { useState } from "react";
import foodtruck from "../../assets/images/Food-Truck-Design.jpg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

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
          Login Success!!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Welcome to Foodio Fare</h4>
        <p>Find your next great meal, street food style!!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Proceed</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Hero() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3 title">FoodioFare</h1>
            <p className="col-lg-10 hero">
              “This is the way so many of the great meals of my life have been
              enjoyed. Sitting in the street, eating something out of a bowl
              that I'm not exactly sure what it is. And scooters going by. ...
              “In my way of thinking, in the hierarchy of delicious slurpy stuff
              in a bowl, bún bò Huế is at the very top.” <br></br>
              <br></br>Anthony Bourdain
            </p>
          </div>

          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-light">
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
                  <input type="checkbox" defaultValue="remember-me" /> Remember
                  me
                </label>
              </div>

              <hr className="my-4" />
              <small className="text-muted">
                New to Foodie Fare? <Link to="/custSignUp">Sign Up</Link>
              </small>
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Log In
              </Button>
            </form>

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
          <img src={foodtruck} alt="foodtruck"></img>
        </div>
      </div>
    </>
  );
}

export default Hero;
