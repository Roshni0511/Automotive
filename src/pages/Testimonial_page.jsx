import React from 'react'
import Navbar from './Navbar'
import Testimonial from './Testimonial'
import Footer from './Footer'

export default function Testimonial_page() {
  return (
    <div>
      <Navbar />
          {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(assets/img/carousel-bg-1.jpg)"}}>
        <div className="container-fluid page-header-inner py-5">
            <div className="container text-center">
                <h1 className="display-3 text-white mb-3 animated slideInDown">Testimonial</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center text-uppercase">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">Testimonial</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    {/* <!-- Page Header End --> */}
      <Testimonial />

      <Footer />
    </div>
  )
}
