import React, { useState } from "react";
import Navbar from './Navbar'
import Footer from './Footer'

export default function My_Account() {
      const [activeTab, setActiveTab] = useState("myCar");

  // Dummy data
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
  return (
    <div>
      <Navbar />

    {/* <!-- Page Header Start --> */}
      <div
        class="container-fluid page-header mb-5 p-0"
        style={{ backgroundImage: "url(assets/img/carousel-bg-1.jpg)" }}
      >
        <div class="container-fluid page-header-inner py-5">
          <div class="container text-center">
            <h1 class="display-3 text-white mb-3 animated slideInDown">
              My Account
            </h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb justify-content-center text-uppercase">
                <li class="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li
                  class="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  My Account
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

        <div className="container">
             <div className="account-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>My Account</h2>
        <ul>
          <li>
            <button
              className={activeTab === "myCar" ? "active" : ""}
              onClick={() => setActiveTab("myCar")}
            >
              My Car
            </button>
          </li>
          <li>
            <button
              className={activeTab === "video" ? "active" : ""}
              onClick={() => setActiveTab("video")}
            >
              Request for Video
            </button>
          </li>
          <li>
            <button
              className={activeTab === "history" ? "active" : ""}
              onClick={() => setActiveTab("history")}
            >
              Service History
            </button>
          </li>
        </ul>
      </div>

      {/* Content Section */}
      <div className="content">
        <h2>
          {activeTab === "myCar"
            ? "My Car"
            : activeTab === "video"
            ? "Request for Video"
            : "Service History"}
        </h2>

        {/* My Car Table */}
        {activeTab === "myCar" && (
             <div className="table-responsive">
          <table>
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
          </div>
        )}

        {/* Request for Video Table */}
        {activeTab === "video" && (
             <div className="table-responsive">
          <table>
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
          </div>
        )}

        {/* Service History Table */}
        {activeTab === "history" && (
             <div className="table-responsive">
          <table>
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
          </div>
        )}
      </div>
        </div>
        </div>

      <Footer />
    </div>
  )
}
