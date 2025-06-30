import React, { useState } from "react";

const projectData = [
  {
    id: 1,
    name: "Hireguard",
    desc: [
      "I contributed as a UI Developer to the HireGuard project, a platform designed to identify and prevent backdoor hires.",
      "My role involved building and enhancing the user interface using Angular for the front end, ensuring a dynamic and responsive user experience. Collaborating closely with backend developers working in .NET, I helped integrate seamless functionality and design, delivering an efficient and intuitive platform.",
    ],
    imgSrc: "../assets/Project1.png",
  },
  {
    id: 2,
    name: "Callmantra",
    desc: [
      "CallMantra is a cloud-based calling and texting software for recruiting teams. Set up in minutes and integrate with 30+ ATSs with 1-click. Book live demo.",
    ],
    imgSrc: "../assets/Project2.png",
  },
  {
    id: 3,
    name: "iTeleCenter",
    desc: [
      "iTeleCenter is a cloud-based virtual phone system designed primarily for entrepreneurs, small businesses, and professionals. It provides a professional phone presence without needing traditional hardware or landline systems.",
    ],
    imgSrc: "../assets/Project3.png",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleImageClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="Projects py-5 my-4">
      <div className="container">
        <h2 className="heading-2 text-center F-600 mb-5">My Projects</h2>
        <div className="row g-4">
          {projectData.map((project) => (
            <div className="col-xl-4 col-md-6" key={project.id}>
              <div className="My-card">
                <div className="My-card-header">
                  <img
                    src={project.imgSrc}
                    alt={project.name}
                    onClick={() => handleImageClick(project)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className="My-card-body">
                  <h4 className="mb-0 text-center py-3">{project.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className={`My-modal ${selectedProject ? "open" : ""}`}
          onClick={closeModal}
        >
          <div
            className="My-modal-content custom-scroll"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedProject.imgSrc} alt={selectedProject.name} />
            <h3 className="my-3">{selectedProject.name}</h3>
            <div className="mb-0 text-start">
              {Array.isArray(selectedProject.desc)
                ? selectedProject.desc.map((paragraph, index) => (
                    <p className="text-start" key={index}>
                      {paragraph}
                    </p>
                  ))
                : selectedProject.desc && <p>{selectedProject.desc}</p>}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
