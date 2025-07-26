import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Register() {
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    
      const handleChange = (e) => {
        setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // For now, just show alert (replace with API call)
        alert("Thank you for registering!");
        console.log(formData);
      };
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
              Register
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
                 Register
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}
        <div className="container my-5 register-now">

 <div className=" mb-5 wow zoomIn " style={{textAlign:'center'}} data-wow-delay="0.6s">
          <h5 className="text-primary mb-3">// Register for the Event //</h5>
            <h4>Please fill out the form below to confirm your participation in the event.</h4>
        </div>
     

      <div className="row justify-content-center wow zoomIn" data-wow-delay="0.6s">
        <div className="col-md-8 col-lg-6">
          <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
            <div className="mb-3 form-floating">
              <label className="form-label">Full Name </label>
              <input
                type="text"
                name="name"
                className="form-control"
              
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3 form-floating">
              <label className="form-label">Email Address </label>
              <input
                type="email"
                name="email"
              
                className="form-control"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3 form-floating">
              <label className="form-label">Phone Number </label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3 form-floating">
              <label className="form-label">Message (Optional)</label>
              <textarea
                name="message"
                className="form-control"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                style={{height: "100px"}}
              ></textarea>
            </div>

            <button class="btn btn-primary w-100 py-3" type="submit">Submit Registration</button>
          </form>
        </div>
      </div>
    </div>

    <Footer />
    </div>
  )
}
