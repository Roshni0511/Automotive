import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const OurVision = () => {
  return (
    <>
      <Navbar />
                {/* <!-- Page Header Start --> */}
    <div class="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(assets/img/carousel-bg-1.jpg)"}}>
        <div class="container-fluid page-header-inner py-5">
            <div class="container text-center">
                <h1 class="display-3 text-white mb-3 animated slideInDown">Our Vision</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center text-uppercase">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item text-white active" aria-current="page">Our Vision</li>
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
           
                <div className="col-lg-6">
                    <h6 className="text-primary text-uppercase">// Our Vision //</h6>
                    <h1 className="mb-4"><span className="text-primary"> Committed </span> to a Seamless Automotive Experience</h1>
                    <p className="mb-4" style={{textAlign:'justify'}}>Our vision is to revolutionize the way people experience car services by making the process smoother, smarter, and more reliable. we aim to become a trusted name in the automotive industry — where customers receive not just repairs, but complete care with transparency, technology, and trust at the core. We envision a future where every vehicle owner enjoys a hassle-free journey, backed by our commitment to quality, innovation, and continuous improvement.our vision is to set new benchmarks in automotive care by delivering a service experience that is effortless, efficient, and trustworthy. We are committed to building a future where every customer feels confident and stress-free about their vehicle’s upkeep. Through modern technology, skilled professionals, and customer-first values, we strive to make car servicing a smooth journey — not a task. Our goal is to be more than just a service center — to be your reliable partner on every road ahead.





</p>
                 
                </div>
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
            </div>
        </div>
    </div>
    {/* <!-- mission End --> */}
      <Footer />
    </>
  )
}

export default OurVision
