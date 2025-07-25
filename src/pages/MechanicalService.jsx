import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import {  FaCheckCircle } from 'react-icons/fa';

import Discovermore from "./Discovermore";
import Carservices from "./Carservices";



const tagItems = [
  "Auto Diagnostic Service", "ABS Service", "Mechatronic Service", "A/C Service", "Wiper Motor Service", "Wheel Bearing Service",
  "Break Service", "Alternator Service", "Engine Overhauling", "Periodic Maintenance Service (PMS)", "Auto Electrical Service", "Radiator Service", "Head Repair","Power Steering Service","ECM Coding","Clutch Service","Timing Service","Suspension Service","Throttle Body Service","Injection Service"
];


const MechanicalService = () => {
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
                      <a href="/Insurancerenewal">
                        Insurance Renewal{" "}
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
  style={{
    backgroundImage: "url('/assets/img/BACK.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: ' 37px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  
  }}
>
  <img className="mb-40" src="/assets/img/logo-white.png" alt="" />
  
  <h4 style={{ paddingBottom: '20px', paddingTop: '20px', color: '#fff' }}>
    Need Help? We Are Here To Help You
  </h4>

  <a
    className="thm-btn"
    href="/Contact"
    style={{ padding: '10px 20px', background: '#D81324', color: '#fff', textDecoration: 'none', borderRadius: '4px' }}
  >
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
                    src="/assets/img/servicess1.jpg"
                    alt=""
                    style={{ border: "1px solid #dee2e6", padding: "10px" ,maxWidth:'-webkit-fill-available'}}
                  />
                </div>



                 {/* HERO SECTION */}
      <section className="hero-sectionss">
        <div className="hero-leftes">
        
<h3 className="section-titless hover-underline animate-heading">Mechanical Services We Provide:  </h3>
         

          <div className="hero-featuresss" ref={sliderRef}>
            {tagItems.map((tag, index) => (
              
              <span
                className="animated-tages hover-glow"
                style={{ animationDelay:`${index * 0.2}s`}} key={index} >
                <FaCheckCircle /> {tag}
              </span>
            ))}
          </div>
        </div>

      
      </section>

           <Carservices />
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

export default MechanicalService;
