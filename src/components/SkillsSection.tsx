
import React from 'react';
import { Code, Palette, Database, Cpu } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: Code,
      items: ["React", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
      category: "UI/UX Design",
      icon: Palette,
      items: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision"],
    },
    {
      category: "Backend Development",
      icon: Database,
      items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
    },
    {
      category: "DevOps & Tools",
      icon: Cpu,
      items: ["Docker", "AWS", "Git", "CI/CD", "Linux"],
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-6 h-6 text-primary mr-2" />
                <h3 className="font-semibold text-lg">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
