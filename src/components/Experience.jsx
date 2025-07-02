import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faBookmark } from "@fortawesome/free-solid-svg-icons";
const Experience = () => {
  return (
    <section className="Experience">
      <div className="bg-overlay py-4">
        <div className="container">
          <div className="row justify-content-center py-5">
            <div className="col-md-4 text-center">
              <div className="Ex-box">
                <div className="FS-24 My-icon">
                  <FontAwesomeIcon icon={faCalendarDays} size="2x" />
                </div>
                <h3 class="FS-42 counter">3</h3>
                <p className="FS-24">Years Of Experience</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="Ex-box">
                <div className="FS-24 My-icon">
                  <FontAwesomeIcon icon={faBookmark} size="2x" />
                </div>
                      <h3 class="FS-42 counter">10+</h3>
                <p className="FS-24">Projects Done</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Experience;
