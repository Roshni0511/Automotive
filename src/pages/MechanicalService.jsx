import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MechanicalService = () => {
  return (
    <>
      <Navbar />
      {/* <!-- Page Header Start --> */}
      <div
        className="container-fluid page-header mb-5 p-0"
        style={{ backgroundImage: "url(assets/img/carousel-bg-2.jpg)" }}
      >
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Mechanical Service
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>

                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Mechanical Service
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- coaching single start --> */}
      <section class="coaching-single " style={{ padding: "60px 0px" }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="sidebar-widget">
                <div class="widget">
                  <ul class="widget-category list-unstyled">
                    <li>
                      <a href="">
                        Body Shop Service
                        <span>
                          <img src="assets/img/arrow_up.svg" alt="" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        Tyre Service
                        <span>
                          <img src="assets/img/arrow_up.svg" alt="" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        Insurance Renewal{" "}
                        <span>
                          <img src="assets/img/arrow_up.svg" alt="" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        Car Accessories
                        <span>
                          <img src="assets/img/arrow_up.svg" alt="" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        Car Customize{" "}
                        <span>
                          <img src="assets/img/arrow_up.svg" alt="" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        Car Detailing{" "}
                        <span>
                          <img src="assets/img/arrow_up.svg" alt="" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div
                  class="widget widget-banner text-center bg_img"
                  data-background="assets/img/bg/b_bg.jpg"
                >
                  <img class="mb-40" src="assets/img/icon/b_icon.png" alt="" />
                  <h4>
                    Assured Approval – <br /> Guaranteed
                  </h4>
                  <a class="thm-btn" href="/Contact">
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="single-content">
                <h5 className="text-primary mb-3">
                  // About Mechanical Service //
                </h5>
                <h4>Say Goodbye to Overpriced & Underwhelming Car Services</h4>
                <p>
                  Many car service providers claim to offer best-in-class care
                  services , but most of them are costly, so we can't rely on
                  them. You can see a lot of commitment by car service
                  providers, but it's ended up with below par service. As a car
                  user, if you don't have the idea about car service and their
                  spares and ended up trusting anyone. Where you can get the
                  best car service is still a mind-boggling thing, there is
                  Automotive, which offers best in class car services across ..
                </p>

                <div class="single-img mt-35 mb-70 mt-4">
                  <img
                    src="	https://automotivesurat.com/assets/img/service/automotive-mechanical-services.jpg"
                    alt=""
                    style={{ border: "1px solid #dee2e6", padding: "10px" ,maxWidth:'-webkit-fill-available'}}
                  />
                </div>

                <div
                  className="single-content__feature ul_li"
                  style={{ paddingTop: "30px" }}
                >
                  <div className="single-content-feature">
                    <div
                      className="xb-item--inner color ul_li"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      {/* Icon section */}
                      <div
                        className="xb-item--icon"
                        style={{
                          minWidth: "48px",
                          height: "48px",
                          backgroundColor: "#fff0e5",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src="assets/img/book.svg"
                          alt="icon"
                          style={{
                            width: "22px",
                            height: "22px",
                            objectFit: "contain",
                          }}
                        />
                      </div>

                      {/* Text section */}
                      <div className="xb-item--text" style={{ flex: 1 }}>
                        <h3
                          className="xb-item--title"
                          style={{
                            margin: 0,
                            marginBottom: "5px",
                            fontSize: "22px",
                            color: "#00204A",
                          }}
                        >
                          Instant Car Services
                        </h3>
                        <p
                          style={{ margin: 0, fontSize: "16px", color: "#666" }}
                        >
                          Get fast and reliable service for your car without any
                          hassle.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="single-content-feature">
                    <div
                      className="xb-item--inner color-2 ul_li"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      {/* Icon section */}
                      <div
                        className="xb-item--icon"
                        style={{
                          minWidth: "48px",
                          height: "48px",
                          backgroundColor: "#fff0e5",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src="assets/img/book.svg"
                          alt="icon"
                          style={{
                            width: "22px",
                            height: "22px",
                            objectFit: "contain",
                          }}
                        />
                      </div>

                      {/* Text section */}
                      <div className="xb-item--text" style={{ flex: 1 }}>
                        <h3
                          className="xb-item--title"
                          style={{
                            margin: 0,
                            marginBottom: "5px",
                            fontSize: "22px",
                            color: "#00204A",
                          }}
                        >
                          Quality Service
                        </h3>
                        <p
                          style={{ margin: 0, fontSize: "16px", color: "#666" }}
                        >
                          Best service & quality checking process will improve
                          performance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="single-content-feature">
                    <div
                      className="xb-item--inner color-3 ul_li"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      {/* Icon section */}
                      <div
                        className="xb-item--icon"
                        style={{
                          minWidth: "48px",
                          height: "48px",
                          backgroundColor: "#fff0e5",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src="assets/img/book.svg"
                          alt="icon"
                          style={{
                            width: "22px",
                            height: "22px",
                            objectFit: "contain",
                          }}
                        />
                      </div>

                      {/* Text section */}
                      <div className="xb-item--text" style={{ flex: 1 }}>
                        <h3
                          className="xb-item--title"
                          style={{
                            margin: 0,
                            marginBottom: "5px",
                            fontSize: "22px",
                            color: "#00204A",
                          }}
                        >
                          Expert Team At Work
                        </h3>
                        <p
                          style={{ margin: 0, fontSize: "16px", color: "#666" }}
                        >
                          Our experts can help you better with any minor car
                          errors.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*   */}

                  <div className="single-content-feature">
                    <div
                      className="xb-item--inner color-4  ul_li"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      {/* Icon section */}
                      <div
                        className="xb-item--icon"
                        style={{
                          minWidth: "48px",
                          height: "48px",
                          backgroundColor: "#fff0e5",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src="assets/img/book.svg"
                          alt="icon"
                          style={{
                            width: "22px",
                            height: "22px",
                            objectFit: "contain",
                          }}
                        />
                      </div>

                      {/* Text section */}
                      <div className="xb-item--text" style={{ flex: 1 }}>
                        <h3
                          className="xb-item--title"
                          style={{
                            margin: 0,
                            marginBottom: "5px",
                            fontSize: "22px",
                            color: "#00204A",
                          }}
                        >
                          Quality Cost Service
                        </h3>
                        <p
                          style={{ margin: 0, fontSize: "16px", color: "#666" }}
                        >
                          Best car services at reasonable rate compare to any
                          others.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- coaching single end --> */}

      <Footer />
    </>
  );
};

export default MechanicalService;
