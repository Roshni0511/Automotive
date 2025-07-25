
import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import {  FaCheckCircle } from 'react-icons/fa';

import Discovermore from "./Discovermore";
import Carservices from "./Carservices";





const Insurancerenewal = () => {
    const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({
          left: 100,
          behavior: 'smooth'
        });

        if (
          sliderRef.current.scrollLeft + sliderRef.current.clientWidth >=
          sliderRef.current.scrollWidth - 5
        ) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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
              Insurance Renewal

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
                 Insurance Renewal

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
                      <a href="/MechanicalService">
                        Mechanical Service
                        <span>
                          <img src="assets/img/arrow_up.svg" alt="" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/Tyreservice">
                        Tyre Service
                        <span>
                          <img src="assets/img/arrow_up.svg" alt="" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/Caraccessories">
                        Car Accessories
                        <span>
                          <img src="assets/img/arrow_up.svg" alt="" />
                        </span>
                      </a>
                    </li>
                         <li>
                      <a href="/Cardetailing">
                        Car Detailing{" "}
                        <span>
                          <img src="assets/img/arrow_up.svg" alt="" />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/Bodyshopservice">
                        Body Shop Service
                        <span>
                          <img src="assets/img/arrow_up.svg" alt="" />
                        </span>
                      </a>
                    </li>
                   
                 
                    <li>
                      <a href="/Carcustomization">
                        Car Customize{" "}
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
                  // About Insurance Renewal //
                </h5>
                <h4>Protect Your Drive – Fast Insurance Renewal Solutions</h4>
                <p>
              You can buy or renew car insurance policy with your home comfort in few easy steps. With Automotive, you will get a comprehensive coverage that not only covers your car against the mandatory third party liability, but also against the losses caused to your car due to fire, theft, explosion, burglary, riots, strikes, earthquakes, flood, cyclones, accidents, malicious acts & terrorist activities. Besides above, having car Insurance, you can avail the enhanced protections through unique car insurance add on covers.
                </p>

                <div class="single-img mt-35 mb-70 mt-4">
                  <img
                    src="	https://automotivesurat.com/assets/img/service/automotive-mechanical-services.jpg"
                    alt=""
                    style={{ border: "1px solid #dee2e6", padding: "10px" ,maxWidth:'-webkit-fill-available'}}
                  />
                </div>



          

         
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- coaching single end --> */}

<Discovermore />
     

      <Footer />
    </>
  );
};

export default Insurancerenewal;
