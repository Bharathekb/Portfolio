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
    <section className="Black-bg">
      <div className="container My-bio">
        <div className="d-flex justify-content-between align-items-center flexcolumn">
          <div className="My-bioleft">
            <h1 className="my-heading F-600">I'm Bharath E</h1>
            <h2 className="my-heading orange-color F-600">Web Developer</h2>
            <p className="my-para White-color">
              I Can Build Websites Responsively
            </p>
            <div className="mt-4 d-flex gap-3 justify-content-center justify-content-md-start">
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
            <img src="./assets/my-profile.png" alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
