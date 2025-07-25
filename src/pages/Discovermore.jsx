import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa';

const Discovermore = () => {
  return (
    <>
      <div className="call-banner">
      <div className="call-banner-content container">
         <div class="car-road" >
  <div class="car">
    <div class="car-top">
      <div class="window">
      </div>  
    </div>  
    <div class="car-base">
    </div>
    <div class="wheel-left wheel">
       <div class="wheel-spike">
       </div> 
       <div class="wheel-center">
       </div>
    </div>
    <div class="wheel-right wheel">
       <div class="wheel-spike">
       </div> 
      <div class="wheel-center">
       </div>
    </div>
    <div class="head-light"></div>
  </div> 
  <div class="road">
  </div>
</div>  
        <div className="right-section animated-phone">
  <p className="small-text">
 
Get an Estimate For Your Service
  </p>
<div style={{display:'flex ',flexWrap:'wrap'}}>

  <div className="call-box">
    <div className="phone-circle">
      <FaPhoneAlt size={24} />
    </div>
    <div className="phone-info">
      <p style={{ marginBottom: '0px' }}>Call us Now</p>
      <h4>+0261 266 2999</h4>
    </div>
  </div>
  <div style={{margin:'10px 0px 0px 50px'}}>
    {/* <a href="/Services" class="btn btn-primary">Discover More</a> */}
     <a className="dedcription-btn" href="/Services">
                          <span className="name-descripeion">Discover More</span>
                          <div className="btn-icon heart">
                            <i className="fas fa-car"></i>
                          </div>
                        </a>
  </div>
</div>
</div>

        <div className="left-section">
          {/* <p className="small-text">
            <span className="slashes">///</span> IF ANY CAR RELATED ISSUES ARE BOTHERING
          </p>
          <h2 className="big-text">GIVE A CALL TO DUCATIBOX</h2> */}
        </div>
  
      

     
      </div>
    </div>
    </>
  )
}

export default Discovermore
