

import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import {  FaCheckCircle } from 'react-icons/fa';
import Discovermore from "./Discovermore";
import Carservices from "./Carservices";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { GiPaintBrush } from "react-icons/gi";
import { GiCarDoor } from "react-icons/gi";
import { MdFormatColorFill } from "react-icons/md";

import Company_logo from "./Company_logo";



const features = [
  { icon: <FaMoneyCheckAlt  style={{ fontSize: "35px",}} />, title: 'Cashless Facility', },
  { icon: <GiPaintBrush  style={{ fontSize: "35px", }} />, title: 'Paint Repair Job',  },
  { icon:<GiCarDoor  style={{ fontSize: "35px", }} />, title: 'Denting / Painting', },
  { icon: <MdFormatColorFill  style={{ fontSize: "35px",  }} />, title: 'Full Body Colour', },

];

const Bodyshopservice = () => {
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
              Body Shop Service
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
                Body Shop Service
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
                  // About Body Shop Service//
                </h5>
                <h4>Body Shop Expertise – From Dents to Perfection</h4>
                <p>
           The complete car body is inspected for dents and rust areas. All dents are removed of the panels, all panels are thoroughly primed and painted to bring back the factory finish of the car. Dust-free paint booths are used to paint the car panels, ensuring no dust particles ingress into the different coats of paint hence delivering unmatched quality.
                </p>

                <div className="single-img mt-35 mb-70 mt-4">
                  <img
                    src="/assets/img/servicess5.jpg"
                    alt=""
                    style={{ border: "1px solid #dee2e6", padding: "10px" ,maxWidth:'-webkit-fill-available'}}
                  />
                </div>



     {/* FEATURES SECTION */}
     
      <section className="outer-wrapperes  " >
        <div className="features-cardes">
          
            <h5 className="section-titless hover-underline animate-heading">Tyre Services We Provide:</h5>
          <div className="features-grides">
            {features.map((feature, idx) => (
              <div className="feature-item-stripees " key={idx}>
                <div className="icon-outliness ">{feature.icon}</div>
                <h4>{feature.title}</h4>
                
              </div>
            ))}
          </div>
        </div>
      </section>

          <h5 className="section-titless hover-underline animate-heading">We offer tyre from my brands, Here is few preferred brands:</h5>
<Company_logo />

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
}

export default Bodyshopservice
