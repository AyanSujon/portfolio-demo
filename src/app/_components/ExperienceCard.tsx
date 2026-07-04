"use client";

import type { ComponentType } from "react";
import { motion, type Variants } from "framer-motion";
import { Briefcase, MapPin, CalendarDays, Wifi, FileText, ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { experienceData } from "./ExperienceData";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
  },
};

function MetaChip({
  icon: Icon,
  label,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/70 sm:text-sm">
      <Icon className="h-3.5 w-3.5 text-[#008DB9]" />
      {label}
    </span>
  );
}

export default function ExperienceCard() {
  const data = experienceData;

  const handleViewCredentials = () => {
    window.open(data.credentialUrl, "_blank");
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="group relative"
    >
      {/* animated gradient border on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-[25px] group-hover:opacity-60" />

      <div className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.02] p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:p-8 md:p-10">
        {/* ambient glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#008DB9]/10 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#c43d56]/10 blur-[100px]" />

        <div className="relative">
          {/* header */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between"
          >
            <div className="flex items-start gap-4 sm:gap-5">

              <figure >
                <Image
                  src="/images/gdc-logo.png"
                  alt={`GDC Logo`}
                  width={48}
                  height={48}
                  className="h-full w-full object-contain rounded-xl"
                />
              </figure>


              <div>
                <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {data.company}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#008DB9] sm:text-base">
                  {data.role}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <MetaChip icon={CalendarDays} label={`${data.startDate} – ${data.endDate}`} />
                  <MetaChip icon={MapPin} label={data.location} />
                  <MetaChip icon={Briefcase} label={data.employmentType} />
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#008DB9]/25 bg-[#008DB9]/10 px-3 py-1.5 text-xs font-medium text-[#5cc4e6] sm:text-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#008DB9] opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#008DB9]" />
                    </span>
                    <Wifi className="h-3.5 w-3.5" />
                    {data.workMode}
                  </span>
                </div>
              </div>
            </div>

            <span className="shrink-0 self-start rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-white/50 sm:text-sm">
              {data.duration}
            </span>
          </motion.div>

          {/* description */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base"
          >
            {data.description}
          </motion.p>

          {/* divider */}
          <motion.div variants={itemVariants} className="my-7 h-px w-full bg-white/[0.06]" />

          {/* tech stack */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {data.techStack.map((tech ) => (
                // console.log(typeof tech, tech),
                <motion.span
                  key={tech.name}
                  variants={iconVariants}
                  whileHover={{ y: -3, borderColor: "rgba(255,255,255,0.18)" }}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs font-medium text-white/75 transition-colors sm:text-sm"
                >
                  <tech.icon className="h-4 w-4" style={{ color: tech.color }} />
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* achievement badge */}
          <motion.div
            variants={itemVariants}
            className="mt-7"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.3 }}
              className="inline-flex items-start gap-3 rounded-2xl border border-[#c43d56]/30 bg-[#c43d56]/10 px-4 py-3.5"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c43d56]/20">
                <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 text-[#f2879a]">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="text-sm font-medium leading-relaxed text-[#f2b4c0] sm:text-[15px]">
                {data.achievement}
              </p>
            </motion.div>
          </motion.div>

          {/* responsibilities accordion */}
          <motion.div variants={itemVariants} className="mt-7">
            <Accordion className="w-full">
              <AccordionItem
                value="responsibilities"
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 data-[state=open]:bg-white/[0.03]"
              >
                <AccordionTrigger className="py-4 text-sm font-semibold text-white hover:no-underline sm:text-base">
                  Responsibilities
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 pb-2 pt-1">
                    {data.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-white/60 sm:text-[15px]"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#008DB9]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="mt-8">
            <motion.button
              type="button"
              onClick={handleViewCredentials}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group/btn relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-[#008DB9] to-[#c43d56] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(0,141,185,0.5)] transition-shadow duration-300 hover:shadow-[0_8px_36px_-6px_rgba(196,61,86,0.55)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover/btn:translate-x-full" />
              <FileText className="relative h-4 w-4" />
              <span className="relative">View Credentials</span>
              <ArrowUpRight className="relative h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}