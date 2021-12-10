import "../VendorMain/VendorMain.scss";
import girl from "../../assets/images/girl.jpg";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

function VendorMain() {
  return (
    <>
      <Header />
      <div className="page-wrapper">
        <div className="landing">
          <signup className="landing__signup">
            <h3 className="landing__signup-title">New to FoodioFare</h3>
            <p className="landing__signup-desc">
              FoodioFare will allow customers to locate your location, wherever
              you are. Sign up, and customer can find you right now
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
        <img src={girl} alt="girl" className="landing__girl-img"></img>
      </div>
    </>
  );
}

export default VendorMain;
