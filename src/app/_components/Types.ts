import type { IconType } from "react-icons";

export interface TechStackItem {
  name: string;
  icon: IconType;
  color: string;
}

export interface ExperienceData {
  company: string;
  role: string;
  employmentType: string;
  workMode: string;
  startDate: string;
  endDate: string;
  duration: string;
  location: string;
  description: string;
  techStack: TechStackItem[];
  responsibilities: string[];
  achievement: string;
  credentialUrl: string;
}