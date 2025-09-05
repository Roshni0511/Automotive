import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function TermsConditions() {
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
            <h1 className="display-3 text-white mb-3 animated slideInDown">Terms & Conditions</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Terms & Conditions
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

    <section className="ptb-100">
  <div className="container">
    <div className="">
      <div
        style={{ textAlign: "center" }}
        className="wow fadeIn"
        data-wow-delay="0.1s"
      >
        <h6 className="text-primary text-uppercase">
          // Our Terms & Conditions //
        </h6>
        <h1 className="mb-4">Our Automotive Terms & Conditions</h1>
      </div>
      <div>
        <p>
          These Terms & Conditions govern your use of our website and services at Automotive. By accessing or using our services, you agree to be bound by the following terms.
        </p>

        <h5>1. Service Eligibility</h5>
        <p>
          Our services are available to users who are at least 18 years old. By using our site, you confirm that you meet this requirement.
        </p>

        <h5>2. Booking and Appointments</h5>
        <ul className="mb-3">
          <li className="pb-2">Appointments must be booked in advance via our website or by calling our service center.</li>
          <li className="pb-2">We reserve the right to reschedule or cancel appointments due to unforeseen circumstances.</li>
        </ul>

        <h5>3. Pricing and Payment</h5>
        <ul className="mb-3">
          <li className="pb-2">All prices are subject to change without prior notice.</li>
          <li className="pb-2">Full payment must be made at the time of service completion unless otherwise agreed.</li>
        </ul>

        <h5>4. Customer Responsibilities</h5>
        <ul className="mb-3">
          <li className="pb-2">Customers must provide accurate information regarding their vehicle and service needs.</li>
          <li className="pb-2">It is your responsibility to remove personal belongings from your vehicle before service.</li>
        </ul>

        <h5>5. Warranty and Liability</h5>
        <p>
          While we strive for excellent service, Automotive is not liable for:
        </p>
        <ul className="mb-3">
          <li className="pb-2">Loss or damage caused by incorrect information provided by the customer.</li>
          <li className="pb-2">Delays due to parts availability or external factors.</li>
        </ul>

        <h5>6. Cancellation Policy</h5>
        <ul className="mb-3">
          <li className="pb-2">Customers must notify us at least 24 hours in advance to cancel or reschedule.</li>
          <li className="pb-2">Failure to do so may result in cancellation charges.</li>
        </ul>

        <h5>7. Intellectual Property</h5>
        <p className="pb-2">
          All content on this website including logos, text, and images is the property of Automotive and protected by copyright laws. Unauthorized use is strictly prohibited.
        </p>

        <h5>8. Modifications to Terms</h5>
        <p className="pb-2">
          We reserve the right to change these terms at any time. Updated terms will be posted on this page with the effective date.
        </p>

        <h5>9. Governing Law</h5>
        <p className="pb-2">
          These terms are governed by the laws of India. Any disputes arising shall be resolved under the jurisdiction of courts in Surat, Gujarat.
        </p>

        <h5>10. Contact Information</h5>
        <p>
          If you have any questions regarding these Terms & Conditions, please contact us:
        </p>
        <ul className="mb-3">
          <li className="pb-2">Automotive</li>
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
  )
}
