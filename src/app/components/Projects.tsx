

import Image from 'next/image';
import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'Project Name 1',
      description:
        'I created this personal project to showcase an interface in Figma using a portfolio as an example.',
      imageUrl: '/another/Rectangle 7.png', 
    },
    {
      name: 'Project Name 2',
      description: 'What was your role, your deliverables, if the project was personal, freelancing.',
      imageUrl: '/another/Rectangle 07.png', 
    },
    {
      name: 'Project Name 3',
      description: 'You can also add in this description the type of project, whether web, mobile, etc.',
      imageUrl: '/another/pexels-elly-fairytale-3823207 1.png', 
    },
  ];

  return (
    <section id='projects' className="bg-gray-900 py-12 px-4">
      <div className="container mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Projects
        </h1>
        {projects.map((project, index) => (
          <div
            key={index}
            className={` project-card flex flex-col md:flex-row ${
              index % 2 === 0 ? 'md:flex-row-reverse' : '' // Alternates image position
            } items-center justify-center w-full md:w-full lg:w-3/4 xl:w-3/4 mx-auto  bg-gray-800 rounded-lg mb-8 shadow-lg overflow-hidden `}
          >
            {/* Image Section */}
            <div className="md:w-1/2">
            <Image
                src={project.imageUrl}
                alt={project.name}
                // layout="responsive" // Ensures responsiveness
                width={800} // Adjust width
                height={400} // Adjust height
                className="object-cover"
                // className="w-full h-auto object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="p-8 md:w-1/2 flex flex-col justify-center items-start">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{project.name}</h2>
              <p className="text-gray-400 text-sm md:text-lg">{project.description}</p>
              <button className="mt-6 px-2 py-2 bg-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-700  transition-transform duration-300 ease-in-out transform hover:scale-110">
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;






