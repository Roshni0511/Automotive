import React, { useEffect, useRef } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


import {  FaCheckCircle } from 'react-icons/fa';

import Discovermore from "./Discovermore";
import Carservices from "./Carservices";



const tagItems = [
  "Graphics", "Body Kit", "Perfume", "360 Parking Assist", "Custom Graphics", "Seat Cover",
  "Alloy Wheels", "LED Lights", "Steering Wheel Cover", "Body Cover", "Mats", "Sun Roof",
];

const Caraccessories = () => {
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
                    Car Accessories
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
                         Car Accessories
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}
            {/* <!-- coaching single start --> */}
            <section className="coaching-single " style={{ padding: "60px 0px" }}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="sidebar-widget">
                      <div className="widget">
                        <ul className="widget-category list-unstyled">
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
      marginBottom:'40px',
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
                  <div className="col-lg-8">
                    <div className="single-content">
                      <h5 className="text-primary mb-3">
                        // About Car Accessories //
                      </h5>
                      <h4>Upgrade Your Car Experience with the Right Accessories</h4>
                      <p>
                       Car accessories can play a major role in amping up the comfort of your car. The car accessories you select can really tie up the interiors of your luxury car. Depending on your preference, our skilled technicians can assemble your car with the most elegant accessories. We can provide high quality accessories that can upgrade your car experience.
                      </p>
      
                      <div className="single-img mt-35 mb-70 mt-4">
                        <img
                          src="/assets/img/servicess3.jpg"
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
  )
}

export default Caraccessories
