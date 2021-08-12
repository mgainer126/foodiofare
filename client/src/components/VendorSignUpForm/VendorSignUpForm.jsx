import { Link } from "react-router-link";

function VendorSignUpForm() {
  return (
    <>
      <div className="col-md-10 mx-auto col-lg-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">Sign Up</h1>
          <p className="col-lg-10 fs-4">
            Your enrolment information will allow you to create an account,
            where you will be able to post the location of your operation so
            that customers can experience you cusine.
          </p>
        </div>
        <form className="p-4 p-md-5 border rounded-3 bg-light">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="company-name"
              placeholder="Business Name"
            />
            <label htmlFor="floatingPassword">Business Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Operator Name"
            />
            <label htmlFor="floatingPassword">Operator Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="User Name"
            />
            <label htmlFor="floatingPassword">User Name</label>
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
            Log In
          </button>
          <hr className="my-4" />
        </form>
      </div>
    </>
  );
}

export default VendorSignUpForm;
