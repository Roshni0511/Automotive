import React from 'react'

export default function Footer() {
  return (
    <div>
      {/* <!-- Footer Start --> */}
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Address</h4>
                  <p className="mb-2">
  <i className="fa fa-map-marker-alt me-3"></i>
  Surat, Gujarat
</p>

<p className="mb-2">
  <i className="fa fa-phone-alt me-3"></i>
  <a href="tel:+919727099000" className="text-decoration-none text-white">+91 972 709 9000</a>
</p>

<p className="mb-2">
  <i className="fa fa-phone-alt me-3"></i>
  <a href="tel:02612662999" className="text-decoration-none text-white">0261 266 2999</a>
</p>

<p className="mb-2">
  <i className="fa fa-envelope me-3"></i>
  <a href="mailto:automotive2002@gmail.com" className="text-decoration-none text-white">automotive2002@gmail.com</a>
</p>

                    <div className="d-flex pt-2">
                      <a className="btn btn-outline-light btn-social" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-twitter"></i>
</a>

<a className="btn btn-outline-light btn-social" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-facebook-f"></i>
</a>

<a className="btn btn-outline-light btn-social" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-youtube"></i>
</a>

<a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/in" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-linkedin-in"></i>
</a>

                    </div>
                    <div style={{marginTop:"22px"}}>
                      <h4 className="text-light mb-3">Opening Hours</h4>
                       <p className="mb-4">9:00 AM to 6:30 PM</p>
                
                    </div>
                    
                </div>
             
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Quick Link</h4>
                    <a className="btn btn-link" href="/">Home</a>
                    <a className="btn btn-link" href="/About">About Us</a>
                    <a className="btn btn-link" href="/Services">Services</a>
                    <a className="btn btn-link" href="/Faq">Faq</a>
                    <a className="btn btn-link" href="/Testimonial_page">Testimonials</a>
                    <a className="btn btn-link" href="/LatestEvents">Latest Events</a>
                    <a className="btn btn-link" href="/Gallery">Gallery</a>
                    <a className="btn btn-link" href="/Blog">Blog</a>
                    <a className="btn btn-link" href="/Newsletter">News Letters</a>
                    <a className="btn btn-link" href="/Contact">Contact</a>
                </div>

                <div className="col-lg-3 col-md-6">
                      <h4 className="text-light mb-4">Our Services</h4>
                    <a className="btn btn-link" href="/MechanicalService">Mechanical Service</a>
                    <a className="btn btn-link" href="/Tyreservice">Tyre Service</a>
                    <a className="btn btn-link" href="/Caraccessories">Car Accessories</a>
                   
                    <a className="btn btn-link" href="/Cardetailing">Car Detailing</a>
                    <a className="btn btn-link" href="/Bodyshopservice">Body Shop Service</a>
                    <a className="btn btn-link" href="/Insurancerenewal">Insurance Renewal</a>
                    <a className="btn btn-link" href="/Carcustomization">Car Customize</a>
             
                </div>

                 <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Our Policies</h4>
                    <a className="btn btn-link" href="/Privacy_Policy">Privacy Policy</a>
                    <a className="btn btn-link" href="/Terms&Conditions">Terms and Conditions</a>
                    <br />
                    <h4 className="text-light mb-4">Company</h4>
                    <a className="btn btn-link" href="/My_Account">My Account</a>
                    {/* <a className="btn btn-link" href="/User">User</a> */}
                </div>

                {/* <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Newsletter</h4>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
                        <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div> */}
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row" style={{justifyContent:'center'}}>
                    <div className="col-md-12 text-center text-md-center mb-3 mb-md-0">
                        &copy; <a className="border-bottom" href="/"> 2022 - 2032 Automotive</a>, All Right Reserved.

                     
                        Designed By <a className="border-bottom" href="https://successinnovativetechnologiespvtltd.com/">Success Innovative Technologies Private Limited</a>
                        
                    </div>
            
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}
    </div>
  )
}
