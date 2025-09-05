import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaCar, FaVideo, FaHistory } from "react-icons/fa";

export default function My_Account() {
  const [activeSlide, setActiveSlide] = useState(0);

  const tabs = ["myCar", "video", "history"];

  // Images for slider
  const images = [
    "https://media.licdn.com/dms/image/v2/D4E12AQHdp-Cdwf65bQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1662460262800?e=2147483647&v=beta&t=AIEtG0o9u8pU523XY6cwi8jtGmNwICM-pfmoWlaNRJs",  
    "https://spn-sta.spinny.com/blog/20220308152631/VW-Virtus-launch.jpg", 
    "https://images.hindustantimes.com/auto/img/2022/06/10/1600x900/Large-14821-2021ID.4AWD_1645592326750_1654848039067.jpg",
  ];

  // Dummy Data
  const myCars = [
    { carNumber: "RJ14EF4321", clientName: "Rahul Sharma", status: "Paint Work" },
    { carNumber: "GJ05AB1234", clientName: "Vikram Singh", status: "Minor Dent & Scratch Repair" },
  ];

  const videoRequests = [
    { carNumber: "RJ14EF4321", clientName: "Rahul Sharma" },
    { carNumber: "GJ05AB1234", clientName: "Vikram Singh" },
  ];

  const serviceHistory = [
    { carNumber: "RJ14EF4321", clientName: "Rahul Sharma", date: "2025-08-01" },
    { carNumber: "GJ05AB1234", clientName: "Vikram Singh", date: "2025-07-20" },
  ];

  // Slide Navigation
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      <Navbar />
      <div className="account-container">

      <div className="container mt-5 text-center">
        <div className="mb-5 wow zoomIn" style={{ textAlign: "center" }} data-wow-delay="0.2s">
          <h5 className="text-primary mb-3">// Profile Information //</h5>
          <h4>Manage your personal details and keep them up to date.</h4>
        </div>

        {/* --- Carousel --- */}
        <div className="carousel-container" style={{ position: "relative", marginBottom: "40px" }}>
          <div
            className="carousel-slide"
            style={{
              backgroundImage: `url(${images[activeSlide]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",  
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            {tabs[activeSlide] === "myCar"
              ? "My Car"
              : tabs[activeSlide] === "video"
              ? "Request for Video"
              : "Service History"}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "24px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "#fff",
            }}
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "24px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "#fff",
            }}
          >
            ❯
          </button>
        </div>

        {/* --- Buttons for Tabs --- */}
       <div className="btn-group mb-4" style={{ display: "flex", flexWrap: "wrap" }}>
  {tabs.map((tab, i) => (
    <button
      key={tab}
      className={`btn ${activeSlide === i ? "btn-primary" : "btn-outline-primary"}`}
      style={{ borderRadius: "10px", margin: "10px", display: "flex", alignItems: "center", gap: "8px" ,justifyContent:'center'}}
      onClick={() => setActiveSlide(i)}
    >
      {tab === "myCar" && <FaCar />}
      {tab === "video" && <FaVideo />}
      {tab === "history" && <FaHistory />}
      {tab === "myCar"
        ? "My Car"
        : tab === "video"
        ? "Request for Video"
        : "Service History"}
    </button>
  ))}
</div>

        {/* --- Table Content --- */}
        <div className="table-responsive">
          {activeSlide === 0 && (
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Car Number</th>
                  <th>Client Name</th>
                  <th>Running Status</th>
                </tr>
              </thead>
              <tbody>
                {myCars.map((car, i) => (
                  <tr key={i}>
                    <td>{car.carNumber}</td>
                    <td>{car.clientName}</td>
                    <td>{car.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeSlide === 1 && (
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Car Number</th>
                  <th>Client Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {videoRequests.map((car, i) => (
                  <tr key={i}>
                    <td>{car.carNumber}</td>
                    <td>{car.clientName}</td>
                    <td>
                      <button className="action-btn">Request Video</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeSlide === 2 && (
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Car Number</th>
                  <th>Client Name</th>
                  <th>Service Date</th>
                </tr>
              </thead>
              <tbody>
                {serviceHistory.map((car, i) => (
                  <tr key={i}>
                    <td>{car.carNumber}</td>
                    <td>{car.clientName}</td>
                    <td>{car.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
</div>
      <Footer />
    </div>
  );
}
