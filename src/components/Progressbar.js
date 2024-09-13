import React, { useEffect, useRef, useState } from "react";
import "./Button.css"; // Ensure Button.css is imported

const Progressbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const progressBarRef = useRef(null);

  // Array of skills with their progress values
  const skills = [
    { name: "HTML", progress: 90 },
    { name: "CSS", progress: 90 },
    { name: "JavaScript", progress: 80 },
    { name: "React", progress: 80 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, []);

  return (
    <div className="ProgressBar" ref={progressBarRef}>
      <div className="row">
        {skills.map((skill, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <label className="my-para F-500 mb-1">{skill.name}</label>
            <div className="my-progress">
              <div
                className={`my-progress-bar progress-bar-striped progress-bar-animated btn-orangebg progress-bar-custom ${
                  isVisible ? "animate" : ""
                }`}
                role="progressbar"
                aria-valuenow={skill.progress}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: isVisible ? `${skill.progress}%` : "0%" }} // Dynamic width
              >
                {skill.progress}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progressbar;
