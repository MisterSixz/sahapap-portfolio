
import React from 'react';
import Section from './Section';
import { AcademicCapIcon, CakeIcon, FlagIcon, IdentificationIcon, StarIcon } from './icons/Icons';

const InfoItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <li className="flex items-center space-x-4">
    <div className="text-green-400">{icon}</div>
    <div>
      <p className="font-semibold text-gray-300">{label}</p>
      <p className="text-gray-400">{value}</p>
    </div>
  </li>
);

const About: React.FC = () => {
  return (
    <Section id="about" title="Profile">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-white text-center">Personal Information</h3>
          <ul className="space-y-4">
            <InfoItem icon={<IdentificationIcon />} label="ชื่อเล่น (Nickname)" value="กาล (Kan)" />
            <InfoItem icon={<CakeIcon />} label="เกิด (Born)" value="20 สิงหาคม 2550 (Aug 20, 2007)" />
            <InfoItem icon={<FlagIcon />} label="สัญชาติ/เชื้อชาติ" value="ไทย (Thai)" />
            <InfoItem icon={<StarIcon />} label="แผนการเรียน" value="วิทยาศาสตร์-คณิตศาสตร์ (Science-Math)" />
          </ul>
        </div>
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-white text-center">Education</h3>
          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
              <div className="text-green-400 pt-1"><AcademicCapIcon /></div>
              <div>
                <p className="font-semibold text-gray-300">ระดับมัธยมศึกษาตอนปลาย (Upper Secondary)</p>
                <p className="text-gray-400">โรงเรียนบ้านตาอุด (2566-ปัจจุบัน)</p>
                <p className="text-sm font-bold text-green-300 mt-1">GPAX (4 ภาคเรียน): 3.93</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
               <div className="text-green-400 pt-1"><AcademicCapIcon /></div>
              <div>
                <p className="font-semibold text-gray-300">ระดับมัธยมศึกษาตอนต้น (Lower Secondary)</p>
                <p className="text-gray-400">โรงเรียนบ้านตาอุด (2563-2565)</p>
                <p className="text-sm font-bold text-green-300 mt-1">GPA: 3.65</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default About;
