

'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiPrisma,
    SiTailwindcss,
} from 'react-icons/si';

type TechMeta = {
    id: string;
    label: string;
    icon: React.ElementType;
    color: string;
    rotate: number;
};

type Breakpoint = 'mobile' | 'tablet' | 'desktop';

// Icon/label/rotation never change across screen sizes — only left/top do,
// because the avatar it rings around moves in the layout (stacked on
// mobile/tablet, side-by-side on desktop at the lg breakpoint).
const TECH_META: TechMeta[] = [
    { id: 'react', label: 'React', icon: SiReact, color: '#61DAFB', rotate: -12 },
    { id: 'nextjs', label: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF', rotate: 7 },
    { id: 'typescript', label: 'TypeScript', icon: SiTypescript, color: '#3178C6', rotate: -6 },
    { id: 'nodejs', label: 'Node.js', icon: SiNodedotjs, color: '#83CD29', rotate: 11 },
    { id: 'express', label: 'Express', icon: SiExpress, color: '#FFFFFF', rotate: -9 },
    { id: 'mongodb', label: 'MongoDB', icon: SiMongodb, color: '#47A248', rotate: 14 },
    { id: 'postgresql', label: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', rotate: -4 },
    { id: 'prisma', label: 'Prisma', icon: SiPrisma, color: '#8B93F8', rotate: 9 },
    { id: 'tailwind', label: 'TailwindCSS', icon: SiTailwindcss, color: '#38BDF8', rotate: -13 },
];

// One ring of left/top percentages per breakpoint, tuned to where the
// avatar sits in Hero.tsx: side-by-side on desktop (lg:flex-row), stacked
// and centered on tablet/mobile (flex-col). Adjust the % values here if you
// resize the avatar or change the breakpoint at which Hero switches layout.
const POSITIONS: Record<Breakpoint, Record<string, { left: string; top: string }>> = {
    desktop: {
        react: { left: '95%', top: '50%' },
        nextjs: { left: '90%', top: '36%' },
        typescript: { left: '78%', top: '28%' },
        nodejs: { left: '65%', top: '31%' },
        express: { left: '56%', top: '43%' },
        mongodb: { left: '56%', top: '58%' },
        postgresql: { left: '65%', top: '69%' },
        prisma: { left: '78%', top: '72%' },
        tailwind: { left: '90%', top: '64%' },
    },
    tablet: {
        react: { left: '68%', top: '72%' },
        nextjs: { left: '63.8%', top: '65.6%' },
        typescript: { left: '53.1%', top: '62.2%' },
        nodejs: { left: '41%', top: '63.3%' },
        express: { left: '33.1%', top: '68.6%' },
        mongodb: { left: '33.1%', top: '75.4%' },
        postgresql: { left: '41%', top: '80.7%' },
        prisma: { left: '53.1%', top: '81.8%' },
        tailwind: { left: '63.8%', top: '78.4%' },
    },
    mobile: {
        react: { left: '74%', top: '80%' },
        nextjs: { left: '68.4%', top: '74.2%' },
        typescript: { left: '54.2%', top: '71.1%' },
        nodejs: { left: '38%', top: '72.2%' },
        express: { left: '27.4%', top: '76.9%' },
        mongodb: { left: '27.4%', top: '83.1%' },
        postgresql: { left: '38%', top: '87.8%' },
        prisma: { left: '54.2%', top: '88.9%' },
        tailwind: { left: '68.4%', top: '85.8%' },
    },
};

const INITIAL_Z = Object.fromEntries(TECH_META.map((t, i) => [t.id, i]));

// Matches Tailwind's default sm (640px) and lg (1024px) breakpoints, since
// Hero.tsx switches from flex-col to lg:flex-row at lg.
function getBreakpoint(width: number): Breakpoint {
    if (width >= 1024) return 'desktop';
    if (width >= 640) return 'tablet';
    return 'mobile';
}

export default function TechStackBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const zCounter = useRef(TECH_META.length);
    const [zIndices, setZIndices] = useState<Record<string, number>>(INITIAL_Z);
    const [shuffleKey, setShuffleKey] = useState(0);
    const [breakpoint, setBreakpoint] = useState<Breakpoint>('desktop');

    useEffect(() => {
        const update = () => setBreakpoint(getBreakpoint(window.innerWidth));
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    const bringToFront = (id: string) => {
        zCounter.current += 1;
        setZIndices((prev) => ({ ...prev, [id]: zCounter.current }));
    };

    const reshuffle = () => {
        zCounter.current = TECH_META.length;
        setZIndices(INITIAL_Z);
        setShuffleKey((k) => k + 1);
    };

    return (
        <>
            {/* Full-screen draggable layer, dimmed to sit behind hero content */}
            <div
                ref={containerRef}
                className="absolute  inset-0 w-full h-full z-100 opacity-60 pointer-events-none touch-none"
            >
                {TECH_META.map((tech) => {
                    const Icon = tech.icon;
                    const pos = POSITIONS[breakpoint][tech.id];
                    return (
                        <motion.div
                            key={`${tech.id}-${shuffleKey}-${breakpoint}`}
                            drag
                            dragConstraints={containerRef}
                            dragElastic={0.18}
                            dragMomentum
                            dragTransition={{ bounceStiffness: 400, bounceDamping: 18 }}
                            onDragStart={() => bringToFront(tech.id)}
                            onPointerDown={() => bringToFront(tech.id)}
                            initial={{ opacity: 0, scale: 0.8, rotate: tech.rotate }}
                            animate={{ opacity: 1, scale: 1, rotate: tech.rotate }}
                            whileDrag={{
                                scale: 1.08,
                                rotate: 0,
                                boxShadow: `0 20px 40px -10px ${tech.color}55`,
                            }}
                            whileHover={{ scale: 1.04 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                            style={{ left: pos.left, top: pos.top, zIndex: zIndices[tech.id] }}
                            className="absolute -ml-6 -mt-7 w-12 h-14 sm:-ml-7 sm:-mt-9 sm:w-14 sm:h-18 lg:-ml-8 lg:-mt-10 lg:w-16 lg:h-20 cursor-grab active:cursor-grabbing select-none flex flex-col items-center justify-center gap-1 sm:gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl pointer-events-auto"
                        >
                            <Icon className="text-xl sm:text-2xl lg:text-3xl pointer-events-none" style={{ color: tech.color }} />
                            <span className="text-[9px] sm:text-[10px] lg:text-xs font-medium text-zinc-300 pointer-events-none text-center px-1">
                                {tech.label}
                            </span>
                        </motion.div>
                    );
                })}
            </div>



            {/* Floating control sits above the dimmed layer, full opacity
            <button
                type="button"
                onClick={reshuffle}
                className="absolute top-6 right-6 z-20 text-xs font-medium text-[#008DB9] hover:text-[#c43d56] transition-colors"
            >
                Reshuffle
            </button> */}

        </>
    );
}