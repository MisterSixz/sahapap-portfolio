
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import StatementOfPurpose from './components/StatementOfPurpose';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Activities from './components/Activities';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 selection:bg-green-500 selection:text-white">
      <Header />
      <main className="container mx-auto px-6 md:px-12 lg:px-24">
        <Hero />
        <About />
        <StatementOfPurpose />
        <Experience />
        <Skills />
        <Activities />
      </main>
      <Contact />
    </div>
  );
};

export default App;
