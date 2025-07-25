import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import {  FaCheckCircle } from 'react-icons/fa';
import Discovermore from "./Discovermore";
import Carservices from "./Carservices";
import { GiSteeringWheel } from 'react-icons/gi';
import { MdInventory2, MdQrCodeScanner, MdShoppingBasket, MdLocationOn } from 'react-icons/md';
import { FaFileInvoiceDollar, FaCheckCircle } from 'react-icons/fa';
import { BsClipboardCheck, BsBarChart, BsCartPlus } from 'react-icons/bs';
import { RiGalleryLine, RiStore2Line } from 'react-icons/ri';
import { FaRegBuilding } from 'react-icons/fa6';

const tagItems = [
  "Auto Diagnostic Service", "ABS Service", "Mechatronic Service", "A/C Service", "Wiper Motor Service", "Wheel Bearing Service",
  "Break Service", "Alternator Service", "Engine Overhauling", "Periodic Maintenance Service (PMS)", "Auto Electrical Service", "Radiator Service", "Head Repair","Power Steering Service","ECM Coding","Clutch Service","Timing Service","Suspension Service","Throttle Body Service","Injection Service"
];


const features = [
  { icon: <GiSteeringWheel style={{ fontSize: "35px", color: "#D81324" }} />, title: 'Alloy Wheels', },
  { icon: <MdInventory2 />, title: 'Wheel Alignment',  },
  { icon: <FaFileInvoiceDollar />, title: 'Wheel Balancing', },
  { icon: <MdShoppingBasket />, title: 'Alloy Wheels Thru', },
  { icon: <MdQrCodeScanner />, title: 'Passenger Car Tyre',  },
  { icon: <BsClipboardCheck />, title: '2 Wheeler Tyre', },

];

const Tyreservice = () => {
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
                      <a href="">
                        Mechanical Service
                        <span>
                          <img src="assets/img/arrow_up.svg" alt="" />
                        </span>
                      </a>
                    </li>
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
                  // About Tyre Service //
                </h5>
                <h4>Drive Safe with Our Professional Tyre Services</h4>
                <p>
                An unbalanced wheel causes poor handling & effects your car's life too. Tyre services will make your ride smoother and handling safer, also extends the life of your tyres, saving you time and money in the long run. To protect your tires and get maximum performance delivery from your car's tyres. Visit a Automotive service station for wheel alignment.
                </p>

                <div class="single-img mt-35 mb-70 mt-4">
                  <img
                    src="https://automotivesurat.com/assets/img/service/automotive-tyre-services.jpg"
                    alt=""
                    style={{ border: "1px solid #dee2e6", padding: "10px" ,maxWidth:'-webkit-fill-available'}}
                  />
                </div>



     {/* FEATURES SECTION */}
      <section className="outer-wrapper">
        <div className="features-card">
          <h2 className="section-title hover-underline animate-heading">Features</h2>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div className="feature-item-stripe" key={idx}>
                <div className="icon-outline">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.text}</p>
              </div>
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
}

export default Tyreservice
