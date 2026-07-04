

// import Image from 'next/image';
// import Link from 'next/link';
// import {
//     FiExternalLink,
//     FiGithub,
//     FiArrowRight,
//     FiCheck
// } from 'react-icons/fi';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { Card, CardContent } from '@/components/ui/card';

// interface Project {
//     id: number;
//     title: string;
//     name: string;
//     description: string;
//     image: string;
//     liveUrl: string;
//     githubUrl: string;
//     caseStudyUrl?: string;
//     tech: string[];
//     features: string[];
// }

// const projects: Project[] = [
//     {
//         id: 1,
//         title: "Featured Project",
//         name: "ClubSphere",
//         description: "Full-stack MERN platform for discovering, joining, and managing local clubs & events. Features role-based dashboards (Admin, Manager, Member), Stripe payments, and comprehensive club management system.",
//         image: "/projects/clubsphere.jpg",
//         liveUrl: "https://clubsphere-a11b12.netlify.app/",
//         githubUrl: "https://github.com/AyanSujon/ClubSphere-Client",
//         caseStudyUrl: "#",
//         tech: ["React", "Next.js", "Tailwind", "Node.js", "Express", "MongoDB", "Firebase", "Stripe", "Tanstack Query", "MERN"],
//         features: [
//             "Role Based Authentication",
//             "Stripe Payment System",
//             "Club & Event Management",
//             "Multi-role Dashboards",
//             "Transaction History"
//         ],
//     },
//     {
//         id: 2,
//         title: "Featured Project",
//         name: "Footwear Zone",
//         description: "Modern and responsive e-commerce website for footwear with category-wise browsing, admin product management, search & filter, built with Next.js and Firebase authentication.",
//         image: "/projects/footwearzone.jpg",
//         liveUrl: "https://footwear-zone-client.vercel.app/",
//         githubUrl: "https://github.com/AyanSujon/FootwearZoneClient",
//         caseStudyUrl: "#",
//         tech: ["Next.js", "React", "Tailwind CSS", "Firebase", "Node.js", "TypeScript", "Shadcn/UI"],
//         features: [
//             "Firebase Authentication",
//             "Product Category Filtering",
//             "Admin Dashboard",
//             "Search & Sorting",
//             "Responsive Design"
//         ],
//     },
//     {
//         id: 3,
//         title: "Featured Project",
//         name: "EcoTrack",
//         description: "Community-driven sustainability platform where users can join eco challenges, share tips, participate in green events, and track their personal environmental impact.",
//         image: "/projects/ecotrack.jpg",
//         liveUrl: "https://eco-track-b12a10.netlify.app/",
//         githubUrl: "https://github.com/AyanSujon/ecotrack-client-side",
//         caseStudyUrl: "#",
//         tech: ["React", "Vite", "Tailwind", "Firebase", "React Router", "Framer Motion", "TypeScript"],
//         features: [
//             "Sustainability Challenges",
//             "Eco Tips Sharing",
//             "Green Events",
//             "Impact Tracking",
//             "Community Features"
//         ],
//     },
// ];

// export default function Projects() {
//     return (
//         <section id="projects" className="py-20">
//             <div className="max-w-7xl mx-auto px-6">
//                 {/* Header */}
//                 <div className="w-full mb-12 text-center">
//                     <div className="inline-flex bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl px-5 py-2 shadow-xl">
//                         <div className="flex items-center gap-2 text-emerald-400">
//                             <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
//                             <span className="font-medium text-sm">Projects</span>
//                         </div>
//                     </div>

//                     <h2 className="mt-6 max-w-6xl text-4xl font-semibold leading-[1.05] tracking-tighter text-white sm:text-5xl lg:text-7xl">
//                         <span className="bg-gradient-to-r from-[#008DB9] to-[#C43D56] bg-clip-text text-transparent">
//                             Featured Projects
//                         </span>
//                     </h2>

