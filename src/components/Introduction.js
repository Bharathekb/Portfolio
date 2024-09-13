import React from "react";
import Button from "../components/Button";
const Introduction = () => {
  const handleDownloadClick = () => {
    window.location.href = "http://bharathblog.unaux.com/";
  };
  return (
    <section className="Black-bg">
      <div className="container My-bio">
        <div className="d-flex justify-content-between align-items-center">
          <div className="My-bioleft">
            <h1 className="my-heading F-600">I'm Bharath E</h1>
            <h2 className="my-heading orange-color F-600">Web Developer</h2>
            <p className="my-para White-color">
              I Can Build Websites Responsively
            </p>
            <Button
              text="Download CV"
              className="mt-4 btn-orangebg"
              onClick={handleDownloadClick}
            />
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
