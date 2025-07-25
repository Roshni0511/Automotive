import React from 'react'

const Carservices = () => {
  return (
    <>
           <div
                  className="single-content__feature ul_li"
                  style={{ paddingTop: "30px" }}
                >
                  <div className="single-content-feature">
                    <div
                      className="xb-item--inner color ul_li"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      {/* Icon section */}
                      <div
                        className="xb-item--icon"
                        
                      >
                        <img
                          src="/assets/img/customer-service.png"
                          alt="icon"
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "contain",
                          }}
                        />
                      </  div>
                      {/* Text section */}
                      <div className="xb-item--text" style={{ flex: 1 }}>
                        <h3
                          className="xb-item--title"
                          style={{
                            margin: 0,
                            marginBottom: "5px",
                            fontSize: "22px",
                            color: "#00204A",
                          }}
                        >
                          Instant Car Services
                        </h3>
                        <p
                          style={{ margin: 0, fontSize: "16px", color: "#666" }}
                        >
                          Get fast and reliable service for your car without any
                          hassle.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="single-content-feature">
                    <div
                      className="xb-item--inner color-2 ul_li"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      {/* Icon section */}
                      <div
                        className="xb-item--icon"
                       
                      >
                        <img
                          src="/assets/img/standards.png"
                          alt="icon"
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "contain",
                          }}
                        />
                      </div>

                      {/* Text section */}
                      <div className="xb-item--text" style={{ flex: 1 }}>
                        <h3
                          className="xb-item--title"
                          style={{
                            margin: 0,
                            marginBottom: "5px",
                            fontSize: "22px",
                            color: "#00204A",
                          }}
                        >
                          Quality Service
                        </h3>
                        <p
                          style={{ margin: 0, fontSize: "16px", color: "#666" }}
                        >
                          Best service & quality checking process will improve
                          performance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="single-content-feature">
                    <div
                      className="xb-item--inner color-3 ul_li"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      {/* Icon section */}
                      <div
                        className="xb-item--icon"
                      
                      >
                        <img
                          src="/assets/img/link.png"
                          alt="icon"
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "contain",
                          }}
                        />
                      </div>

                      {/* Text section */}
                      <div className="xb-item--text" style={{ flex: 1 }}>
                        <h3
                          className="xb-item--title"
                          style={{
                            margin: 0,
                            marginBottom: "5px",
                            fontSize: "22px",
                            color: "#00204A",
                          }}
                        >
                          Expert Team At Work
                        </h3>
                        <p
                          style={{ margin: 0, fontSize: "16px", color: "#666" }}
                        >
                          Our experts can help you better with any minor car
                          errors.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*   */}

                  <div className="single-content-feature">
                    <div
                      className="xb-item--inner color-4  ul_li"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      {/* Icon section */}
                      <div
                        className="xb-item--icon"
                       
                      >
                        <img
                          src="/assets/img/quality.png"
                          alt="icon"
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "contain",
                          }}
                        />
                      </div>

                      {/* Text section */}
                      <div className="xb-item--text" style={{ flex: 1 }}>
                        <h3
                          className="xb-item--title"
                          style={{
                            margin: 0,
                            marginBottom: "5px",
                            fontSize: "22px",
                            color: "#00204A",
                          }}
                        >
                          Quality Cost Service
                        </h3>
                        <p
                          style={{ margin: 0, fontSize: "16px", color: "#666" }}
                        >
                          Best car services at reasonable rate compare to any
                          others.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default Carservices
