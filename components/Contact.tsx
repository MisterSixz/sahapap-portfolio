
import React from 'react';
import { EnvelopeIcon, PhoneIcon, FacebookIcon } from './icons/Icons';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 border-t border-gray-700/50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Contact Me</h2>
        <p className="text-gray-400 mb-8">Feel free to reach out.</p>
        <div className="flex justify-center items-center space-x-8">
          <a href="mailto:boyjirayu7@gmail.com" className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors">
            <EnvelopeIcon />
            <span>boyjirayu7@gmail.com</span>
          </a>
          <a href="tel:+66627378200" className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors">
            <PhoneIcon />
            <span>062-737-8200</span>
          </a>
           <a href="https://www.facebook.com/SahapapSittisorn" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors">
            <FacebookIcon />
            <span>Sahapap Sittisorn</span>
          </a>
        </div>
        <p className="text-gray-500 mt-12 text-sm">
          &copy; {new Date().getFullYear()} Sahapap Sittisorn. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
