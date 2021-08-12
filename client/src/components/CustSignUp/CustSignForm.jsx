import { Link } from "react-router-link";

function CustSignUpForm() {
  return (
    <>
      <div className="col-md-10 mx-auto col-lg-5">
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

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Log In
          </button>
          <hr className="my-4" />
          <small className="text-muted">
            New to Foodie Fare? <Link to={"/signUp"}>Sign Up</Link>
          </small>
        </form>
      </div>
    </>
  );
}

export default CustSignUpForm;