//                     <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
//                         A collection of projects that showcase my expertise in full-stack development,
//                         AI-powered solutions, and modern web technologies.
//                     </p>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-8">
//                     {projects.map((project) => (
//                         <Card
//                             key={project.id}
//                             className="group overflow-hidden border border-white/10 
//                                        bg-white/5 backdrop-blur-3xl 
//                                        hover:bg-white/10 hover:border-[#008DB9]/40
//                                        transition-all duration-500 
//                                        shadow-2xl flex flex-col md:flex-row h-full 
//                                        rounded-3xl relative"
//                         >
//                             {/* Subtle glass highlight */}
//                             <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-30 pointer-events-none" />

//                             {/* LEFT SIDE - All Text Info */}
//                             <div className="flex-1 flex flex-col p-8 md:p-10">
//                                 <div className="flex items-center justify-between mb-6">
//                                     <span className="text-sm font-medium bg-gradient-to-r from-[#008DB9] to-[#C43D56] bg-clip-text text-transparent">
//                                         {project.title}
//                                     </span>
//                                     <div className="flex gap-4">
//                                         <a
//                                             href={project.liveUrl}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="text-muted-foreground hover:text-[#008DB9] transition-colors"
//                                         >
//                                             <FiExternalLink size={20} />
//                                         </a>
//                                         <a
//                                             href={project.githubUrl}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="text-muted-foreground hover:text-[#008DB9] transition-colors"
//                                         >
//                                             <FiGithub size={20} />
//                                         </a>
//                                     </div>
//                                 </div>

//                                 <h3 className="text-3xl font-semibold mb-4 text-white">{project.name}</h3>

//                                 <p className="text-muted-foreground mb-8 leading-relaxed">
//                                     {project.description}
//                                 </p>

//                                 {/* Tech Stack */}
//                                 <div className="flex flex-wrap gap-2 mb-8">
//                                     {project.tech.map((tech) => (
//                                         <Badge
//                                             key={tech}
//                                             variant="secondary"
//                                             className="text-xs text-white/60 border border-white/10 hover:border-[#008DB9]/30 transition-colors bg-white/5"
//                                         >
//                                             {tech}
//                                         </Badge>
//                                     ))}
//                                 </div>

//                                 {/* Features */}
//                                 <div className="mb-10 space-y-2.5">
//                                     {project.features.map((feature) => (
//                                         <div key={feature} className="flex items-center gap-2 text-sm">
//                                             <FiCheck className="w-4 h-4 text-[#008DB9] flex-shrink-0" />
//                                             <span className="text-muted-foreground">{feature}</span>
//                                         </div>
//                                     ))}
//                                 </div>

//                                 {/* Action Button */}
//                                 <div className="mt-auto">
//                                     <Button
//                                         asChild
//                                         variant="default"
//                                         className="w-full bg-gradient-to-r from-[#008DB9] to-[#C43D56] 
//                                                    hover:brightness-110 transition-all duration-300 
//                                                    h-12 text-base font-medium
//                                                    flex items-center justify-center gap-2"
//                                     >
//                                         <Link href={project.caseStudyUrl || "#"} className="flex items-center">
//                                             View Case Study
//                                             <FiArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
//                                         </Link>
//                                     </Button>
//                                 </div>
//                             </div>

//                             {/* RIGHT SIDE - Image */}
//                             <div className="relative md:w-5/12 lg:w-2/5 min-h-[380px] md:min-h-full bg-zinc-950 rounded-r-3xl overflow-hidden">
//                                 <Image
//                                     src={project.image}
//                                     alt={project.name}
//                                     fill
//                                     className="object-cover transition-transform duration-700 group-hover:scale-105"
//                                     sizes="(max-width: 768px) 100vw, 500px"
//                                 />

//                                 {/* Hover Overlay */}
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent 
//                                               opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                             </div>
//                         </Card>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }




















// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import {
//     FiExternalLink,
//     FiGithub,
//     FiArrowRight,
//     FiCheck
// } from 'react-icons/fi';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);


