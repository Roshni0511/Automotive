import React, { useEffect } from "react";
import Navbar from "./Navbar";

import Footer from "./Footer";
import Counter from "./Counter";
import Booking from "./Booking";
import Discovermore from "./Discovermore";
import Testimonial from "./Testimonial";
import Process from "./Process";
import Company_logo from "./Company_logo";
   const blogData = [
  {
    img: "/assets/img/gallery-19.jpg",
    alt: "Engine Diagnostics",
    title: "Understanding Engine Diagnostic Tools",
    folder: "Mechanical",
    comments: 14,
    desc: "Explore how modern diagnostic tools help detect issues early, improve vehicle performance, and reduce repair costs.",
  },
  {
    img: "/assets/img/gallery-3.jpg",
    alt: "Paint & Body Repair",
    title: "Top 5 Body Repair Mistakes to Avoid",
    folder: "Body Shop",
    comments: 9,
    desc: "From mismatched paint to improper dent repairs, learn the common mistakes in bodywork and how professionals fix them.",
  },
  {
    img: "/assets/img/gallery-6.jpg",
    alt: "Tyre Maintenance",
    title: "How to Choose the Right Tyres",
    folder: "Tyre Service",
    comments: 11,
    desc: "Choosing the correct tyres ensures better grip, mileage, and safety. Here’s a complete guide based on your car type.",
  },
 
];

