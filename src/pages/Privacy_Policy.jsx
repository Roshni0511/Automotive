import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Privacy_Policy() {
  return (
    <div>
      <Navbar />


      {/* <!-- Page Header Start --> */}
      <div
        className="container-fluid page-header mb-5 p-0"
        style={{ backgroundImage: "url(assets/img/carousel-bg-1.jpg)" }}
      >
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Privacy Policy
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
                  Privacy Policy
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      <section className=" ptb-100">
        <div className="container">
          <div className="">
            <div
              style={{ textAlign: "center" }}
              className="wow fadeIn"
              data-wow-delay="0.1s"
            >
              <h6 className="text-primary text-uppercase">
                // Our Privacy Policy //
              </h6>
              <h1 className="mb-4">Our Automotive Privacy Policy</h1>
            </div>
            <div>
              <p>
                At Automotive, your privacy is important to us. This Privacy
                Policy explains how we collect, use, and protect your
                information when you use our website or services.
              </p>

              <h5>1. Information We Collect</h5>
              <p>We may collect the following information:</p>
              <ul className="mb-3">
                <li className="pb-2">
                  <strong>Personal Details :</strong> Name, contact number,
                  email, vehicle information.
                </li>
                <li className="pb-2">
                  <strong>Service Data :</strong> Appointment details, service
                  history, preferred car service type.
                </li>
                <li className="pb-2">
                  <strong>Technical Info :</strong> IP address, browser type,
                  and device information.
                </li>
                <li className="pb-2">
                  <strong>Cookies & Tracking :</strong> To enhance user
                  experience and improve our website performance.
                </li>
              </ul>

              <h5>2. How We Use Your Information</h5>
              <p>Your information is used to:</p>
              <ul className="mb-3">
                <li className="pb-2">
                  Schedule and manage your car service appointments.
                </li>
                <li className="pb-2">
                  Contact you with service updates, confirmations, and
                  promotions.
                </li>
                <li className="pb-2">
                  Provide customer support and respond to inquiries.
                </li>
                <li className="pb-2">
                  Improve our website, services, and user experience.
                </li>
              </ul>

              <h5>3. Sharing of Information</h5>
              <p>
                We do not sell or rent your personal information. However, we
                may share it with:
              </p>
              <ul className="mb-3">
                <li className="pb-2">
                  Service providers assisting in appointment booking, email/SMS
                  delivery, or payment processing.
                </li>

                <li className="pb-2">
                  Legal authorities when required by law.
                </li>
              </ul>
              <p>
                All third parties are required to maintain the confidentiality
                of your data.
              </p>

              <h5>4. Data Security</h5>
              <p>We implement industry-standard security measures including:</p>
              <ul className="mb-3">
                <li className="pb-2">SSL encryption</li>
                <li className="pb-2">Secure databases</li>
                <li className="pb-2">
                  Limited access to your data by authorized personnel only
                </li>
              </ul>

              <h5>5. Your Rights</h5>
              <p>You have the right to:</p>
              <ul className="mb-3">
                <li className="pb-2">
                  Access or update your personal information.
                </li>
                <li className="pb-2">
                  Request deletion of your data from our systems.
                </li>
                <li className="pb-2">Opt out of promotional messages.</li>
              </ul>

              <h5>6. Cookies and Tracking Technologies</h5>
              <p className="pb-2">
                Our website may use cookies to remember preferences and enhance
                your experience. You can disable cookies in your browser
                settings.
              </p>

              <h5>7. Third-Party Links</h5>
              <p className="pb-2">
                We may provide links to third-party websites. We are not
                responsible for the privacy practices or content on those
                websites.
              </p>

              <h5>8. Children's Privacy</h5>
              <p className="pb-2">
                Our services are not intended for children under the age of 13.
                We do not knowingly collect data from minors.
              </p>
              <h5>9. Updates to This Policy</h5>
              <p className="pb-2">
                We may update this Privacy Policy periodically. Any changes will
                be posted on this page with the updated date.
              </p>

              <h5>10. Contact Us</h5>
              <p>
                If you have questions or concerns regarding this policy, feel
                free to reach out to us:
              </p>
              <ul className="mb-3">
                <li className="pb-2"> Automotive</li>
                <li className="pb-2">📞 +91 972 709 9000</li>
                <li className="pb-2">📞 0261 266 2999</li>
                <li className="pb-2">📧 automotive2002@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
