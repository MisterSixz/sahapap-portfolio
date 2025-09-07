import React, { useEffect } from 'react';
import type { Activity } from '../types';
import { XMarkIcon } from './icons/Icons';

interface ActivityModalProps {
    activity: Activity;
    onClose: () => void;
}

const ActivityModal: React.FC<ActivityModalProps> = ({ activity, onClose }) => {
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
            aria-labelledby="activity-title"
        >
            <div
                className="relative bg-gray-800 rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-auto flex flex-col sm:flex-row animate-slide-up"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="sm:w-1/2 w-full flex-shrink-0">
                    <img
                        src={activity.imageUrl}
                        alt={activity.title}
                        className="w-full h-64 sm:h-full object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                    />
                </div>
                <div className="flex flex-col p-6">
                    <div>
                        <p className="text-sm text-gray-400 mb-1">{activity.period}</p>
                        <h3 id="activity-title" className="text-2xl font-bold text-white">{activity.title}</h3>
                        <p className="text-lg text-green-300 font-semibold">{activity.role}</p>
                        <p className="text-gray-300 mt-4 leading-relaxed">{activity.description}</p>
                    </div>
                </div>
                 <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-white bg-gray-900/50 rounded-full p-1 transition-colors"
                    aria-label="Close activity viewer"
                >
                    <XMarkIcon />
                </button>
            </div>
        </div>
    );
};

export default ActivityModal;
