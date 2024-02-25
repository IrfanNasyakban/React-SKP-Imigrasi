import React from 'react'
import { Link } from "react-router-dom";
import '../styles/dashboard.css'
import heroImg from '../assets/hero-img.png'

const Dashboard = () => {
  return (
    <div className="hero-section-container">
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">Pembuatan SKP</h1>
            <h2 data-aos="fade-up" data-aos-delay="400">Isi data SKP dan export sebagai format excel</h2>
            <div data-aos="fade-up" data-aos-delay="600">
              <div className="text-center text-lg-start">
                <Link
                  to="/form-identitas"
                  className="btn-get-started d-inline-flex align-items-center justify-content-center align-self-center me-2"
                  smooth={true}
                  duration={1000}
                >
                  <span>Buat Data</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
                <Link
                  to="/search"
                  className="btn-get-started d-inline-flex align-items-center justify-content-center align-self-center me-2"
                  smooth={true}
                  duration={1000}
                >
                  <span>Cari Data</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
                <Link
                  to="/form-identitas-structure"
                  className="btn-get-started d-inline-flex align-items-center justify-content-center align-self-center me-2"
                  smooth={true}
                  duration={1000}
                >
                  <span>Buat Data Struktural</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
                <Link
                  to="/search-structure"
                  className="btn-get-started d-inline-flex align-items-center justify-content-center align-self-center"
                  smooth={true}
                  duration={1000}
                >
                  <span>Cari Data Struktural</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
            <img src={heroImg} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Dashboard
