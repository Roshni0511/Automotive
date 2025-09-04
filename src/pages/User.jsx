import React, { useState } from "react";
import { FaUserCircle, FaEdit, FaSave } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const UserPage = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    address: "123 Main Street, New York",
    memberSince: "Jan 2023",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setUser(editedUser);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  return (
    <>
      <Navbar />
      <div className="user-page-container">
        {/* Header */}
        <header className="user-header text-center">
          <FaUserCircle className="user-icon" />
          <h4>Welcome, {user.name}</h4>
        </header>

        <div className="row">
          <div className="col-12">
            <section className="profile-card">
              <div className="d-flex justify-content-between align-items-center">
                <h2>
                  <FaUserCircle className="section-icon" /> Your Profile
                </h2>
                {!isEditing ? (
                  <button className="btn btn-sm btn-primary" onClick={handleEdit}>
                    <FaEdit /> Edit
                  </button>
                ) : (
                  <button className="btn btn-sm btn-success" onClick={handleSave}>
                    <FaSave /> Save
                  </button>
                )}
              </div>

              <div className="profile-grid mt-3">
                <div className="profile-item">
                  <strong>Full Name:</strong>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={editedUser.name}
                      onChange={handleChange}
                      className="form-control"
                    />
                  ) : (
                    <span>{user.name}</span>
                  )}
                </div>

                <div className="profile-item">
                  <strong>Email:</strong>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={editedUser.email}
                      onChange={handleChange}
                      className="form-control"
                    />
                  ) : (
                    <span>{user.email}</span>
                  )}
                </div>

                <div className="profile-item">
                  <strong>Phone:</strong>
                  {isEditing ? (
                    <input
                      type="text"
                      name="phone"
                      value={editedUser.phone}
                      onChange={handleChange}
                      className="form-control"
                    />
                  ) : (
                    <span>{user.phone}</span>
                  )}
                </div>

                <div className="profile-item">
                  <strong>Address:</strong>
                  {isEditing ? (
                    <input
                      type="text"
                      name="address"
                      value={editedUser.address}
                      onChange={handleChange}
                      className="form-control"
                    />
                  ) : (
                    <span>{user.address}</span>
                  )}
                </div>

                <div className="profile-item">
                  <strong>Member Since:</strong>
                  <span>{user.memberSince}</span>
                </div>

                
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserPage;
