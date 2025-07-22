
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
const images = [
  '/assets/img/gallery-1.jpg',
  '/assets/img/gallery-2.jpg',
  '/assets/img/gallery-3.jpg',
  '/assets/img/gallery-4.jpg',
  '/assets/img/gallery-5.jpg',
  '/assets/img/gallery-6.jpg',
  '/assets/img/gallery-13.jpg',
  '/assets/img/gallery-19.jpg',
];
export default function Daily_Activity() {
      const [overlayVisible, setOverlayVisible] = useState(false);
      const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const handleKeyDown = (e) => {
          if (!overlayVisible) return;
          if (e.key === 'ArrowRight') handleNext();
          if (e.key === 'ArrowLeft') handlePrev();
          if (e.key === 'Escape') setOverlayVisible(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }, [overlayVisible, currentIndex]);
    
      const handleImageClick = (index) => {
        setCurrentIndex(index);
        setOverlayVisible(true);
      };
    
      const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
      };
    
      const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
      };
  return (
    <div>
        <Navbar />
       {/* <!-- Page Header Start --> */}
    <div class="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(assets/img/carousel-bg-1.jpg)"}}>
        <div class="container-fluid page-header-inner py-5">
            <div class="container text-center">
                <h1 class="display-3 text-white mb-3 animated slideInDown">Daily Activity Gallery </h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center text-uppercase">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item text-white active" aria-current="page">Daily Activity gallery</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    {/* <!-- Page Header End --> */}

    <section id="gallery" className='gallery-content'>
      <div className="container">
        <div style={{textAlign:'center'}} className='wow fadeIn' data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase">// Daily Activity //</h6>
              <h1 className="mb-4">
                Our Automotive Daily Activity Gallery
              </h1>
        </div>
        <div id="image-gallery" className="row wow fadeIn" data-wow-delay="0.1s">
          {images.map((src, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
              <div className="img-wrapper" onClick={() => handleImageClick(index)}>
                <img src={src} alt="Gallery Item" className="img-responsive" />
                <div className="img-overlay">
                  <i className="fa fa-plus-circle" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {overlayVisible && (
          <div id="overlay" onClick={() => setOverlayVisible(false)}>
            <img src={images[currentIndex]} alt="Large View" onClick={(e) => e.stopPropagation()} />
            <div id="prevButton" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>
              <i className="fa fa-chevron-left"></i>
            </div>
            <div id="nextButton" onClick={(e) => { e.stopPropagation(); handleNext(); }}>
              <i className="fa fa-chevron-right"></i>
            </div>
            <div id="exitButton" onClick={() => setOverlayVisible(false)}>
              <i className="fa fa-times"></i>
            </div>
          </div>
        )}
      </div>
    </section>
    <Footer />
    </div>
  )
}
