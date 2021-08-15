import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <svg className="bi me-2" width={40} height={32} />
            <Link to="/">
              <span className="fs-4">Food Fare</span>
            </Link>
          </a>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/custVendorSearch">
                <a href="#" className="nav-link">
                  Customers
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/vendorSignUp">
                <a href="#" className="nav-link">
                  Business
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}

export default Header;
