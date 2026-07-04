import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { RiSupabaseFill } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";


import type { ExperienceData } from "./types";

export const experienceData: ExperienceData = {
  company: "Global Dream Connect",
  role: "Full Stack Developer Intern",
  employmentType: "Full Time",
  workMode: "Remote",
  startDate: "Dec 2025",
  endDate: "Mar 2026",
  duration: "4 Months",
  location: "New Delhi, Delhi, India",
  description:
    "Global Dream Connect is an international mentorship platform connecting students with experienced mentors to help them secure admission to their dream universities and launch successful global careers.",
  techStack: [
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
    { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
     { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Supabase", icon: RiSupabaseFill, color: "#3ECF8E" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  ],
  responsibilities: [
    "Developed features for the mentor platform and onboarding system.",
    "Built reusable frontend components using Next.js and React.",
    "Collaborated with teammates through meetings, brainstorming, and research.",
    "Assisted with onboarding mentors, volunteers, and students.",
    "Worked on backend APIs using Express.js and PostgreSQL.",
    "Maintained GitHub workflow and version control.",
    "Delivered assigned tasks before deadlines.",
    "Participated in bug fixing, testing, and performance improvements.",
  ],
  achievement:
    "Promoted to Tech Lead after internship because of hard work, ownership, and technical contributions.",
  credentialUrl: "https://drive.google.com/file/d/1KRf8ijnuzbJzTnIYRQ5x4WWuvNK-vpTa/view?usp=sharing",
};