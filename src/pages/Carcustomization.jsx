
import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Discovermore from "./Discovermore";
import Carservices from "./Carservices";
import { GiCarDoor } from "react-icons/gi";
import { GiPaintBrush } from "react-icons/gi";
import { GiAutoRepair } from "react-icons/gi";
import { GiCarWheel } from "react-icons/gi";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { RiBrushLine } from "react-icons/ri";
import Company_logo from "./Company_logo";



const features = [
  { icon: <GiPaintBrush  style={{ fontSize: "35px",}} />, title: 'Custom Body Paint ', },
  { icon: <GiAutoRepair style={{ fontSize: "35px", }} />, title: 'Full Car Repairing',  },
  { icon:<GiCarWheel style={{ fontSize: "35px", }} />, title: 'Alloy Wheels', },
  { icon: <MdOutlinePrecisionManufacturing style={{ fontSize: "35px",  }} />, title: 'Customize Interior', },
  { icon: <GiCarDoor  style={{ fontSize: "35px", }} />, title: 'Customize Exterior',  },
  { icon: <RiBrushLine    style={{ fontSize: "35px", }} />, title: 'Customize Roof Work', },

];

const Carcustomization = () => {
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
              Car Customization
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
                  Car Customization
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
                      <a href="/Insurancerenewal">
                        Insurance Renewal{" "}
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
                  // About Car Customization //
                </h5>
                <h4>Personalized Car Mods for a Signature Look</h4>
                <p>
                Automotive is the best-in-class automobile personalization, designing and custom remoulding company. We expertise in vehicle customization for personal choice, businesses & automobile enthusiasts. With our highly experienced team of experts, we build and innovate vehicles of superior design, backed with cutting-edge technology.
                </p>

                <div class="single-img mt-35 mb-70 mt-4">
                  <img
                    src="/assets/img/servicess7.jpg"
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

export default Carcustomization
