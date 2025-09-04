
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center">
      <div className="relative z-10">
        {/* Replace with actual image from PDF Page 1 */}
        <img 
          src="../assets/profile.jpg" 
          alt="Sahapap Sittisorn"
          className="w-40 h-60 rounded-full mx-auto mb-6 border-4 border-green-400 shadow-lg"
        />
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            นายสหภาพ สิทธิศร
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-gray-300 mt-2">
            Sahapap Sittisorn
        </p>
        <div className="mt-6 text-lg md:text-xl text-green-400 font-medium">
            <p>Portfolio for Computer Science</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