// interface Project {
//     id: number;
//     title: string;
//     name: string;
//     description: string;
//     image: string;
//     liveUrl: string;
//     githubUrl: string;
//     caseStudyUrl?: string;
//     tech: string[];
//     features: string[];
// }

// const projects: Project[] = [
//     {
//         id: 1,
//         title: "Featured Project",
//         name: "ClubSphere",
//         description: "Full-stack MERN platform for discovering, joining, and managing local clubs & events. Features role-based dashboards (Admin, Manager, Member), Stripe payments, and comprehensive club management system.",
//         image: "/projects/clubsphere.jpg",
//         liveUrl: "https://clubsphere-a11b12.netlify.app/",
//         githubUrl: "https://github.com/AyanSujon/ClubSphere-Client",
//         caseStudyUrl: "#",
//         tech: ["React", "Next.js", "Tailwind", "Node.js", "Express", "MongoDB", "Firebase", "Stripe", "Tanstack Query", "MERN"],
//         features: [
//             "Role Based Authentication",
//             "Stripe Payment System",
//             "Club & Event Management",
//             "Multi-role Dashboards",
//             "Transaction History"
//         ],
//     },
//     {
//         id: 2,
//         title: "Featured Project",
//         name: "Footwear Zone",
//         description: "Modern and responsive e-commerce website for footwear with category-wise browsing, admin product management, search & filter, built with Next.js and Firebase authentication.",
//         image: "/projects/footwearzone.jpg",
//         liveUrl: "https://footwear-zone-client.vercel.app/",
//         githubUrl: "https://github.com/AyanSujon/FootwearZoneClient",
//         caseStudyUrl: "#",
//         tech: ["Next.js", "React", "Tailwind CSS", "Firebase", "Node.js", "TypeScript", "Shadcn/UI"],
//         features: [
//             "Firebase Authentication",
//             "Product Category Filtering",
//             "Admin Dashboard",
//             "Search & Sorting",
//             "Responsive Design"
//         ],
//     },
//     {
//         id: 3,
//         title: "Featured Project",
//         name: "EcoTrack",
//         description: "Community-driven sustainability platform where users can join eco challenges, share tips, participate in green events, and track their personal environmental impact.",
//         image: "/projects/ecotrack.jpg",
//         liveUrl: "https://eco-track-b12a10.netlify.app/",
//         githubUrl: "https://github.com/AyanSujon/ecotrack-client-side",
//         caseStudyUrl: "#",
//         tech: ["React", "Vite", "Tailwind", "Firebase", "React Router", "Framer Motion", "TypeScript"],
//         features: [
//             "Sustainability Challenges",
//             "Eco Tips Sharing",
//             "Green Events",
//             "Impact Tracking",
//             "Community Features"
//         ],
//     },
// ];


// export default function Projects() {
//     const containerRef = useRef<HTMLDivElement>(null);
//     const [isLargeScreen, setIsLargeScreen] = useState(true);

//     // Detect screen size
//     useEffect(() => {
//         const checkScreenSize = () => {
//             setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
//         };

//         checkScreenSize();
//         window.addEventListener('resize', checkScreenSize);
//         return () => window.removeEventListener('resize', checkScreenSize);
//     }, []);

//     // GSAP Horizontal Scroll - Only on large screens
//     useEffect(() => {
//         if (!isLargeScreen || !containerRef.current) return;

//         const ctx = gsap.context(() => {
//             const panels = gsap.utils.toArray(".project-panel") as HTMLElement[];

//             if (panels.length === 0) return;

//             gsap.set(panels, { xPercent: (i) => i * 100 });

//             gsap.to(panels, {
//                 xPercent: -100 * (panels.length - 1),
//                 ease: "none",
//                 scrollTrigger: {
//                     trigger: containerRef.current,
//                     pin: true,
//                     scrub: 0.8,
//                     start: "top top",
//                     end: () => `+=${window.innerHeight * (panels.length - 0.5)}`,
//                     invalidateOnRefresh: true,
//                     anticipatePin: 1,
//                 }
//             });

