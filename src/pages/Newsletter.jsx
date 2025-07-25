import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Newsletter() {
  return (
    <div>
      <Navbar />
  {/* <!-- Page Header Start --> */}
      <div
        className="container-fluid page-header mb-5 p-0"
        style={{ backgroundImage: "url(assets/img/carousel-bg-2.jpg)" }}
      >
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              News letter
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>

                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  News letter
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

 <div className="newsletter-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
             <div className="wow zoomIn" data-wow-delay="0.6s" style={{textAlign:'center'}}>
      <h5 className="text-primary mb-3">// Subscribe to Our Newsletter //</h5>
      <h4>Get the latest car care tips, exclusive service offers, and updates
            from Automotive.</h4>
      </div>
         
        </div>
       
      </section>

  

      {/* Subscription Form */}
      <section className="form-section " style={{background:'#f6f8fc'}}>
  <div className="container">
     <div className="row">
       <div className="col-6">
          <h2>Join Our Newsletter</h2>
        <form className="newsletter-form">
         <div className="row">
             <div className="col-6">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="col-6">
            <input type="email" placeholder="Email Address" required />
          </div>
         </div>
          {/* <button >Subscribe Now</button> */}
          <div>
             <a class="dedcription-btn m-0" href="#" type="submit">
                <span class="name-descripeion">Subscribe Now</span>
                <div class="btn-icon heart">
                  <i class="fas fa-car"></i>
                </div>
              </a>
          </div>
        </form>
        <p className="privacy-note">
          We respect your privacy. Read our <a href="/Privacy_Policy">Privacy Policy</a>.
        </p>
      </div>

         <div className="col-6 hero-image">
          <img src="/assets/img/abc.png" alt="Car Newsletter" />
        </div>
   </div>
  </div>
      </section>


    {/* Benefits Section */}
      <div className='mt-5'>
        <div className="container">
        <section className="benefits">
        <h2>Why Subscribe?</h2>
        <ul>
          <li>🔧 Exclusive Discounts on Car Services</li>
          <li>🚘 Maintenance Reminders</li>
          <li>📅 Early Access to New Offers</li>
          <li>🛠️ Car Care Tips & Guides</li>
          <li>🚙 Be the First to Know About New Services</li>
        </ul>
      </section>
      </div>
      </div>

    </div>
      <Footer />
    </div>
  )
}
