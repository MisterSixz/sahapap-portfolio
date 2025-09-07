
import React from 'react';
import Section from './Section';
import type { Activity } from '../types';
import { ChevronRightIcon } from './icons/Icons';


export const activitiesData: Activity[] = [
    {
        title: 'สภานักเรียน',
        role: 'หัวหน้าฝ่ายเทคโนโลยี',
        description: 'ทำหน้าที่จัดเตรียมสถานที่ในงานต่าง ๆ ',
        imageUrl: '/assets/coul.png', // Replace with image from PDF Page 9
        period: '2567',
    },
    {
        title: 'ฝึกประสบการณ์ที่โรงพยาบาลขุขันธ์',
        role: 'อาสาสมัคร',
        description: 'ฝึกประสบการณ์ที่โรงพยาบาลขุขันธ์ ช่วยเหลืออำนวยความสะดวกให้กับเจ้าหน้าที่และผู้ป่วยที่โรงพยาบาลขุขันธ์',
        imageUrl: '/assets/hosre.jpg', // Replace with image from PDF Page 10
        period: '21-25 เมษายน 2568',
    },
    {
        title: 'การอบรมทางวิทยาศาสตร์',
        role: 'ณ มหาวิทยาลัยราชภัฏอุบลราชธานี',
        description: 'ฝึกการต่อวงจรไฟฟ้า และทฤษฎีไฟฟ้าในหลักฟิสิกส์เบื้องต้น',
        imageUrl: '/assets/phyex.png', // Replace with image from PDF Page 10
        period: '1 กันยายน 2567',
    },
    {
        title: 'ช่างภาพอาสา',
        role: 'สภานักเรียน',
        description: 'ถ่ายภาพในกิจกรรมของโรงเรียนเพื่อนำไปประชาสัมพันธ์บนช่องทางออนไลน์ของโรงเรียน',
        imageUrl: '/assets/cam.jpg', // Replace with image from PDF Page 9
        period: '2567',
    },
    {
        title: 'งานปัจฉิมนิเทศ',
        role: 'ควบคุมการถ่ายทอดสด และ จัดเตรียมงาน',
        description: 'ถ่ายทอดสดพิธีการมอบใบประกาศนียบัตร',
        imageUrl: '/assets/live.png', // Replace with image from PDF Page 9
        period: '2567 - 2568',
    },
    {
        title: 'งานผ้าป่าเพื่อจัดซื้อรถรับส่ง',
        role: 'สภานักเรียน',
        description: 'จัดเตรียมงาน ถ่ายภาพภายในงาน และเป็นเจ้าหน้าที่ในร้านสอยดาว',
        imageUrl: '/assets/bus.png', // Replace with image from PDF Page 9
        period: 'เมษายน 2568',
    },
];

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

interface ActivitiesProps {
    onSeeMore: () => void;
    onActivityClick: (activity: Activity) => void;
}

const Activities: React.FC<ActivitiesProps> = ({ onSeeMore, onActivityClick }) => {
    const displayedActivities = activitiesData.slice(0, 3);
    
    return (
        <Section id="activities" title="Leadership & Volunteering">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedActivities.map((activity, index) => (
                    <ActivityCard key={index} activity={activity} onClick={() => onActivityClick(activity)} />
                ))}
            </div>
            <div className="text-center mt-12">
                <button
                    onClick={onSeeMore}
                    className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-green-400 text-green-400 font-bold rounded-lg hover:bg-green-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                    aria-label="See all activities"
                >
                    <span>See All Activities</span>
                    <ChevronRightIcon />
                </button>
            </div>
        </Section>
    );
};

export default Activities;