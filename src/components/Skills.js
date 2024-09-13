import React from "react";
import Progressbar from "./Progressbar";
const Skills = () => {
  return (
    <section className="Skills py-5 ">
      <div className="container">
        <h2 className="heading-2 text-center F-600 mb-3">MY SKILLS</h2>
        <p className="my-para text-center mb-4">
          I'm Capable to Build Respnsive Websites Using Html, CSS, Bootstrap And
          I Can Validate Login Forms Using Javascript Also I Can Store Form Data
          In Database Using Php
        </p>
        <Progressbar />
      </div>
    </section>
  );
};

export default Skills;
