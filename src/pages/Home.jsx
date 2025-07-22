import React, { useEffect } from "react";
import Navbar from "./Navbar";

import Footer from "./Footer";
import Counter from "./Counter";
import Booking from "./Booking";

export default function Home() {
  useEffect(() => {
    // wait for DOM to fully render
    const interval = setInterval(() => {
      if (window.$ && window.$(".testimonial-carousel").length > 0) {
        window.$(".testimonial-carousel").owlCarousel({
          autoplay: true,
          smartSpeed: 1000,
          center: true,
          margin: 25,
          dots: true,
          loop: true,
          nav: false,
          responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
          },
        });
        clearInterval(interval); // stop checking
      }
    }, 300);
  }, []);
  return (
    <>
      <div>
        <Navbar />

        {/* <!-- Carousel Start --> */}
        <div className="container-fluid p-0 mb-5">
          <div
            id="header-carousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="w-100"
                  src="assets/img/carousel-bg-1.jpg"
                  alt="Image"
                />
                <div className="carousel-caption d-flex align-items-center">
                  <div className="container">
                    <div className="row align-items-center justify-content-center justify-content-lg-start">
                      <div className="col-10 col-lg-7 text-center text-lg-start">
                        <h6 className="text-white text-uppercase mb-3 animated slideInDown">
                          // Are you Looking Reliable //
                        </h6>
                        <h1 className="display-3 text-white mb-2 pb-2 animated slideInDown">
                          Get Amazing Car Service
                        </h1>
                        <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">
                          From Us
                        </h1>
                        <a
                          href=""
                          className="btn btn-primary py-3 px-5 animated slideInDown"
                        >
                          Learn More<i className="fa fa-arrow-right ms-3"></i>
                        </a>
                      </div>
                      <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                        <img
                          className="img-fluid"
                          src="assets/img/carousel-1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="w-100"
                  src="assets/img/carousel-bg-2.jpg"
                  alt="Image"
                />
                <div className="carousel-caption d-flex align-items-center">
                  <div className="container">
                    <div className="row align-items-center justify-content-center justify-content-lg-start">
                      <div className="col-10 col-lg-7 text-center text-lg-start">
                        <h6 className="text-white text-uppercase mb-3 animated slideInDown">
                          // We Care Extra //
                        </h6>
                        <h1 className="display-3 text-white mb-2 pb-2 animated slideInDown">
                          Modern Car Repair
                        </h1>
                        <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">
                          We Provide Expert Service
                        </h1>
                        <a
                          href=""
                          className="btn btn-primary py-3 px-5 animated slideInDown"
                        >
                          Learn More<i className="fa fa-arrow-right ms-3"></i>
                        </a>
                      </div>
                      <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                        <img
                          className="img-fluid"
                          src="assets/img/carousel-2.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* <!-- Carousel End --> */}

        {/* <!-- Service Start --> */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-4">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="d-flex py-5 px-4">
                  <i className="fa fa-certificate fa-3x text-primary flex-shrink-0"></i>
                  <div className="ps-4">
                    <h5 className="mb-3">Certified Technicians</h5>
                    <p>
                      Our team includes certified experts trained to service all
                      makes and models efficiently.
                    </p>
                    <a className="text-secondary border-bottom" href="">
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="d-flex bg-light py-5 px-4">
                  <i className="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
                  <div className="ps-4">
                    <h5 className="mb-3">Trusted Professionals</h5>
                    <p>
                      Experienced mechanics providing reliable, fast, and
                      transparent service every time.
                    </p>
                    <a className="text-secondary border-bottom" href="">
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="d-flex py-5 px-4">
                  <i className="fa fa-tools fa-3x text-primary flex-shrink-0"></i>
                  <div className="ps-4">
                    <h5 className="mb-3">Advanced Tools</h5>
                    <p>
                      We use the latest diagnostic and repair tools for accurate
                      and efficient solutions.
                    </p>
                    <a className="text-secondary border-bottom" href="">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Service End --> */}

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
                  makes and models, including manufacturer logbook servicing.
                  With Automotive, you can count on honest, reliable, and fully
                  trained mechanics who are qualified to keep your vehicle in
                  top condition.
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
                          Support anytime for service, emergencies, or
                          inquiries.
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
                          Regular inspections free to keep cars running
                          smoothly.
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
                {/* <a href="/About" className="btn btn-primary py-3 px-5">
                  Read More<i className="fa fa-arrow-right ms-3"></i>
                </a> */}
                 <a class="dedcription-btn" href="/About">
                          <span class="name-descripeion"> Read More</span>
                          <div class="btn-icon heart">
                            <i class="fas fa-car"></i>
                          </div>
                        </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- About End --> */}

        {/* <!-- Fact Start --> */}
        <Counter />
        {/* <!-- Fact End --> */}

        {/* <!-- Service Start --> */}
        <div className="container-xxl service py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="text-primary text-uppercase">
                // Our Services //
              </h6>
              <h1 className="mb-5">Explore Our Services</h1>
            </div>
            <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="col-lg-4">
                <div className="nav w-100 nav-pills me-4">
                  <button
                    className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active"
                    data-bs-toggle="pill"
                    data-bs-target="#tab-pane-1"
                    type="button"
                  >
                    <i className="fa fa-car-side fa-2x me-3"></i>
                    <h4 className="m-0">Diagnostic Test</h4>
                  </button>
                  <button
                    className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                    data-bs-toggle="pill"
                    data-bs-target="#tab-pane-2"
                    type="button"
                  >
                    <i className="fa fa-car fa-2x me-3"></i>
                    <h4 className="m-0">Engine Servicing</h4>
                  </button>
                  <button
                    className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                    data-bs-toggle="pill"
                    data-bs-target="#tab-pane-3"
                    type="button"
                  >
                    <i className="fa fa-cog fa-2x me-3"></i>
                    <h4 className="m-0">Tires Replacement</h4>
                  </button>
                  <button
                    className="nav-link w-100 d-flex align-items-center text-start p-4 mb-0"
                    data-bs-toggle="pill"
                    data-bs-target="#tab-pane-4"
                    type="button"
                  >
                    <i className="fa fa-oil-can fa-2x me-3"></i>
                    <h4 className="m-0">Oil Changing</h4>
                  </button>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="tab-content w-100">
                  <div className="tab-pane fade show active" id="tab-pane-1">
                    <div className="row g-4">
                      <div className="col-md-6" style={{ minHeight: "350px" }}>
                        <div className="position-relative h-100">
                          <img
                            className="position-absolute img-fluid w-100 h-100"
                            src="/assets/img/service.jpg"
                            style={{ objectFit: "cover" }}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h3 className="mb-3">
                          Comprehensive Vehicle Diagnostic Testing
                        </h3>
                        <p className="mb-4">
                          Our diagnostic test services utilize state-of-the-art
                          tools to identify engine, brake, and electrical issues
                          with precision. Early diagnosis ensures your vehicle
                          stays reliable and safe on the road.
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>
                          Advanced Diagnostic Equipment
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>Quick
                          Problem Identification
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>
                          Detailed Error Reports
                        </p>
                        {/* <a
                          href="/Services"
                          className="btn btn-primary py-3 px-5 mt-3"
                        >
                          Read More<i className="fa fa-arrow-right ms-3"></i>
                        </a> */}
                         <a class="dedcription-btn" href="/Services">
                          <span class="name-descripeion"> Read More</span>
                          <div class="btn-icon heart">
                            <i class="fas fa-car"></i>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tab-pane-2">
                    <div className="row g-4">
                      <div className="col-md-6" style={{ minHeight: "350px" }}>
                        <div className="position-relative h-100">
                          <img
                            className="position-absolute img-fluid w-100 h-100"
                            src="assets/img/service-2.jpg"
                            style={{ objectFit: "cover" }}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h3 className="mb-3">
                          Reliable Engine Servicing & Tune-Up
                        </h3>
                        <p className="mb-4">
                          Ensure optimal engine performance with our expert
                          servicing, which includes oil changes, spark plug
                          replacements, and system checks. We keep your engine
                          running smoothly and efficiently.
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>Full
                          Engine Inspection
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>
                          Performance Optimization
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>Fuel
                          Efficiency Improvements
                        </p>
                        {/* <a
                          href="/Services"
                          className="btn btn-primary py-3 px-5 mt-3"
                        >
                          Read More<i className="fa fa-arrow-right ms-3"></i>
                        </a> */}
                         <a class="dedcription-btn" href="/Services">
                          <span class="name-descripeion"> Read More</span>
                          <div class="btn-icon heart">
                            <i class="fas fa-car"></i>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tab-pane-3">
                    <div className="row g-4">
                      <div className="col-md-6" style={{ minHeight: "350px" }}>
                        <div className="position-relative h-100">
                          <img
                            className="position-absolute img-fluid w-100 h-100"
                            src="assets/img/service-3.jpg"
                            style={{ objectFit: "cover" }}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h3 className="mb-3">
                          Professional Tires Replacement Service
                        </h3>
                        <p className="mb-4">
                          Stay safe on the road with our fast and affordable
                          tire replacement service. We offer balancing,
                          alignment, and premium tire options to match your
                          driving needs.
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>All
                          Brands & Sizes Available
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>Wheel
                          Balancing & Alignment
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>Quick
                          Installation
                        </p>
                        {/* <a
                          href="/Services"
                          className="btn btn-primary py-3 px-5 mt-3"
                        >
                          Read More<i className="fa fa-arrow-right ms-3"></i>
                        </a> */}
                         <a class="dedcription-btn" href="/Services">
                          <span class="name-descripeion"> Read More</span>
                          <div class="btn-icon heart">
                            <i class="fas fa-car"></i>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tab-pane-4">
                    <div className="row g-4">
                      <div className="col-md-6" style={{ minHeight: "350px" }}>
                        <div className="position-relative h-100">
                          <img
                            className="position-absolute img-fluid w-100 h-100"
                            src="assets/img/service-4.jpg"
                            style={{ objectFit: "cover" }}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h3 className="mb-3">
                          Efficient Oil Changing Services
                        </h3>
                        <p className="mb-4">
                          Regular oil changes are vital to extend engine life
                          and ensure smooth operation. We use high-grade oils
                          and filters to keep your vehicle in peak condition.
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>
                          Top-Quality Engine Oils
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>
                          Filter Replacement Included
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>Fast
                          & Hassle-Free Service
                        </p>
                        {/* <a
                          href="/Services"
                          className="btn btn-primary py-3 px-5 mt-3"
                        >
                          Read More<i className="fa fa-arrow-right ms-3"></i>
                        </a> */}
                        <a class="dedcription-btn" href="/Services">
                          <span class="name-descripeion"> Read More</span>
                          <div class="btn-icon heart">
                            <i class="fas fa-car"></i>
                          </div>
                        </a>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Service End --> */}

        {/* <!-- Booking Start --> */}
        <Booking />
        {/* <!-- Booking End --> */}

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
                dependable, specialized, and uncompromising service for every
                customer.
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
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      >
                        <i className="bi bi-gem"></i>
                      </div>
                      <h6 className="m-0">Best Quality Services</h6>
                    </div>
                    <p>
                      We ensure premium car care and expert attention at every
                      step.
                    </p>
                  </div>
                </div>

                {/* 2. Emergency Solutions Anytime */}
                <div className="col-md-6 mb-4">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="bg-primary text-white d-flex align-items-center justify-content-center mr-3"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      >
                        <i className="bi bi-lightning-charge-fill"></i>
                      </div>
                      <h6 className="m-0">Emergency Solutions Anytime</h6>
                    </div>
                    <p>Get fast and reliable support 24/7, wherever you are.</p>
                  </div>
                </div>

                {/* 3. Affordable price upto 2 years */}
                <div className="col-md-6 mb-4">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="bg-primary text-white d-flex align-items-center justify-content-center mr-3"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      >
                        <i class="fas fa-hand-holding-usd"></i>
                      </div>
                      <h6 className="m-0">Affordable Price Upto 2 Years</h6>
                    </div>
                    <p>
                      Long-term value with budget-friendly pricing and
                      transparent deals.
                    </p>
                  </div>
                </div>

                {/* 4. Reliable & Experienced Team */}
                <div className="col-md-6 mb-4">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="bg-primary text-white d-flex align-items-center justify-content-center mr-3"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      >
                        <i className="bi bi-people-fill"></i>
                      </div>
                      <h6 className="m-0">Reliable & Experienced Team</h6>
                    </div>
                    <p>
                      Trusted professionals with years of experience in
                      automotive care.
                    </p>
                  </div>
                </div>

                {/* 5. Advance Equipments */}
                <div className="col-md-6 mb-4">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="bg-primary text-white d-flex align-items-center justify-content-center mr-3"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      >
                        <i className="bi bi-tools"></i>
                      </div>
                      <h6 className="m-0">Advanced Equipments</h6>
                    </div>
                    <p>
                      Equipped with modern tools to handle every car model
                      efficiently.
                    </p>
                  </div>
                </div>

                {/* 6. Expert in all brands service */}
                <div className="col-md-6 mb-4">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="bg-primary text-white d-flex align-items-center justify-content-center mr-3"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
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

        {/* <!-- Team Start --> */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="text-primary text-uppercase">
                // Our Technicians //
              </h6>
              <h1 className="mb-5">Our Expert Technicians</h1>
            </div>
            <div className="row g-4">
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="team-item">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid"
                      src="assets/img/team-1.jpg"
                      alt=""
                    />
                    <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                      <a
                        className="btn btn-square mx-1"
                        href="https://www.facebook.com/"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>

                      <a
                        className="btn btn-square mx-1"
                        href="https://www.instagram.com/"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="bg-light text-center p-4">
                    <h5 className="fw-bold mb-0">Vikas Patel</h5>
                    <small>Senior Auto Mechanic</small>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="team-item">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid"
                      src="assets/img/team-2.jpg"
                      alt=""
                    />
                    <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                      <a
                        className="btn btn-square mx-1"
                        href="https://www.facebook.com/"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>

                      <a
                        className="btn btn-square mx-1"
                        href="https://www.instagram.com/"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="bg-light text-center p-4">
                    <h5 className="fw-bold mb-0">Mahesh Shah</h5>
                    <small>Car Diagnostic Specialist</small>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="team-item">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid"
                      src="assets/img/team-3.jpg"
                      alt=""
                    />
                    <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                      <a
                        className="btn btn-square mx-1"
                        href="https://www.facebook.com/"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>

                      <a
                        className="btn btn-square mx-1"
                        href="https://www.instagram.com/"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="bg-light text-center p-4">
                    <h5 className="fw-bold mb-0">Shubham Parmar</h5>
                    <small>Engine & Transmission Expert</small>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="team-item">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid"
                      src="assets/img/team-4.jpg"
                      alt=""
                    />
                    <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                      <a
                        className="btn btn-square mx-1"
                        href="https://www.facebook.com/"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>

                      <a
                        className="btn btn-square mx-1"
                        href="https://www.instagram.com/"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="bg-light text-center p-4">
                    <h5 className="fw-bold mb-0">Mohit Yadav</h5>
                    <small>Electrical Systems Technician</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Team End --> */}

        {/* <!-- Testimonial Start --> */}
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="text-center">
              <h6 className="text-primary text-uppercase">// Testimonial //</h6>
              <h1 className="mb-5">Our Clients Say!</h1>
            </div>
            <div className="owl-carousel testimonial-carousel position-relative">
              <div className="testimonial-item text-center">
                <img
                  className="bg-light rounded-circle p-2 mx-auto mb-3"
                  src="assets/img/testimonial-1.jpg"
                  style={{ width: "80px", height: "80px" }}
                />
                <h5 className="mb-0">Abraham Patel</h5>
                <p>Surat, Gujarat</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    “Very professional. I must say, very reasonably priced as
                    well, staff is excellent, the facility is also excellent! I
                    would highly recommend to try it! Excellent service with a
                    transparent system. On time delivery.”
                  </p>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="bg-light rounded-circle p-2 mx-auto mb-3"
                  src="assets/img/testimonial-2.jpg"
                  style={{ width: "80px", height: "80px" }}
                />
                <h5 className="mb-0">Divya Shah</h5>
                <p>Navsari, Gujarat</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    “It was an wonderful experience. Automotive is a workshop of
                    highly professional work force. They completely customized
                    my car as per my requirement and delivered with complete
                    ease. I recommend Automotive to all. Thanks and great job.”
                  </p>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="bg-light rounded-circle p-2 mx-auto mb-3"
                  src="assets/img/testimonial-3.jpg"
                  style={{ width: "80px", height: "80px" }}
                />
                <h5 className="mb-0">Kailash Patel</h5>
                <p>Udhna, Gujarat</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    “Fantastic service, superb punctuality. Availed their
                    service twice and truly most satisfying. The response of
                    coordinator is prompt and she was greatly supportive. Thanks
                    a lot..!!”
                  </p>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="bg-light rounded-circle p-2 mx-auto mb-3"
                  src="assets/img/testimonial-4.jpg"
                  style={{ width: "80px", height: "80px" }}
                />
                <h5 className="mb-0">Viraj Patel</h5>
                <p>Surat, Gujarat</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    “This is my first time experience with Automotive. But, I
                    would say the service of Automotive is much better in
                    comparison to any authorized dealer in terms of quality,
                    service and very reasonable charge.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Testimonial End --> */}

        <Footer />
      </div>
    </>
  );
}
