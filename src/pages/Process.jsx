import React from 'react';

export default function Process() {
  return (
    <div className='process-content'>
      <section className="work-porcess-area section">
        <div className="container">
          <div className="section-header  wow fadeInUp" data-wow-delay="0.1s">
          
             <h6 className="text-primary text-uppercase ">
                // Our Work Process //
              </h6>
              <h1 className="mb-5">How we handle your vehicle from check-in to handover.</h1>
          </div>
          <div className="process-info wow fadeInUp" data-wow-delay="0.1s">
            <div className="row">
              <div className="col-md-3">
                <div className="single-process first text-center">
                  <i className="fas fa-search"></i>
                  <h4>Diagnose</h4>
                </div>
              </div>
              <div className="col-md-3">
                <div className="single-process second text-center">
                  <i className="fas fa-tools"></i>
                  <h4>Repair & Service</h4>
                </div>
              </div>
              <div className="col-md-3">
                <div className="single-process thard text-center">
                  <i className="fas fa-shield-alt"></i>
                  <h4>Quality Check</h4>
                </div>
              </div>
              <div className="col-md-3">
                <div className="single-process last text-center">
                  <i className="fas fa-car-side"></i>
                  <h4>Delivery</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
