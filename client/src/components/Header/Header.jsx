import "../Header/Header.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";

function Header({ token }) {
  return (
    <>
      <div className="header">
        <div className="container">
          <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
            >
              <svg width={0} height={32} />
              <Link to="/" className="link">
                <span className="fs-4 link__logo">Foodio Fare</span>
              </Link>
            </a>

            <ul className="nav nav-pills">
              {token && (
                <>
                  <li className="nav-item">
                    <Link to="/custVendorSearch" className="link">
                      <p className="header-link">Food Truck Search</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/custUpdate" className="link">
                      <p className="header-link">Customer Profile</p>
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <ul className="nav nav-pills">
              <li className="nav-item__1">
                <Link to="/vendorMain" className="link">
                  <p className="header-link">Business</p>
                </Link>
              </li>

              <li className="nav-item__1">
                <Link to="/about" className="link">
                  <p className="header-link">About</p>
                </Link>
              </li>
            </ul>
          </header>
        </div>
      </div>
    </>
  );
}

export default Header;
