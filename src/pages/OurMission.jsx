import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const OurMission = () => {
  return (
    <>
      <Navbar />
          {/* <!-- Page Header Start --> */}
    <div class="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(assets/img/carousel-bg-1.jpg)"}}>
        <div class="container-fluid page-header-inner py-5">
            <div class="container text-center">
                <h1 class="display-3 text-white mb-3 animated slideInDown">Our Mission</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center text-uppercase">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item text-white active" aria-current="page">Our Mission</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    {/* <!-- Page Header End --> */}

     {/* <!-- mission Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 pt-4" style={{ minHeight: "400px" }}>
  <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
    <img
      className="position-absolute img-fluid w-100 h-100 image-hover-zoom"
      src="assets/img/auto-new-img/about.jpg"
      style={{ objectFit: "cover" }}
      alt=""
    />
  </div>
</div>
                <div className="col-lg-6">
                    <h6 className="text-primary text-uppercase">// Our Mission //</h6>
                    <h1 className="mb-4"><span className="text-primary"> Keeping </span>You Moving with Care & Expertise</h1>
                    <p className="mb-4" style={{textAlign:'justify'}}>our mission is simple — to keep you moving with unmatched care and expertise. We believe every vehicle deserves top-quality service, and every customer deserves complete peace of mind. With a team of skilled professionals, the latest tools, and a commitment to honesty, we ensure that your car stays road-ready and reliable. Whether it's routine maintenance or major repairs, we handle every job with precision and dedication, because your safety and satisfaction drive everything we do.We’re not just in the business of fixing cars — we’re here to build trust, one service at a time.  we combine technical know-how with genuine customer care to deliver a seamless automotive experience. Our goal is to make vehicle maintenance stress-free, efficient, and reliable, so you can focus on the road ahead. With every inspection, repair, or upgrade, we bring a level of attention and expertise that keeps your car — and your confidence — running smoothly.



</p>
                 
                </div>
            </div>
        </div>
    </div>
    {/* <!-- mission End --> */}
      <Footer />
    </>
  )
}

export default OurMission
