
import React from 'react';
import Section from './Section';
import type { Activity } from '../types';

const activitiesData: Activity[] = [
    {
        title: 'สภานักเรียน',
        role: 'หัวหน้าฝ่ายเทคโนโลยี',
        description: 'ทำหน้าที่จัดเตรียมสถานที่ในงานต่าง ๆ และเป็นช่างภาพอาสา',
        imageUrl: '../assets/coul.png', // Replace with image from PDF Page 9
        period: '2567',
    },
    {
        title: 'ฝึกประสบการณ์ที่โรงพยาบาลขุขันธ์',
        role: 'อาสาสมัคร',
        description: 'ฝึกประสบการณ์ที่โรงพยาบาลขุขันธ์ ช่วยเหลืออำนวยความสะดวกให้กับเจ้าหน้าที่และผู้ป่วยที่โรงพยาบาลขุขันธ์',
        imageUrl: '../assets/hos.png', // Replace with image from PDF Page 10
        period: '21-25 เมษายน 2568',
    },
    {
        title: 'การอบรมทางวิทยาศาสตร์',
        role: 'ณ มหาวิทยาลัยราชภัฏอุบลราชธานี',
        description: 'ฝึกการต่อวงจรไฟฟ้า และทฤษฎีไฟฟ้าในหลักฟิสิกส์เบื้องต้น',
        imageUrl: '../assets/phy.png', // Replace with image from PDF Page 10
        period: '1 กันยายน 2567',
    }
];

const ActivityCard: React.FC<{ activity: Activity }> = ({ activity }) => (
    <div className="bg-gray-800/50 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
        <img src={activity.imageUrl} alt={activity.title} className="w-full h-48 object-cover"/>
        <div className="p-6">
            <p className="text-gray-400 text-sm">{activity.period}</p>
            <h3 className="text-xl font-bold text-white mt-1">{activity.title}</h3>
            <p className="text-green-300 font-semibold">{activity.role}</p>
            <p className="text-gray-300 mt-2">{activity.description}</p>
        </div>
    </div>
);

const Activities: React.FC = () => {
    return (
        <Section id="activities" title="Leadership & Volunteering">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activitiesData.map((activity, index) => (
                    <ActivityCard key={index} activity={activity} />
                ))}
            </div>
        </Section>
    );
};

export default Activities;
