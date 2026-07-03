"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Modern UI/UX",
    desc: "Crafting pixel-perfect designs",
    color: "#008DB9",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Performance",
    desc: "Optimized for speed & SEO",
    color: "#e6b400",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
    title: "Clean Code",
    desc: "Scalable & Maintainable",
    color: "#3ddc84",
  },
];

export default function AboutMe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (prefersReduced) return;

      // heading: split into chars, type-in reveal
      const heading = section.querySelector(".about-heading");
      if (heading) {
        const split = SplitText.create(heading, { type: "chars" });
        gsap.set(split.chars, { autoAlpha: 0, y: 20 });
        gsap.to(split.chars, {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.03,
          ease: "power2.out",
          scrollTrigger: { trigger: heading, start: "top 85%" },
        });
      }

      // underline draw
      const underline = section.querySelector(".about-underline");
      if (underline) {
        gsap.fromTo(
          underline,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.inOut",
            transformOrigin: "left center",
            scrollTrigger: { trigger: underline, start: "top 90%" },
          }
        );
      }

      // bio card: terminal-style clip-path wipe open
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { clipPath: "inset(0 100% 0 0)", autoAlpha: 1 },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1,
            ease: "power4.inOut",
            scrollTrigger: { trigger: cardRef.current, start: "top 80%" },
          }
        );

        // "Who" highlight chip pops in after wipe
        const chip = cardRef.current.querySelector(".who-chip");
        if (chip) {
          gsap.fromTo(
            chip,
            { scale: 0, autoAlpha: 0 },
            {
              scale: 1,
              autoAlpha: 1,
              duration: 0.5,
              ease: "back.out(3)",
              delay: 0.5,
              scrollTrigger: { trigger: cardRef.current, start: "top 80%" },
            }
          );
        }

        // bracket icon idle rotation
        const bracket = cardRef.current.querySelector(".code-bracket");
        if (bracket) {
          gsap.to(bracket, {
            rotate: 8,
            duration: 2.5,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        }
      }

      // feature cards: staggered rise-in
      gsap.fromTo(
        featureRefs.current,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: featureRefs.current[0], start: "top 85%" },
        }
      );

      // magnetic tilt on feature cards
      featureRefs.current.forEach((el) => {
        if (!el) return;
        const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3" });
        const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3" });
        const rotateTo = gsap.quickTo(el, "rotate", {
          duration: 0.4,
          ease: "power3",
        });

        const handleMove = (e: MouseEvent) => {
          const rect = el.getBoundingClientRect();
          const relX = e.clientX - rect.left - rect.width / 2;
          const relY = e.clientY - rect.top - rect.height / 2;
          xTo(relX * 0.08);
          yTo(relY * 0.08);
          rotateTo(relX * 0.02);
        };
        const handleLeave = () => {
          xTo(0);
          yTo(0);
          rotateTo(0);
        };

        el.addEventListener("mousemove", handleMove);
        el.addEventListener("mouseleave", handleLeave);
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 px-6"
      style={{ backgroundColor: "#101010" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="about-heading text-4xl md:text-5xl font-bold text-white inline-block"
          >
            About Me
          </h2>
          <div
            className="about-underline h-[3px] w-24 mx-auto mt-4 rounded-full"
            style={{
              background: "linear-gradient(90deg, #8b5cf6, #c43d56)",
            }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6">
          {/* Bio card */}
          <div
            ref={cardRef}
            className="relative rounded-2xl p-8 overflow-hidden"
            style={{
              backgroundColor: "#13131a",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              className="code-bracket absolute top-6 right-6 text-5xl font-mono opacity-10 select-none"
              style={{ color: "#008DB9" }}
            >
              {"</>"}
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
              <span
                className="who-chip inline-block px-2 py-0.5 rounded-md mr-2"
                style={{ backgroundColor: "#008DB9", color: "#101010" }}
              >
                Who
              </span>
              Am I?
            </h3>

            <p className="text-gray-300 leading-relaxed mb-4 relative z-10">
              Hi, I&apos;m{" "}
              <span className="font-semibold" style={{ color: "#008DB9" }}>
                Ayan
              </span>{" "}
              — a Frontend Focused MERN Stack Developer who loves turning
              ideas into clean, impactful, and user-friendly web experiences.
            </p>

            <p className="text-gray-300 leading-relaxed relative z-10">
              I&apos;m passionate about crafting modern UIs with React,
              optimizing performance, and writing reusable, maintainable code
              that actually makes a difference. I bridge the gap between
              design and technology.
            </p>
          </div>

          {/* Feature cards */}
          <div className="flex flex-col gap-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                ref={(el) => {
                  featureRefs.current[i] = el;
                }}
                className="flex items-center gap-4 rounded-xl p-5 cursor-default"
                style={{
                  backgroundColor: "#13131a",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="flex items-center justify-center w-11 h-11 rounded-lg shrink-0"
                  style={{
                    backgroundColor: `${f.color}1a`,
                    color: f.color,
                  }}
                >
                  {f.icon}
                </div>
                <div>
                  <div className="text-white font-semibold">{f.title}</div>
                  <div className="text-gray-400 text-sm">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}