import React from "react";
import Navbar from './Navbar'
import Footer from './Footer'

export default function EventsDetail() {
    
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
              Latest Events Details
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
                  Latest Events Details
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

     <div className="container my-5 event-details">
         <div className=" mb-5 wow zoomIn " style={{textAlign:'center'}} data-wow-delay="0.6s">
          <h5 className="text-primary mb-3">// Automotive Tech Fest 2025 //</h5>

        </div>
     

      
       <div class="single-img mt-4 mb-4">
                  <img
                    src="/assets/img/latestevent1.png"
                    alt=""
                    style={{ border: "1px solid #dee2e6", padding: "10px" ,maxWidth:'-webkit-fill-available'}}
                  />
                </div>

      <div className="row mb-4">
        <div className="col-md-4">
          <h5><i className="far fa-calendar-alt me-2"></i> Date</h5>
          <p>August 12, 2025</p>
        </div>
        <div className="col-md-4">
          <h5><i className="fas fa-map-marker-alt me-2"></i> Location</h5>
          <p>Surat International Convention Center, Gujarat</p>
        </div>
        <div className="col-md-4">
          <h5><i className="far fa-clock me-2"></i> Time</h5>
          <p>10:00 AM – 6:00 PM</p>
        </div>
      </div>
<hr />
      <div className="mb-4">
        <h4>About the Event</h4>
        <p>
          The Automotive Tech Fest 2025 is a premier event bringing together
          car manufacturers, tech innovators, auto enthusiasts, and industry
          leaders. Explore the future of mobility with hands-on experiences in
          electric vehicles (EVs), smart car technology, AI-based safety
          features, and much more.
        </p>
      </div>

     <div className="mt-4">
        <div className="row">
         <div className="col-md-6">
        <div className="mb-4">
        <h4>Key Highlights</h4>
        <ul>
          <li>Unveiling of concept electric vehicles</li>
          <li>Live demonstrations of autonomous driving systems</li>
          <li>Guest talks by industry experts and engineers</li>
          <li>Technology booths from over 50 brands</li>
          <li>Networking opportunities and panel discussions</li>
        </ul>
      </div>
      </div>

      <div className="col-md-6">
        <div className="mb-4">
        <h4>Schedule</h4>
        <p><strong>10:00 AM – Opening Ceremony</strong></p>
        <p><strong>11:00 AM – EV Showcase</strong></p>
        <p><strong>1:00 PM – Expert Panel: Future of AI in Cars</strong></p>
        <p><strong>3:00 PM – Technology Demonstrations</strong></p>
        <p><strong>5:00 PM – Closing Remarks</strong></p>
      </div>
      </div>
     </div>
     </div>

      <div className="mb-4">
        <h4>Register or Contact</h4>
        <p>
          Want to be part of this revolution? Reach out to us at{" "}
          <a href="mailto:automotive2002@gmail.com">automotive2002@gmail.com</a>{" "}
          or call <a href="tel:02612662999">0261 266 2999</a>.
        </p>
        {/* <a href="/Register" className="btn btn-primary mt-2">Register Now</a> */}
             <a class="dedcription-btn" href="/Register">
                <span class="name-descripeion">Register Now</span>
                <div class="btn-icon heart">
                  <i class="fas fa-car"></i>
                </div>
              </a>
      </div>
    </div>
 
      <Footer />
    </div>
  )
}