export default function Home() {

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
                  src="/assets/img/slider-6-1.jpg"
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
                          href="/About"
                          className="btn btn-primary  animated slideInDown"
                          style={{marginRight:'20px',padding:'10px 30px',marginBottom:'10px'}}
                        >
                          About Us<i className="fa fa-arrow-right ms-3"></i>
                        </a>
                          <a
                          href="/Gallery"
                          className="btn   animated slideInDown newbutton"
                            style={{marginRight:'20px',padding:'10px 30px',marginBottom:'10px'}}
                        >
                         Work Gallery<i className="fa fa-arrow-right ms-3"></i>
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
                  src="/assets/img/slider-4-1.jpg"
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
                          href="/About"
                          className="btn btn-primary  animated slideInDown"
                           style={{marginRight:'20px',padding:'10px 30px',marginBottom:'10px'}}
                        >
                          About Us<i className="fa fa-arrow-right ms-3"></i>
                        </a>
                          <a
                          href="/Services"
                          className="btn   animated slideInDown newbutton"
                            style={{marginRight:'20px',padding:'10px 30px',marginBottom:'10px'}}
                        >
                         Our Services<i className="fa fa-arrow-right ms-3"></i>
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
                    {/* <a className="text-secondary border-bottom" href="">
                      Read More
                    </a> */}
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
                    {/* <a className="text-secondary border-bottom" href="">
                      Read More
                    </a> */}
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
                    {/* <a className="text-secondary border-bottom" href="">
                      Read More
                    </a> */}
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
                 <a className="dedcription-btn" href="/About">
                          <span className="name-descripeion"> Read More</span>
                          <div className="btn-icon heart">
                            <i className="fas fa-car"></i>
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
                    className="nav-link w-100 d-flex align-items-center text-start p-3 mb-2 active"
                    data-bs-toggle="pill"
                    data-bs-target="#tab-pane-1"
                    type="button"
                  >
                    <i className="fa fa-car-side fa-2x me-3"></i>
                    <h5 className="m-0">Mechanical Service</h5>
                  </button>
                  <button
                    className="nav-link w-100 d-flex align-items-center text-start p-3 mb-2"
                    data-bs-toggle="pill"
                    data-bs-target="#tab-pane-2"
                    type="button"
                  >
                    <i className="fa fa-car fa-2x me-3"></i>
                    <h5 className="m-0">Body Shop Service</h5>
                  </button>
                  <button
                    className="nav-link w-100 d-flex align-items-center text-start p-3 mb-2"
                    data-bs-toggle="pill"
                    data-bs-target="#tab-pane-3"
                    type="button"
                  >
                    <i className="fa fa-cog fa-2x me-3"></i>
                    <h5 className="m-0">Tyre Service</h5>
                  </button>
                  <button
                    className="nav-link w-100 d-flex align-items-center text-start p-3 mb-2"
                    data-bs-toggle="pill"
                    data-bs-target="#tab-pane-4"
                    type="button"
                  >
                    <i className="fa fa-shield-alt fa-2x me-3"></i>
                    <h5 className="m-0">Insurance Renewal</h5>
                  </button>
                  <button
                    className="nav-link w-100 d-flex align-items-center text-start p-3 mb-2"
                    data-bs-toggle="pill"
                    data-bs-target="#tab-pane-5"
                    type="button"
                  >
                    <i className="fa fa-tools fa-2x me-3"></i>
                    <h5 className="m-0">Car Accessories</h5>
                  </button>
                  <button
                    className="nav-link w-100 d-flex align-items-center text-start p-3 mb-2"
                    data-bs-toggle="pill"
                    data-bs-target="#tab-pane-6"
                    type="button"
                  >
                  <i className="fa fa-cogs fa-2x me-3"></i>
                    <h5 className="m-0">Car Customize</h5>
                  </button>
                  <button
                    className="nav-link w-100 d-flex align-items-center text-start p-3 mb-0"
                    data-bs-toggle="pill"
                    data-bs-target="#tab-pane-7"
                    type="button"
                  >
                    <i className="fa fa-broom fa-2x me-3"></i>
                    <h5 className="m-0">Car Detailing</h5>
                  </button>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="tab-content w-100">
                  <div className="tab-pane fade show active" id="tab-pane-1">
                    <div className="row g-4">
                      <div className="col-md-6" style={{ minHeight: "500px" }}>
                        <div className="position-relative h-100">
                          <img
                            className="position-absolute img-fluid w-100 h-100"
                            src="/assets/img/benchman-fixing.avif"
                            style={{ objectFit: "cover" }}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h3 className="mb-3">
                         Expert Mechanical Repair & Maintenance
                        </h3>
                        <p className="mb-4">
                          Our mechanical services are designed to keep your car running smoothly and safely on the road. From complete engine diagnostics to brake, clutch, and suspension repairs, we use advanced tools and genuine parts to ensure your vehicle performs at its best. Whether it's a minor issue or a major overhaul, our certified mechanics are equipped to handle it all with precision and care.
                        </p>
                        <p><i className="fa fa-check text-success me-3"></i>Certified Technicians</p>
                        <p><i className="fa fa-check text-success me-3"></i>Engine & Transmission Repairs</p>
                        <p><i className="fa fa-check text-success me-3"></i>Brake & Suspension Services</p>
                        {/* <a
                          href="/Services"
                          className="btn btn-primary py-3 px-5 mt-3"
                        >
                          Read More<i className="fa fa-arrow-right ms-3"></i>
                        </a> */}
                         <a className="dedcription-btn" href="/MechanicalService">
                          <span className="name-descripeion"> Read More</span>
                          <div className="btn-icon heart">
                            <i className="fas fa-car"></i>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tab-pane-2">
                    <div className="row g-4">
                      <div className="col-md-6" style={{ minHeight: "500px" }}>
                        <div className="position-relative h-100">
                          <img
                            className="position-absolute img-fluid w-100 h-100"
                            src="/assets/img/man-polish.avif"
                            style={{ objectFit: "cover" }}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h3 className="mb-3">
                          Complete Auto Body Restoration
                        </h3>
                        <p className="mb-4">
                           Our body shop services specialize in restoring your car to its original factory look and finish. We handle everything from collision repairs, dent removal, and scratch corrections to full repainting using the latest color-matching technology. Whether you need minor touch-ups or extensive bodywork, our team ensures a flawless result that enhances your vehicle’s appearance and resale value.
                        </p>
                        <p><i className="fa fa-check text-success me-3"></i>Top Tyre Brands Available</p>
                        <p><i className="fa fa-check text-success me-3"></i>Wheel Alignment & Balancing</p>
                        <p><i className="fa fa-check text-success me-3"></i>Puncture Repair & Valve Check</p>
                        {/* <a
                          href="/Services"
                          className="btn btn-primary py-3 px-5 mt-3"
                        >
                          Read More<i className="fa fa-arrow-right ms-3"></i>
                        </a> */}
                         <a className="dedcription-btn" href="/Bodyshopservice">
                          <span className="name-descripeion"> Read More</span>
                          <div className="btn-icon heart">
                            <i className="fas fa-car"></i>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tab-pane-3">
                    <div className="row g-4">
                      <div className="col-md-6" style={{ minHeight: "500px" }}>
                        <div className="position-relative h-100">
                          <img
                            className="position-absolute img-fluid w-100 h-100"
                            src="/assets/img/section-c-img.png"
                            style={{ objectFit: "cover" }}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h3 className="mb-3">
                          Tyre Fitting, Alignment & Balancing
                        </h3>
                        <p className="mb-4">
                           Proper tyres are critical for safety and fuel efficiency. Our tyre service offers a wide selection of branded tyres, along with professional fitting, wheel alignment, and balancing. We ensure that your tyres provide optimum grip, handling, and performance in all driving conditions. Our experts also inspect tread wear and provide honest advice on replacements or rotations as needed.
                        </p>
                        <p><i className="fa fa-check text-success me-3"></i>Top Tyre Brands Available</p>
                        <p><i className="fa fa-check text-success me-3"></i>Wheel Alignment & Balancing</p>
                        <p><i className="fa fa-check text-success me-3"></i>Puncture Repair & Valve Check</p>
                        {/* <a
                          href="/Services"
                          className="btn btn-primary py-3 px-5 mt-3"
                        >
                          Read More<i className="fa fa-arrow-right ms-3"></i>
                        </a> */}
                         <a className="dedcription-btn" href="/Tyreservice">
                          <span className="name-descripeion"> Read More</span>
                          <div className="btn-icon heart">
                            <i className="fas fa-car"></i>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tab-pane-4">
                    <div className="row g-4">
                      <div className="col-md-6" style={{ minHeight: "500px" }}>
                        <div className="position-relative h-100">
                          <img
                            className="position-absolute img-fluid w-100 h-100"
                            src="/assets/img/car-calculator.jpg"
                            style={{ objectFit: "cover" }}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h3 className="mb-3">
                         Hassle-Free Car Insurance Renewal
                        </h3>
                        <p className="mb-4">
                           Renewing your car insurance has never been easier. Our streamlined insurance renewal service helps you compare multiple policy options from top providers, ensuring you get maximum coverage at competitive rates. From third-party to comprehensive plans, we take care of all documentation and guide you through the process without any hassle or hidden charges.
                        </p>
                        <p><i className="fa fa-check text-success me-3"></i>Instant Online Renewal</p>
                        <p><i className="fa fa-check text-success me-3"></i>Multiple Insurance Providers</p>
                        <p><i className="fa fa-check text-success me-3"></i>Zero Paperwork Assistance</p>
                        {/* <a
                          href="/Services"
                          className="btn btn-primary py-3 px-5 mt-3"
                        >
                          Read More<i className="fa fa-arrow-right ms-3"></i>
                        </a> */}
                        <a className="dedcription-btn" href="/Insurancerenewal">
                          <span className="name-descripeion"> Read More</span>
                          <div className="btn-icon heart">
                            <i className="fas fa-car"></i>
                          </div>
                        </a>

                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tab-pane-5">
                    <div className="row g-4">
                      <div className="col-md-6" style={{ minHeight: "500px" }}>
                        <div className="position-relative h-100">
                          <img
                            className="position-absolute img-fluid w-100 h-100"
                            src="/assets/img/car-accessories.jpg"
                            style={{ objectFit: "cover" }}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h3 className="mb-3">
                         Wide Range of Car Accessories
                        </h3>
                        <p className="mb-4">
                            Give your vehicle a personal touch with our premium car accessories. We offer everything from seat covers, steering grips, and floor mats to high-end infotainment systems, reverse cameras, and ambient lighting. Whether you’re looking to upgrade aesthetics or add functionality, our wide selection and expert installation services ensure a perfect fit and finish every time.
                        </p>
                        <p><i className="fa fa-check text-success me-3"></i>Premium Seat Covers</p>
                        <p><i className="fa fa-check text-success me-3"></i>Latest Car Audio & Video</p>
                        <p><i className="fa fa-check text-success me-3"></i>Interior & Exterior Styling</p>
                        {/* <a
                          href="/Services"
                          className="btn btn-primary py-3 px-5 mt-3"
                        >
                          Read More<i className="fa fa-arrow-right ms-3"></i>
                        </a> */}
                        <a className="dedcription-btn" href="/Caraccessories">
                          <span className="name-descripeion"> Read More</span>
                          <div className="btn-icon heart">
                            <i className="fas fa-car"></i>
                          </div>
                        </a>

                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tab-pane-6">
                    <div className="row g-4">
                      <div className="col-md-6" style={{ minHeight: "500px" }}>
                        <div className="position-relative h-100">
                          <img
                            className="position-absolute img-fluid w-100 h-100"
                            src="/assets/img/service-car.jpg"
                            style={{ objectFit: "cover" }}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h3 className="mb-3">
                        Personalized Car Customization
                        </h3>
                        <p className="mb-4">
                           Want to make your car truly unique? Our customization services are designed for automotive enthusiasts who love standing out. We offer full-body kits, custom paint jobs, vinyl wraps, performance upgrades, interior mods, and more. Whether you're aiming for sporty, luxurious, or off-road looks, our customization experts bring your vision to life with precision craftsmanship.
                        </p>
                        <p><i className="fa fa-check text-success me-3"></i>Custom Wraps & Paint Jobs</p>
                        <p><i className="fa fa-check text-success me-3"></i>Performance Tuning</p>
                        <p><i className="fa fa-check text-success me-3"></i>Body Kits & Alloy Wheels</p>
                        {/* <a
                          href="/Services"
                          className="btn btn-primary py-3 px-5 mt-3"
                        >
                          Read More<i className="fa fa-arrow-right ms-3"></i>
                        </a> */}
                        <a className="dedcription-btn" href="/Carcustomization">
                          <span className="name-descripeion"> Read More</span>
                          <div className="btn-icon heart">
                            <i className="fas fa-car"></i>
                          </div>
                        </a>

                      </div>
                    </div>
                  </div>

                   <div className="tab-pane fade" id="tab-pane-7">
                    <div className="row g-4">
                      <div className="col-md-6" style={{ minHeight: "500px" }}>
                        <div className="position-relative h-100">
                          <img
                            className="position-absolute img-fluid w-100 h-100"
                            src="/assets/img/car-detail.jpg"
                            style={{ objectFit: "cover" }}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h3 className="mb-3">
                        Professional Car Detailing
                        </h3>
                        <p className="mb-4">
                            Restore your car’s beauty inside and out with our professional detailing services. We go beyond a basic wash to offer deep interior cleaning, upholstery shampooing, dashboard conditioning, and exterior polishing. Our ceramic coating and paint protection options add long-lasting shine and shield your vehicle against dirt, scratches, and UV damage — keeping it looking brand new.
                        </p>
                        <p><i className="fa fa-check text-success me-3"></i>Interior Shampoo & Vacuum</p>
                        <p><i className="fa fa-check text-success me-3"></i>Exterior Polishing & Waxing</p>
                        <p><i className="fa fa-check text-success me-3"></i>Ceramic Coating Available</p>
                        {/* <a
                          href="/Services"
                          className="btn btn-primary py-3 px-5 mt-3"
                        >
                          Read More<i className="fa fa-arrow-right ms-3"></i>
                        </a> */}
                        <a className="dedcription-btn" href="/Cardetailing">
                          <span className="name-descripeion"> Read More</span>
                          <div className="btn-icon heart">
                            <i className="fas fa-car"></i>
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
        <Company_logo />
        {/* <!-- Features Start --> */}
        <div className="container pt-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="row">
            <div className="col-lg-5 mb-5 wow zoomIn" data-wow-delay="0.6s">
              <h5 className="text-primary mb-3">// Why Automotive? //</h5>
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
              <a className="dedcription-btn" href="#">
                <span className="name-descripeion"> Learn More</span>
                <div className="btn-icon heart">
                  <i className="fas fa-car"></i>
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
                        <i className="fas fa-hand-holding-usd"></i>
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
                        <i className="fas fa-car"></i>
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

        <Discovermore />

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
                        target="_blank"
                        href="https://www.facebook.com/"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>

                      <a
                        className="btn btn-square mx-1"
                        target="_blank"
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
                        target="_blank"
                        href="https://www.facebook.com/"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>

                      <a
                        className="btn btn-square mx-1"
                        target="_blank"
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
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>

                      <a
                        className="btn btn-square mx-1"
                        href="https://www.instagram.com/"
                        target="_blank"
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
                        target="_blank"
                        href="https://www.facebook.com/"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>

                      <a
                        className="btn btn-square mx-1"
                        target="_blank"
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
          <Process />
          <Testimonial />

         {/* <!-- Blog Start --> */}
    <div className="container pt-5">
        <div className="d-flex flex-column text-center mb-5">
             <h6 className="text-primary text-uppercase">
                // Recent Blog //
              </h6>
              <h1 className="mb-1">Latest From Our Blog</h1>
        </div>
         <div className="row pb-3 wow fadeInUp" data-wow-delay="0.3s">
        {blogData.map((blog, index) => (
          <div className="col-lg-4 mb-4" key={index}>
            <div className="card mb-2 p-3">
              <a href="/Blog"><img className="card-img-top" src={blog.img} alt={blog.alt} /></a>
              <div className="card-body bg-secondary d-flex justify-content-between align-items-center p-0">
                <h6 className="card-title text-white text-truncate m-0 ml-3 ps-3"><a href="/Blog" className="text-white">{blog.title}</a></h6>
                <a
                  href="#"
                  className="fa fa-link d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white text-decoration-none m-0 ml-auto"
                  style={{ width: "45px", height: "45px" }}
                ></a>
              </div>
              <div className="card-footer py-3 px-4">
                <div className="d-flex justify-content-between mb-2">
                  <small className="mr-3">
                    <i className="fa fa-user text-primary"></i> Admin
                  </small>
                  <small className="mr-3">
                    <i className="fa fa-folder text-primary"></i> {blog.folder}
                  </small>
                  <small className="mr-3">
                    <i className="fa fa-comments text-primary"></i> {blog.comments}
                  </small>
                </div>
                <p className="m-0">{blog.desc}</p>
              </div>
            </div>
          </div>
        ))}

       
      </div>
    </div>
    {/* <!-- Blog End --> */}

        <Footer />
      </div>
    </>
  );
}
