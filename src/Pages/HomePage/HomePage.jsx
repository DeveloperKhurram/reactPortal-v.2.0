import React from "react";
import "./homePage.css";
import "./responsive.css";
import "./animate.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="breadcumb-section pt-0">
        <div className="banner cta-service-v1 cta-banner mx-auto maxw1700 pt120 pb120 bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg px30-lg">
          <img
            className="left-top-img wow zoomIn"
            src="src/images/left-top.png"
            alt="vector"
            style={{ visibility: "visible", animationName: "zoomIn" }}
          />
          <img
            className="right-bottom-img wow zoomIn"
            src="src/images/right-bottom.png"
            alt="vector"
            style={{ visibility: "visible", animationName: "zoomIn" }}
          />
          <img
            className="service-v1-vector bounce-y d-none d-lg-block"
            src="src/images/vector-service-v1.png"
            alt="vector"
            style={{ visibility: "visible", animationName: "bounceY" }}
          />
          <div className="container">
            <div
              className="row wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <div className="col-xl-5 content">
                <div className="position-relative">
                  <h2>Freelancer List</h2>
                  <p className="text mb-0">
                    All the Lorem Ipsum generators on the Internet tend to
                    repeat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
