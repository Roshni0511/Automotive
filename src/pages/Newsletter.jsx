import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {
  FaTags,            // Discounts
  FaCalendarCheck,   // Reminders
  FaRocket,          // Early Access
  FaTools,           // Car Care Tips
  FaBell             // Notifications / New Services
} from "react-icons/fa";
const features = [
  {
    icon: <FaTags style={{ fontSize: "35px", color: "#d81324" }} />,
    title: "Exclusive Discounts on Car Services",
  },
  {
    icon: <FaCalendarCheck style={{ fontSize: "35px", color: "#d81324" }} />,
    title: "Maintenance Reminders",
  },
  {
    icon: <FaRocket style={{ fontSize: "35px", color: "#d81324" }} />,
    title: "Early Access to New Offers",
  },
  {
    icon: <FaTools style={{ fontSize: "35px", color: "#d81324" }} />,
    title: "Car Care Tips & Guides",
  },
  {
    icon: <FaBell style={{ fontSize: "35px", color: "#d81324" }} />,
    title: "Be the First to Know About New Services",
  },
];
export default function Newsletter() {
  return (
    <div>
      <Navbar />
  {/* <!-- Page Header Start --> */}
      <div
        className="container-fluid page-header mb-5 p-0"
        style={{ backgroundImage: "url(assets/img/carousel-bg-2.jpg)" }}
      >
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              News letter
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
                  News letter
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

 <div className="newsletter-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
             <div className="wow zoomIn" data-wow-delay="0.6s" style={{textAlign:'center'}}>
      <h5 className="text-primary mb-3">// Subscribe to Our Newsletter //</h5>
      <h4>Get the latest car care tips, exclusive service offers, and updates
            from Automotive.</h4>
      </div>
         
        </div>
       
      </section>

  

      {/* Subscription Form */}
      <section className="form-section pt-5 pb-5  wow fadeInUp" data-wow-delay="0.1s" style={{background:'#f6f8fc'}}>
  <div className="container">
     <div className="row">
       <div className="col-md-6">
          <h2>Join Our Newsletter</h2>
        <form className="newsletter-form">
         <div className="row">
             <div className="col-md-6 mb-1">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="col-md-6 mb-1">
            <input type="email" placeholder="Email Address" required />
          </div>
         </div>
          {/* <button >Subscribe Now</button> */}
          <div>
             <a className="dedcription-btn m-0" href="#" type="submit">
                <span className="name-descripeion">Subscribe Now</span>
                <div className="btn-icon heart">
                  <i className="fas fa-car"></i>
                </div>
              </a>
          </div>
        </form>
        <p className="privacy-note">
          We respect your privacy. Read our <a href="/Privacy_Policy">Privacy Policy</a>.
        </p>
      </div>

         <div className="col-md-6 hero-image">
          <img src="/assets/img/abc.png" alt="Car Newsletter" />
        </div>
   </div>
  </div>
      </section>

  <section className="outer-wrapperes wow fadeInUp" data-wow-delay="0.1s">
        <div className="features-cardes">
          
            <h5 className="section-titless hover-underline animate-heading">Why Subscribe?</h5>
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
 

    </div>
      <Footer />
    </div>
  )
}
