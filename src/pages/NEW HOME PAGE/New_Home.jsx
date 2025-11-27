import React, { useRef, useState, useEffect } from 'react'
import counterUp from 'counterup2';
import './CSS/new_home.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Counter from "../Counter";
import WorkProcessTimeline from './Our Work Process/Ourwork';




const NewHome = () => {

const [hoveredIndex, setHoveredIndex] = useState(null);

     const blogData = [
  {
    img: "/assets/img/gallery-19.jpg",
    alt: "Engine Diagnostics",
    title: "Understanding Engine Diagnostic Tools",
    folder: "Mechanical",
    comments: 14,
    desc: "Explore how modern diagnostic tools help detect issues early, improve vehicle performance, and reduce repair costs.",
  },
  {
    img: "/assets/img/gallery-3.jpg",
    alt: "Paint & Body Repair",
    title: "Top 5 Body Repair Mistakes to Avoid",
    folder: "Body Shop",
    comments: 9,
    desc: "From mismatched paint to improper dent repairs, learn the common mistakes in bodywork and how professionals fix them.",
  },
  {
    img: "/assets/img/gallery-6.jpg",
    alt: "Tyre Maintenance",
    title: "How to Choose the Right Tyres",
    folder: "Tyre Service",
    comments: 11,
    desc: "Choosing the correct tyres ensures better grip, mileage, and safety. Here’s a complete guide based on your car type.",
  },
 
];
  useEffect(() => {
          // wait for DOM to fully render
          const interval = setInterval(() => {
            if (window.$ && window.$(".testimonial-carousel").length > 0) {
              window.$(".testimonial-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                center: true,
                margin: 25,
                dots: true,
                loop: true,
                nav: false,
                responsive: {
                  0: { items: 1 },
                  768: { items: 2 },
                  992: { items: 3 },
                },
              });
              clearInterval(interval); // stop checking
            }
          }, 300);
        }, []);
    useEffect(() => {
        const counters = document.querySelectorAll('[data-toggle="counter-up"]');
        counters.forEach((el) => {
          counterUp(el, {
            duration: 4000,
            delay: 10,
          });
        });
      },[])

  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerRef = useRef(null);
   const data = [
  {
    title: "Work Experience",
    counter1: "20+",
    icon: "fa fa-check",
    desc: `With over 20 years of combined work experience, our team brings expertise and professionalism to every project, ensuring high-quality results for every client.`,
  },
  {
    title: "Tons Of Customers",
    counter1: "990+",
    icon: "fa fa-users",
    desc: `Trusted by a wide range of customers, we have a proven track record of delivering exceptional service and building long-term relationships with clients.`,
  },
  {
    title: "Modern Equipments",
    counter1: "100+",
    icon: "fa fa-tools",
    desc: `Equipped with modern tools and advanced technology, we deliver efficient, accurate, and high-quality service for every task.`,
  },
  {
    title: "Vehicle Service Per Month",
    counter1: "500+",
    icon: "fa fa-car-side",
    desc: `We perform over 500 vehicle services every month, ensuring timely maintenance and repairs to keep our clients’ vehicles running smoothly and safely.`,
  },
];
// FORM STATES
const [form, setForm] = useState({
  name: "",
  email: "",
  service: "",
  date: "",
  message: "",
});

const [errors, setErrors] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false);
const [showModal, setShowModal] = useState(false);

// VALIDATION FUNCTION
const validateForm = () => {
  let newErrors = {};

  if (!form.name.trim()) newErrors.name = "Name is required";
  if (!form.email.trim()) newErrors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(form.email))
    newErrors.email = "Enter a valid email";

  if (!form.service.trim()) newErrors.service = "Please select a service";
  if (!form.date.trim()) newErrors.date = "Please choose a date";

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

