import React, { useEffect } from 'react';
import counterUp from 'counterup2';
export default function Counter() {
      useEffect(() => {
        const counters = document.querySelectorAll('[data-toggle="counter-up"]');
        counters.forEach((el) => {
          counterUp(el, {
            duration: 4000,
            delay: 10,
          });
        });
      }, []);
  return (
    <div>
       <div className="container-fluid fact bg-dark my-5 py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
            <i className="fa fa-check fa-2x text-white mb-3"></i>
            <h2 className="text-white mb-2" data-toggle="counter-up">20+</h2>
            <p className="text-white mb-0 " style={{textAlign:'center'}}>Years Experience</p>
          </div>
          <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
            <i className="fa fa-users-cog fa-2x text-white mb-3"></i>
            <h2 className="text-white mb-2" data-toggle="counter-up">990+</h2>
            <p className="text-white mb-0" style={{textAlign:'center'}}>Tons Of Customers</p>
          </div>
          <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
            <i className="fa fa-users fa-2x text-white mb-3"></i>
            <h2 className="text-white mb-2" data-toggle="counter-up">100+</h2>
            <p className="text-white mb-0" style={{textAlign:'center'}}>Modern Equipments</p>
          </div>
          <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
            <i className="fa fa-car fa-2x text-white mb-3"></i>
            <h2 className="text-white mb-2" data-toggle="counter-up">500+</h2>
            <p className="text-white mb-0" style={{textAlign:'center'}}>Vehicles Service Per Month</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
