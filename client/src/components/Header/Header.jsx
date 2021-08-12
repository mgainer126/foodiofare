import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <>
      <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <svg class="bi me-2" width="40" height="32"></svg>
            <span class="fs-4">Food Fare</span>
          </a>

          <ul class="nav nav-pills">
            <li class="nav-item">
              <a href="#" class="nav-link">
                Customers
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Business
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
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
