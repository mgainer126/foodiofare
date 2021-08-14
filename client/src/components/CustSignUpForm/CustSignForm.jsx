import { Link } from "react-router-link";

function CustSignUpForm() {
  return (
    <>
      <div className="col-md-10 mx-auto col-lg-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">Sign Up</h1>
          <p className="col-lg-10 fs-4">
            Your enrolment information will be used to locate the closest food
            truck to your location based on your prefrences!!
          </p>
        </div>
        <form className="p-4 p-md-5 border rounded-3 bg-light">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First Name"
            />
            <label htmlFor="floatingPassword">First Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
            />
            <label htmlFor="floatingPassword">Last Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Address"
            />
            <label htmlFor="floatingPassword">Address</label>
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

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign Up
          </button>
          <hr className="my-4" />
        </form>
      </div>
    </>
  );
}

export default CustSignUpForm;
