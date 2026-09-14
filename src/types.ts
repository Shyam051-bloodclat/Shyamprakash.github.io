export interface ProjectDetails {
  problem: string;
  solution: string;
  features: string[];
  technologiesUsed: string[];
  myContribution: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl: string;
  liveDemoUrl: string;
  isFeatured?: boolean;
  architectureHighlights?: string[];
  details: ProjectDetails;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  points: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  gradeType: 'CGPA' | 'Percentage';
  grade: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer?: string;
}
