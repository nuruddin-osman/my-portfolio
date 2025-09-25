// import { IconType } from "react-icons";

import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string | StaticImageData;
  liveLink: string;
  githubLink: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: string;
  progress_bar: number;
  category: "frontend" | "backend" | "tools";
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface Educations {
  icon: React.ComponentType;
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  achievements: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  icon: React.ComponentType;
}

export interface Experienc {
  id: number;
  title: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  achievements: string[];
  icon: React.ComponentType;
  link: string;
}

// const interface SocialLink{
//   icon: IconType
// }
