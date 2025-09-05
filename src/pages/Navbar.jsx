import { useState } from "react";
import { FaRightToBracket } from "react-icons/fa6";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleServiceClick = (e) => {
    if (!clicked) {
      e.preventDefault(); // prevent navigation first time
      setClicked(true);
    } else {
      window.location.href = "/Services"; // navigate on 2nd click
    }
  };
  return (
    <>
      <div>
        {/* <!-- Topbar Start --> */}
        <div className="container-fluid bg-light p-0">
          <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
              {/* Email Section with mailto link */}
              <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                <a
                  href="mailto:automotive2002@gmail.com"
                  className="text-decoration-none text-dark"
                >
                  <small className="fa fa-envelope text-primary me-2"></small>
                  <small>automotive2002@gmail.com</small>
                </a>
              </div>

              {/* Working Hours (link optional – can be removed or pointed to a contact/info page) */}
              <div className="h-100 d-inline-flex align-items-center py-3">
                <a href="#" className="text-decoration-none text-dark">
                  <small className="far fa-clock text-primary me-2"></small>
                  <small>9:00 AM to 6:30 PM</small>
                </a>
              </div>
            </div>

            <div className="col-lg-5 px-5 text-end">
              <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                <a
                  href="tel:02612662999"
                  className="text-decoration-none text-dark"
                >
                  <small className="fa fa-phone-alt text-primary me-2"></small>
                  <small>0261 266 2999</small>
                </a>
              </div>
              <div className="h-100 d-inline-flex align-items-center">
                <a
                  className="btn btn-sm-square bg-white text-primary me-1"
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-sm-square bg-white text-primary me-1"
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-sm-square bg-white text-primary me-1"
                  href="https://www.linkedin.com/in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  className="btn btn-sm-square bg-white text-primary me-0"
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
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
            style={{
              background: " #d81324",
              borderRadius: "0px 50px 50px 0px",
            }}
          >
            {/* <h2 className="m-0 text-primary">
            <i className="fa fa-car me-3"></i>CarServ
          </h2> */}
            <img
              src="assets/img/logo-white.png"
              alt=""
              style={{ maxWidth: "140px" }}
            />
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
            <div className="navbar-nav m-auto p-4 p-lg-0">
              <a href="/" className="nav-item nav-link">
                Home
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  About
                </a>
                <div className="dropdown-menu fade-up m-0">
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
              {/* <div className="nav-item dropdown">
                    <a href="/Services" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
                  
                    <div className="dropdown-menu fade-up m-0">
                        <a href="/MechanicalService" className="dropdown-item"><i className="fas fa-tools"></i> Mechanical Service</a>
                        <a href="/Tyreservice" className="dropdown-item"><i className="fas fa-cogs"></i> Tyre Service</a>
                        <a href="/Caraccessories" className="dropdown-item"> <i className="fas fa-car"></i> Car Accessories</a>
                        <a href="/Cardetailing" className="dropdown-item"><i className="fas fa-spray-can"></i>  Car Detailing</a>
                        <a href="/Bodyshopservice" className="dropdown-item"> <i className="fas fa-car-crash"></i> Body Shop Service</a>
                           <a href="/Insurancerenewal" className="dropdown-item"><i className="fas fa-file-invoice"></i> Insurance Renewal</a>
                        <a href="/Carcustomization" className="dropdown-item"><i className="fas fa-paint-brush"></i> Car Customize</a>
                    </div>
                </div> */}
              <div className="nav-item dropdown">
                <a
                  href="/Services"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  onClick={handleServiceClick}
                >
                  Services
                </a>
                <div className="dropdown-menu fade-up m-0">
                  <a href="/MechanicalService" className="dropdown-item">
                    <i className="fas fa-tools"></i> Mechanical Service
                  </a>
                  <a href="/Tyreservice" className="dropdown-item">
                    <i className="fas fa-cogs"></i> Tyre Service
                  </a>
                  <a href="/Caraccessories" className="dropdown-item">
                    {" "}
                    <i className="fas fa-car"></i> Car Accessories
                  </a>
                  <a href="/Cardetailing" className="dropdown-item">
                    <i className="fas fa-spray-can"></i> Car Detailing
                  </a>
                  <a href="/Bodyshopservice" className="dropdown-item">
                    {" "}
                    <i className="fas fa-car-crash"></i> Body Shop Service
                  </a>
                  <a href="/Insurancerenewal" className="dropdown-item">
                    <i className="fas fa-file-invoice"></i> Insurance Renewal
                  </a>
                  <a href="/Carcustomization" className="dropdown-item">
                    <i className="fas fa-paint-brush"></i> Car Customize
                  </a>
                </div>
              </div>
              <a href="/Blog" className="nav-item nav-link ">
                Blog
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Gallery
                </a>
                <div className="dropdown-menu fade-up m-0">
                  <a href="/Gallery" className="dropdown-item">
                    <i className="fas fa-image"></i> Photos
                  </a>
                  <a href="/Video" className="dropdown-item">
                    <i className="fas fa-video"></i> Videos
                  </a>
                  <a href="/Achievements_gallery" className="dropdown-item">
                    <i className="fas fa-award"></i> Achievements Gallery
                  </a>
                  <a href="/Daily_Activity" className="dropdown-item">
                    <i className="fas fa-calendar-day"></i> Daily Activity
                    Gallery
                  </a>
                </div>
              </div>
              <a href="/Contact" className="nav-item nav-link">
                Contact
              </a>
              <a href="/My_Account" className="nav-item nav-link">
                {" "}
                My Account
              </a>
              <a href="/Login" className="nav-item nav-link d-block d-lg-none">
                {" "}
                Login
              </a>
            </div>
            <a
              href="/Login"
              className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
              style={{ borderRadius: "50px 0px 0px 50px" }}
            >
              Login <FaRightToBracket />
            </a>
          </div>
        </nav>

        {/* <!-- Navbar End --> */}
      </div>

      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>

      <a
        href="https://wa.me/02612662999"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
          alt="WhatsApp"
        />
      </a>
    </>
  );
}
