
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Tech Innovations Inc.",
      position: "Senior Frontend Developer",
      period: "Jan 2020 - Present",
      description: "Led the development of responsive web applications using React, TypeScript, and modern CSS frameworks. Collaborated with UX/UI designers to implement pixel-perfect designs and improved application performance by 40%.",
      skills: ["React", "TypeScript", "Redux", "Tailwind CSS"]
    },
    {
      company: "Digital Solutions Ltd.",
      position: "Frontend Developer",
      period: "Mar 2018 - Dec 2019",
      description: "Developed and maintained multiple client websites and web applications. Implemented responsive designs and optimized performance across different browsers and devices.",
      skills: ["JavaScript", "CSS3", "HTML5", "SASS"]
    },
    {
      company: "Creative Web Agency",
      position: "Junior Web Developer",
      period: "Jun 2016 - Feb 2018",
      description: "Assisted in the development of client websites. Created and implemented UI components based on designer specifications. Performed cross-browser testing and bug fixes.",
      skills: ["HTML", "CSS", "JavaScript", "jQuery"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Work Experience</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative pl-8 border-l-2 border-primary animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-primary"></div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start flex-wrap mb-2">
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                  <div className="flex items-center text-gray-600 text-sm mt-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <div className="flex items-center text-primary mb-4">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span className="font-medium">{exp.company}</span>
                </div>
                <p className="text-gray-700 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-secondary text-sm rounded-full">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
