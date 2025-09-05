import React, { useEffect } from 'react'

const Testimonial = () => {
      useEffect(() => {
        // wait for DOM to fully render
        const interval = setInterval(() => {
          if (window.$ && window.$(".testimonial-carousel").length > 0) {
            window.$(".testimonial-carousel").owlCarousel({
              autoplay: true,
              smartSpeed: 1000,
              center: true,
              margin: 25,
              dots: true,
              loop: true,
              nav: false,
              responsive: {
                0: { items: 1 },
                768: { items: 2 },
                992: { items: 3 },
              },
            });
            clearInterval(interval); // stop checking
          }
        }, 300);
      }, []);
  return (
    <>
      
        {/* <!-- Testimonial Start --> */}
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="text-center">
              <h6 className="text-primary text-uppercase">// Testimonial //</h6>
              <h1 className="mb-5">Our Clients Say!</h1>
            </div>
            <div className="owl-carousel testimonial-carousel position-relative">
              <div className="testimonial-item text-center">
                <img
                  className="bg-light rounded-circle p-2 mx-auto mb-3"
                  src="assets/img/testimonial-1.jpg"
                  style={{ width: "80px", height: "80px" }}
                />
                <h5 className="mb-0">Abraham Patel</h5>
                <p style={{textAlign:'center'}}>Surat, Gujarat</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    “Very professional. I must say, very reasonably priced as
                    well, staff is excellent, the facility is also excellent! I
                    would highly recommend to try it! Excellent service with a
                    transparent system. On time delivery.”
                  </p>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="bg-light rounded-circle p-2 mx-auto mb-3"
                  src="assets/img/testimonial-2.jpg"
                  style={{ width: "80px", height: "80px" }}
                />
                <h5 className="mb-0">Divya Shah</h5>
                <p  style={{textAlign:'center'}}>Navsari, Gujarat</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    “It was an wonderful experience. Automotive is a workshop of
                    highly professional work force. They completely customized
                    my car as per my requirement and delivered with complete
                    ease. I recommend Automotive to all. Thanks and great job.”
                  </p>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="bg-light rounded-circle p-2 mx-auto mb-3"
                  src="assets/img/testimonial-3.jpg"
                  style={{ width: "80px", height: "80px" }}
                />
                <h5 className="mb-0">Kailash Patel</h5>
                <p  style={{textAlign:'center'}}>Udhna, Gujarat</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    “Fantastic service, superb punctuality. Availed their
                    service twice and truly most satisfying. The response of
                    coordinator is prompt and she was greatly supportive. Thanks
                    a lot..!!”
                  </p>
                </div>
              </div> 
              <div className="testimonial-item text-center">
                <img
                  className="bg-light rounded-circle p-2 mx-auto mb-3"
                  src="assets/img/testimonial-4.jpg"
                  style={{ width: "80px", height: "80px" }}
                />
                <h5 className="mb-0">Viraj Patel</h5>
                <p  style={{textAlign:'center'}}>Surat, Gujarat</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    “This is my first time experience with Automotive. But, I
                    would say the service of Automotive is much better in
                    comparison to any authorized dealer in terms of quality,
                    service and very reasonable charge.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Testimonial End --> */}
    </>
  )
}

export default Testimonial
