import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faBookmark } from "@fortawesome/free-solid-svg-icons";
const Experience = () => {
  return (
    <section className="Experience py-4 Black-bg my-4">
      <div className="container">
        <div className="d-flex py-5 gap-5">
          <div className="L-sidecontent text-center">
            <div className="Ex-box">
              <div className="FS-24 mb-2">
                <FontAwesomeIcon icon={faCalendarDays} size="2x" />
              </div>
              <p className="FS-42">2+</p>
              <p className="FS-24">Years Of Experience</p>
            </div>
          </div>
          <div className="R-sidecontent text-center">
            <div className="Ex-box">
              <div className="FS-24 mb-2">
                <FontAwesomeIcon icon={faBookmark} size="2x" />
              </div>
              <p className="FS-42">10+</p>
              <p className="FS-24">Projects Done</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