//             // Subtle scale effect
//             panels.forEach((panel, index) => {
//                 gsap.fromTo(panel,
//                     { scale: 0.92, opacity: 0.8 },
//                     {
//                         scale: 1,
//                         opacity: 1,
//                         ease: "none",
//                         scrollTrigger: {
//                             trigger: panel,
//                             containerAnimation: gsap.getById(panel), // or use the main tween
//                             start: "left center",
//                             end: "right center",
//                             scrub: true,
//                         }
//                     }
//                 );
//             });
//         }, containerRef);

//         return () => ctx.revert();
//     }, [isLargeScreen]);

//     return (
//         <section id="projects" className="bg-black overflow-hidden">
//             {/* Header */}
//             <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 mb-50">
//                 <div className="text-center">
//                     <div className="inline-flex bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl px-5 py-2">
//                         <div className="flex items-center gap-2 text-emerald-400">
//                             <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
//                             <span className="font-medium text-sm">Projects</span>
//                         </div>
//                     </div>

//                     <h2 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.05] tracking-tighter text-white">
//                         <span className="bg-gradient-to-r from-[#008DB9] to-[#C43D56] bg-clip-text text-transparent">
//                             Featured Projects
//                         </span>
//                     </h2>

//                     <p className="mx-auto mt-5 max-w-xl text-sm sm:text-base text-white/60">
//                         {isLargeScreen 
//                             ? "Scroll to explore — each project takes full screen with smooth transitions."
//                             : "Explore my recent work"
//                         }
//                     </p>
//                 </div>
//             </div>

//             {/* ==================== HORIZONTAL SCROLL (Desktop) ==================== */}
//             {isLargeScreen ? (
//                 <div ref={containerRef} className="relative h-[90vh] w-full overflow-hidden">
//                     <div className="flex h-[70vh] w-[300vw] relative">
//                         {projects.map((project, index) => (
//                             <div
//                                 key={project.id}
//                                 className="project-panel flex-shrink-0 w-screen h-[70vh] relative flex items-center justify-center p-6"
//                             >
//                                 <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-16 h-[50vh] w-full items-center">
//                                     {/* Content */}
//                                     <div className="flex flex-col justify-center h-[50vh] md:pr-8">
//                                         {/* ... same content as before ... */}
//                                         <div className="inline-flex bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl px-5 py-2 mb-8 w-fit">
//                                             <span className="text-sm font-medium bg-gradient-to-r from-[#008DB9] to-[#C43D56] bg-clip-text text-transparent">
//                                                 {project.title}
//                                             </span>
//                                         </div>

//                                         <h3 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-none tracking-tighter text-white mb-6">
//                                             {project.name}
//                                         </h3>

//                                         <p className="text-lg text-white/70 mb-10 max-w-lg">
//                                             {project.description}
//                                         </p>

//                                         <div className="flex flex-wrap gap-2 mb-10">
//                                             {project.tech.slice(0, 6).map((tech) => (
//                                                 <Badge key={tech} variant="secondary" className="text-xs px-4 py-1.5 bg-white/5 border border-white/10 text-white/70">
//                                                     {tech}
//                                                 </Badge>
//                                             ))}
//                                         </div>

//                                         <div className="space-y-3 mb-12">
//                                             {project.features.map((feature) => (
//                                                 <div key={feature} className="flex items-center gap-3 text-white/80">
//                                                     <FiCheck className="w-5 h-5 text-[#008DB9] flex-shrink-0" />
//                                                     <span>{feature}</span>
//                                                 </div>
//                                             ))}
//                                         </div>

//                                         {/* Responsive Buttons */}
//                                         <div className="flex flex-col sm:flex-row gap-4">
//                                             <Button
//                                                 asChild
//                                                 size="lg"
//                                                 className="bg-gradient-to-r from-[#008DB9] to-[#C43D56] hover:brightness-110 text-base px-8"
//                                             >
//                                                 <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                                                     Live Demo <FiExternalLink className="ml-2" />
//                                                 </a>
//                                             </Button>

