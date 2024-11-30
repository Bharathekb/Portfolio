import React from "react";

const Aboutme = () => {
  return (
    <div>
      <section className="about-me py-4 pb-3 my-3 pt-xl-5 pb-xl-0 mt-xl-5">
        <div className="container">
          <div className="d-flex gap-5 PF-flex-column PF-column-reverse">
            <div className="L-sidecontent">
              <div className="Img-border">
                <img
                  src="./assets/Profile-summary-min.jpg"
                  className="w-100 img-position img-fluid"
                  alt="my-pic"
                />
              </div>
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
                  <h3 className="heading-3 red-color F-600">UI developer</h3>
                  <hr className="Myline" />
                  <p className="my-para mb-3">
                    I am a dedicated UI Developer at COA Network Private
                    Limited, specializing in creating visually appealing,
                    interactive, and user-friendly web interfaces. With a strong
                    focus on delivering seamless user experiences, I combine
                    creativity and technical expertise to transform ideas into
                    functional digital solutions.
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
                  <h3 className="heading-3 red-color F-600">Experience</h3>
                  <hr className="Myline" />
                  <p className="my-para mb-3">
                    I have 2 years of experience as a UI Developer at COA
                    Network Private Limited, where I contributed to multiple
                    projects by creating intuitive and responsive user
                    interfaces. My role involved close collaboration with
                    backend developers and designers to ensure seamless
                    integration of functionality and design, resulting in
                    high-quality digital products.
                  </p>
                  <p className="my-para mb-3">
                    In these projects, I utilized my expertise in HTML, CSS,
                    Bootstrap, JavaScript, and jQuery to build engaging and
                    user-friendly web interfaces. I ensured designs were
                    accurately translated into functional code while optimizing
                    for performance and cross-device compatibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-me py-4 pb-3 my-3 py-xl-5 my-xl-5">
        <div className="container">
          <div className="d-flex gap-5 my-row-reverse PF-flex-column PF-column-reverse">
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
                    Intermediate (Mpc) Passed Out With 69% In 2015 T.G Model
                    Govt College
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
    </div>
  );
};

export default Aboutme;
