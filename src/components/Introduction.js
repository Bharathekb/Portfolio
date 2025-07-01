import React from "react";
import Button from "../components/Button";
const Introduction = () => {
  const handleDownloadClick = () => {
    window.location.href = "assets/Bharath-resume.pdf";
  };
  const handleblogClick = () => {
    window.location.href = "https://bharathportfolio.rf.gd/blog/";
  };
  return (
    <section className="Black-bg pt-78px overflow-H">
      <div className="container-fluid px-0 My-bio">
        <div className="d-flex justify-content-between align-items-center flexcolumn gap-3">
          <div className="My-bioleft My-pl50">
            <h1 className="my-heading F-600 mb-0">I'm Bharath Ekboti</h1>
            <h2 className="my-heading F-600">A <span className="orange-color">Web Developer</span> who crafts responsive, fast, and beautiful websites.</h2>
            <p className="my-para White-color">
            I turn ideas into interactive experiences.
            </p>
            <div className="mt-5 d-flex gap-4 justify-content-center justify-content-md-start">
              <Button
                text="Download CV"
                className="btn-orangebg"
                onClick={handleDownloadClick}
              />
              <Button
                text="Blog"
                className="btn-orangebg"
                onClick={handleblogClick}
              />
            </div>
          </div>
          <div className="My-bioright">
            <img src="./assets/my-profile.jpg" alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
