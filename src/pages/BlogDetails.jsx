import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function BlogDetails() {
  return (
    <div>
      <Navbar />

         {/* <!-- Page Header Start --> */}
      <div
        class="container-fluid page-header mb-5 p-0"
        style={{ backgroundImage: "url(assets/img/carousel-bg-1.jpg)" }}
      >
        <div class="container-fluid page-header-inner py-5">
          <div class="container text-center">
            <h1 class="display-3 text-white mb-3 animated slideInDown">
             Blog Details
            </h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb justify-content-center text-uppercase">
                <li class="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li
                  class="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Blog Details
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

         {/* <!-- Detail Start --> */}
    <div class="container py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="row">
            <div class="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                <div class="d-flex flex-column text-left mb-4">
                    <h5 class="text-primary mb-3">// Blog Detail //</h5>
                    <h1 className="mb-4">Understanding the Role of Hydraulic Systems in Modern Machinery</h1>
                    <div class="d-index-flex mb-2">
                        <span class="mr-3"><i class="fa fa-user text-primary"></i> Admin</span>
                        <span class="mr-3"><i class="fa fa-folder text-primary"></i>Mechanical Engineering</span>
                        <span class="mr-3"><i class="fa fa-comments text-primary"></i> 15</span>
                    </div>
                </div>
                <div class="mb-5 wow fadeIn" data-wow-delay="0.3s">
                    <img class="img-thumbnail mb-4 p-3" src="assets/img/carousel-1.jpg" alt="Image" />
                    <p className="wow fadeIn" data-wow-delay="0.3s"> Hydraulic systems have become the backbone of modern industrial and automotive applications due to their unmatched ability to generate and control large amounts of force with high precision. These systems operate by transmitting energy through incompressible fluids, usually specialized hydraulic oils, which allows machines to perform heavy-duty tasks with minimal mechanical complexity. From pressing metals in manufacturing plants to lifting entire vehicles in service stations, hydraulic technology ensures reliability, consistency, and speed. In fact, many advanced machines—from construction excavators to airplane landing gear—rely heavily on hydraulics for their core functionality. What makes these systems particularly valuable is their flexibility; the same core principles can be applied to devices ranging from small handheld tools to massive industrial equipment.  </p>
  
                   
                    <h2 class="mb-4 wow fadeIn" data-wow-delay="0.3s">Applications in the Automotive Industry</h2>
                    <img class="img-thumbnail p-3 w-50 float-left mr-4 mb-3" src="assets/img/blog-1.jpg" alt="Image" />
                    <p className="wow fadeIn" data-wow-delay="0.3s">   In the automotive sector, hydraulic systems play a vital role in ensuring vehicle performance, safety, and comfort. One of the most common and critical applications is in the braking system, where hydraulic brake fluid is used to transfer force from the brake pedal to the brake calipers, allowing for smooth and responsive stopping power. This ensures that drivers can effectively control the vehicle even in emergency situations. Additionally, power steering systems utilize hydraulic pressure to assist the driver in turning the steering wheel, especially at low speeds or while maneuvering in tight spaces. This not only makes driving easier but also reduces strain and fatigue on the driver during long journeys or while navigating through congested urban environments.  Moreover, hydraulic suspension systems are designed to absorb shocks and vibrations caused by uneven road surfaces, providing a smoother and more comfortable ride for passengers. These systems adjust dynamically to road conditions and driving behavior, enhancing both handling and ride quality. In high-performance and luxury vehicles, advanced hydraulic suspension technologies allow the car to adapt its height and stiffness, improving aerodynamics, cornering stability, and overall driving experience. 
    </p>

                    <h3 class="mb-4 wow fadeIn" data-wow-delay="0.3s">Maintenance Tips for Hydraulic Systems</h3>
                    <img class="img-thumbnail p-3 w-50 float-right ml-4 mb-3" src="assets/img/blog-1.jpg" alt="Image" />
                    <p className="wow fadeIn" data-wow-delay="0.3s"> Regular maintenance of hydraulic systems is essential to ensure their long-term performance, reliability, and safety. This includes routine inspections, monitoring fluid levels, checking for signs of wear or damage, and timely replacement of hydraulic filters. Hydraulic fluid serves not only as a medium for power transmission but also for lubrication and heat dissipation. Therefore, keeping the fluid clean and at the correct level is crucial. Contaminated or degraded fluid can lead to poor system performance, component damage, and even complete system failure.
  It is important to inspect hoses, seals, and connections for any signs of leaks, cracks, or corrosion. Even a small leak can reduce system efficiency and lead to a gradual loss of power or control. Overheating is another common issue that can result from poor fluid quality, blocked filters, or excessive system load. If left unaddressed, overheating can damage internal components and significantly shorten the system’s lifespan.
</p>
                </div>
                
                <div class="media bg-primary text-white mb-5 p-4 p-md-5 d-flex wow fadeIn" data-wow-delay="0.3s">
                    <img src="assets/img/user.jpg" alt="Image" class="img-thumbnail p-3 mr-4 mt-1 bg-primary" style={{width:"100px"}} />
                    <div class="media-body">
                        <h5 class="mb-3">John Engineer</h5>
                        <p class="m-0">With over 15 years in mechanical engineering, John shares deep insights on hydraulic systems, their evolution, and applications in modern machinery and vehicles.</p>
                    </div>
                </div>

               <div className="mb-5">
    <h4 className="mb-4">3 Comments</h4>

    <div className="media mb-4 d-flex align-items-start">
      <img src="assets/img/user.jpg" alt="User" className="img-thumbnail p-2 mr-3 mt-1" style={{ width: "60px" }} />
      <div className="media-body">
        <h6>Jane Smith <small><i>10 July 2025 at 09:45am</i></small></h6>
        <p>This article clarified a lot for me about how hydraulics power the tools we use every day. Very helpful and informative!</p>
        <a href="#" className="btn btn-primary py-1 px-2">Reply</a>
      </div>
    </div>

    <div className="media mb-4 d-flex align-items-start wow fadeIn" data-wow-delay="0.3s">
      <img src="assets/img/user.jpg" alt="User" className="img-thumbnail p-2 mr-3 mt-1" style={{ width: "60px" }} />
      <div className="media-body">
        <h6>Rahul Patel <small><i>09 July 2025 at 03:30pm</i></small></h6>
        <p>Great piece! Would love to see a follow-up on common hydraulic issues and how to diagnose them.</p>
        <a href="#" className="btn btn-primary py-1 px-2">Reply</a>

        <div className="media mt-4 d-flex align-items-start">
          <img src="assets/img/user.jpg" alt="User" className="img-thumbnail p-2 mr-3 mt-1" style={{ width: "60px" }} />
          <div className="media-body">
            <h6>Admin <small><i>09 July 2025 at 05:00pm</i></small></h6>
            <p>Thank you Rahul! We'll be covering maintenance diagnostics in our next blog post. Stay tuned!</p>
            <a href="#" className="btn btn-primary py-1 px-2">Reply</a>
          </div>
        </div>
      </div>
    </div>
  </div>

                <div style={{padding: "30px", background: "#f6f6f6"}} className="wow fadeIn" data-wow-delay="0.3s">
                    <h4 class="mb-4">Leave a comment</h4>
                    <form>
                        <div class="form-group">
                            <label for="name">Name *</label>
                            <input type="text" class="form-control" id="name" />
                        </div>
                        <div class="form-group">
                            <label for="email">Email *</label>
                            <input type="email" class="form-control" id="email" />
                        </div>
                        <div class="form-group">
                            <label for="website">Website</label>
                            <input type="url" class="form-control" id="website" /> 
                        </div>

                        <div class="form-group">
                            <label for="message">Message *</label>
                            <textarea id="message" cols="30" rows="5" class="form-control"></textarea>
                        </div>
                        <div class="form-group mb-0">
                            <input type="submit" value="Leave Comment" class="btn btn-primary px-3" />
                        </div>
                    </form>
                </div>
            </div>

            <div className="col-lg-4 mt-5 mt-lg-0 wow fadeIn" data-wow-delay="0.3s">
  <div className="mb-5">
    <form action="">
      <div className="input-group">
        <input type="text" className="form-control form-control-lg" placeholder="Search blog topics..." />
        <div className="input-group-append">
          <span className="input-group-text bg-transparent text-primary" style={{ height: '48px', borderRadius: '0 4.8px 4.8px 0' }}>
            <i className="fa fa-search"></i>
          </span>
        </div>
      </div>
    </form>
  </div>

  <div className="mb-5 wow fadeIn" data-wow-delay="0.3s">
    <h4 className="mb-4">Categories</h4>
    <ul className="list-group">
      <li className="list-group-item p-3 d-flex justify-content-between align-items-center">
        Engine Repair
        <span className="badge badge-primary badge-pill">120</span>
      </li>
      <li className="list-group-item p-3 d-flex justify-content-between align-items-center">
        Hydraulic Systems
        <span className="badge badge-primary badge-pill">87</span>
      </li>
      <li className="list-group-item p-3 d-flex justify-content-between align-items-center">
        Electrical Systems
        <span className="badge badge-primary badge-pill">102</span>
      </li>
      <li className="list-group-item p-3 d-flex justify-content-between align-items-center">
        Preventive Maintenance
        <span className="badge badge-primary badge-pill">66</span>
      </li>
      <li className="list-group-item p-3 d-flex justify-content-between align-items-center">
        Diagnostics
        <span className="badge badge-primary badge-pill">44</span>
      </li>
    </ul>
  </div>

  <div className="mb-5">
    <img src="assets/img/blog-1.jpg" alt="Maintenance Tips" className="img-thumbnail p-3" />
  </div>

  <div className="mb-5">
    <h4 className="mb-4">Recent Post</h4>

    {[1, 2, 3, 4, 5].map((_, index) => (
      <div className="d-flex align-items-center border-bottom mb-3 pb-3" key={index}>
        <img className="img-thumbnail p-2" src="assets/img/blog-1.jpg" style={{ width: "80px", height: "80px" }} alt="Recent Post" />
        <div className="d-flex flex-column pl-3">
          <a className="font-weight-bold text-secondary mb-2" href="">
            5 Key Things Every Car Owner Should Know About Maintenance
          </a>
          <div className="d-flex">
            <small className="mr-3"><i className="fa fa-user text-muted"></i> Admin</small>
            <small className="mr-3"><i className="fa fa-folder text-muted"></i> Auto Tips</small>
            <small className="mr-3"><i className="fa fa-comments text-muted"></i> {15 + index}</small>
          </div>
        </div>
      </div>
    ))}
  </div>

  <div className="mb-5">
    <img src="assets/img/blog-1.jpg" alt="Workshop" className="img-thumbnail p-3" />
  </div>

  <div className="mb-5">
    <h4 className="mb-4">Tag Cloud</h4>
    <div className="d-flex flex-wrap m-n1">
      <a href="" className="btn btn-outline-primary m-1">Hydraulics</a>
      <a href="" className="btn btn-outline-primary m-1">Repairs</a>
      <a href="" className="btn btn-outline-primary m-1">Maintenance</a>
      <a href="" className="btn btn-outline-primary m-1">Diagnostics</a>
      <a href="" className="btn btn-outline-primary m-1">Servicing</a>
      <a href="" className="btn btn-outline-primary m-1">Automotive</a>
    </div>
  </div>

  <div className="mb-5">
    <img src="assets/img/blog-1.jpg" alt="Garage Tools" className="img-thumbnail p-3" />
  </div>

  <div>
    <h4 className="mb-4">Plain Text</h4>
    <p>
      Keeping your vehicle in top shape goes beyond just oil changes. Routine inspections, component checks, and performance diagnostics all contribute to a reliable and safe driving experience. From brake performance to fluid efficiency, understanding your car's needs ensures longevity and peace of mind on the road. Trust expert care and regular service to keep your machine running like new.
    </p>
  </div>
</div>

        </div>
    </div>
 
    {/* <!-- Detail End --> */}
      <Footer />
    </div>
  )
}
