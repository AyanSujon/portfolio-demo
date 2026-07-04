"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useReducedMotion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
//   SiCss3,
  SiHtml5,
  SiPrisma,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
  SiSupabase,
  SiFirebase,
  SiNotion,
  SiJsonwebtokens,
  SiPostman,
  SiNetlify,
  SiVercel,
} from "react-icons/si";

import { BiLogoVisualStudio } from "react-icons/bi";
import { FaCss3Alt } from "react-icons/fa";



gsap.registerPlugin(ScrollTrigger);

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

type Skill = {
  name: string;
  icon: IconType;
  color: string; // brand color used for the icon + hover glow
};

type Category = {
  label: string;
  skills: Skill[];
};

const CATEGORIES: Category[] = [
  {
    label: "Languages",
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "Prisma", icon: SiPrisma, color: "#FFFFFF" },
    ],
  },
  {
    label: "Database",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    label: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "VS Code", icon: BiLogoVisualStudio, color: "#007ACC" },
      { name: "Notion", icon: SiNotion, color: "#FFFFFF" },
      { name: "JWT", icon: SiJsonwebtokens, color: "#EAEAEA" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
    ],
  },
];

// Brand accents
const TEAL = "#008DB9";
const PINK = "#c43d56";

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Each category card fades/slides up independently as it enters view
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: (i % 2) * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          }
        );

        // Stagger each skill chip inside the card as the card enters
        const chips = card.querySelectorAll("[data-skill-chip]");
        gsap.fromTo(
          chips,
          { y: 14, opacity: 0, scale: 0.92 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full bg-[#101010] px-6 py-24 sm:px-10 lg:px-16"
    >
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full opacity-[0.08] blur-[120px]"
        style={{ background: `linear-gradient(135deg, ${TEAL}, ${PINK})` }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        {/* <div ref={headerRef} className="mb-14 text-center">
          <p
            className="mb-3 text-sm font-medium uppercase tracking-[0.2em]"
            style={{ color: TEAL }}
          >
            What I work with
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Skills &amp; Tools
          </h2>
        </div> */}

                {/* Header */}
        <div className="w-full text-center">

          <div className=" inline-flex bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl px-5 py-2 shadow-xl">
            <div className="flex items-center gap-2 text-emerald-400">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
              <span className="font-medium text-sm">Skills</span>
            </div>
          </div>

          <h2 className="mt-6 max-w-6xl text-4xl font-semibold leading-[1.05] tracking-tighter text-white sm:text-5xl lg:text-7xl">
            <span className="bg-gradient-to-r from-[#008DB9] to-[#C43D56] bg-clip-text text-transparent">
              Building with the Right Technologies
            </span>
          </h2>

        <p className="mx-auto mt-5 max-w-xl mb-4 text-sm leading-relaxed text-white/50 sm:text-base">
          The technologies, frameworks, and tools I use to design, develop, and deploy modern web applications. From frontend interfaces to backend systems, each tool helps me build fast, scalable, and user-focused digital experiences.
        </p>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.label}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className={[
                "relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-7",
                // Let "Tools & Platforms" (the longest list) span both columns on desktop
                cat.label === "Tools & Platforms" ? "md:col-span-2" : "",
              ].join(" ")}
            >
              {/* card header */}
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: `linear-gradient(135deg, ${TEAL}, ${PINK})` }}
                />
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  {cat.label}
                </h3>
                <span className="ml-auto text-xs font-medium text-white/30">
                  {cat.skills.length.toString().padStart(2, "0")}
                </span>
              </div>

              {/* skill chips */}
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <SkillChip key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Skill Chip
// ---------------------------------------------------------------------------

function SkillChip({ skill }: { skill: Skill }) {
  const Icon = skill.icon;

  return (
    <motion.div
      data-skill-chip
      whileHover={{
        y: -4,
        scale: 1.05,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      className="group relative flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5"
    >
      {/* hover glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow: `0 0 0 1px ${skill.color}55, 0 8px 24px -8px ${skill.color}66`,
        }}
      />

      <Icon
        className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{ color: skill.color }}
      />
      <span className="whitespace-nowrap text-sm font-medium text-white/80">
        {skill.name}
      </span>
    </motion.div>
  );
}


