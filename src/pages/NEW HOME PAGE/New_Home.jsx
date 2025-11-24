import React from 'react'
import './CSS/new_home.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

const NewHome = () => {
  return (
    <>
      <Navbar/>

     <div className="container-fluid p-0 mb-5">
  <div
    id="header-carousel"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">

      {/* Slide 1 */}
      <div className="carousel-item active position-relative">
        <img className="w-100" src="/assets/img/slider-6-1.jpg" alt="Slide 1" />
        
        {/* Overlay */}
        <div className="overlay"></div>

        <div className="carousel-caption d-flex align-items-center h-100">
          <div className="container">
            <div className="row align-items-center justify-content-center justify-content-lg-start">

              {/* Text Content */}
              <div className="col-10 col-lg-7 text-center text-lg-start">
                <h6 className="text-white text-uppercase mb-2 mb-md-3 animated fadeInDown carousel-subtitle" style={{animationDelay:'0.2s', fontSize:'0.9rem'}}>
                  // Looking for Reliable Service //
                </h6>
                <h1 className="display-5 display-md-4 display-lg-3 text-white mb-2 pb-2 animated fadeInUp" style={{animationDelay:'0.4s'}}>
                  Get Amazing Car Service
                </h1>
                <h1 className="display-5 display-md-4 display-lg-3 text-white mb-3 pb-2 animated fadeInUp" style={{animationDelay:'0.6s'}}>
                  From Us
                </h1>

                {/* Buttons */}
                <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start mt-3">
                  <a href="/About" className="btn btn-gradient">
                    About Us <i className="fa fa-arrow-right ms-2"></i>
                  </a>
                 <a href="/Gallery" className="btn btn-gradient">
    Work Gallery <i className="fa fa-arrow-right ms-2"></i>
  </a>
                </div>
              </div>

              {/* Car Image */}
              <div className="col-lg-5 d-none d-lg-flex justify-content-center animated zoomIn">
                <img className="img-fluid shadow-lg rounded" src="assets/img/carousel-1.png" alt="Car" style={{transform:'rotate(-3deg)'}} />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="carousel-item position-relative">
        <img className="w-100" src="/assets/img/slider-4-1.jpg" alt="Slide 2" />
        <div className="overlay"></div>
        <div className="carousel-caption d-flex align-items-center h-100">
          <div className="container">
            <div className="row align-items-center justify-content-center justify-content-lg-start">
              
              <div className="col-10 col-lg-7 text-center text-lg-start">
                <h6 className="text-white text-uppercase mb-2 mb-md-3 animated fadeInDown carousel-subtitle" style={{animationDelay:'0.2s', fontSize:'0.9rem'}}>
                  // We Care Extra //
                </h6>
                <h1 className="display-5 display-md-4 display-lg-3 text-white mb-2 pb-2 animated fadeInUp" style={{animationDelay:'0.4s'}}>
                  Modern Car Repair
                </h1>
                <h1 className="display-5 display-md-4 display-lg-3 text-white mb-3 pb-2 animated fadeInUp" style={{animationDelay:'0.6s'}}>
                  Expert Service
                </h1>

                <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start mt-3">
                  <a href="/About" className="btn btn-gradient">
                    About Us <i className="fa fa-arrow-right ms-2"></i>
                  </a>
                    <a href="/Services" className="btn btn-gradient">
    Our Services <i className="fa fa-arrow-right ms-2"></i>
  </a>
                </div>
              </div>

              <div className="col-lg-5 d-none d-lg-flex justify-content-center animated zoomIn">
                <img className="img-fluid shadow-lg rounded" src="assets/img/carousel-2.png" alt="Car" style={{transform:'rotate(3deg)'}} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Carousel Controls */}
    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>


      <Footer/>
    </>
  )
}

export default NewHome