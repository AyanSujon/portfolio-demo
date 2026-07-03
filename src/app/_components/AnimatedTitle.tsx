

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const titles = [
  "Full Stack Developer",
  "AI Automation Specialist",
  "SaaS Product Builder",
];

export default function RotatingTitle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let split: SplitText | null = null;
    let isMounted = true;

    const animateIn = () => {
      if (!isMounted || !el) return;

      el.textContent = titles[indexRef.current];

      // split the current text into chars
      split = SplitText.create(el, { type: "chars" });

      // set starting state before revealing (avoids flash of unstyled text)
      gsap.set(split.chars, { y: 100, autoAlpha: 0 });

      const tl = gsap.timeline({
        onComplete: () => {
          // hold, then animate out and move to next title
          tl.delay(1.2);
        },
      });

      tl.to(split.chars, {
        duration: 1,
        y: 0,
        autoAlpha: 1,
        stagger: 0.05,
        ease: "power3.out",
      }).to(
        split!.chars,
        {
          duration: 0.6,
          y: -100,
          autoAlpha: 0,
          stagger: 0.03,
          ease: "power3.in",
        },
        "+=1.2" // hold time before exiting
      ).eventCallback("onComplete", () => {
        split?.revert();
        indexRef.current = (indexRef.current + 1) % titles.length;
        animateIn();
      });
    };

    animateIn();

    return () => {
      isMounted = false;
      split?.revert();
      gsap.killTweensOf(el);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="text-3xl md:text-4xl font-heading font-semibold inline-block text-[#008DB9] "
    >
      {titles[0]}
    </div>
  );
}




