// FORM SUBMIT HANDLER
const handleSubmit = (e) => {
  e.preventDefault();

  if (!validateForm()) return; // stop submit on errors

  setIsSubmitting(true);

  setTimeout(() => {
    setIsSubmitting(false);
    setShowModal(true);

    // Reset form after success
    setForm({
      name: "",
      email: "",
      service: "",
      date: "",
      message: "",
    });
  }, 1200);
};


  return (
    <>
      <Navbar/>

     {/* <div className="container-fluid p-0 mb-5">
  <div
    id="header-carousel"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">

     
      <div className="carousel-item active position-relative">
        <img className="w-100" src="/assets/img/slider-6-1.jpg" alt="Slide 1" />
      
        <div className="overlay"></div>

        <div className="carousel-caption d-flex align-items-center h-100">
          <div className="container">
            <div className="row align-items-center justify-content-center justify-content-lg-start">

           
              <div className="col-10 col-lg-7 text-center text-lg-start">
                <h6 className="text-white text-uppercase mb-2 mb-md-3 animated fadeInDown carousel-subtitle" style={{animationDelay:'0.2s', fontSize:'0.9rem'}}>
                  // Looking for Reliable Service //
                </h6>
                <h1 className="display-5 display-md-4 display-lg-3 text-white mb-2 pb-2 animated fadeInUp" style={{animationDelay:'0.4s'}}>
                  Get Amazing Car Service
                </h1>
                <h1 className="display-5 display-md-4 display-lg-3 text-white mb-3 pb-2 animated fadeInUp" style={{animationDelay:'0.6s'}}>
                  From Us
                </h1>

              
                <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start mt-3">
                  <a href="/About" className="btn btn-gradient">
                    About Us <i className="fa fa-arrow-right ms-2"></i>
                  </a>
                 <a href="/Gallery" className="btn btn-gradient">
    Work Gallery <i className="fa fa-arrow-right ms-2"></i>
  </a>
                </div>
              </div>

             
              <div className="col-lg-5 d-none d-lg-flex justify-content-center animated zoomIn">
                <img className="img-fluid shadow-lg rounded" src="assets/img/carousel-1.png" alt="Car" style={{transform:'rotate(-3deg)'}} />
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="carousel-item position-relative">
        <img className="w-100" src="/assets/img/slider-4-1.jpg" alt="Slide 2" />
        <div className="overlay"></div>
        <div className="carousel-caption d-flex align-items-center h-100">
          <div className="container">
            <div className="row align-items-center justify-content-center justify-content-lg-start">
              
              <div className="col-10 col-lg-7 text-center text-lg-start">
                <h6 className="text-white text-uppercase mb-2 mb-md-3 animated fadeInDown carousel-subtitle" style={{animationDelay:'0.2s', fontSize:'0.9rem'}}>
                  // We Care Extra //
                </h6>
                <h1 className="display-5 display-md-4 display-lg-3 text-white mb-2 pb-2 animated fadeInUp" style={{animationDelay:'0.4s'}}>
                  Modern Car Repair
                </h1>
                <h1 className="display-5 display-md-4 display-lg-3 text-white mb-3 pb-2 animated fadeInUp" style={{animationDelay:'0.6s'}}>
                  Expert Service
                </h1>

                <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start mt-3">
                  <a href="/About" className="btn btn-gradient">
                    About Us <i className="fa fa-arrow-right ms-2"></i>
                  </a>
                    <a href="/Services" className="btn btn-gradient">
    Our Services <i className="fa fa-arrow-right ms-2"></i>
  </a>
                </div>
              </div>

              <div className="col-lg-5 d-none d-lg-flex justify-content-center animated zoomIn">
                <img className="img-fluid shadow-lg rounded" src="assets/img/carousel-2.png" alt="Car" style={{transform:'rotate(3deg)'}} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  
    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div> */}

<script src="https://www.google.com/recaptcha/api.js" async defer></script>


{/* HERO SECTION STARTS */}

<section className="tele-hero wow animate__animated animate__fadeInUp">

  {/* Background Elements */}
  <div className="tele-bg-elements">
    <div className="tele-grid-lines"></div>
    <div className="tele-pulse-dot tele-dot-1"></div>
    <div className="tele-pulse-dot tele-dot-2"></div>
    <div className="tele-pulse-dot tele-dot-3"></div>
    <div className="tele-floating-circle tele-circle-1"></div>
    <div className="tele-floating-circle tele-circle-2"></div>
  </div>

  <div className="tele-container tele-grid-3"> 
    {/* ================= LEFT CONTENT ================= */}
    <div className="tele-content">
      {/* <div className="tele-badge">
        <i className="fas fa-star"></i>
        <span>Car Workshop</span>
      </div> */}

      <h1 className="tele-title">
        <span className="tele-title-main" style={{color:'white'}}>Your Trusted Car Service Center</span>
        <span className="tele-title-highlight">
          Your car is in safe hands—from inspection to delivery.
        </span>
      </h1>

      <div className="tele-desc">
        <p>
          Get reliable maintenance, genuine parts, and expert technicians—all under one roof.
        </p>
      </div>
    </div>

    {/* ================= CENTER IMAGE ================= */}
    <div className="tele-visual">
      <div className="tele-dashboard">
        <img
          src="assets/img/New-Car.png"
          alt="Car Workshop"
          className="tele-dashboard-image"
          style={{ width: "100%", borderRadius: "12px" }}
        />
      </div>
    </div>

    {/* ================= RIGHT FORM ================= */}
    <div className="tele-form">
      <div
        className="bg-white p-4 rounded-4 shadow-lg border"
        style={{ maxWidth: "100%", transition: "0.3s", borderRadius:'16px' }}
      >
        <h3 className="text-center fw-bold mb-3" style={{ color: "#0b2154" }}>
          Book Your Service
        </h3>

        <form onSubmit={handleSubmit} noValidate>
          <div className="row g-3">

            {/* Name */}
            <div className="col-12">
              <input
                type="text"
                className={`form-control form-control-lg rounded-pill shadow-sm ${errors.name ? "is-invalid" : ""}`}
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {errors.name && <small className="text-danger">{errors.name}</small>}
            </div>

            {/* Email */}
            <div className="col-12">
              <input
                type="email"
                className={`form-control form-control-lg rounded-pill shadow-sm ${errors.email ? "is-invalid" : ""}`}
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              {errors.email && <small className="text-danger">{errors.email}</small>}
            </div>

            {/* Service */}
            <div className="col-12">
              <select
                className={`form-select form-select-lg rounded-pill shadow-sm ${errors.service ? "is-invalid" : ""}`}
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
              >
                <option value="">Select Service</option>
                <option value="Mechanical Service">Mechanical Service</option>
                <option value="Body Shop Service">Body Shop Service</option>
                <option value="Tyre Service">Tyre Service</option>
                <option value="Insurance Renewal">Insurance Renewal</option>
                <option value="Car Accessories">Car Accessories</option>
                <option value="Car Customization">Car Customization</option>
                <option value="Car Detailing">Car Detailing</option>
              </select>
              {errors.service && <small className="text-danger">{errors.service}</small>}
            </div>

            {/* Date */}
            <div className="col-12">
              <input
                type="date"
                className={`form-control form-control-lg rounded-pill shadow-sm ${errors.date ? "is-invalid" : ""}`}
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
              {errors.date && <small className="text-danger">{errors.date}</small>}
            </div>

            {/* Special Requests */}
            <div className="col-12">
              <textarea
                className="form-control rounded-3 shadow-sm"
                placeholder="Special Requests"
                rows="3"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              ></textarea>
            </div>

            {/* reCAPTCHA */}
            <div className="col-12 text-center">
              <div
                className="g-recaptcha"
                data-sitekey="6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR"
                style={{ transform: "scale(0.85)"}}
              ></div>
            </div>

            {/* Button */}
            <div className="col-12 d-flex justify-content-center">
  <button
    className="py-2 px-4 rounded-pill fw-bold shadow-sm book-btn"
    type="submit"
    disabled={isSubmitting}
  >
    {isSubmitting ? "Submitting..." : "Book Now"}
  </button>
</div>


          </div>
        </form>

      </div>
    </div>
  </div>
</section>

{/* HERO SECTION ENDS */}






{/* ABOUT US SECTION STARTS */}

<section style={{ 
    paddingBottom: '70px', 
    paddingTop: '50px', 
    background: '#F8F9FA' 
  }}>
   <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 pt-4" style={{ minHeight: "400px" }}>
                <div
                  className="position-relative h-100 wow fadeIn"
                  data-wow-delay="0.1s"
                >
                  <img
                    className="position-absolute img-fluid w-100 h-100"
                    src="assets/img/About1.jpg"
                    style={{ objectFit: "cover", borderRadius:'16px' }}
                    alt=""
                  />
                  <div
                    className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5"
                    style={{ background: "rgba(0, 0, 0, .08)", borderRadius:'16px' }}
                  >
                    <h1 className="display-4 text-white mb-0">
                      20<span className="fs-4">Years</span>
                    </h1>
                    <h4 className="text-white">Experience</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h6 className="text-primary text-uppercase">// About Us //</h6>
                <h1 className="mb-4">
                  <span className="text-primary">Automotive</span> We are
                  qualified & of experience in this field
                </h1>
                <p className="mb-4">
                  We offer a wide range of car repair services for all popular
                  makes and models, including manufacturer logbook servicing.
                  With Automotive, you can count on honest, reliable, and fully
                  trained mechanics who are qualified to keep your vehicle in
                  top condition.
                </p>
                <div className="row g-4 mb-3 pb-3">
                  <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                    <div className="d-flex">
                      <div
                        className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                        style={{ 
    width: "45px", 
    height: "45px", 
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)", 
    borderRadius: "8px" 
  }}
                      >
                        <span className="fw-bold text-secondary">01</span>
                      </div>
                      <div className="ps-3">
                        <h6>Professional Car Services</h6>
                        <span>
                          Certified experts for reliable car care and repairs.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                    <div className="d-flex">
                      <div
                        className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                       style={{ 
    width: "45px", 
    height: "45px", 
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)", 
    borderRadius: "8px" 
  }}
                      >
                        <span className="fw-bold text-secondary">02</span>
                      </div>
                      <div className="ps-3">
                        <h6>24/7 Call Services Avilable</h6>
                        <span>
                          Support anytime for service, emergencies, or
                          inquiries.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                    <div className="d-flex">
                      <div
                        className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                        style={{ 
    width: "45px", 
    height: "45px", 
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)", 
    borderRadius: "8px" 
  }}
                      >
                        <span className="fw-bold text-secondary">03</span>
                      </div>
                      <div className="ps-3">
                        <h6>Unlimited Free Car Checkup</h6>
                        <span>
                          Regular inspections free to keep cars running
                          smoothly.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                    <div className="d-flex">
                      <div
                        className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                        style={{ 
    width: "45px", 
    height: "45px", 
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)", 
    borderRadius: "8px" 
  }}
                      >
                        <span className="fw-bold text-secondary">04</span>
                      </div>
                      <div className="ps-3">
                        <h6>Great Skilled Technician</h6>
                        <span>
                          Experienced technicians ensuring quality work every
                          time.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <a href="/About" className="btn btn-primary py-3 px-5">
                  Read More<i className="fa fa-arrow-right ms-3"></i>
                </a> */}
                 <a href="/About">
  <button
    style={{
      backgroundColor: '#d81324',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.2s ease',
      whiteSpace: 'nowrap',
      position: 'relative',
      padding: '10px 20px',
      fontSize: '16px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      overflow: 'hidden',
      borderRadius:'30px'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = '#a10f1a';
      e.currentTarget.style.color = '#ffd6d6';
      e.currentTarget.style.transform = 'translateY(-2px)';
      const shine = e.currentTarget.querySelector('.about-btn-shine');
      if (shine) shine.style.left = '125%';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = '#d81324';
      e.currentTarget.style.color = 'white';
      e.currentTarget.style.transform = 'translateY(0)';
      const shine = e.currentTarget.querySelector('.about-btn-shine');
      if (shine) shine.style.left = '-75%';
    }}
  >
    <span>Read More</span>
    <i className="fas fa-car"></i>
    <div
      className="about-btn-shine"
      style={{
        position: 'absolute',
        top: 0,
        left: '-75%',
        width: '50%',
        height: '100%',
        background: 'rgba(255, 255, 255, 0.3)',
        transform: 'skewX(-25deg)',
        transition: 'left 0.5s ease',
        borderRadius:'16px'
      }}
    ></div>
  </button>
