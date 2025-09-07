import React from 'react';
import Section from './Section';
import { activitiesData } from './Activities';
import type { Activity } from '../types';
import { ChevronLeftIcon } from './icons/Icons';

const ActivityCard: React.FC<{ activity: Activity, onClick: () => void; }> = ({ activity, onClick }) => (
    <button 
        onClick={onClick}
        className="text-left w-full bg-gray-800/50 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-green-400"
        aria-label={`View details for ${activity.title}`}
    >
        <img src={activity.imageUrl} alt={activity.title} className="w-full h-48 object-cover"/>
        <div className="p-6">
            <p className="text-gray-400 text-sm">{activity.period}</p>
            <h3 className="text-xl font-bold text-white mt-1">{activity.title}</h3>
            <p className="text-green-300 font-semibold">{activity.role}</p>
            <p className="text-gray-300 mt-2 text-sm">{activity.description}</p>
        </div>
    </button>
);


interface AllActivitiesProps {
    onBack: () => void;
    onActivityClick: (activity: Activity) => void;
}

const AllActivities: React.FC<AllActivitiesProps> = ({ onBack, onActivityClick }) => {
    return (
        <div className="pt-24">
            <Section id="all-activities" title="All Leadership & Volunteering Activities">
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
                <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activitiesData.map((activity, index) => (
                        <ActivityCard key={index} activity={activity} onClick={() => onActivityClick(activity)} />
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default AllActivities;
