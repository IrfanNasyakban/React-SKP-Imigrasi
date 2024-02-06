import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar.css"
import Logo from "../assets/logo.png"

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      {/* <!-- Container wrapper --> */}
      <div className="container">
        {/* <!-- Toggle button --> */}
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* <!-- Collapsible wrapper --> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <!-- Navbar brand --> */}
          <a className="navbar-brand mt-2 mt-lg-0" href="/data">
            <img
              src={Logo}
              height="55"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
        </div>
        {/* <!-- Collapsible wrapper --> */}

        {/* <!-- Right elements --> */}
        <div className="d-flex align-items-center">
          {/* <!-- Icon --> */}
          <a className="link-secondary me-3" href="#s">
            <i className="fas fa-shopping-cart"></i>
          </a>
        </div>
        {/* <!-- Right elements --> */}
      </div>
      {/* <!-- Container wrapper --> */}
    </nav>
  );
}

export default Navbar;
