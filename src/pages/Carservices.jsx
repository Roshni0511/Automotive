import React from 'react'

const Carservices = () => {
  return (
   <>
  {/* Responsive CSS */}
  <style>
    {`
      .feature-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 0px;
      }

      .single-content-feature {
        flex: 1 1 100%;
      }

      @media (min-width: 768px) {
        .single-content-feature {
          flex: 1 1 calc(50% - 15px);
        }
      }
  
      .xb-item--inner {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 15px;
      }

      .xb-item--icon img {
        width: 40px;
        height: 40px;
        object-fit: contain;
      }

      .xb-item--title {
        margin: 0;
        margin-bottom: 5px;
        font-size: 22px;
        color: #00204A;
      }

      .xb-item--text p {
        margin: 0;
        font-size: 16px;
        color: #666;
      }
    `}
  </style>

  <div
    className="single-content__feature"
    style={{ paddingTop: "30px" }}
  >
    <div className="feature-grid">
      {/* Card 1 */}
      <div className="single-content-feature">
        <div className="xb-item--inner color ul_li">
          <div className="xb-item--icon">
            <img src="/assets/img/customer-service.png" alt="icon" />
          </div>
          <div className="xb-item--text" style={{ flex: 1 }}>
            <h3 className="xb-item--title">Instant Car Services</h3>
            <p>Get fast and reliable service for your car without any hassle.</p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="single-content-feature">
        <div className="xb-item--inner color-2 ul_li">
          <div className="xb-item--icon">
            <img src="/assets/img/standards.png" alt="icon" />
          </div>
          <div className="xb-item--text" style={{ flex: 1 }}>
            <h3 className="xb-item--title">Quality Service</h3>
            <p>Best service & quality checking process will improve performance.</p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="single-content-feature">
        <div className="xb-item--inner color-3 ul_li">
          <div className="xb-item--icon">
            <img src="/assets/img/link.png" alt="icon" />
          </div>
          <div className="xb-item--text" style={{ flex: 1 }}>
            <h3 className="xb-item--title">Expert Team At Work</h3>
            <p>Our experts can help you better with any minor car errors.</p>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="single-content-feature">
        <div className="xb-item--inner color-4 ul_li">
          <div className="xb-item--icon">
            <img src="/assets/img/quality.png" alt="icon" />
          </div>
          <div className="xb-item--text" style={{ flex: 1 }}>
            <h3 className="xb-item--title">Quality Cost Service</h3>
            <p>Best car services at reasonable rate compare to any others.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Carservices
