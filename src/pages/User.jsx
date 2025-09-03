import React, { useState } from "react";
import {
  FaUserCircle,
  FaCar,
  FaCalendarAlt,
  FaPlusCircle,
} from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaPlus } from "react-icons/fa6";

const UserPage = () => {
  const [user] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
  });

  const [bookedServices, setBookedServices] = useState([
    { id: 1, service: "Oil Change", date: "2024-05-01" },
    { id: 2, service: "Tire Rotation", date: "2024-06-15" },
  ]);

  const [newService, setNewService] = useState("");
  const [newDate, setNewDate] = useState("");

  const handleBookService = (e) => {
    e.preventDefault();
    if (!newService || !newDate) {
      alert("Please fill in all fields");
      return;
    }
    const newBooking = {
      id: bookedServices.length + 1,
      service: newService,
      date: newDate,
    };
    setBookedServices([...bookedServices, newBooking]);
    setNewService("");
    setNewDate("");
  };

  return (
    <>
      <Navbar />
      <div className="user-page-container">
        {/* Header */}
        <header className="user-header">
          <FaUserCircle className="user-icon" />
          <h4>Welcome, {user.name}</h4>
        </header>

        {/* Profile */}
        {/* Profile */}
        <section className="profile-card">
          <h2>
            <FaUserCircle className="section-icon" /> Your Profile
          </h2>
          <div className="profile-grid">
            <div className="profile-item">
              <strong>Full Name:</strong>
              <span>{user.name}</span>
            </div>
            <div className="profile-item">
              <strong>Email:</strong>
              <span>{user.email}</span>
            </div>
            <div className="profile-item">
              <strong>Phone:</strong>
              <span>{user.phone}</span>
            </div>
            <div className="profile-item">
              <strong>Address:</strong>
              <span>123 Main Street, New York</span>
            </div>
            <div className="profile-item">
              <strong>Member Since:</strong>
              <span>Jan 2023</span>
            </div>
            <div className="profile-item">
              <strong>Status:</strong>
              <span className="status-badge">Premium Member</span>
            </div>
          </div>
        </section>

        {/* Booked Services */}
        <section className="services-card">
          <h2>
            <FaCar className="section-icon" /> Your Booked Services
          </h2>
          {bookedServices.length === 0 ? (
            <p>You have no booked services.</p>
          ) : (
            <ul className="services-list">
              {bookedServices.map(({ id, service, date }) => (
                <li key={id} className="service-item">
                  <FaCar className="car-icon" />
                  <span className="service-name">{service}</span>
                  <span className="service-date">
                    <FaCalendarAlt /> {date}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Booking Form */}
        <section className="booking-card">
          <h2>
            <FaPlusCircle className="section-icon" /> Book a New Service
          </h2>
          <form className="book-service-form" onSubmit={handleBookService}>
            <div className="row">
                <div className="col-md-6">
                    <label>
              Service:
              <select
                value={newService}
                onChange={(e) => setNewService(e.target.value)}
                className="input-select"
              >
                <option value="">Select a service</option>
                <option value="Oil Change">Oil Change</option>
                <option value="Tire Rotation">Tire Rotation</option>
                <option value="Brake Inspection">Brake Inspection</option>
                <option value="Battery Check">Battery Check</option>
                <option value="Engine Tune-Up">Engine Tune-Up</option>
              </select>
            </label>

           </div>
           <div className="col-md-6">
             <label>
              Date:
              <input
                type="date"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
                className="input-date"
              />
            </label>
           </div>
            </div>

            <button type="submit" className="btn-book">
              <FaPlus  /> Book Service
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default UserPage;