//                                             <Button
//                                                 asChild
//                                                 size="lg"
//                                                 variant="outline"
//                                                 className="border-white/30 hover:bg-white/10 text-base px-8"
//                                             >
//                                                 <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                                                     <FiGithub className="mr-2" /> Source Code
//                                                 </a>
//                                             </Button>
//                                         </div>
//                                     </div>

//                                     {/* Image */}
//                                     <div className="relative h-[75vh] lg:h-[85vh] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
//                                         <Image
//                                             src={project.image}
//                                             alt={project.name}
//                                             fill
//                                             className="object-cover"
//                                             sizes="(max-width: 1024px) 100vw, 50vw"
//                                             priority={index === 0}
//                                         />
//                                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
//                                     </div>
//                                 </div>

//                                 <div className="absolute bottom-8 right-8 text-7xl font-bold text-white/10 select-none">
//                                     {String(index + 1).padStart(2, '0')}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             ) : (
//                 /* ==================== VERTICAL CARDS (Mobile + Tablet) ==================== */
//                 <div className="max-w-5xl mx-auto px-6 pb-20 space-y-16">
//                     {projects.map((project, index) => (
//                         <div
//                             key={project.id}
//                             className="group bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500"
//                         >
//                             <div className="relative h-80 md:h-96">
//                                 <Image
//                                     src={project.image}
//                                     alt={project.name}
//                                     fill
//                                     className="object-cover group-hover:scale-105 transition-transform duration-700"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

//                                 <div className="absolute bottom-6 left-6 right-6">
//                                     <h3 className="text-4xl md:text-5xl font-semibold text-white mb-2">
//                                         {project.name}
//                                     </h3>
//                                     <p className="text-white/70 line-clamp-2">{project.description}</p>
//                                 </div>
//                             </div>

//                             <div className="p-8">
//                                 <div className="flex flex-wrap gap-2 mb-8">
//                                     {project.tech.slice(0, 5).map((tech) => (
//                                         <Badge key={tech} variant="secondary" className="text-xs bg-white/5 border-white/10">
//                                             {tech}
//                                         </Badge>
//                                     ))}
//                                 </div>

//                                 <div className="space-y-3 mb-10">
//                                     {project.features.map((feature) => (
//                                         <div key={feature} className="flex items-center gap-3 text-white/80">
//                                             <FiCheck className="w-5 h-5 text-[#008DB9]" />
//                                             <span>{feature}</span>
//                                         </div>
//                                     ))}
//                                 </div>

//                                 <div className="flex flex-col sm:flex-row gap-4">
//                                     <Button
//                                         asChild
//                                         className="bg-gradient-to-r from-[#008DB9] to-[#C43D56] hover:brightness-110"
//                                     >
//                                         <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                                             Live Demo <FiExternalLink className="ml-2" />
//                                         </a>
//                                     </Button>

//                                     <Button
//                                         asChild
//                                         variant="outline"
//                                         className="border-white/30 hover:bg-white/10"
//                                     >
//                                         <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                                             <FiGithub className="mr-2" /> Source Code
//                                         </a>
//                                     </Button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}

//             {/* Final CTA */}
//             <div className="py-20 text-center border-t border-white/10">
//                 <p className="text-white/50 text-sm">
//                     More projects available on{' '}
//                     <a href="https://github.com/AyanSujon" target="_blank" className="text-[#008DB9] hover:underline">
//                         GitHub
//                     </a>
//                 </p>
//             </div>
//         </section>
//     );
// }




















'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
    FiExternalLink,
    FiGithub,
    FiArrowRight,
    FiCheck
} from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


interface Project {
    id: number;
    title: string;
    name: string;
    description: string;
    image: string;
    liveUrl: string;
    githubUrl: string;
    caseStudyUrl?: string;
    tech: string[];
    features: string[];
}

