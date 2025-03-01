
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product search, cart functionality, and payment integration.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A Kanban-style task management application with drag-and-drop functionality. Users can create boards, add tasks, set deadlines, and track progress.",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d",
      tags: ["React", "Redux", "Firebase", "Material UI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that displays current weather conditions and forecasts for multiple locations. Integrates with the OpenWeatherMap API.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b",
      tags: ["JavaScript", "HTML5", "CSS3", "REST API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Three.js. Features include animated 3D elements, smooth scrolling, and interactive components.",
      image: "https://images.unsplash.com/photo-1550645612-83f5d594b671",
      tags: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate-fade-up hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-secondary text-xs rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl} 
                    className="flex items-center text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="flex items-center text-gray-700 hover:text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
