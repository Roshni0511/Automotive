import React from 'react'

export default function Footer() {
  return (
    <div>
      {/* <!-- Footer Start --> */}
    <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Address</h4>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <div style={{marginTop:"22px"}}>
                      <h4 class="text-light mb-3">Opening Hours</h4>
                       <p class="mb-4">9:00 AM to 6:30 PM</p>
                
                    </div>
                    
                </div>
             
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Quick Link</h4>
                    <a class="btn btn-link" href="/">Home</a>
                    <a class="btn btn-link" href="">About Us</a>
                    <a class="btn btn-link" href="">Services</a>
                    <a class="btn btn-link" href="">Latest Events</a>
                    <a class="btn btn-link" href="">Blog</a>
                    <a class="btn btn-link" href="">Gallery</a>
                    <a class="btn btn-link" href="">Testimonials</a>
                    <a class="btn btn-link" href="">Contact</a>
                    <a class="btn btn-link" href="">News Letters</a>
                </div>
                   <div class="col-lg-3 col-md-6">
                      <h4 class="text-light mb-4">Our Services</h4>
                    <a class="btn btn-link" href="">Mechanical Service</a>
                    <a class="btn btn-link" href="">Tyre Service</a>
                    <a class="btn btn-link" href="">Car Accessories</a>
                   
                    <a class="btn btn-link" href="">Car Detailing</a>
                    <a class="btn btn-link" href="">Body Shop Service</a>
                    <a class="btn btn-link" href="">Insurance Renewal</a>
                    <a class="btn btn-link" href="">Car Customize</a>
             
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Newsletter</h4>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div class="position-relative mx-auto" style={{maxWidth: "400px"}}>
                        <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                        <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                <div class="row" style={{justifyContent:'center'}}>
                    <div class="col-md-12 text-center text-md-center mb-3 mb-md-0">
                        &copy; <a class="border-bottom" href="#"> 2022 - 2032 Automotive</a>, All Right Reserved.

                     
                        Designed By <a class="border-bottom" href="https://successinnovativetechnologiespvtltd.com/">Success Innovative Technologies Private Limited</a>
                        
                    </div>
            
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}
    </div>
  )
}