const projects: Project[] = [
    {
        id: 1,
        title: "Featured Project",
        name: "ClubSphere",
        description: "Full-stack MERN platform for discovering, joining, and managing local clubs & events. Features role-based dashboards (Admin, Manager, Member), Stripe payments, and comprehensive club management system.",
        image: "/projects/clubsphere.jpg",
        liveUrl: "https://clubsphere-a11b12.netlify.app/",
        githubUrl: "https://github.com/AyanSujon/ClubSphere-Client",
        caseStudyUrl: "#",
        tech: ["React", "Next.js", "Tailwind", "Node.js", "Express", "MongoDB", "Firebase", "Stripe", "Tanstack Query", "MERN"],
        features: [
            "Role Based Authentication",
            "Stripe Payment System",
            "Club & Event Management",
            "Multi-role Dashboards",
            "Transaction History"
        ],
    },
    {
        id: 2,
        title: "Featured Project",
        name: "Footwear Zone",
        description: "Modern and responsive e-commerce website for footwear with category-wise browsing, admin product management, search & filter, built with Next.js and Firebase authentication.",
        image: "/projects/footwearzone.jpg",
        liveUrl: "https://footwear-zone-client.vercel.app/",
        githubUrl: "https://github.com/AyanSujon/FootwearZoneClient",
        caseStudyUrl: "#",
        tech: ["Next.js", "React", "Tailwind CSS", "Firebase", "Node.js", "TypeScript", "Shadcn/UI"],
        features: [
            "Firebase Authentication",
            "Product Category Filtering",
            "Admin Dashboard",
            "Search & Sorting",
            "Responsive Design"
        ],
    },
    {
        id: 3,
        title: "Featured Project",
        name: "EcoTrack",
        description: "Community-driven sustainability platform where users can join eco challenges, share tips, participate in green events, and track their personal environmental impact.",
        image: "/projects/ecotrack.jpg",
        liveUrl: "https://eco-track-b12a10.netlify.app/",
        githubUrl: "https://github.com/AyanSujon/ecotrack-client-side",
        caseStudyUrl: "#",
        tech: ["React", "Vite", "Tailwind", "Firebase", "React Router", "Framer Motion", "TypeScript"],
        features: [
            "Sustainability Challenges",
            "Eco Tips Sharing",
            "Green Events",
            "Impact Tracking",
            "Community Features"
        ],
    },
];


