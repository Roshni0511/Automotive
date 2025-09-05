import React, { useEffect, useState } from "react";
import $ from "jquery";
import Navbar from "./Navbar";
import Footer from "./Footer";
const faqData = [
  {
    question: "What types of car services do you offer?",
    answer:
      "We provide a wide range of services including general maintenance, engine diagnostics, brake repair, tire replacement, oil changes, battery replacement, AC repair, and full car servicing.",
  },
  {
    question: "How do I book a car service appointment?",
    answer:
      "You can book an appointment through our website by selecting the desired service, date, and time. You’ll receive a confirmation via email or SMS.",
  },
  {
    question: "Do you offer doorstep car service or pickup & drop?",
    answer:
      "Yes, we provide convenient pickup & drop services at your location for selected packages. You can request it while booking your service.",
  },
  {
    question: "How long does a regular car service take?",
    answer:
      "Basic services like oil changes or filter replacement usually take 1–2 hours. Full servicing or major repairs may take up to 4–6 hours depending on the condition of your vehicle.",
  },
  {
    question: "Do you use genuine spare parts?",
    answer:
      "Absolutely! We use 100% OEM or equivalent quality spare parts to ensure the best performance and safety for your vehicle.",
  },
  {
    question: "What if I face an issue after service?",
    answer:
      "We offer a service guarantee. If you face any issues after the service, contact our support within 7 days and we’ll inspect and resolve it at no extra cost.",
  },
];

export default function Faq() {
      const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  useEffect(() => {


    // Accordion
    $(".accordion").each(function () {
      const $accordion = $(this);
      $accordion
        .find(".accordion-title")
        .off("click")
        .on("click", function (e) {
          e.preventDefault();

          const $this = $(this);
          $this.toggleClass("active");
          $this.next(".accordion-content").slideToggle("fast");

          $accordion
            .find(".accordion-content")
            .not($this.next())
            .slideUp("fast");

          $accordion.find(".accordion-title").not($this).removeClass("active");
        });
    });
  }, []);
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
            <h1 className="display-3 text-white mb-3 animated slideInDown">FAQ</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  FAQ
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      <section className="faq-area ptb-100">
        <div className="container">
               <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="text-primary text-uppercase">// FAQ //</h6>
                <h1 className="mb-5">Frequently Asked Question</h1>
            </div>
          <div className="tab faq-accordion-tab wow fadeInUp" data-wow-delay="0.1s">
      <div className="tab-content">
        <div className="tabs-item">
          <div className="faq-accordion">
            <ul className="accordion">
              {faqData.map((faq, index) => (
                <li className="accordion-item" key={index}>
                  <a
                    className={`accordion-title ${
                      activeIndex === index ? "active" : ""
                    }`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <i className="fas fa-chevron-down"></i>
                    {faq.question}
                  </a>
                  <div
                    className={`accordion-content ${
                      activeIndex === index ? "show" : ""
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
