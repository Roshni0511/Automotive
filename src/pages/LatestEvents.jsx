import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const events = [
  {
    id: 1,
    title: "Automotive Tech Fest 2025",
    date: "August 12, 2025",
    location: "Surat International Convention Center",
    description:
      "Experience cutting-edge vehicle technology, and guest speakers from top automotive brands.",
    image: "/assets/img/latestevent1.png",
  },
  {
    id: 2,
    title: "Vintage Car Showcase",
    date: "September 3, 2025",
    location: "Heritage Car Museum, Vadodara",
    description:
      "A nostalgic journey showcasing iconic vintage cars from the 1940s to 1980s — open to all visitors.",
    image: "/assets/img/latestevent3.png",
  },
  {
    id: 3,
    title: "Electric Drive Summit",
    date: "October 18, 2025",
    location: "Ahmedabad EV Hub",
    description:
      "Future-focused summit exploring the role of electric vehicles in sustainable development in India.",
    image: "/assets/img/latestevent2.png",
  },
];
export default function LatestEvents() {
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
              Latest Events
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
                  Latest Events
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      <div className="container my-5 latest-events">
        <div className=" mb-5 wow zoomIn " style={{textAlign:'center'}} data-wow-delay="0.6s">
          <h5 className="text-primary mb-3">// Latest Automotive Events //</h5>
          <h4>Explore our latest events and drive into innovation.</h4>
        </div>
        <div className="row g-4 wow zoomIn" data-wow-delay="0.6s">
          {events.map((event) => (
            <div className="col-md-4" key={event.id}>
              <div className="event-card shadow-lg">
                <div className="event-img-wrapper">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="event-img"
                  /> 
                  <div className="event-overlay">
                    <p className="event-date-location mb-2">
                      <i className="far fa-calendar-alt me-2"></i> {event.date}
                      <br />
                      <i className="fas fa-map-marker-alt me-2"></i>{" "}
                      {event.location}
                    </p>
                  </div>
                </div>
                <div className="p-3">
                  <h5 className="event-title">{event.title}</h5>
                  <p className="event-description">{event.description}</p>
                 
                      <a class="dedcription-btn" href="/EventsDetail">
                <span class="name-descripeion"> Read More</span>
                <div class="btn-icon heart">
                  <i class="fas fa-car"></i>
                </div>
              </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
 