export default function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLargeScreen, setIsLargeScreen] = useState(true);

    // Detect screen size
    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // GSAP Horizontal Scroll - Only on large screens
    useEffect(() => {
        if (!isLargeScreen || !containerRef.current) return;

        const ctx = gsap.context(() => {
            const panels = gsap.utils.toArray(".project-panel") as HTMLElement[];

            if (panels.length === 0) return;

            gsap.set(panels, { xPercent: (i) => i * 100 });

            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 0.8,
                    start: "top top",
                    end: () => `+=${window.innerHeight * (panels.length - 0.5)}`,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                }
            });

            // Subtle scale effect
            panels.forEach((panel, index) => {
                gsap.fromTo(panel,
                    { scale: 0.92, opacity: 0.8 },
                    {
                        scale: 1,
                        opacity: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: panel,
                            containerAnimation: gsap.getById(panel), // or use the main tween
                            start: "left center",
                            end: "right center",
                            scrub: true,
                        }
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, [isLargeScreen]);

    return (
        <section id="projects" className=" overflow-hidden">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
                <div className="text-center">
                    <div className="inline-flex bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl px-5 py-2">
                        <div className="flex items-center gap-2 text-emerald-400">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                            <span className="font-medium text-sm">Projects</span>
                        </div>
                    </div>

                    <h2 className="mt-6 max-w-6xl text-4xl font-semibold leading-[1.05] tracking-tighter text-white sm:text-5xl lg:text-7xl">
                        <span className="bg-gradient-to-r from-[#008DB9] to-[#C43D56] bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
                        A collection of projects that showcase my expertise in full-stack development,
                        AI-powered solutions, and modern web technologies.                    </p>
                </div>
            </div>

            {/* ==================== HORIZONTAL SCROLL (Desktop) ==================== */}
            {isLargeScreen ? (
                <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
                    <div className="flex h-full w-[300vw] relative">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className="project-panel flex-shrink-0 w-screen h-full relative flex items-center justify-center p-6"
                            >

                                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-16 w-full h-[90vh] items-center  bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl">
                                    <div className="flex flex-col justify-center h-full overflow-hidden  p-8 lg:p-10 ">
                                        <div className="inline-flex bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl px-4 py-1.5 mb-4 w-fit">
                                            <span className="text-xs font-medium bg-gradient-to-r from-[#008DB9] to-[#C43D56] bg-clip-text text-transparent">
                                                {project.title}
                                            </span>
                                        </div>

                                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-none tracking-tighter text-white mb-4">
                                            {project.name}
                                        </h3>

                                        <p className="text-sm md:text-base text-white/70 mb-4 max-w-lg line-clamp-3">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.slice(0, 6).map((tech) => (
                                                <Badge key={tech} variant="secondary" className="text-xs px-3 py-1 bg-white/5 border border-white/10 text-white/70">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="space-y-1.5 mb-6">
                                            {project.features.map((feature) => (
                                                <div key={feature} className="flex items-center gap-2.5 text-sm text-white/80">
                                                    <FiCheck className="w-4 h-4 text-[#008DB9] flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Responsive Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <Button
                                                asChild
                                                className="bg-gradient-to-r from-[#008DB9] to-[#C43D56] hover:brightness-110 text-sm px-6"
                                            >
                                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                    Live Demo <FiExternalLink className="ml-2" />
                                                </a>
                                            </Button>

                                            <Button
                                                asChild
                                                variant="outline"
                                                className="border-white/30 hover:bg-white/10 text-sm px-6"
                                            >
                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                    <FiGithub className="mr-2" /> Source Code
                                                </a>
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Image column: fills the same 90vh height as the
                                        content column (h-full on a 90vh-tall grid parent) */}
                                    <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            priority={index === 0}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                    </div>
                                </div>

                                <div className="absolute bottom-8 right-8 text-7xl font-bold text-white/10 select-none">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                /* ==================== VERTICAL CARDS (Mobile + Tablet) ==================== */
                <div className="max-w-5xl mx-auto px-6 pb-20 space-y-16">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 hover:bg-white/[0.07] transition-all duration-500"
                        >
                            <div className="relative h-80 md:h-96">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-4xl md:text-5xl font-semibold text-white mb-2">
                                        {project.name}
                                    </h3>
                                    <p className="text-white/70 line-clamp-2">{project.description}</p>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.slice(0, 5).map((tech) => (
                                        <Badge key={tech} variant="secondary" className="text-xs bg-white/5 border-white/10">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="space-y-3 mb-10">
                                    {project.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-3 text-white/80">
                                            <FiCheck className="w-5 h-5 text-[#008DB9]" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button
                                        asChild
                                        className="bg-gradient-to-r from-[#008DB9] to-[#C43D56] hover:brightness-110"
                                    >
                                        <Link className="flex items-center" href={project.liveUrl} target="_blank" rel="noopener noreferrer" >
                                            Live Demo <FiExternalLink className="ml-2" />
                                        </Link>
                                    </Button>

                                    <Button
                                        asChild
                                        variant="outline"
                                        className="border-white/30 hover:bg-white/10"
                                    >
                                        <Link className="flex items-center" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <FiGithub className="mr-2" /> Source Code
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Final CTA */}
            <div className="py-20 text-center border-t border-white/10">
                <p className="text-white/50 text-sm">
                    More projects available on{' '}
                    <Link href="https://github.com/AyanSujon" target="_blank" className="text-[#008DB9] hover:underline">
                        GitHub
                    </Link>
                </p>
            </div>
        </section>
    );
}