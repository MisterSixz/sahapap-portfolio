import React from 'react';

const iconProps = {
    className: "w-6 h-6",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
};

export const EnvelopeIcon: React.FC = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

export const PhoneIcon: React.FC = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.211-.992-.55-1.352l-2.286-2.286c-.34-.34-.834-.45-1.285-.286l-2.094.706c-.452.152-.937-.034-1.226-.417l-3.262-3.262c-.383-.383-.57-.874-.417-1.226l.706-2.094c.163-.451.054-.945-.286-1.285L6.44 3.802a1.71 1.71 0 00-1.352-.55H3.75A2.25 2.25 0 001.5 5.25v1.5z" />
  </svg>
);

export const FacebookIcon: React.FC = () => (
  <svg {...iconProps} stroke="none" fill="currentColor">
    <path d="M12 2.03998C6.49998 2.03998 2.03998 6.49998 2.03998 12C2.03998 16.89 5.51998 20.89 10.12 21.81V14.88H7.37998V12H10.12V9.75C10.12 7.02 11.73 5.5 14.22 5.5C15.42 5.5 16.48 5.69 16.79 5.75V8.22L15.26 8.23C13.91 8.23 13.62 8.93 13.62 9.99V12H16.63L16.14 14.88H13.62V21.81C18.48 20.89 21.96 16.89 21.96 12C21.96 6.49998 17.5 2.03998 12 2.03998Z"/>
  </svg>
);

export const AcademicCapIcon: React.FC = () => (
    <svg {...iconProps}>
      <path d="M3.75 6.75h16.5M3.75 6.75a2.25 2.25 0 01-2.25-2.25V4.5A2.25 2.25 0 013.75 2.25h16.5a2.25 2.25 0 012.25 2.25v.003l-8.25 4.5-8.25-4.5v-.003z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75l-4.25-2.625M12 21.75l4.25-2.625M12 21.75v-9.75M16.5 9.75l4.25-2.625M7.5 9.75l-4.25-2.625M3.75 14.25v-4.5" />
    </svg>
);

export const CakeIcon: React.FC = () => (
    <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.657 1.343 3 3 3s3-1.343 3-3zM15.75 11.25c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.657 1.343 3 3 3s3-1.343 3-3zM9.75 11.25c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.657 1.343 3 3 3s3-1.343 3-3z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.75V18a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-5.25"/>
    </svg>
);

export const FlagIcon: React.FC = () => (
    <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.75.61a1.5 1.5 0 001.25-.095l.4-.23c.3-.17.6-.23.9-.23h.5a1.5 1.5 0 011.5 1.5v2.25a1.5 1.5 0 001.5 1.5h.5c.3 0 .6-.06.9-.23l.4-.23a1.5 1.5 0 001.25-.095L21 15m0 0V9" />
    </svg>
);

export const IdentificationIcon: React.FC = () => (
    <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
);

export const StarIcon: React.FC = () => (
    <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
);

export const DocumentTextIcon: React.FC = () => (
    <svg {...iconProps} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
);

export const DownloadIcon: React.FC = () => (
    <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);

export const ChevronRightIcon: React.FC = () => (
    <svg {...iconProps} className="w-5 h-5 ml-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
);

export const ChevronLeftIcon: React.FC = () => (
    <svg {...iconProps} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
);

export const XMarkIcon: React.FC = () => (
    <svg {...iconProps} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);