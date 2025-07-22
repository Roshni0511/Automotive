import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Counter from "./Counter";

export default function About() {
  return (
    <div>
      <Navbar />

      {/* <!-- Page Header Start --> */}
      <div
        class="container-fluid page-header mb-5 p-0"
        style={{ backgroundImage: "url(assets/img/carousel-bg-1.jpg)" }}
      >
        <div class="container-fluid page-header-inner py-5">
          <div class="container text-center">
            <h1 class="display-3 text-white mb-3 animated slideInDown">
              About Us
            </h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb justify-content-center text-uppercase">
                <li class="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li
                  class="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  About
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- About Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 pt-4" style={{ minHeight: "400px" }}>
              <div
                className="position-relative h-100 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="assets/img/about.jpg"
                  style={{ objectFit: "cover" }}
                  alt=""
                />
                <div
                  className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5"
                  style={{ background: "rgba(0, 0, 0, .08)" }}
                >
                  <h1 className="display-4 text-white mb-0">
                    15 <span className="fs-4">Years</span>
                  </h1>
                  <h4 className="text-white">Experience</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h6 className="text-primary text-uppercase">// About Us //</h6>
              <h1 className="mb-4">
                <span className="text-primary">Automotive</span> We are
                qualified & of experience in this field
              </h1>
              <p className="mb-4">
                We offer a wide range of car repair services for all popular
                makes and models, including manufacturer logbook servicing. With
                Automotive, you can count on honest, reliable, and fully trained
                mechanics who are qualified to keep your vehicle in top
                condition.
              </p>
              <div className="row g-4 mb-3 pb-3">
                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span className="fw-bold text-secondary">01</span>
                    </div>
                    <div className="ps-3">
                      <h6>Professional Car Services</h6>
                      <span>
                        Certified experts for reliable car care and repairs.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span className="fw-bold text-secondary">02</span>
                    </div>
                    <div className="ps-3">
                      <h6>24/7 Call Services Avilable</h6>
                      <span>
                        Support anytime for service, emergencies, or inquiries.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span className="fw-bold text-secondary">03</span>
                    </div>
                    <div className="ps-3">
                      <h6>Unlimited Free Car Checkup</h6>
                      <span>
                        Regular inspections free to keep cars running smoothly.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span className="fw-bold text-secondary">04</span>
                    </div>
                    <div className="ps-3">
                      <h6>Great Skilled Technician</h6>
                      <span>
                        Experienced technicians ensuring quality work every
                        time.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <a href="" className="btn btn-primary py-3 px-5">
                Read More<i className="fa fa-arrow-right ms-3"></i>
              </a> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      <Counter />

      {/* <!-- Features Start --> */}
     <div className="container pt-5 wow fadeInUp" data-wow-delay="0.1s">
  <div className="row">
    <div className="col-lg-5 mb-5 wow zoomIn" data-wow-delay="0.6s">
      <h5 className="text-primary mb-3">Why Automotive?</h5>
      <h4>Mechanic’s Special Services</h4>
      <img
        className="img-thumbnail mb-4 p-3"
        src="assets/img/man-working-under-car.png"
        alt="Image"
      />
      <p>
        Our expertise with various vehicles and technologies ensures
        dependable, specialized, and uncompromising service for every customer.
      </p>
      {/* <a href="#" className="btn btn-primary py-3 px-5">
        Learn More
      </a> */}
        <a class="dedcription-btn" href="#">
                <span class="name-descripeion"> Learn More</span>
                <div class="btn-icon heart">
                  <i class="fas fa-car"></i>
                </div>
              </a>
    </div>
    <div className="col-lg-7">
      <div className="row">
        {/* 1. Best Quality Services */}
        <div className="col-md-6 mb-4">
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center mb-3">
              <div
                className="bg-primary text-white d-flex align-items-center justify-content-center mr-3"
                style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px", }}
              >
                <i className="bi bi-gem"></i>
              </div>
              <h6 className="m-0">Best Quality Services</h6>
            </div>
            <p>
              We ensure premium car care and expert attention at every step.
            </p>
          </div>
        </div>

        {/* 2. Emergency Solutions Anytime */}
        <div className="col-md-6 mb-4">
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center mb-3">
              <div
                className="bg-primary text-white d-flex align-items-center justify-content-center mr-3"
                style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px", }}
              >
                <i className="bi bi-lightning-charge-fill"></i>
              </div>
              <h6 className="m-0">Emergency Solutions Anytime</h6>
            </div>
            <p>
              Get fast and reliable support 24/7, wherever you are.
            </p>
          </div>
        </div>

        {/* 3. Affordable price upto 2 years */}
        <div className="col-md-6 mb-4">
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center mb-3">
              <div
                className="bg-primary text-white d-flex align-items-center justify-content-center mr-3"
                style={{ width: "40px", height: "40px", borderRadius: "50%" , marginRight: "10px",}}
              >
               <i class="fas fa-hand-holding-usd"></i>
              </div>
              <h6 className="m-0">Affordable Price Upto 2 Years</h6>
            </div>
            <p>
              Long-term value with budget-friendly pricing and transparent deals.
            </p>
          </div>
        </div>

        {/* 4. Reliable & Experienced Team */}
        <div className="col-md-6 mb-4">
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center mb-3">
              <div
                className="bg-primary text-white d-flex align-items-center justify-content-center mr-3"
                style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px", }}
              >
                <i className="bi bi-people-fill"></i>
              </div>
              <h6 className="m-0">Reliable & Experienced Team</h6>
            </div>
            <p>
              Trusted professionals with years of experience in automotive care.
            </p>
          </div>
        </div>

        {/* 5. Advance Equipments */}
        <div className="col-md-6 mb-4">
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center mb-3">
              <div
                className="bg-primary text-white d-flex align-items-center justify-content-center mr-3"
                style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px", }}
              >
                <i className="bi bi-tools"></i>
              </div>
              <h6 className="m-0">Advanced Equipments</h6>
            </div>
            <p>
              Equipped with modern tools to handle every car model efficiently.
            </p>
          </div>
        </div>

        {/* 6. Expert in all brands service */}
        <div className="col-md-6 mb-4">
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center mb-3">
              <div
                className="bg-primary text-white d-flex align-items-center justify-content-center mr-3"
                style={{ width: "40px", height: "40px", borderRadius: "50%" , marginRight: "10px",}}
              >
                <i class="fas fa-car"></i>

              </div>
              <h6 className="m-0">Expert in All Brand Services</h6>
            </div>
            <p>
              No matter the brand, we provide precise, expert service.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* <!-- Features End --> */}

      <Footer />
    </div>
  );
}
