

import Image from 'next/image';
import Link from 'next/link';

import { LuGithub, LuLinkedin } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import TechStack from './TechStack';
import AnimatedTitle from './AnimatedTitle';

export default function Hero() {



    return (
        <div className=' w-full min-h-screen relative overflow-hidden bg-[#101010]'>

            {/* Ambient glass background glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#008DB9]/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#c43d56]/20 rounded-full blur-[120px]" />
            </div>

            <nav className='flex items-center justify-between max-w-7xl mx-auto px-6 lg:px-12 py-6 relative z-10'>
                <Link href="/" className='font-heading uppercase text-2xl font-bold bg-gradient-to-r from-[#008DB9] via-white to-[#c43d56] bg-clip-text text-transparent'>
                    Ayan Sujon
                </Link>

                <Link
                    href="/meeting"
                    className="relative inline-flex items-center justify-center rounded-2xl p-[2px] overflow-hidden group"
                >
                    <span
                        className="absolute inset-0 bg-[linear-gradient(90deg,#008DB9_0%,#c43d56_50%,#008DB9_100%)]
               bg-[length:200%_100%] animate-gradient"
                    />
                    <span
                        className="relative rounded-[14px] bg-black px-7 py-1 text-lg font-semibold font-heading
               text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#c43d56]/40"
                    >
                        Need any solution?
                    </span>
                </Link>


            </nav>

            {/* Draggable Tech Stack */}
            <TechStack />

            {/* Hero Section */}
            <main className="flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-12 gap-16 lg:gap-12 relative z-10">
                <div className="flex-1 space-y-6 text-center lg:text-left max-w-xl">
                    <div className=" inline-flex bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl px-5 py-2 shadow-xl">
                        <div className="flex items-center gap-2 text-emerald-400">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                            <span className="font-medium text-sm">AI Driven Full Stack Developer</span>
                        </div>
                    </div>

                    <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-[#008DB9] to-[#c43d56] bg-clip-text text-transparent leading-tight'>
                        Hi, I&apos;m Ayan Sujon
                    </h1>
                    <AnimatedTitle />
                    <p className='text-xl text-zinc-400 mx-auto lg:mx-0 max-w-md'>
                        I craft modern, scalable, and high-performing web applications using
                        React, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL,
                        Prisma, and Tailwind CSS. My focus is on creating clean user
                        experiences, robust backend systems, and products that solve real-world
                        problems.
                    </p>

                    <div className='flex flex-col sm:flex-row items-center gap-6'>
                        <Link
                            href="/meeting"
                            className="font-heading text-lg font-semibold capitalize rounded-2xl px-7 py-2 bg-[linear-gradient(90deg,#008DB9_0%,#c43d56_50%,#008DB9_100%)] bg-[length:200%_100%] animate-gradient text-white shadow-2xl hover:shadow-[#c43d56]/50 transition-all"
                        >
                            Hire Me
                        </Link>

                        <div className='flex items-center gap-4'>
                            <Link
                                href="https://www.linkedin.com/in/ayansujon"
                                target='_blank'
                                aria-label="LinkedIn"
                                className='group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-zinc-400 text-2xl overflow-hidden transition-all duration-300 hover:text-white hover:border-[#008DB9]/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#008DB9]/30'
                            >
                                <span className="absolute inset-0 bg-[#008DB9]/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300" />
                                <LuLinkedin className="relative z-10" />
                            </Link>

                            <Link
                                href="https://github.com/AyanSujon"
                                target='_blank'
                                aria-label="GitHub"
                                className='group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-zinc-400 text-2xl overflow-hidden transition-all duration-300 hover:text-white hover:border-white/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/20'
                            >
                                <span className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300" />
                                <LuGithub className="relative z-10" />
                            </Link>

                            <Link
                                href="mailto:ayansujon.contact@gmail.com"
                                target='_blank'
                                aria-label="Email"
                                className='group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-zinc-400 text-2xl overflow-hidden transition-all duration-300 hover:text-white hover:border-[#c43d56]/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#c43d56]/30'
                            >
                                <span className="absolute inset-0 bg-[#c43d56]/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300" />
                                <MdOutlineEmail className="relative z-10" />
                            </Link>
                        </div>
                    </div>
                </div>



                {/* Animated Avatar with Neon Glow */}
                <div className="relative flex-shrink-0 group mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] mt-8 lg:mt-0">
                    {/* Neon Glow Border */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-[#008DB9] via-[#c43d56] to-[#008DB9] rounded-3xl opacity-70 blur-xl group-hover:opacity-90 transition-opacity duration-500 animate-gradient" />

                    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm">
                        <Image
                            src="https://i.ibb.co/qXdkjZV/ayansujon-copy.jpg"
                            alt="Ayan Sujon"
                            width={400}
                            height={400}
                            className="w-full h-auto rounded-3xl object-cover aspect-square"
                            priority
                        />
                    </div>

                    <div className="absolute -top-3 -left-4 sm:-top-4 sm:-left-6 animate-bounce [animation-duration:3s] rounded-2xl border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-md shadow-xl">
                        <p className="text-sm font-medium text-white">4 Months</p>
                        <p className="text-[#58C7FF] text-sm -mt-0.5">Working Experience</p>
                    </div>

                    {/* Bottom Right Badge - Open to impact */}
                    <div className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-4 bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl px-5 py-2 shadow-xl">
                        <div className="flex items-center gap-2 text-emerald-400">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                            <span className="font-medium text-sm">Open to impact</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}