</a>

              </div>
            </div>
          </div>
        </div>
  </section>

{/* ABOUT US SECTION ENDS */}












{/* FACT SECTION STARTS */}
<section
  style={{
    /* Base Section Style - Light Theme */
    background: '#f8f9fa',
    padding: '60px 0',
    fontFamily: 'Roboto, Montserrat, Arial, sans-serif',
    color: '#212529',
    position: 'relative',
    overflow: 'hidden',
  }}
>
  {/* Background Pattern */}
  <div
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url(assets/img/Repair-tools.jpg)',
    backgroundRepeat: 'repeat',
    opacity: 0.05,
    zIndex: 0,
  }}
></div>


  {/* Subtle Background Shape */}
  <div
    style={{
      position: 'absolute',
      bottom: '-10%',
      left: '-10%',
      width: '300px',
      height: '300px',
      background: 'rgba(216, 19, 36, 0.05)',
      borderRadius: '50%',
      filter: 'blur(100px)',
      zIndex: 0,
    }}
  ></div>

  <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 15px', position: 'relative', zIndex: 1 }}>

    {/* Header Section */}
    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
      <h6 style={{
        fontWeight: '700',
        color: '#d81324',
        marginBottom: '5px',
        letterSpacing: '3px',
        fontSize: '0.8rem',
        textTransform: 'uppercase',
      }}>
        // OUR IMPACT //
      </h6>

      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: '900',
        lineHeight: '1.2',
        color: '#212529',
        marginBottom: '10px',
        textShadow: '1px 1px 3px rgba(0,0,0,0.05)',
      }}>
        <span style={{ color: '#d81324' }}>Precision</span>
        <span style={{ color: '#212529' }}> in Numbers</span>
      </h1>

      <p style={{
        maxWidth: '700px',
        margin: '0 auto',
        color: '#6c757d',
        fontSize: '1rem',
        lineHeight: '1.5',
      }}>
        Our milestones reflect dedication, high-quality service, and expertise in automotive care.
      </p>
    </div>

    {/* Content Row */}
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '30px',
      alignItems: 'center',
    }}>

      {/* Left Image */}
      <div style={{
        flex: '1 1 350px',
        maxWidth: '400px',
        textAlign: 'center',
      }}>
        <img
          src="assets/img/Our-Numbers.jpg"
          alt="Modern Car Workshop Bay"
          style={{
            width: '100%',
            height: 'auto',
            minHeight: '300px',
            borderRadius: '12px',
            objectFit: 'cover',
            boxShadow: '0 12px 25px rgba(0, 0, 0, 0.12)',
            transition: 'transform 0.3s ease',
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>

      {/* Right Counter Grid */}
      <div style={{
        flex: '1 1 450px',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        maxWidth: '600px',
        padding: '10px 0',
      }}>
        {
          [
            { icon: 'fa-gauge-high', counter: '20+', title: 'Years of Expertise', desc: 'Two decades of combined expertise and professionalism.' },
            { icon: 'fa-users', counter: '990+', title: 'Satisfied Clients', desc: 'Trusted by a wide range of clients for exceptional service.' },
            { icon: 'fa-toolbox', counter: '100+', title: 'Modern Equipment', desc: 'Equipped with advanced tools for efficient, accurate service.' },
            { icon: 'fa-car-side', counter: '500+', title: 'Services/Month', desc: 'Timely maintenance and repairs keeping vehicles safe and smooth.' },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: '#ffffff',
                padding: '20px 15px',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                borderLeft: '4px solid #d81324',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.12)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)';
              }}
            >
              <i style={{
                fontSize: '1.5rem',
                color: '#ffffff',
                background: '#d81324',
                padding: '12px',
                borderRadius: '50%',
                marginBottom: '10px',
                transition: 'transform 0.3s ease',
              }} className={`fa-solid ${item.icon}`}></i>

              <div>
                <h2 style={{
                  margin: 0,
                  fontSize: '2.5rem',
                  color: '#d81324',
                  fontWeight: '900',
                  lineHeight: '1',
                  marginBottom: '5px',
                }}>{item.counter}</h2>

                <h3 style={{
                  margin: '0 0 5px 0',
                  fontSize: '0.95rem',
                  color: '#212529',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>{item.title}</h3>
              </div>

              <p style={{
                margin: 0,
                color: '#6c757d',
                fontSize: '0.8rem',
                lineHeight: '1.45'
              }}>{item.desc}</p>
            </div>
          ))
        }
      </div>

    </div>
  </div>
</section>

{/* FACT SECTION ENDS */}













{/* WHY CHOOSE SECTION STARTS */}

