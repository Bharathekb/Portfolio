import React from "react";

const Aboutme = () => {
  return (
    <div>
      <section className="about-me py-4 pb-3 pt-xl-5 pb-xl-0 mt-xl-5 ">
        <div className="container">
          <div className="d-flex gap-5 flex-column PF-column-reverse">
            <div className="L-sidecontent">
              <div className="Img-border Img-border1"></div>
            </div>
            <div className="R-sidecontent">
              <div className="data-div">
                <h2 className="my-heading">- Profile Summary</h2>
                <p className="my-para mb-3">
                  <span className="F-600">Name:</span> Bharath chandra
                </p>
                <p className="my-para mb-3">
                  <span className="F-600">Job:</span> UI developer
                </p>
                <div className="mb-4">
                  <h3 className="heading-3 F-600">UI developer</h3>
                  <hr className="Myline" />
                  <p className="my-para mb-3">
                    I am a dedicated UI Developer with 3 years of experience at
                    COA Network Private Limited, specializing in building
                    responsive, visually appealing, and user-friendly web
                    interfaces. I transform design concepts into functional
                    digital solutions with a strong focus on seamless user
                    experience, performance, and mobile responsiveness.
                  </p>
                  <p className="my-para mb-3">
                    My core skills include HTML, CSS, and Bootstrap, which I use
                    to design structured, responsive, and visually appealing
                    layouts. I ensure websites and applications maintain their
                    aesthetic and functionality across various devices, focusing
                    on mobile optimization and responsive design.
                  </p>
                </div>
                <div className="mb-3">
                  <h3 className="heading-3 F-600">Experience</h3>
                  <hr className="Myline" />
                  <p className="my-para mb-3">
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
        </div>
      </section>
      <section className="about-me py-4 py-xl-5 FA-bg">
        <div className="container">
          <div className="d-flex gap-5 flex-column">
            <div className="L-sidecontent">
              <div className="Img-border Img-border2"></div>
            </div>
            <div className="R-sidecontent">
              <div className="data-div">
                <h2 className="my-heading">- About Me</h2>
                <p className="my-para mb-3">
                  <span className="F-600">Name:</span> Ekboti Bharath Chandra
                </p>
                <div className="mb-4">
                  <h3 className="heading-3 F-600">Academic Background</h3>
                  <hr className="Myline" />
                  <p className="my-para mb-3">
                    SSC Passed Out With 80% In 2013 Z.P.H.S High School
                  </p>
                  <p className="my-para mb-3">
                    Intermediate (Mpc) Passed Out With 69% In 2015 T.G Model
                    Govt College
                  </p>
                  <p className="my-para mb-3">
                    B.SC (Mpcs) Passed Out With 66% In 2020 Haindavi Degree & Pg
                    College Champapet, Hyderabad
                  </p>
                </div>
                <div className="mb-3">
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
                  <p className="my-para">
                    <span className="F-600">Nationality:</span> Indian
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

export default Aboutme;
