import "../Header/Header.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [session, setSession] = useState();

  useEffect(() => {
    setSession(sessionStorage);
  }, []);

  const header_customer = session.token.length > 2;

  console.log(session.token.length);

  return (
    <>
      <div className="header">
        <div className="container">
          <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
            >
              <svg className="bi me-2" width={40} height={32} />
              <Link to="/" className="link">
                <span className="fs-4 link__logo">Foodio Fare</span>
              </Link>
            </a>
            <ul className="nav nav-pills">
              <li className="nav-item">
                {header_customer && (
                  <Link to="/custVendorSearch" className="link">
                    <p className="header-link">Customers</p>
                  </Link>
                )}
              </li>
              <li className="nav-item">
                <Link to="/vendorMain" className="link">
                  <p className="header-link">Business</p>
                </Link>
              </li>

              <li className="nav-item">
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
