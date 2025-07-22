import React from "react";

export default function Navbar() {
  return (
    <div>
      {/* <!-- Topbar Start --> */}
      <div className="container-fluid bg-light p-0">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-map-marker-alt text-primary me-2"></small>
              <small>123 Street, New York, USA</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3">
              <small className="far fa-clock text-primary me-2"></small>
              <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-phone-alt text-primary me-2"></small>
              <small>+012 345 6789</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <a
                className="btn btn-sm-square bg-white text-primary me-1"
                href=""
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-sm-square bg-white text-primary me-1"
                href=""
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-sm-square bg-white text-primary me-1"
                href=""
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="btn btn-sm-square bg-white text-primary me-0"
                href=""
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}

      {/* <!-- Navbar Start --> */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a
          href="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
          style={{background:" #d81324",borderRadius:'0px 50px 50px 0px'}}
        >
          {/* <h2 className="m-0 text-primary">
            <i className="fa fa-car me-3"></i>CarServ
          </h2> */}
          <img src="assets/img/logo-white.png" alt="" style={{maxWidth:'140px'}}/>
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="/" className="nav-item nav-link active">
              Home
            </a>
            <div className="nav-item dropdown about-dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                About
              </a>
              <div className="dropdown-menu custom-dropdown">
                <div className="service-group">
                  <a href="/About" className="dropdown-item">
                    <i className="fas fa-user"></i> About Us
                  </a>
                  <a href="/OurMission" className="dropdown-item">
                    <i className="fas fa-bullseye"></i> Our Mission
                  </a>
                  <a href="/OurVision" className="dropdown-item">
                    <i className="fas fa-eye"></i> Our Vision
                  </a>
                </div>
              </div>
            </div>

            <div className="nav-item dropdown services-dropdown">
              <a
                href="/Services"
                className="nav-link dropdown-toggle"
                // data-bs-toggle="dropdown"
              >
                Services
              </a>
              <div className="dropdown-menu custom-dropdown">
                <div className="service-group">
                  <a href="/MechanicalService" className="dropdown-item">
                    <i className="fas fa-tools"></i> Mechanical Service
                  </a>
                  <a href="/" className="dropdown-item">
                    <i class="fas fa-cogs"></i>
                    <span>Tyre Service</span>
                  </a>

                  <a href="" className="dropdown-item">
                    <i className="fas fa-car"></i> Car Accessories
                  </a>
                  <a href="" className="dropdown-item">
                    <i className="fas fa-spray-can"></i> Car Detailing
                  </a>
                  <a href="" className="dropdown-item">
                    <i className="fas fa-car-crash"></i> Body Shop Service
                  </a>
                  <a href="" className="dropdown-item">
                    <i className="fas fa-file-invoice"></i> Insurance Renewal
                  </a>
                  <a href="" className="dropdown-item">
                    <i className="fas fa-paint-brush"></i> Car Customize
                  </a>
                </div>
              </div>
            </div>

            <a href="/Blog" className="nav-item nav-link">
              Blog
            </a>
            <div className="nav-item dropdown gallery-dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Gallery
              </a>
              <div className="dropdown-menu custom-dropdown">
                <div className="service-group">
                  <a href="" className="dropdown-item">
                    <i className="fas fa-image"></i> Photos
                  </a>
                  <a href="" className="dropdown-item">
                    <i className="fas fa-video"></i> Videos
                  </a>
                  <a href="" className="dropdown-item">
                    <i className="fas fa-award"></i> Achievements Gallery
                  </a>
                  <a href="" className="dropdown-item">
                    <i className="fas fa-calendar-day"></i> Daily Activity
                    Gallery
                  </a>
                </div>
              </div>
            </div>

            <a href="contact/" className="nav-item nav-link">
              Contact
            </a>
          </div>
          <a href="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block" style={{borderRadius:'50px 0px 0px 50px'}}>
            Get A Quote<i className="fa fa-arrow-right ms-3"></i>
          </a>
        </div>
      </nav>
      {/* <!-- Navbar End --> */}
    </div>
  );
}
