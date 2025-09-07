import React from 'react';
import Section from './Section';
import { certificatesData } from './Certificates';
import type { Certificate } from '../types';
import { ChevronLeftIcon } from './icons/Icons';

const CertificateCard: React.FC<{ certificate: Certificate; onClick: () => void; }> = ({ certificate, onClick }) => (
     <button
        onClick={onClick}
        className="group relative w-full text-left bg-gray-800/50 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-green-500/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-green-400"
        aria-label={`View details for ${certificate.title}`}
    >
        <img src={certificate.imageUrl} alt={certificate.title} className="w-full h-56 object-cover object-center" />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300"></div>
        <div className="absolute bottom-0 left-0 p-4 w-full">
            <h3 className="text-lg font-bold text-white truncate" title={certificate.title}>{certificate.title}</h3>
            <p className="text-sm text-green-300 truncate" title={certificate.issuer}>{certificate.issuer}</p>
            <p className="text-xs text-gray-400 mt-1">{certificate.period}</p>
        </div>
    </button>
);

interface AllCertificatesProps {
    onBack: () => void;
    onCertificateClick: (certificate: Certificate) => void;
}

const AllCertificates: React.FC<AllCertificatesProps> = ({ onBack, onCertificateClick }) => {
    return (
        <div className="pt-24">
            <Section id="all-certificates" title="All Certificates & Awards">
                 <div className="max-w-5xl mx-auto mb-12 text-left">
                     <button
                        onClick={onBack}
                        className="inline-flex items-center px-4 py-2 bg-gray-700 text-green-300 font-semibold rounded-lg hover:bg-gray-600 transition-colors duration-300"
                        aria-label="Back to main page"
                    >
                        <ChevronLeftIcon />
                        <span className="ml-2">Back to Main Page</span>
                    </button>
                 </div>
                <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {certificatesData.map((cert, index) => (
                        <CertificateCard key={index} certificate={cert} onClick={() => onCertificateClick(cert)} />
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default AllCertificates;