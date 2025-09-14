import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import StatementOfPurpose from './components/StatementOfPurpose';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Activities from './components/Activities';
import Certificates from './components/Certificates';
import AllCertificates from './components/AllCertificates';
import AllActivities from './components/AllActivities';
import Contact from './components/Contact';
import CertificateModal from './components/CertificateModal';
import ActivityModal from './components/ActivityModal';
import type { Certificate, Activity } from './types';
import { Analytics } from "@vercel/analytics/next";

const App: React.FC = () => {
  const [view, setView] = useState<'main' | 'certificates' | 'activities'>('main');
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  useEffect(() => {
    // Scroll to top when view changes
    window.scrollTo(0, 0);
  }, [view]);

  const renderContent = () => {
    switch (view) {
      case 'certificates':
        return (
          <AllCertificates
            onBack={() => setView('main')}
            onCertificateClick={setSelectedCertificate}
          />
        );
      case 'activities':
        return (
          <AllActivities
            onBack={() => setView('main')}
            onActivityClick={setSelectedActivity}
          />
        );
      case 'main':
      default:
        return (
          <>
            <Analytics />
            <Hero />
            <About />
            {/* <StatementOfPurpose /> */}
            <Experience />
            <Skills />
            <Activities
              onSeeMore={() => setView('activities')}
              onActivityClick={setSelectedActivity}
            />
            <Certificates
              onSeeMore={() => setView('certificates')}
              onCertificateClick={setSelectedCertificate}
            />
          </>
        );
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 selection:bg-green-500 selection:text-white">
      <Header />
      <main className="container mx-auto px-6 md:px-12 lg:px-24">
        {renderContent()}
      </main>
      <Contact />
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
      {selectedActivity && (
        <ActivityModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
        />
      )}
    </div>
  );
};

export default App;