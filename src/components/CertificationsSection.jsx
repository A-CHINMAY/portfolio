
import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "December 2022",
      description: "Validates expertise in designing and deploying scalable systems on AWS.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      url: "#"
    },
    {
      title: "Professional Front-End Developer",
      issuer: "Meta",
      date: "August 2022",
      description: "Advanced certification in front-end development with React and modern web technologies.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      url: "#"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Udacity",
      date: "March 2021",
      description: "Comprehensive program covering both front-end and back-end development technologies.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      url: "#"
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Google",
      date: "January 2021",
      description: "Foundation in user interface and experience design principles and best practices.",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e",
      url: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={cert.title} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-40 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center mb-2">
                  <Award className="w-5 h-5 text-primary mr-2" />
                  <h3 className="font-bold">{cert.title}</h3>
                </div>
                <p className="text-sm text-gray-700 mb-2">{cert.issuer}</p>
                <div className="flex items-center text-xs text-gray-600 mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{cert.date}</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{cert.description}</p>
                <a 
                  href={cert.url} 
                  className="flex items-center text-primary text-sm hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  <span>View Certificate</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
