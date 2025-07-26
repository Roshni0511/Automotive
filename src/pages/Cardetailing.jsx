import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import {  FaCheckCircle } from 'react-icons/fa';
import Discovermore from "./Discovermore";
import Carservices from "./Carservices";
import { GiAutoRepair } from "react-icons/gi";
import { FaSprayCan } from "react-icons/fa";
import { GiCarSeat } from "react-icons/gi";
import { GiVacuumCleaner } from "react-icons/gi";
import { FaBuffer } from "react-icons/fa6";
import { GiShieldReflect } from "react-icons/gi";
import { HiOutlineColorSwatch } from "react-icons/hi";
import Company_logo from "./Company_logo";


const features = [
  { icon: <FaSprayCan    style={{ fontSize: "35px",}} />, title: 'Paint Correction Treatment', },
  { icon: <GiAutoRepair style={{ fontSize: "35px", }} />, title: 'Alloy Wheel Cleaning',  },
  { icon:<GiCarSeat  style={{ fontSize: "35px", }} />, title: 'Interior Beautification', },
  { icon: <GiVacuumCleaner  style={{ fontSize: "35px",  }} />, title: 'Interior Cleaning', },
  { icon: <FaBuffer  style={{ fontSize: "35px", }} />, title: 'Car Polishing',  },
  { icon: <GiShieldReflect  style={{ fontSize: "35px", }} />, title: 'Ceramic Coating', },
 { icon: <HiOutlineColorSwatch   style={{ fontSize: "35px", }} />, title: 'Car Rapping', },
];

const Cardetailing = () => {
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
            Car Detailing
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
                 Car Detailing
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
            <div class="col-lg-8">
              <div class="single-content">
                <h5 className="text-primary mb-3">
                  // About Car Detailing //
                </h5>
                <h4>Professional Car Detailing That Speaks Quality</h4>
                <p>
               At Automotive, we are determined in getting the car to look like, ‘what you thought was Good’ to ‘Is this really my Car?’ We do not compromise on quality and offer our professional opinion to what the customer should get. Just drop off your car at our outlet and wait for our trained technicians to perform the Magic. Our trained staff takes care of every tiny detail and does away with all the minute scars to give that stunning look to your vehicle.
                </p>

                <div class="single-img mt-35 mb-70 mt-4">
                  <img
                    src="/assets/img/servicess4.jpg"
                    alt=""
                    style={{ border: "1px solid #dee2e6", padding: "10px" ,maxWidth:'-webkit-fill-available'}}
                  />
                </div>



     {/* FEATURES SECTION */}
     
      <section className="outer-wrapperes  " >
        <div className="features-cardes">
          
            <h5 className="section-titless hover-underline animate-heading">Car Detailing Services We Provide:</h5>
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

export default Cardetailing
