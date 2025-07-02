import React from "react";
import Progressbar from "./Progressbar";
const Skills = () => {
  return (
    <section className="Skills py-5">
      <div className="container">
        <h2 className="heading-2 text-center F-600 mb-5">My Skills</h2>
        <p className="my-para text-center mb-4">
          I'm capable of building fully responsive websites using HTML, CSS, and Bootstrap.
          I can also validate login forms and enhance interactivity using JavaScript.
        </p>
        <Progressbar />
      </div>
    </section>
  );
};

export default Skills;