{/* <section class="advantages-section" style={{background:'white'}}>
  <div class="container">
    <p class="section-subtitle">// Why Choose Us //</p>

     <h1
  className="our-numbers-title wow animate__animated animate__fadeInUp"
  style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}
>
  <div style={{ color: '#0b2154' }}>What Advantages Will You Get</div>
  <div style={{ color: '#43c6ac' }}>When Your Car Visits Our Workshop.</div>
</h1>


    <div class="advantages-content" style={{paddingBottom:'60px'}}>
      <div class="advantages-left">
        <div class="advantage-item">
          <div class="advantage-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="advantage-text">
            <p class="advantage-title">Trusted and Quality Repair Service.</p>
            <p>A full range of Reliable and High-quality repairs and maintenance services under one roof!</p>
          </div>
        </div>
        <div class="advantage-item">
          <div class="advantage-icon">
            <i class="fas fa-car-side"></i>
          </div>
          <div class="advantage-text">
            <p class="advantage-title">Free Pick-up and Drop Facility.</p>
            <p>Convenient and Hassle-Free Car Pick-up & Drop Facilities for FREE!</p>
          </div>
        </div>
        <div class="advantage-item">
          <div class="advantage-icon">
            <i class="fas fa-user-tie"></i>
          </div>
          <div class="advantage-text">
            <p class="advantage-title">Personalized Services.</p>
            <p>Top-notch services that are customized and tailor-made just for you!</p>
          </div>
        </div>
      </div>

      <div class="advantages-center">
        <img
          src="/assets/img/workshop-equipments.png"
          alt="Workshop Equipment"
        />
      </div>

      <div class="advantages-right">
        <div class="advantage-item">
          <div class="advantage-icon">
            <i class="fas fa-tools"></i>
          </div>
          <div class="advantage-text">
            <p class="advantage-title">Genuine Spare Parts.</p>
            <p>100% Genuine and High-Grade OEM/OES Spare Parts for your car!</p>
          </div>
        </div>
        <div class="advantage-item">
          <div class="advantage-icon">
            <i class="fas fa-users"></i>
          </div>
          <div class="advantage-text">
            <p class="advantage-title">Dedicated Team of Experts.</p>
            <p>Experienced Professionals who are always committed to delivering their Best!</p>
          </div>
        </div>
        <div class="advantage-item">
          <div class="advantage-icon">
            <i class="fas fa-wallet"></i>
          </div>
          <div class="advantage-text">
            <p class="advantage-title">Budget-Friendly Pricing.</p>
            <p>Enjoy Complete Value for your money with plans that suit every pocket!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

<section
  className="advantages-section position-relative d-flex align-items-center justify-content-center"
  style={{
    background: '#f8f9fa',
    padding: '80px 20px',
    overflow: 'hidden',
    fontFamily: 'Roboto, Montserrat, Arial, sans-serif',
    minHeight: '100vh', // centers content vertically
  }}
>
  {/* Subtle diagonal stripes background */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage:
        'repeating-linear-gradient(45deg, rgba(67,198,172,0.03), rgba(67,198,172,0.03) 1px, transparent 1px, transparent 20px)',
      zIndex: 0,
    }}
  ></div>

  <div
    className="container position-relative d-flex flex-column align-items-center"
    style={{ zIndex: 1, maxWidth: '1200px', textAlign: 'center' }}
  >
    <p
      style={{
        fontWeight: 700,
        color: '#d81324',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        fontSize: '0.85rem',
        marginBottom: '20px',
      }}
    >
      // Why Choose Us //
    </p>

    <h1
      className="our-numbers-title mb-5"
      style={{ lineHeight: 1.3 }}
    >
      <div style={{ color: '#232336', fontSize: '2rem' }}>
        What Advantages Will You Get
      </div>
      <div style={{ color: '#43c6ac', fontSize: '2rem' }}>
        When Your Car Visits Our Workshop.
      </div>
    </h1>

    <div
      className="advantages-content d-flex flex-wrap justify-content-center align-items-start gap-4"
      style={{ width: '100%' }}
    >
      {/* Left Column */}
      <div className="advantages-left d-flex flex-column gap-4 flex-1">
        {[
          {
            icon: 'fa-star',
            title: 'Trusted and Quality Repair Service.',
            desc: 'Reliable, high-quality repairs under one roof.',
          },
          {
            icon: 'fa-car-side',
            title: 'Free Pick-up and Drop Facility.',
            desc: 'Convenient car pick-up & drop, completely free!',
          },
          {
            icon: 'fa-user-tie',
            title: 'Personalized Services.',
            desc: 'Services customized and tailored for you.',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="advantage-item p-3 d-flex gap-3 align-items-start"
            style={{
              background: 'white',
              borderRadius: '15px',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.12)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)';
            }}
          >
            <div
              className="advantage-icon d-flex justify-content-center align-items-center"
              style={{
                minWidth: '55px',
                minHeight: '55px',
                background: 'linear-gradient(135deg, #43c6ac, #0b2154)',
                color: '#fff',
                borderRadius: '50%',
                fontSize: '1.5rem',
              }}
            >
              <i className={`fas ${item.icon}`}></i>
            </div>
            <div className="advantage-text text-start">
              <p className="advantage-title fw-bold mb-1" style={{ color: '#232336' }}>
                {item.title}
              </p>
              <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Center Image */}
      <div className="advantages-center flex-1 text-center my-4">
        <div
          style={{
            display: 'inline-block',
            padding: '20px',
            borderRadius: '20px',
            background: 'rgba(67,198,172,0.1)',
            transition: 'transform 0.3s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <img
            src="/assets/img/workshop-equipments.png"
            alt="Workshop Equipment"
            className="img-fluid rounded"
            style={{ maxWidth: '300px' }}
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="advantages-right d-flex flex-column gap-4 flex-1">
        {[
          {
            icon: 'fa-tools',
            title: 'Genuine Spare Parts.',
            desc: 'High-grade OEM/OES spare parts for your car!',
          },
          {
            icon: 'fa-users',
            title: 'Dedicated Team of Experts.',
            desc: 'Experienced professionals committed to excellence.',
          },
          {
            icon: 'fa-wallet',
            title: 'Budget-Friendly Pricing.',
            desc: 'Plans that suit every pocket for complete value.',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="advantage-item p-3 d-flex gap-3 align-items-start"
            style={{
              background: 'white',
              borderRadius: '15px',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.12)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)';
            }}
          >
            <div
              className="advantage-icon d-flex justify-content-center align-items-center"
              style={{
                minWidth: '55px',
                minHeight: '55px',
                background: 'linear-gradient(135deg, #0b2154, #43c6ac)',
                color: '#fff',
                borderRadius: '50%',
                fontSize: '1.5rem',
              }}
            >
              <i className={`fas ${item.icon}`}></i>
            </div>
            <div className="advantage-text text-start">
              <p className="advantage-title fw-bold mb-1" style={{ color: '#232336' }}>
                {item.title}
              </p>
              <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


{/* WHY CHOOSE SECTION ENDS */}
























{/* BOOK SERVICE FORM STARTS */}

<section className="position-relative py-5 bg-light">
  {/* Background Pattern */}
  <div
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url(assets/img/car-gear.jpg)',
    backgroundRepeat: 'repeat',
    opacity: 0.05,
    zIndex: 0,
  }}
></div>


  <div className="container position-relative" style={{ zIndex: 1 }}>
    {/* Section Header */}
    <div className="text-center mb-5">
      <h1 className="display-5 fw-bold">
        <span style={{ color: '#0b2154' }}>Our</span>{' '}
        <span style={{ color: '#43c6ac' }}>Journey</span>
      </h1>
      <p className="text-muted">Milestones that shaped our path to becoming trusted car care experts.</p>
    </div>

    {/* Timeline */}
    <div className="position-relative">
      {/* Vertical Line */}
      <div
        className="position-absolute top-0 start-50 translate-middle-x d-none d-md-block"
        style={{
          width: '4px',
          height: '100%',
          backgroundColor: '#7662f4',
          opacity: 0.1,
          zIndex: 0,
        }}
      ></div>

      {[
        {
          year: '2010',
          title: 'Humble Beginnings',
          desc: 'Started with a small team of passionate mechanics and a single garage.',
          img: 'assets/img/Automotive-journey.jpg',
        },
        {
          year: '2013',
          title: 'Expanding Services',
          desc: 'Added body shop, tyre service, and maintenance to serve more customers.',
          img: 'assets/img/expanding-service.jpg',
        },
        {
          year: '2016',
          title: 'Modernization',
          desc: 'Upgraded to advanced diagnostic tools and modern equipment for efficiency.',
          img: 'assets/img/upgrade-tools.jpg',
        },
        {
          year: '2019',
          title: 'Customer Focused',
          desc: 'Introduced online booking and priority customer support for convenience.',
          img: 'assets/img/online-book.jpg',
        },
        {
          year: '2023',
          title: 'Trusted Experts',
          desc: 'Serving thousands of happy customers with high-quality car services.',
          img: 'assets/img/Happy-cus.jpg',
        },
      ].map((step, index) => (
        <div
          key={index}
          className={`row align-items-center mb-5 flex-column flex-md-row ${index % 2 !== 0 ? 'flex-md-row-reverse' : ''}`}
        >
          {/* Image */}
          <div className="col-md-6 mb-3 mb-md-0 position-relative d-flex justify-content-center">
            <img
              src={step.img}
              alt={step.title}
              className="img-fluid rounded shadow-lg"
              style={{ border: '5px solid #43c6ac', maxHeight: '300px', objectFit: 'cover' }}
            />
            <div
              className="position-absolute top-50 translate-middle bg-primary text-white fw-bold text-center"
              style={{
                width: '60px',
                height: '60px',
                lineHeight: '60px',
                borderRadius: '50%',
                fontSize: '1rem',
                left: index % 2 === 0 ? '-30px' : 'unset',
                right: index % 2 !== 0 ? '-30px' : 'unset',
              }}
            >
              {step.year}
            </div>
          </div>

          {/* Text */}
          <div className="col-md-6 d-flex flex-column justify-content-center text-center text-md-start">
            <h3 className="fw-bold" style={{ color: '#0b2154' }}>{step.title}</h3>
            <p className="text-muted">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Hover Animation */}
  <style jsx>{`
    @media (min-width: 768px) {
      img {
        transition: transform 0.5s ease;
      }
      img:hover {
        transform: scale(1.05);
      }
    }
  `}</style>
</section>


{/* BOOK SERVICE FORM ENDS */}




{/* OUR SERVICES STARTS */}
<section style={{background:'#f2f5ff', paddingTop:'80px'}}>
<div className="container-xxl service py-5" >
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="text-primary text-uppercase">
                // Our Services //
              </h6>
              <h1 className="mb-5">Explore Our Services</h1>
            </div>
            <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="col-lg-4">
                <div className="nav w-100 nav-pills me-4">
                  <button
                    className="our-serv w-100 d-flex align-items-center text-start p-3 mb-2 active"
                    data-bs-toggle="pill"
                    data-bs-target="#tab-pane-1"
                    type="button"
                  >
                    <i className="fa fa-car-side fa-2x me-3"></i>
                    <h5 className="serv-text">Mechanical Service</h5>
                  </button>
                  <button
                    className="our-serv w-100 d-flex align-items-center text-start p-3 mb-2"
                    data-bs-toggle="pill"
                    data-bs-target="#tab-pane-2"
                    type="button"
                  >
                    <i className="fa fa-car fa-2x me-3"></i>
                    <h5 className="serv-text">Body Shop Service</h5>
                  </button>
                  <button
                    className="our-serv w-100 d-flex align-items-center text-start p-3 mb-2"
                    data-bs-toggle="pill"
                    data-bs-target="#tab-pane-3"
                    type="button"
                  >
                    <i className="fa fa-cog fa-2x me-3"></i>
                    <h5 className="serv-text">Tyre Service</h5>
                  </button>
                  <button
                    className="our-serv w-100 d-flex align-items-center text-start p-3 mb-2"
                    data-bs-toggle="pill"
                    data-bs-target="#tab-pane-4"
                    type="button"
                  >
                    <i className="fa fa-shield-alt fa-2x me-3"></i>
                    <h5 className="serv-text">Insurance Renewal</h5>
                  </button>
                  <button
                    className="our-serv w-100 d-flex align-items-center text-start p-3 mb-2"
                    data-bs-toggle="pill"
                    data-bs-target="#tab-pane-5"
                    type="button"
                  >
                    <i className="fa fa-tools fa-2x me-3"></i>
                    <h5 className="serv-text">Car Accessories</h5>
                  </button>
                  <button
                    className="our-serv w-100 d-flex align-items-center text-start p-3 mb-2"
                    data-bs-toggle="pill"
                    data-bs-target="#tab-pane-6"
                    type="button"
                  >
                  <i className="fa fa-cogs fa-2x me-3"></i>
                    <h5 className="serv-text">Car Customize</h5>
                  </button>
                  <button
                    className="our-serv w-100 d-flex align-items-center text-start p-3 mb-0"
                    data-bs-toggle="pill"
                    data-bs-target="#tab-pane-7"
                    type="button"
                  >
                    <i className="fa fa-broom fa-2x me-3"></i>
                    <h5 className="serv-text">Car Detailing</h5>
                  </button>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="tab-content w-100">
                  <div className="tab-pane fade show active" id="tab-pane-1">
                    <div className="row g-4">
                      <div className="col-md-6" style={{ minHeight: "500px" }}>
                        <div className="position-relative h-100">
                          <img
                            className="position-absolute img-fluid w-100 h-100"
                            src="/assets/img/benchman-fixing.avif"
                            style={{ objectFit: "cover" }}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h3 className="mb-3">
                         Expert Mechanical Repair & Maintenance
                        </h3>
                        <p className="mb-4">
                          Our mechanical services are designed to keep your car running smoothly and safely on the road. From complete engine diagnostics to brake, clutch, and suspension repairs, we use advanced tools and genuine parts to ensure your vehicle performs at its best. Whether it's a minor issue or a major overhaul, our certified mechanics are equipped to handle it all with precision and care.
                        </p>
                        <p><i className="fa fa-check text-success me-3"></i>Certified Technicians</p>
                        <p><i className="fa fa-check text-success me-3"></i>Engine & Transmission Repairs</p>
                        <p><i className="fa fa-check text-success me-3"></i>Brake & Suspension Services</p>
                        {/* <a
                          href="/Services"
                          className="btn btn-primary py-3 px-5 mt-3"
                        >
                          Read More<i className="fa fa-arrow-right ms-3"></i>
                        </a> */}
                         <a href="/MechanicalService">
                          <button className="about-btn">
                      <span className="about-btn-text">Read More</span>
                      <i className="fas fa-car"></i>
                      <div className="about-btn-shine"></div>
                    </button> 
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tab-pane-2">
                    <div className="row g-4">
                      <div className="col-md-6" style={{ minHeight: "500px" }}>
                        <div className="position-relative h-100">
                          <img
                            className="position-absolute img-fluid w-100 h-100"
                            src="/assets/img/man-polish.avif"
                            style={{ objectFit: "cover" }}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h3 className="mb-3">
                          Complete Auto Body Restoration
                        </h3>
                        <p className="mb-4">
                           Our body shop services specialize in restoring your car to its original factory look and finish. We handle everything from collision repairs, dent removal, and scratch corrections to full repainting using the latest color-matching technology. Whether you need minor touch-ups or extensive bodywork, our team ensures a flawless result that enhances your vehicle’s appearance and resale value.
                        </p>
                        <p><i className="fa fa-check text-success me-3"></i>Top Tyre Brands Available</p>
                        <p><i className="fa fa-check text-success me-3"></i>Wheel Alignment & Balancing</p>
                        <p><i className="fa fa-check text-success me-3"></i>Puncture Repair & Valve Check</p>
                        {/* <a
                          href="/Services"
                          className="btn btn-primary py-3 px-5 mt-3"
                        >
                          Read More<i className="fa fa-arrow-right ms-3"></i>
                        </a> */}
                         <a href="/Bodyshopservice">
                          <button className="about-btn">
                      <span className="about-btn-text">Read More</span>
                      <i className="fas fa-car"></i>
                      <div className="about-btn-shine"></div>
                    </button> 
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tab-pane-3">
                    <div className="row g-4">
                      <div className="col-md-6" style={{ minHeight: "500px" }}>
                        <div className="position-relative h-100">
                          <img
                            className="position-absolute img-fluid w-100 h-100"
                            src="/assets/img/section-c-img.png"
                            style={{ objectFit: "cover" }}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h3 className="mb-3">
                          Tyre Fitting, Alignment & Balancing
                        </h3>
                        <p className="mb-4">
                           Proper tyres are critical for safety and fuel efficiency. Our tyre service offers a wide selection of branded tyres, along with professional fitting, wheel alignment, and balancing. We ensure that your tyres provide optimum grip, handling, and performance in all driving conditions. Our experts also inspect tread wear and provide honest advice on replacements or rotations as needed.
                        </p>
                        <p><i className="fa fa-check text-success me-3"></i>Top Tyre Brands Available</p>
                        <p><i className="fa fa-check text-success me-3"></i>Wheel Alignment & Balancing</p>
                        <p><i className="fa fa-check text-success me-3"></i>Puncture Repair & Valve Check</p>
                        {/* <a
                          href="/Services"
                          className="btn btn-primary py-3 px-5 mt-3"
                        >
                          Read More<i className="fa fa-arrow-right ms-3"></i>
                        </a> */}
                         <a href="/Tyreservice">
                          <button className="about-btn">
                      <span className="about-btn-text">Read More</span>
                      <i className="fas fa-car"></i>
                      <div className="about-btn-shine"></div>
                    </button> 
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tab-pane-4">
                    <div className="row g-4">
                      <div className="col-md-6" style={{ minHeight: "500px" }}>
                        <div className="position-relative h-100">
                          <img
                            className="position-absolute img-fluid w-100 h-100"
                            src="/assets/img/car-calculator.jpg"
                            style={{ objectFit: "cover" }}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h3 className="mb-3">
                         Hassle-Free Car Insurance Renewal
                        </h3>
                        <p className="mb-4">
                           Renewing your car insurance has never been easier. Our streamlined insurance renewal service helps you compare multiple policy options from top providers, ensuring you get maximum coverage at competitive rates. From third-party to comprehensive plans, we take care of all documentation and guide you through the process without any hassle or hidden charges.
                        </p>
                        <p><i className="fa fa-check text-success me-3"></i>Instant Online Renewal</p>
                        <p><i className="fa fa-check text-success me-3"></i>Multiple Insurance Providers</p>
                        <p><i className="fa fa-check text-success me-3"></i>Zero Paperwork Assistance</p>
                        {/* <a
                          href="/Services"
                          className="btn btn-primary py-3 px-5 mt-3"
                        >
                          Read More<i className="fa fa-arrow-right ms-3"></i>
                        </a> */}
                        <a href="/Insurancerenewal">
                          <button className="about-btn">
                      <span className="about-btn-text">Read More</span>
                      <i className="fas fa-car"></i>
                      <div className="about-btn-shine"></div>
                    </button> 
                        </a>

                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tab-pane-5">
                    <div className="row g-4">
                      <div className="col-md-6" style={{ minHeight: "500px" }}>
                        <div className="position-relative h-100">
                          <img
                            className="position-absolute img-fluid w-100 h-100"
                            src="/assets/img/car-accessories.jpg"
                            style={{ objectFit: "cover" }}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h3 className="mb-3">
                         Wide Range of Car Accessories
                        </h3>
                        <p className="mb-4">
                            Give your vehicle a personal touch with our premium car accessories. We offer everything from seat covers, steering grips, and floor mats to high-end infotainment systems, reverse cameras, and ambient lighting. Whether you’re looking to upgrade aesthetics or add functionality, our wide selection and expert installation services ensure a perfect fit and finish every time.
                        </p>
                        <p><i className="fa fa-check text-success me-3"></i>Premium Seat Covers</p>
                        <p><i className="fa fa-check text-success me-3"></i>Latest Car Audio & Video</p>
                        <p><i className="fa fa-check text-success me-3"></i>Interior & Exterior Styling</p>
                        {/* <a
                          href="/Services"
                          className="btn btn-primary py-3 px-5 mt-3"
                        >
                          Read More<i className="fa fa-arrow-right ms-3"></i>
                        </a> */}
                        <a href="/Caraccessories">
                          <button className="about-btn">
                      <span className="about-btn-text">Read More</span>
                      <i className="fas fa-car"></i>
                      <div className="about-btn-shine"></div>
                    </button> 
                        </a>

                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tab-pane-6">
                    <div className="row g-4">
                      <div className="col-md-6" style={{ minHeight: "500px" }}>
                        <div className="position-relative h-100">
                          <img
                            className="position-absolute img-fluid w-100 h-100"
                            src="/assets/img/service-car.jpg"
                            style={{ objectFit: "cover" }}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h3 className="mb-3">
                        Personalized Car Customization
                        </h3>
                        <p className="mb-4">
                           Want to make your car truly unique? Our customization services are designed for automotive enthusiasts who love standing out. We offer full-body kits, custom paint jobs, vinyl wraps, performance upgrades, interior mods, and more. Whether you're aiming for sporty, luxurious, or off-road looks, our customization experts bring your vision to life with precision craftsmanship.
                        </p>
                        <p><i className="fa fa-check text-success me-3"></i>Custom Wraps & Paint Jobs</p>
                        <p><i className="fa fa-check text-success me-3"></i>Performance Tuning</p>
                        <p><i className="fa fa-check text-success me-3"></i>Body Kits & Alloy Wheels</p>
                        {/* <a
                          href="/Services"
                          className="btn btn-primary py-3 px-5 mt-3"
                        >
                          Read More<i className="fa fa-arrow-right ms-3"></i>
                        </a> */}
                        <a href="/Carcustomization">
                          <button className="about-btn">
                      <span className="about-btn-text">Read More</span>
                      <i className="fas fa-car"></i>
                      <div className="about-btn-shine"></div>
                    </button> 
                        </a>

                      </div>
                    </div>
                  </div>

                   <div className="tab-pane fade" id="tab-pane-7">
                    <div className="row g-4">
                      <div className="col-md-6" style={{ minHeight: "500px" }}>
                        <div className="position-relative h-100">
                          <img
                            className="position-absolute img-fluid w-100 h-100"
                            src="/assets/img/car-detail.jpg"
                            style={{ objectFit: "cover" }}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h3 className="mb-3">
                        Professional Car Detailing
                        </h3>
                        <p className="mb-4">
                            Restore your car’s beauty inside and out with our professional detailing services. We go beyond a basic wash to offer deep interior cleaning, upholstery shampooing, dashboard conditioning, and exterior polishing. Our ceramic coating and paint protection options add long-lasting shine and shield your vehicle against dirt, scratches, and UV damage — keeping it looking brand new.
                        </p>
                        <p><i className="fa fa-check text-success me-3"></i>Interior Shampoo & Vacuum</p>
                        <p><i className="fa fa-check text-success me-3"></i>Exterior Polishing & Waxing</p>
                        <p><i className="fa fa-check text-success me-3"></i>Ceramic Coating Available</p>
                        {/* <a
                          href="/Services"
                          className="btn btn-primary py-3 px-5 mt-3"
                        >
                          Read More<i className="fa fa-arrow-right ms-3"></i>
                        </a> */}
                        <a href="/Cardetailing">
                          <button className="about-btn">
                      <span className="about-btn-text">Read More</span>
                      <i className="fas fa-car"></i>
                      <div className="about-btn-shine"></div>
                    </button> 
                        </a>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
</section>
{/* OUR SERVICES ENDS */}




{/* SLIDER SECTION STARTS */}

<section style={{paddingTop:'50px', background:'#f2f5ff', paddingBottom:'50px'}}>
<h1 className="new-slider-h1">What Car Brands We Service?</h1>
<p className="new-slider-p">
  Just a note: We service all including your new Smart Cars & Electric Cars
</p>

<div className="new-slider-wrapper">
  {/* Top row */}
  <div className="new-slider-slider" id="new-slider-slider1">
    <img src="/assets/img/Logos/Audi.jpg" alt="Logo 1" />
    <img src="/assets/img/Logos/BMW.jpg" alt="Logo 2" />
    <img src="/assets/img/Logos/Ford.jpg" alt="Logo 3" />
    <img src="/assets/img/Logos/Honda.jpg" alt="Logo 4" />
    <img src="/assets/img/Logos/Hyundai.jpg" alt="Logo 5" />
    <img src="/assets/img/Logos/Jaguar.jpg" alt="Logo 6" />
    <img src="/assets/img/Logos/Jeep.jpg" alt="Logo 7" />
    <img src="/assets/img/Logos/Kia-Logo.jpg" alt="Logo 8" />
    <img src="/assets/img/Logos/Land-Rover.jpg" alt="Logo 9" />
    <img src="/assets/img/Logos/Mahindra.jpg" alt="Logo 10" />
    {/* Repeat for seamless scroll */}
    <img src="/assets/img/Logos/Audi.jpg" alt="Logo 1" />
    <img src="/assets/img/Logos/BMW.jpg" alt="Logo 2" />
    <img src="/assets/img/Logos/Ford.jpg" alt="Logo 3" />
    <img src="/assets/img/Logos/Honda.jpg" alt="Logo 4" />
    <img src="/assets/img/Logos/Hyundai.jpg" alt="Logo 5" />
    <img src="/assets/img/Logos/Jaguar.jpg" alt="Logo 6" />
    <img src="/assets/img/Logos/Jeep.jpg" alt="Logo 7" />
    <img src="/assets/img/Logos/Kia-Logo.jpg" alt="Logo 8" />
    <img src="/assets/img/Logos/Land-Rover.jpg" alt="Logo 9" />
    <img src="/assets/img/Logos/Mahindra.jpg" alt="Logo 10" />
  </div>

  {/* Bottom row */}
  <div
    className="new-slider-slider-row2"
    id="new-slider-slider2"
    style={{ marginTop: '15px' }}
  >
    <img src="/assets/img/Logos/Mercedes-Benz.jpg" alt="Logo 1" />
    <img src="/assets/img/Logos/MG.jpg" alt="Logo 2" />
    <img src="/assets/img/Logos/MS.jpg" alt="Logo 3" />
    <img src="/assets/img/Logos/Nissan.jpg" alt="Logo 4" />
    <img src="/assets/img/Logos/Renault.jpg" alt="Logo 5" />
    <img src="/assets/img/Logos/Skoda.jpg" alt="Logo 6" />
    <img src="/assets/img/Logos/Tata.jpg" alt="Logo 7" />
    <img src="/assets/img/Logos/Toyota.jpg" alt="Logo 8" />
    <img src="/assets/img/Logos/Volkswagen.jpg" alt="Logo 9" />
    <img src="/assets/img/Logos/Volvo.jpg" alt="Logo 10" />
    {/* Repeat for seamless scroll */}
    <img src="/assets/img/Logos/Mercedes-Benz.jpg" alt="Logo 1" />
    <img src="/assets/img/Logos/MG.jpg" alt="Logo 2" />
    <img src="/assets/img/Logos/MS.jpg" alt="Logo 3" />
    <img src="/assets/img/Logos/Nissan.jpg" alt="Logo 4" />
    <img src="/assets/img/Logos/Renault.jpg" alt="Logo 5" />
    <img src="/assets/img/Logos/Skoda.jpg" alt="Logo 6" />
    <img src="/assets/img/Logos/Tata.jpg" alt="Logo 7" />
    <img src="/assets/img/Logos/Toyota.jpg" alt="Logo 8" />
    <img src="/assets/img/Logos/Volkswagen.jpg" alt="Logo 9" />
    <img src="/assets/img/Logos/Volvo.jpg" alt="Logo 10" />
  </div>
</div>

</section>

{/* SLIDER SECTION ENDS */}









{/* FEATURES SECTION STARTS */}
<section style={{paddingTop:'100px', paddingBottom:'100'}}>
   <div className="container pt-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="row">
            <div className="col-lg-5 mb-5 wow zoomIn" data-wow-delay="0.6s">
              <h5 className="text-primary mb-3">// Why Automotive? //</h5>
              <h4>Mechanic’s Special Services</h4>
              <img
                className="img-thumbnail mb-4 p-3"
                src="assets/img/man-working-under-car.png"
                alt="Image"
              />
              <p>
                Our expertise with various vehicles and technologies ensures
                dependable, specialized, and uncompromising service for every
                customer.
              </p>
              {/* <a href="#" className="btn btn-primary py-3 px-5">
                Learn More
              </a> */}
              {/* <a className="dedcription-btn" href="#">
                <span className="name-descripeion"> Learn More</span>
                <div className="btn-icon heart">
                  <i className="fas fa-car"></i>
                </div>
              </a> */}
            </div>
            <div className="col-lg-7">
              <div className="row">
                {/* 1. Best Quality Services */}
                <div className="col-md-6 mb-4">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="why-auto text-white d-flex align-items-center justify-content-center mr-3"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      >
                        <i className="bi bi-gem"></i>
                      </div>
                      <h6 className="m-0">Best Quality Services</h6>
                    </div>
                    <p>
                      We ensure premium car care and expert attention at every
                      step.
                    </p>
                  </div>
                </div>

                {/* 2. Emergency Solutions Anytime */}
                <div className="col-md-6 mb-4">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="why-auto text-white d-flex align-items-center justify-content-center mr-3"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      >
                        <i className="bi bi-lightning-charge-fill"></i>
                      </div>
                      <h6 className="m-0">Emergency Solutions Anytime</h6>
                    </div>
                    <p>Get fast and reliable support 24/7, wherever you are.</p>
                  </div>
                </div>

                {/* 3. Affordable price upto 2 years */}
                <div className="col-md-6 mb-4">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="why-auto text-white d-flex align-items-center justify-content-center mr-3"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      >
                        <i className="fas fa-hand-holding-usd"></i>
                      </div>
                      <h6 className="m-0">Affordable Price Upto 2 Years</h6>
                    </div>
                    <p>
                      Long-term value with budget-friendly pricing and
                      transparent deals.
                    </p>
                  </div>
                </div>

                {/* 4. Reliable & Experienced Team */}
                <div className="col-md-6 mb-4">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="why-auto text-white d-flex align-items-center justify-content-center mr-3"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      >
                        <i className="bi bi-people-fill"></i>
                      </div>
                      <h6 className="m-0">Reliable & Experienced Team</h6>
                    </div>
                    <p>
                      Trusted professionals with years of experience in
                      automotive care.
                    </p>
                  </div>
                </div>

                {/* 5. Advance Equipments */}
                <div className="col-md-6 mb-4">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="why-auto text-white d-flex align-items-center justify-content-center mr-3"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      >
                        <i className="bi bi-tools"></i>
                      </div>
                      <h6 className="m-0">Advanced Equipments</h6>
                    </div>
                    <p>
                      Equipped with modern tools to handle every car model
                      efficiently.
                    </p>
                  </div>
                </div>

                {/* 6. Expert in all brands service */}
                <div className="col-md-6 mb-4">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="why-auto text-white d-flex align-items-center justify-content-center mr-3"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      >
                        <i className="fas fa-car"></i>
                      </div>
                      <h6 className="m-0">Expert in All Brand Services</h6>
                    </div>
                    <p>
                      No matter the brand, we provide precise, expert service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</section>
{/* FEATURES SECTION ENDS */}












{/* OUR WORK PROCESS STARTS */}

{/* <section className="work-process-timeline py-5">
  <div className="container">
   
    <div className="section-header text-center mb-5">
      <h6 className="text-primary text-uppercase">// Our Work Process //</h6>
      <h1 className="fw-bold">How we handle your vehicle from check-in to handover</h1>
    </div>

  
    <div className="timeline">

    
      <div className="timeline-step">
        <div className="step-icon bg-primary text-white">
          <i className="fas fa-search"></i>
        </div>
        <h5 className="mt-3 text-center">Diagnose</h5>
        <p className="small text-center">Full inspection and computer diagnostics to find any issues.</p>
      </div>

      <div className="timeline-arrow vertical-arrow d-md-none">
        <i className="fas fa-arrow-down text-secondary"></i>
      </div>

     
      <div className="timeline-step">
        <div className="step-icon border border-primary text-primary">
          <i className="fas fa-tools"></i>
        </div>
        <h5 className="mt-3 text-center">Repair & Service</h5>
        <p className="small text-center">Repairs or services with high-quality tools and parts.</p>
      </div>

      <div className="timeline-arrow vertical-arrow d-md-none">
        <i className="fas fa-arrow-down text-secondary"></i>
      </div>

    
      <div className="timeline-step">
        <div className="step-icon bg-primary text-white">
          <i className="fas fa-shield-alt"></i>
        </div>
        <h5 className="mt-3 text-center">Quality Check</h5>
        <p className="small text-center">Each vehicle is thoroughly inspected to ensure everything runs perfectly.</p>
      </div>

      <div className="timeline-arrow vertical-arrow d-md-none">
        <i className="fas fa-arrow-down text-secondary"></i>
      </div>

     
      <div className="timeline-step">
        <div className="step-icon border border-primary text-primary">
          <i className="fas fa-car-side"></i>
        </div>
        <h5 className="mt-3 text-center">Delivery</h5>
        <p className="small text-center">Your car is cleaned, polished, and delivered on time — ready for the road.</p>
      </div>

    </div>
  </div>

  
  <style jsx>{`
    .timeline {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
    }

    .timeline-step {
      flex: 0 0 200px;
      text-align: center;
      position: relative;
    }

    .step-icon {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      margin: 0 auto;
    }

    .timeline-arrow {
      flex: 0 0 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media (max-width: 767px) {
      .timeline {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        position: relative;
        padding-left: 20px;
      }

      .step-icon {
        position: relative;
        z-index: 2;
      }

      .vertical-arrow {
        text-align: center;
        margin: -1rem 0;
      }

      .timeline-arrow {
        display: none;
      }
    }
  `}</style>
</section> */}


<WorkProcessTimeline/>

{/* OUR WORK PROCESS ENDS */}















{/* TESTIMONIALS SECTION STARTS */}

<section style={{ background: "linear-gradient(#f8f9fa, #e9ecef)" }}>
  <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">

      <div className="text-center">
        <h6
          className="text-uppercase"
          style={{ color: "#6c757d", letterSpacing: "2px", marginBottom: "8px" }}
        >
          // Testimonial //
        </h6>

        <h1
          style={{
            color: "#1c1c1c",
            fontWeight: "800",
            marginBottom: "40px",
            fontSize: "38px"
          }}
        >
          Our Clients Say!
        </h1>
      </div>

      <div className="owl-carousel testimonial-carousel position-relative">

        {/* Testimonial 1 */}
        <div
          className="testimonial-item text-center"
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "30px",
            margin: "18px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
            transition: "0.3s",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
        >
          <img
            src="assets/img/testimonial-1.jpg"
            alt="Abraham Patel"
            style={{
              width: "90px",
    height: "90px",
    borderRadius: "50%",
    border: "3px solid #6c757d",
    objectFit: "cover",
    padding: "4px",
    marginBottom: "15px",
    background: "#fff",
    display: "block",
    margin: "0 auto"
            }}
          />

          <h5 style={{ color: "#343a40", fontWeight: "700", marginBottom: "5px" }}>
            Abraham Patel
          </h5>

          <p style={{ color: "#6c757d",
    marginBottom: "18px",
    fontSize: "15px",
    textAlign: "center",
    display: "block" }}>
            Surat, Gujarat
          </p>

          <div
            style={{
              background: "#f1f3f5",
              borderRadius: "14px",
              padding: "22px",
              color: "#333",
              fontSize: "15.5px",
              lineHeight: "1.6"
            }}
          >
            “Very professional. Reasonably priced, great staff, excellent facility!
            Highly recommended with transparent service and on-time delivery.”
          </div>
        </div>

        {/* Testimonial 2 */}
        <div
          className="testimonial-item text-center"
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "30px",
            margin: "18px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
            transition: "0.3s",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
        >
          <img
            src="assets/img/testimonial-2.jpg"
            alt="Divya Shah"
            style={{
              width: "90px",
    height: "90px",
    borderRadius: "50%",
    border: "3px solid #6c757d",
    objectFit: "cover",
    padding: "4px",
    marginBottom: "15px",
    background: "#fff",
    display: "block",
    margin: "0 auto"
            }}
          />

          <h5 style={{ color: "#343a40", fontWeight: "700", marginBottom: "5px" }}>
            Divya Shah
          </h5>

          <p style={{ color: "#6c757d",
    marginBottom: "18px",
    fontSize: "15px",
    textAlign: "center",
    display: "block" }}>
            Navsari, Gujarat
          </p>

          <div
            style={{
              background: "#f1f3f5",
              borderRadius: "14px",
              padding: "22px",
              color: "#333",
              fontSize: "15.5px",
              lineHeight: "1.6"
            }}
          >
            “Wonderful experience. Highly professional team who customized my car
            perfectly. Smooth delivery and great service!”
          </div>
        </div>

        {/* Testimonial 3 */}
        <div
          className="testimonial-item text-center"
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "30px",
            margin: "18px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
            transition: "0.3s",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
        >
          <img
            src="assets/img/testimonial-3.jpg"
            alt="Kailash Patel"
            style={{
              width: "90px",
    height: "90px",
    borderRadius: "50%",
    border: "3px solid #6c757d",
    objectFit: "cover",
    padding: "4px",
    marginBottom: "15px",
    background: "#fff",
    display: "block",
    margin: "0 auto"
            }}
          />

          <h5 style={{ color: "#343a40", fontWeight: "700", marginBottom: "5px" }}>
            Kailash Patel
          </h5>

          <p style={{ color: "#6c757d",
    marginBottom: "18px",
    fontSize: "15px",
    textAlign: "center",
    display: "block" }}>
            Udhna, Gujarat
          </p>

          <div
            style={{
              background: "#f1f3f5",
              borderRadius: "14px",
              padding: "22px",
              color: "#333",
              fontSize: "15.5px",
              lineHeight: "1.6"
            }}
          >
            “Fantastic service & punctuality. Used twice and always satisfied.
            Coordinator was extremely supportive. Thank you!”
          </div>
        </div>

        {/* Testimonial 4 */}
        <div
          className="testimonial-item text-center"
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "30px",
            margin: "18px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
            transition: "0.3s",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
        >
          <img
            src="assets/img/testimonial-4.jpg"
            alt="Viraj Patel"
            style={{
              width: "90px",
    height: "90px",
    borderRadius: "50%",
    border: "3px solid #6c757d",
    objectFit: "cover",
    padding: "4px",
    marginBottom: "15px",
    background: "#fff",
    display: "block",
    margin: "0 auto"
            }}
          />

          <h5 style={{ color: "#343a40", fontWeight: "700", marginBottom: "5px" }}>
            Viraj Patel
          </h5>

          <p style={{ color: "#6c757d",
    marginBottom: "18px",
    fontSize: "15px",
    textAlign: "center",
    display: "block" }}>
            Surat, Gujarat
          </p>

          <div
            style={{
              background: "#f1f3f5",
              borderRadius: "14px",
              padding: "22px",
              color: "#333",
              fontSize: "15.5px",
              lineHeight: "1.6"
            }}
          >
            “Better than any authorized dealer—excellent quality service and
            affordable charges. Highly recommended!”
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


{/* TESTIMONIALS SECTION ENDS */}
















{/* BLOG SECTION STARTS */}

<section>
    <div className="container pt-5">
      <div className="d-flex flex-column text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="text-primary text-uppercase">// Recent Blog //</h6>
        <h1 className="mb-0">Latest From Our Blog</h1>
      </div>

      <div className="row pb-3 wow fadeInUp" data-wow-delay="0.3s">
        {blogData.map((blog, index) => (
          <div className="col-lg-4 mb-4" key={index}>
            <div className="card mb-2 p-3">
              <a href="/BlogDetails"><img className="card-img-top" src={blog.img} alt={blog.alt} /></a>
              <div className="card-body bg-secondary d-flex justify-content-between align-items-center p-0">
                <h6 className="card-title text-white text-truncate m-0 ml-3 ps-3"><a href="/BlogDetails" className="text-white">{blog.title}</a></h6>
                <a
                  href="#"
                  className="fa fa-link d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white text-decoration-none m-0 ml-auto"
                  style={{ width: "45px", height: "45px" }}
                ></a>
              </div>
              <div className="card-footer py-3 px-4">
                <div className="d-flex justify-content-between mb-2">
                  <small className="mr-3">
                    <i className="fa fa-user text-primary"></i> Admin
                  </small>
                  <small className="mr-3">
                    <i className="fa fa-folder text-primary"></i> {blog.folder}
                  </small>
                  <small className="mr-3">
                    <i className="fa fa-comments text-primary"></i> {blog.comments}
                  </small>
                </div>
                <p className="m-0">{blog.desc}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="col-lg-12">
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center mb-4">
              <li className="page-item disabled">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">1</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">2</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">3</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
</section>

{/* BLOG SECTION ENDS */}


      <Footer/>
    </>
  )
}

export default NewHome