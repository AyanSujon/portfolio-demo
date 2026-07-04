




"use client";

import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import ExperienceCard from "./ExperienceCard";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!headingRef.current) return;

      const split = new SplitText(headingRef.current, {
        type: "chars",
        charsClass: "char",
      });

      const totalWidth = headingRef.current.offsetWidth;
      const gradient = "linear-gradient(90deg, #008DB9, #c43d56)";

      split.chars.forEach((char) => {
        const el = char as HTMLElement;
        el.style.backgroundImage = gradient;
        el.style.backgroundSize = `${totalWidth}px 100%`;
        el.style.backgroundPosition = `-${el.offsetLeft}px 0`;
        el.style.backgroundClip = "text";
        el.style.webkitBackgroundClip = "text";
        el.style.color = "transparent";
        el.style.webkitTextFillColor = "transparent";
      });

      gsap.set(split.chars, { yPercent: 120, opacity: 0 });

      gsap.to(split.chars, {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.035,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          once: true,
        },
      });

      return () => split.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative w-full overflow-hidden bg-[#101010] px-5 py-6 sm:px-8 sm:py-4 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-white/60">
          <span className="h-1.5 w-1.5 rounded-full bg-[#008DB9]" />
          Professional Journey
        </span>

        <h2
          ref={headingRef}
          className="mt-5 inline-block overflow-hidden text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Experience
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/50 sm:text-base">
          A glimpse into my professional experience, where I contributed to real-world products,
          collaborated with talented teams, and built scalable full-stack applications.
        </p>
      </motion.div>

      <div className="mt-14 w-full sm:mt-16">
        <ExperienceCard />
      </div>
    </section>
  );
}