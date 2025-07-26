import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Blog() {
   const blogData = [
  {
    img: "/assets/img/gallery-19.jpg",
    alt: "Engine Diagnostics",
    title: "Understanding Engine Diagnostic Tools",
    folder: "Mechanical",
    comments: 14,
    desc: "Explore how modern diagnostic tools help detect issues early, improve vehicle performance, and reduce repair costs.",
  },
  {
    img: "/assets/img/gallery-3.jpg",
    alt: "Paint & Body Repair",
    title: "Top 5 Body Repair Mistakes to Avoid",
    folder: "Body Shop",
    comments: 9,
    desc: "From mismatched paint to improper dent repairs, learn the common mistakes in bodywork and how professionals fix them.",
  },
  {
    img: "/assets/img/gallery-6.jpg",
    alt: "Tyre Maintenance",
    title: "How to Choose the Right Tyres",
    folder: "Tyre Service",
    comments: 11,
    desc: "Choosing the correct tyres ensures better grip, mileage, and safety. Here’s a complete guide based on your car type.",
  },
 
];
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
              Our Blog
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
                  Blog
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- Blog Start --> */}
       <div className="container pt-5">
      <div className="d-flex flex-column text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="text-primary text-uppercase">// Recent Blog //</h6>
        <h1 className="mb-0">Latest From Our Blog</h1>
      </div>

      <div className="row pb-3 wow fadeInUp" data-wow-delay="0.3s">
        {blogData.map((blog, index) => (
          <div className="col-lg-4 mb-4" key={index}>
            <div className="card mb-2 p-3">
              <a href="/BlogDetails"><img className="card-img-top" src={blog.img} alt={blog.alt} /></a>
              <div className="card-body bg-secondary d-flex justify-content-between align-items-center p-0">
                <h6 className="card-title text-white text-truncate m-0 ml-3 ps-3"><a href="/BlogDetails" className="text-white">{blog.title}</a></h6>
                <a
                  href="#"
                  className="fa fa-link d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white text-decoration-none m-0 ml-auto"
                  style={{ width: "45px", height: "45px" }}
                ></a>
              </div>
              <div className="card-footer py-3 px-4">
                <div className="d-flex justify-content-between mb-2">
                  <small className="mr-3">
                    <i className="fa fa-user text-primary"></i> Admin
                  </small>
                  <small className="mr-3">
                    <i className="fa fa-folder text-primary"></i> {blog.folder}
                  </small>
                  <small className="mr-3">
                    <i className="fa fa-comments text-primary"></i> {blog.comments}
                  </small>
                </div>
                <p className="m-0">{blog.desc}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="col-lg-12">
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center mb-4">
              <li className="page-item disabled">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">1</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">2</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">3</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

      {/* <!-- Blog End --> */}

      <Footer />
    </div>
  );
}
