
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-16 md:py-24 border-b border-gray-700/50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-400 tracking-wider">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
