import React, { useEffect } from 'react';
import type { Certificate } from '../types';
import { XMarkIcon } from './icons/Icons';

interface CertificateModalProps {
    certificate: Certificate;
    onClose: () => void;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fade-in"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-title"
        >
            <div
                className="relative bg-gray-800 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-auto animate-slide-up"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-4 sm:p-6">
                    <img
                        src={certificate.imageUrl}
                        alt={certificate.title}
                        className="w-full h-auto rounded-md object-contain max-h-[70vh]"
                    />
                </div>
                <div className="bg-gray-900/50 px-4 sm:px-6 py-4">
                     <h3 id="certificate-title" className="text-xl font-bold text-white">{certificate.title}</h3>
                     <p className="text-md text-green-300">{certificate.issuer}</p>
                     <p className="text-sm text-gray-400 mt-1">{certificate.period}</p>
                </div>
                 <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    aria-label="Close certificate viewer"
                >
                    <XMarkIcon />
                </button>
            </div>
        </div>
    );
};

export default CertificateModal;
