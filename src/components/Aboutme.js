import React from "react";

const Aboutme = () => {
  return (
    <section className="about-me py-4 my-4">
      <div className="container">
        <div className="d-flex py-5 gap-5">
          <div className="L-sidecontent">
            <div className="Img-border">
              <img
                src="./assets/My-pic.jpg"
                className="w-100 img-position"
                alt="my-pic"
              />
            </div>
          </div>
          <div className="R-sidecontent">
            <div className="data-div">
              <h2 className="my-heading">- About Me</h2>
              <p className="my-para mb-3">
                <span className="F-600">Name:</span> Ekboti Bharath Chandra
              </p>
              <div className="mb-4">
                <h3 className="heading-3 red-color F-600">
                  Academic Background
                </h3>
                <hr className="Myline" />
                <p className="my-para mb-3">
                  SSC Passed Out With 80% In 2013 Z.P.H.S High School
                </p>
                <p className="my-para mb-3">
                  Intermediate (Mpc) Passed Out With 69% In 2015 T.G Model Govt
                  College
                </p>
                <p className="my-para mb-3">
                  B.SC (Mpcs) Passed Out With 66% In 2020 Haindavi Degree & Pg
                  College Champapet, Hyderabad
                </p>
              </div>
              <div className="mb-3">
                <h3 className="heading-3 red-color F-600">Profile</h3>
                <hr className="Myline" />
                <p className="my-para mb-3">
                  <span className="F-600">Language:</span> Telugu, English,
                  Hindi, Marathi
                </p>
                <p className="my-para mb-3">
                  <span className="F-600">Fathers Name:</span> Balachander
                </p>
                <p className="my-para mb-3">
                  <span className="F-600">Date Of Birth:</span> 13-March-1998
                </p>
                <p className="my-para mb-3">
                  <span className="F-600">Marital Status:</span> Single
                </p>
                <p className="my-para">
                  <span className="F-600">Nationality:</span> Indian
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
