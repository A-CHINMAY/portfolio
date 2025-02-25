
import React from 'react';
import { ChevronRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <p className="text-lg text-gray-700">
                I'm a passionate Full Stack Developer with 5+ years of experience in building digital products
                that solve real-world problems. My expertise spans across modern web technologies and design systems.
              </p>
              <div className="flex items-center space-x-2 text-primary">
                <ChevronRight className="w-5 h-5" />
                <span className="font-semibold">5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 text-primary">
                <ChevronRight className="w-5 h-5" />
                <span className="font-semibold">50+ Projects Completed</span>
              </div>
              <div className="flex items-center space-x-2 text-primary">
                <ChevronRight className="w-5 h-5" />
                <span className="font-semibold">20+ Happy Clients</span>
              </div>
            </div>
            <div className="relative animate-fade-up">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <p className="font-bold text-2xl text-primary">5+</p>
                <p className="text-sm text-gray-600">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
