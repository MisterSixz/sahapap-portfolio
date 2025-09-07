
export interface ExperienceItem {
  category: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  techStack?: string[];
  imageUrl: string;
  pdfUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // A number from 1 to 5 to represent proficiency for the progress bar
}

export interface Activity {
    title: string;
    role: string;
    description: string;
    imageUrl: string;
    period: string;
}

export interface Certificate {
    title: string;
    issuer: string;
    period: string;
    imageUrl: string;
}
