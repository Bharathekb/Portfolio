import React, { useState } from 'react';

const projectData = [
  {
    id: 1,
    name: 'Hireguard',
    imgSrc: '../assets/Project1.png'
  },
  {
    id: 2,
    name: 'Project 2',
    imgSrc: '../assets/Project2.png'
  },
  {
    id: 3,
    name: 'Project 3',
    imgSrc: '../assets/Project3.png'
  },
  // Add more projects as needed
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
    <section className='Projects py-5 my-4'>
      <div className='container'>
      <h2 class="heading-2 text-center F-600 mb-5">My Projects</h2>
        <div className='row'>
          {projectData.map((project) => (
            <div className='col-md-4' key={project.id}>
              <div className='My-card'>
                <div className='My-card-header'>
                  <img
                    src={project.imgSrc}
                    alt={project.name}
                    onClick={() => handleImageClick(project)}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
                <div className='My-card-body'>
                  <p className='mb-0'>{project.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className={`My-modal ${selectedProject ? 'open' : ''}`} onClick={closeModal}>
          <div className='My-modal-content' onClick={(e) => e.stopPropagation()}>
            <span className='close' onClick={closeModal}>&times;</span>
            <img src={selectedProject.imgSrc} alt={selectedProject.name} />
            <p className='mb-0'>{selectedProject.name}</p>
          </div>
        </div>
      )}
    </section>
  );
}


export default Projects;
