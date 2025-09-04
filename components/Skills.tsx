
import React from 'react';
import Section from './Section';

const SkillCategory: React.FC<{ title: string; skills: string[] }> = ({ title, skills }) => (
    <div className="bg-gray-800/50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-green-300 mb-4">{title}</h3>
        <div className="flex flex-wrap gap-3">
            {skills.map(skill => (
                <span key={skill} className="bg-gray-700 text-gray-200 text-sm font-medium px-4 py-2 rounded-md shadow">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);


const Skills: React.FC = () => {
    const programmingSkills = ["Python", "JavaScript", "HTML5", "PHP", "SQL", "C (Arduino)"];
    const toolsAndTech = ["Raspberry Pi", "Node-RED", "MQTT", "Construct 2", "Git", "Linux", "Canva"];
    const interests = ["Game Development", "Web Development", "Software Engineering", "Artificial Intelligence", "Automation", "IoT"];

    return (
        <Section id="skills" title="Skills & Interests">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-3">
                    <SkillCategory title="Programming & Languages" skills={programmingSkills} />
                </div>
                 <div className="lg:col-span-3">
                    <SkillCategory title="Frameworks, Tools & Technologies" skills={toolsAndTech} />
                </div>
                 <div className="lg:col-span-3">
                    <SkillCategory title="Interests" skills={interests} />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
