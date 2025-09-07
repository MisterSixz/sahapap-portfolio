
import React from 'react';
import Section from './Section';
import type { Certificate } from '../types';
import { ChevronRightIcon } from './icons/Icons';

export const certificatesData: Certificate[] = [
    {
        title: 'สภานักเรียน หัวหน้าฝ่ายเทคโนโลยี',
        issuer: 'โรงเรียนบ้านตาอุด',
        period: '2567- 2568',
        imageUrl: '/assets/hos.png',
    },
    {
        title: 'รางวัลชนะเลิศ และ โล่ผู้ช่วยรัฐมนตรี ดร.สิริพงศ์ อังคสกุลเกียรติ',
        issuer: 'สำนักงานเขตพื้นที่การศึกษาศรีสะเกษ เขต 3',
        period: '2568',
        imageUrl: '/assets/roboticscer.png',
    },
    {
        title: 'รางวัลชนะเลิศ การแข่งขันสร้างเกมสร้างสรรค์ ระดับชั้นม.4-ม.6',
        issuer: 'งานศิลปหัตถกรรมนักเรียน ระดับเขตพื้นที่การศึกษามัธยมศึกษาศรีสะเกษ ยโสธร ครั้งที่ 71',
        period: '2566',
        imageUrl: '/assets/71game.png',
    },
    {
        title: 'รางวัลรองชนะเลิศอันดับ 1 การแข่งขันสร้างเกมสร้างสรรค์ ชั้นม.1-ม.3',
        issuer: 'งานศิลปหัตถกรรมนักเรียน ระดับชาติ ครั้งที่ 70',
        period: '2566',
        imageUrl: '/assets/70game.png',
    },
    {
        title: 'รางวัลชนะเลิศ การแข่งขันสร้างเกมสร้างสรรค์ ชั้นป.4 - ป.6',
        issuer: 'งานศิลปหัตถกรรมนักเรียน ระดับเขตพื้นที่การศึกษาประถมศึกษาศรีสะเกษเขต 3 ครั้งที่ 68',
        period: '2561',
        imageUrl: '/assets/game68.png',
    },
    {
        title: 'ได้รับคัดเลือกให้เป็นเด็กและเยาวชนดีเด่นกลุ่มสาระการเรียนรู้คอมพิวเตอร์/เทคโนโลยี/หุ่นยนต์',
        issuer: 'สำนักงานเขตพื้นที่กรศึกษาประถมศึกษาศรีสะเกษเขต 3',
        period: '13 มกราคม 2567',
        imageUrl: '/assets/dekd.png',
    },
    {
        title: 'ได้รับคัดเลือกให้เป็นเด็กและเยาวชนดีเด่น',
        issuer: 'สำนักงานเขตพื้นที่กรศึกษาประถมศึกษาศรีสะเกษเขต 3',
        period: '14 มกราคม 2566',
        imageUrl: '/assets/dek66.png',
    },
    {
        title: 'การอบรมทางวิทยาศาสตร์',
        issuer: 'มหาวิทยาลัยราชภัฏอุบลราชธานี',
        period: '2567',
        imageUrl: '/assets/phy.png',
    },
    {
        title: 'ฝึกประสบการณ์ที่โรงพยาบาล',
        issuer: 'โรงพยาบาลขุขันธ์',
        period: '2568',
        imageUrl: '/assets/hos.png',
    },
    
];


const CertificateCard: React.FC<{ certificate: Certificate; onClick: () => void; }> = ({ certificate, onClick }) => (
    <button
        onClick={onClick}
        className="group relative w-full text-left bg-gray-800/50 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-green-500/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-green-400"
        aria-label={`View details for ${certificate.title}`}
    >
        <img src={certificate.imageUrl} alt={certificate.title} className="w-full h-48 object-cover object-center" />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300"></div>
        <div className="absolute bottom-0 left-0 p-4 w-full">
            <h3 className="text-lg font-bold text-white truncate">{certificate.title}</h3>
            <p className="text-sm text-green-300">{certificate.issuer}</p>
        </div>
    </button>
);

interface CertificatesProps {
    onSeeMore: () => void;
    onCertificateClick: (certificate: Certificate) => void;
}

const Certificates: React.FC<CertificatesProps> = ({ onSeeMore, onCertificateClick }) => {
    const displayedCertificates = certificatesData.slice(0, 3);

    return (
        <Section id="certificates" title="Certificates & Awards">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedCertificates.map((cert, index) => (
                    <CertificateCard key={index} certificate={cert} onClick={() => onCertificateClick(cert)} />
                ))}
            </div>
            <div className="text-center mt-12">
                <button
                    onClick={onSeeMore}
                    className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-green-400 text-green-400 font-bold rounded-lg hover:bg-green-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                    aria-label="See all certificates"
                >
                    <span>See All Certificates</span>
                    <ChevronRightIcon />
                </button>
            </div>
        </Section>
    );
};

export default Certificates;