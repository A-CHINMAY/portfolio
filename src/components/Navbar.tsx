
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white bg-opacity-90 shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-primary">John Doe</a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
          <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
          <button onClick={() => scrollToSection('certifications')} className="nav-link">Certifications</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
        </div>
        
        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-800">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white py-4 px-4 shadow-lg flex flex-col space-y-4">
          <button onClick={() => scrollToSection('about')} className="py-2 text-left">About</button>
          <button onClick={() => scrollToSection('experience')} className="py-2 text-left">Experience</button>
          <button onClick={() => scrollToSection('skills')} className="py-2 text-left">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="py-2 text-left">Projects</button>
          <button onClick={() => scrollToSection('certifications')} className="py-2 text-left">Certifications</button>
          <button onClick={() => scrollToSection('contact')} className="py-2 text-left">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
