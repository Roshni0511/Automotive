import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Counter from "./Counter";
import Discovermore from "./Discovermore";
import Testimonial from "./Testimonial";

const Services = () => {
  return (
    <>
      <Navbar />
      <div>
        {/* <!-- Page Header Start --> */}
        <div
          className="container-fluid page-header mb-5 p-0"
          style={{ backgroundImage: "url(assets/img/carousel-bg-2.jpg)" }}
        >
          <div className="container-fluid page-header-inner py-5">
            <div className="container text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Services
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center text-uppercase">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>

                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    Services
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        {/* <!-- Page Header End --> */}

        {/* <!-- Services Start --> */}
        <div className="container pt-5">
          <div className="d-flex flex-column text-center mb-5">
            <h5 className="text-primary mb-3">// Our Services //</h5>
            <h1 className="m-0">Premium Security Services</h1>
          </div>
          <div className="row pb-3">
            <div
              className="col-md-6 col-lg-4 mb-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-2 p-3 position-relative overflow-hidden">
                <div className="team-item position-relative">
                  <img
                    className="card-img-top"
                    src="/assets/img/mechanical-services.jpg"
                    alt=""
                  />
                  <div className="team-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <a href="/MechanicalService" className="btn btn-primary">
                      <i className="fas fa-eye me-2"></i>View More
                    </a>
                  </div>
                </div>
                <div className="card-body bg-secondary d-flex align-items-center p-0">
                  <h3
                    className="flaticon-desk font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3"
                    style={{ width: "45px", height: "45px" }}
                  >
                    <i className="fas fa-tools" style={{ fontSize: "20px" }}></i>
                  </h3>
                  <h6
                    className="card-title text-white text-truncate"
                    style={{ marginLeft: "15px", marginBottom: "0px" }}
                  >
                   <a href="/MechanicalService" className="text-white"> Mechanical Service</a>
                  </h6>
                </div>
                <div className="card-footer">
                  All our workshops are equipped with highly experienced
                  mechanics & state-of-the-art diagnostic tools.
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 mb-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-2 p-3 position-relative overflow-hidden">
                <div className="team-item position-relative">
                  <img
                    className="card-img-top"
                    src="/assets/img/body-shop-services.jpg"
                    alt=""
                  />
                  <div className="team-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <a href="/Bodyshopservice" className="btn btn-primary">
                      <i className="fas fa-eye me-2"></i>View More
                    </a>
                  </div>
                </div>
                <div className="card-body bg-secondary d-flex align-items-center p-0">
                  <h3
                    className="flaticon-home font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3"
                    style={{ width: "45px", height: "45px" }}
                  >
                    <i className="fas fa-car " style={{ fontSize: "20px" }}>
                      {" "}
                    </i>
                  </h3>
                  <h6
                    className="card-title text-white text-truncate "
                    style={{ marginLeft: "15px", marginBottom: "0px" }}
                  >
                    <a href="/Bodyshopservice" className="text-white">Body Shop Service</a>
                  </h6>
                </div>
                <div className="card-footer">
                  Keep your car shining like brand new with us. Visit our
                  service station to experience a professional cleaning for your
                  car.
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 mb-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-2 p-3 position-relative overflow-hidden">
                <div className="team-item position-relative">
                  <img
                    className="card-img-top"
                    src="/assets/img/tyre-services.jpg"
                    alt=""
                  />
                  <div className="team-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <a href="/Tyreservice" className="btn btn-primary">
                      <i className="fas fa-eye me-2"></i>View More
                    </a>
                  </div>
                </div>
                <div className="card-body bg-secondary d-flex align-items-center p-0">
                  <h3
                    className="flaticon-factory font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3"
                    style={{ width: "45px", height: "45px" }}
                  >
                    <i className="fas fa-cog me-2" style={{ fontSize: "20px" }}></i>
                  </h3>
                  <h6
                    className="card-title text-white text-truncate "
                    style={{ marginLeft: "15px", marginBottom: "0px" }}
                  >
                    <a href="/Tyreservice" className="text-white">Tyre Service</a>
                    
                  </h6>
                </div>
                <div className="card-footer">
                  We can help to protect your tires and get maximum performance
                  delivery from your car's tyres.
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 mb-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-2 p-3 position-relative overflow-hidden">
                <div className="team-item position-relative">
                  <img
                    className="card-img-top"
                    src="/assets/img/insurance-renewal.jpg"
                    alt=""
                  />
                  <div className="team-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <a href="/Insurancerenewal" className="btn btn-primary">
                      <i className="fas fa-eye me-2"></i>View More
                    </a>
                  </div>
                </div>
                <div className="card-body bg-secondary d-flex align-items-center p-0">
                  <h3
                    className="flaticon-transportation font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3"
                    style={{ width: "45px", height: "45px" }}
                  >
                    <i
                      className="fas fa-shield-alt"
                      style={{ fontSize: "20px" }}
                    ></i>
                  </h3>
                  <h6
                    className="card-title text-white text-truncate "
                    style={{ marginLeft: "15px", marginBottom: "0px" }}
                  >
                  <a href="/Insurancerenewal" className="text-white">Insurance Renewal</a>

                    
                  </h6>
                </div>
                <div className="card-footer">
                  We understand insurance policy and make the process of buying
                  or renewing car insurance as simple as possible.
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 mb-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-2 p-3 position-relative overflow-hidden">
                <div className="team-item position-relative">
                  <img
                    className="card-img-top"
                    src="/assets/img/car-accessories.jpg"
                    alt=""
                  />
                  <div className="team-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <a href="/Caraccessories" className="btn btn-primary">
                      <i className="fas fa-eye me-2"></i>View More
                    </a>
                  </div>
                </div>
                <div className="card-body bg-secondary d-flex align-items-center p-0">
                  <h3
                    className="flaticon-desk font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3"
                    style={{ width: "45px", height: "45px" }}
                  >
                    <i className="fas fa-toolbox" style={{ fontSize: "20px" }}></i>
                  </h3>
                  <h6
                    className="card-title text-white text-truncate "
                    style={{ marginLeft: "15px", marginBottom: "0px" }}
                  >
                    <a href="/Caraccessories" className="text-white">Car Accessories</a>
                    
                  </h6>
                </div>
                <div className="card-footer">
                  Components that can potentially enhance your car, they are the
                  small details that make a difference.
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 mb-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-2 p-3 position-relative overflow-hidden">
                {/* <!-- Image with hover overlay --> */}
                <div className="team-item position-relative">
                  <img
                    className="card-img-top"
                    src="/assets/img/car-customization.jpg"
                    alt=""
                  />
                  <div className="team-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <a href="/Carcustomization" className="btn btn-primary">
                      <i className="fas fa-eye me-2"></i>View More
                    </a>
                  </div>
                </div>

                <div className="card-body bg-secondary d-flex align-items-center p-0">
                  <h3
                    className="flaticon-bodyguard font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3"
                    style={{ width: "45px", height: "45px" }}
                  >
                    <i className="fas fa-wrench" style={{ fontSize: "20px" }}></i>
                  </h3>
                  <h6
                    className="card-title text-white text-truncate "
                    style={{ marginLeft: "15px", marginBottom: "0px" }}
                  >
                    <a href="/Carcustomization" className="text-white">Car Customize</a>
                    
                  </h6>
                </div>

                <div className="card-footer">
                  Enhance the aesthetics of your car with customised graphics &
                  designs. We offer a wide range of fresh & creative design.
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 mb-4  wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-2 p-3 position-relative overflow-hidden">
                <div className="team-item position-relative">
                  <img
                    className="card-img-top"
                    src="/assets/img/car-detailing.jpg"
                    alt=""
                  />

                  {/* <!-- 👇 Overlay should be inside team-item and controlled via CSS --> */}
                  <div className="team-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <a href="/Cardetailing" className="btn btn-primary">
                      <i className="fas fa-eye me-2"></i>View More
                    </a>
                  </div>
                </div>

                <div className="card-body bg-secondary d-flex align-items-center p-0">
                  <h3
                    className="flaticon-bodyguard font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3"
                    style={{ width: "45px", height: "45px" }}
                  >
                    <i
                      className="fas fa-spray-can"
                      style={{ fontSize: "20px" }}
                    ></i>
                  </h3>
                  <h6
                    className="card-title text-white text-truncate "
                    style={{ marginLeft: "15px", marginBottom: "0px" }}
                  >
                    <a href="/Cardetailing" className="text-white">Car Detailing</a>
                    
                  </h6>
                </div>

                <div className="card-footer">
                  We are known for our perfect eye of Car Detailing. We have a
                  wide range of car care products as per requirements.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Services End --> */}
        <Discovermore />
        <Counter />
        <Testimonial />
      </div>
      <Footer />
    </>
  );
};

export default Services;
