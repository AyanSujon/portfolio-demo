




"use client";

import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import ExperienceCard from "./ExperienceCard";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

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

        {/* Header */}
        <div className="w-full">

          <div className=" inline-flex bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl px-5 py-2 shadow-xl">
            <div className="flex items-center gap-2 text-emerald-400">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
              <span className="font-medium text-sm"> Experience</span>
            </div>
          </div>

          <h2 className="mt-6 max-w-6xl text-4xl font-semibold leading-[1.05] tracking-tighter text-white sm:text-5xl lg:text-7xl">
            <span className="bg-gradient-to-r from-[#008DB9] to-[#C43D56] bg-clip-text text-transparent">
              My Professional Journey
            </span>
          </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/50 sm:text-base">
          A glimpse into my professional experience, where I contributed to real-world products,
          collaborated with talented teams, and built scalable full-stack applications.
        </p>
        </div>
      </motion.div>

      <div className="mt-14 w-full sm:mt-16">
        <ExperienceCard />
      </div>
    </section>
  );
}