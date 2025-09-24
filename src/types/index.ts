export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink: string;
  githubLink: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools";
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
