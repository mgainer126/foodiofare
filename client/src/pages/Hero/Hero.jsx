// import "bootstrap/dist/css/bootstrap.min.css";
import "../Hero/Hero.scss";
import React from "react";
import { Link } from "react-router-link";

class Hero extends React.Component {
  render() {
    return (
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">Foodie Fare</h1>
            <p className="col-lg-10 fs-4">
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
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Log In
              </button>
              <hr className="my-4" />
              <small className="text-muted">
                New to Foodie Fare? <Link to={"/signUp"}>Sign Up</Link>
              </small>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
