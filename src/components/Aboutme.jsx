import React from "react";

const Aboutme = () => {
  return (
    <section className="Img-border Img-border1">
      <div className="about-me py-4 py-xl-5">
        <div className="container">
          <div className="d-flex gap-5 PF-column-reverse flex-column ABT-box">
            <div className="L-sidecontent">
              <div className="data-div">
                 <h2 className="my-heading mb-3">Profile Summary</h2>
                <p className="my-para mb-2">
                  <span className="F-600">Name:</span> Bharath chandra
                </p>
                  <p className="my-para mb-3">
                  <span className="F-600">Job:</span> UI developer
                </p>
                  <div className="my-data">
                <div className="mb-4">
                  <hr className="Myline" />
                  <p className="my-para mb-3">
                    I am a dedicated UI Developer with 3 years of experience at
                    COA Network Private Limited, specializing in building
                    responsive, visually appealing, and user-friendly web
                    interfaces. I transform design concepts into functional
                    digital solutions with a strong focus on seamless user
                    experience, performance, and mobile responsiveness.
                  </p>
                </div>
                 <div className="mb-0">
                  <h3 className="heading-3 F-600">Experience</h3>
                  <hr className="Myline" />
                  <p className="my-para mb-0">
                    Over the past 3 years, I have contributed to multiple
                    projects at COA Network Private Limited, working closely
                    with designers and backend developers to deliver
                    high-quality UI components. I played a key role in
                    implementing structured and responsive layouts using HTML,
                    CSS, and Bootstrap, while enhancing interactivity with
                    JavaScript and jQuery. My focus has always been on
                    performance optimization and ensuring consistency across
                    devices and browsers.
                  </p>
                </div>
              </div>
              </div>
            </div>
            <div className="R-sidecontent">
               <div className="data-div">
                <h2 className="my-heading  mb-3">About Me</h2>
                <div className="mb-4">
                  <h3 className="heading-3 F-600">Academic Background</h3>
                  <hr className="Myline" />
                  <p className="my-para mb-3">
                    SSC passed out with 80% In 2013 Z.P.H.S high school
                  </p>
                  <p className="my-para mb-3">
                    Intermediate (Mpc) passed out with 69% in 2015 T.G model
                    govt college
                  </p>
                  <p className="my-para mb-3">
                    B.SC (Mpcs) passed out with 66% in 2020 haindavi degree & Pg
                    college champapet, Hyderabad
                  </p>
                </div>
                <div className="mb-0">
                  <h3 className="heading-3 F-600">Profile</h3>
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
                  <p className="my-para mb-0">
                    <span className="F-600">Nationality:</span> Indian
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
