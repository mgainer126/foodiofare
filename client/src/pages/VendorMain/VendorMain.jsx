import { Link } from "react-router-dom";

function VendorMain() {
  return (
    <div className="landing">
      <signup className="landing__signup">
        <h3 className="landing__signup-title">New to FoodioFare</h3>
        <p className="landing__signup-desc">
          Foodio will allow customers to locate your location, wherever you are.
          Sign up, and customer can find you right now
        </p>
        <Link to="/vendorSignUp">
          <div className="landing__signup-btn">Sign Up</div>
        </Link>
      </signup>
      <update className="landing__update">
        <h3 className="landing__update-title">Updating Your Location</h3>
        <p className="landing__update-desc">
          Update your address when ever you change locations, and your new
          location will be updated in real time
        </p>
        <Link to="/vendorEdit">
          <div className="landing__update-btn">Update Location</div>
        </Link>
      </update>
    </div>
  );
}

export default VendorMain;
