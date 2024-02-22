import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      {/* <!-- Container wrapper --> */}
      <div className="container">
        {/* <!-- Toggle button --> */}
        <button
          className="navbar-toggler toggler-example"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* <!-- Collapsible wrapper --> */}
        <div
          className={`collapse navbar-collapse ${
            menuOpen ? "show" : ""
          }`}
        >
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
            <li className="nav-item">
              <a className="nav-link text-putih" href="/">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-putih" href="/form-identitas">
                Buat SKP
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-putih" href="/search">
                Cari Data SKP
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-putih" href="/form-identitas-structure">
                Buat SKP Struktural
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-putih" href="/search-structure">
                Cari Data Struktural
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
