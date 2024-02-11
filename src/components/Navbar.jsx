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
          <a className="navbar-brand mt-2 mt-lg-0" href="/">
            <img
              src={Logo}
              height="55"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          {/* <!-- Left links --> */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link text-putih" href="/">
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-putih" href="/form-identitas">
                Buat SKP
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-putih" href="/search">
                Cari Data SKP
              </a>
            </li>
          </ul>
          {/* <!-- Left links --> */}
        </div>
        {/* <!-- Collapsible wrapper --> */}
      </div>
      {/* <!-- Container wrapper --> */}
    </nav>
  );
}

export default Navbar;
