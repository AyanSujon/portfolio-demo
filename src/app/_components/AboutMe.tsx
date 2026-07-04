'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { gsap } from 'gsap';
import {
  Code2,
  Sparkles,
  TrendingUp,
  Users,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const AboutMe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // GSAP ambient mouse-follow glow
  useEffect(() => {
    const section = containerRef.current;
    if (!section || prefersReducedMotion) return;

    const glow = section.querySelector<HTMLDivElement>('.ambient-glow');
    if (!glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      gsap.to(glow, {
        '--x': `${x}%`,
        '--y': `${y}%`,
        duration: 0.9,
        ease: 'power2.out',
      });
    };

    section.addEventListener('mousemove', handleMouseMove);

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
    };
  }, [prefersReducedMotion]);

  const highlightCards = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Problem Solving',
      desc: 'I enjoy breaking down complex challenges into practical, elegant solutions that are easy to understand and maintain.',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Craftsmanship',
      desc: 'I believe quality comes from thoughtful decisions, clean implementation, and attention to the smallest details.',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Continuous Growth',
      desc: 'Learning is a constant part of my journey. I embrace new ideas, tools, and approaches that help me build better products.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'User-First Thinking',
      desc: 'Every feature should have a purpose. I focus on creating experiences that feel intuitive, accessible, and genuinely useful.',
    },
  ];

  const focusAreas = [
    'Scalable Application Architecture',
    'AI-Powered Workflows',
    'Performance Optimization',
    'Long-Term Product Value',
  ];

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative overflow-hidden py-16 md:py-24 lg:py-32"
    >
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Header */}
          <div className="w-full">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm tracking-[2px] text-white/80 backdrop-blur-xl">
              ABOUT ME
            </div>

            <h2 className="mt-6 max-w-6xl text-4xl font-semibold leading-[1.05] tracking-tighter text-white sm:text-5xl lg:text-7xl">
              Building digital experiences
              <br />
              <span className="bg-gradient-to-r from-[#008DB9] to-[#C43D56] bg-clip-text text-transparent">
                that matter
              </span>
            </h2>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="group h-14 rounded-2xl bg-white px-8 text-base font-medium text-black hover:bg-white/90"
              >
                <Link href="https://drive.google.com/file/d/1G97HBH6aTDVo_0QeirKF2fCFaH8BXaEG/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </Link>
                <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-2xl border-white/20 bg-white/5 px-8 text-base text-white hover:text-white hover:bg-white/10"
              >
                <Link href="https://www.linkedin.com/in/ayansujon" target="_blank" rel="noopener noreferrer">
                  Let's Connect
                </Link>
              </Button>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-white/80 md:text-xl">
            <p>
              I'm a Full Stack Developer who enjoys transforming ideas into
              reliable, intuitive, and meaningful digital products. For me,
              development is more than writing code—it's about understanding
              real problems, thinking critically, and creating solutions that
              make technology feel simple for the people who use it.
            </p>

            <p>
              I approach every project with curiosity and a focus on quality.
              Before writing a single line of code, I take time to understand
              the purpose behind the product, the challenges it aims to solve,
              and the experience users expect. This mindset helps me build
              applications that are not only functional but also scalable,
              maintainable, and thoughtfully designed.
            </p>

            <p>
              I value clean architecture, attention to detail, and continuous
              improvement. Technology evolves quickly, and I enjoy learning,
              experimenting, and refining my skills to stay current with
              modern development practices. Every project is an opportunity
              to grow, explore new ideas, and become a better engineer than I
              was yesterday.
            </p>
          </div>

          {/* What Drives Me */}
          <div>
            <h3 className="mb-6 text-xs uppercase tracking-[3px] text-white/50">
              What Drives Me
            </h3>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {highlightCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                  className="group"
                >
                  <Card className="h-full border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-white/20">
                    <CardContent className="p-7">
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#008DB9]/10 to-[#C43D56]/10 text-[#008DB9] transition-transform duration-300 group-hover:scale-110">
                        {card.icon}
                      </div>

                      <h3 className="mb-3 text-xl font-semibold text-white lg:text-2xl">
                        {card.title}
                      </h3>

                      <p className="leading-relaxed text-white/70">
                        {card.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 backdrop-blur-2xl lg:p-10"
          >
            <blockquote className="max-w-4xl text-xl italic leading-relaxed text-white/90 md:text-2xl">
              "Great software isn't defined by how much code it contains—it's
              defined by how naturally it solves problems. I believe every
              product should be fast, reliable, scalable, and enjoyable to
              use."
            </blockquote>

            <div className="mt-6 text-sm text-white/60">
              — My development philosophy
            </div>
          </motion.div>

          {/* Current Focus */}
          <div>
            <h3 className="mb-6 text-xs uppercase tracking-[3px] text-white/50">
              Current Focus
            </h3>

            <p className="mb-6 max-w-4xl text-lg leading-relaxed text-white/80">
              Today, my focus is on building modern digital products that
              combine exceptional user experiences with reliable engineering.
              I'm continuously exploring better development patterns and
              creating software that delivers long-term value rather than
              short-term fixes. Beyond building applications, I'm committed to
              improving my craft every day—learning from every project,
              embracing new challenges, and contributing to experiences that
              make a meaningful impact.
            </p>

            <div className="flex flex-wrap gap-3">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  whileHover={
                    prefersReducedMotion ? undefined : { scale: 1.05 }
                  }
                  className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/90 transition-all hover:border-[#008DB9]/30 hover:bg-white/10"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-[#C43D56]" />
                  {area}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Let's Build Something Meaningful */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:p-10"
          >
            <h3 className="mb-4 text-2xl font-semibold text-white lg:text-3xl">
              Let's Build Something{' '}
              <span className="bg-gradient-to-r from-[#008DB9] to-[#C43D56] bg-clip-text text-transparent">
                Meaningful
              </span>
            </h3>

            <p className="max-w-3xl leading-relaxed text-white/70">
              Whether it's transforming an idea into a polished product,
              improving an existing platform, or creating something entirely
              new, I'm always excited to collaborate on projects that value
              quality, innovation, and thoughtful engineering.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;