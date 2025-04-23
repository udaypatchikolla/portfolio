import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Real Estate Website",
      description: "A comprehensive real estate platform built with React and Node.js. Features include property listings, search functionality, and user authentication.",
      image: "/images/realestate.webp",
      tags: ["HTML","CSS" ,"Node.js", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/udaypatchikolla/real-estate-website",
    },
    {
      id: 2,
      title: "Hotel Booking System",
      description: "A modern hotel booking system with room availability, booking management, and payment integration.",
      image: "/images/hotelreserve.png",
      tags: ["React", "Node.js", "MySQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/udaypatchikolla/Hotel-reservation-System",
    },
    {
      id: 3,
      title: "Food Ordering System",
      description: "An online food ordering platform with real-time order tracking and restaurant management features.",
      image: "/images/eazydine.webp",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/udaypatchikolla/easy-dine",
    },
  ];

  const filters = ['all', 'React', 'Node.js', 'MongoDB', 'Express'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Here are some of my recent full-stack projects. Each project has been carefully crafted to solve real-world problems.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                activeFilter === filter
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-indigo-100'
              }`}
            >
              {filter === 'all' ? 'All' : filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                    >
                      <Github size={18} className="mr-1" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;