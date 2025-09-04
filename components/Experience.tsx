
import React from 'react';
import Section from './Section';
import type { ExperienceItem } from '../types';

const experienceData: ExperienceItem[] = [
  {
    category: 'Robotics Project',
    title: 'Face Recognition Attendance Robot',
    subtitle: 'SSK3 Smart AI Robotics Contest 2025',
    period: 'รางวัลชนะเลิศ และ โล่ผู้ช่วยรัฐมนตรี ดร.สิริพงศ์ อังคสกุลเกียรติ',
    description: 'ผมทำหน้าที่เป็นผู้เขียนโปรแกรมของระบบ, Train Model และสร้างการเชื่อมต่อระหว่างระบบและฐานข้อมูล SQL โดยใช้ภาษา Python ใช้เครื่องมือคือไลบรารี่ face-recognition, mysql-connect, pickle และสร้างโปรแกรมสำหรับตรวจสอบข้อมูลการเข้าเรียนด้วย tkinter จาก Python และระบบทำงานบน Rasberry Pi 4 ',
    techStack: ['Python', 'Face-Recognition', 'OpenCV', 'tkinter', 'MySQL', 'PHP', 'Raspberry Pi 4'],
    imageUrl: '/assets/robotics.jpg', // Replace with image from PDF Page 5
  },
  {
    category: 'IoT Project',
    title: 'หลอดไฟ IOT',
    subtitle: 'วิชาวิทยาการคำนวณ',
    period: '2567 (ม.5)',
    description: '      ผมทำหน้าที่เป็นผู้เขียนโปรแกรมของระบบโดยใช้ Arduino บนบอร์ด esp8266 และสร้างการทำงานแบบ IOT ด้วยระบบ mqtt โดยใช้ broker ของ EMQX โดยควบคุมการทำงานของระบบด้วยเว็บแอพพลิเคชัน TAUD IOT ที่ผมสร้างขึ้นด้วย node-red ซึ่งใช้คอมพิวเตอร์ของโรงเรียนเป็นเครื่องจำลองเซิร์ฟเวอร์',
    techStack: ['Arduino (C++)', 'ESP8266', 'Node-RED', 'MQTT', 'EMQX'],
    imageUrl: '/assets/iot.png', // Replace with image from PDF Page 6
  },
  {
    category: 'Game Development Competition',
    title: 'การแข่งขันสร้างเกมสร้างสรรค์ ระดับชั้นม.4-ม.6 ',
    subtitle: 'งานศิลปหัตถกรรมนักเรียน ระดับเขตพื้นที่การศึกษามัธยมศึกษาศรีสะเกษ ยโสธร ครั้งที่ 71',
    period: 'รางวัลชนะเลิศ',
    description: '',
    techStack: ['Construct 2'],
    imageUrl: '/assets/71game.png', // Replace with image from PDF Page 7
  },
  {
    category: 'Game Development Competition',
    title: 'การแข่งขันสร้างเกมสร้างสรรค์ ชั้นม.1-ม.3 ',
    subtitle: 'านศิลปหัตถกรรมนักเรียน ระดับชาติ ครั้งที่ 70',
    period: 'รางวัลรองชนะเลิศอันดับหนึ่ง',
    description: '',
    techStack: ['Construct 2'],
    imageUrl: '/assets/70game.png', // Replace with image from PDF Page 7
  },
];

const ExperienceCard: React.FC<{ item: ExperienceItem; index: number }> = ({ item, index }) => {
  const isReversed = index % 2 !== 0;
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center mb-12`}>
      <div className={`order-1 ${isReversed ? 'md:order-2' : 'md:order-1'}`}>
        <img src={item.imageUrl} alt={item.title} className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-video" />
      </div>
      <div className={`order-2 ${isReversed ? 'md:order-1' : 'md:order-2'}`}>
        <p className="text-green-400 font-semibold">{item.category}</p>
        <h3 className="text-2xl font-bold mt-1 text-white">{item.title}</h3>
        <p className="text-gray-400 font-medium mt-1">{item.subtitle}</p>
        <p className="text-sm font-bold text-green-300 mt-2 mb-4">{item.period}</p>
        <p className="text-gray-300 mb-4">{item.description}</p>
        {item.techStack && (
            <div className="flex flex-wrap gap-2">
                {item.techStack.map((tech) => (
                    <span key={tech} className="bg-gray-700 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
                        {tech}
                    </span>
                ))}
            </div>
        )}
      </div>
    </div>
  );
};


const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Projects & Achievements">
      <div className="max-w-5xl mx-auto">
        {experienceData.map((item, index) => (
          <ExperienceCard key={index} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
