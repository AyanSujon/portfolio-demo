
// import Image from 'next/image';
// import Link from 'next/link'
// import React from 'react'
// import { LuGithub, LuLinkedin } from "react-icons/lu";
// import { MdOutlineEmail } from "react-icons/md";
// import AnimatedAvatar from './AnimatedAvatar';

// export default function Hero() {
//     return (
//         <div className='w-full h-screen '>
//             <nav className='flex items-center justify-between w-full py-4 dark:bg-black'>
//                 <Link href="/" className=' font-heading uppercase text-xl font-bold dark:text-white bg-gradient-to-r from-[#008DB9] via-[#008DB9] to-[#c43d56] 
//              bg-clip-text text-transparent'>
//                     Ayan Sujon
//                 </Link>
//                 <Link
//                     href="/meeting"
//                     className="font-heading text-lg font-semibold capitalize rounded-xl px-6 py-2
//              bg-[linear-gradient(90deg,#008DB9_0%,#c43d56_50%,#008DB9_100%)] 
//              bg-[length:200%_100%] 
//              animate-gradient 
//              text-white shadow-lg hover:shadow-xl"
//                 >
//                     Need any solution?
//                 </Link>


//             </nav>


//             {/* Hero Section */}
//             <main className="flex justify-between items-center align-center py-12">
//                 <div>

//                     <h1 className='text-4xl font-bold  dark:text-white bg-gradient-to-r from-[#008DB9] to-[#c43d56] 
//              bg-clip-text text-transparent'>Hi, I'm Ayan Sujon</h1>
//                     <p className='text-zinc-600 dark:text-zinc-400'>Tech Enthusiast | React Developer. I love turning ideas into clean, impactful, and user-friendly web experiences.</p>
//                     <div className='flex items-center gap-4 mt-4'>

//                         <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded '>
//                             Hire Me
//                         </button>
//                         <ul className='flex items-center gap-4'>
//                             <li><Link href="https://www.linkedin.com/in/ayansujon" target='_blank' className='text-zinc-600 hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400'>
//                                 <LuLinkedin size={24} />


//                             </Link></li>
//                             <li><Link href="https://github.com/AyanSujon" target='_blank' className='text-zinc-600 hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400'>
//                                 <LuGithub size={24} />

//                             </Link></li>
//                             <li><Link href="mailto:ayansujon.contact@gmail.com" target='_blank' className='text-zinc-600 hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400'>
//                                 <MdOutlineEmail size={24} />

//                             </Link></li>
//                         </ul>
//                     </div>

//                 </div>
//                 <div>
//                     <figure>
//                         <Image
//                             src="https://i.ibb.co/qXdkjZV/ayansujon-copy.jpg"
//                             alt="Ayan Sujon"
//                             width={300}
//                             height={300}
//                             className="rounded-lg shadow-lg"
//                         />
//                     </figure>




//                 </div>
//             </main>


//         </div>
//     )
// }
















import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";


export default function Hero() {
    return (
        <div className='w-full min-h-screen relative overflow-hidden'>

            <nav className='flex items-center justify-between w-full py-6 px-8 relative z-10'>
                <Link href="/" className='font-heading uppercase text-2xl font-bold bg-gradient-to-r from-[#008DB9] via-white to-[#c43d56] bg-clip-text text-transparent'>
                    Ayan Sujon
                </Link>

                <Link
                    href="/meeting"
                    className="font-heading text-lg font-semibold capitalize rounded-2xl px-7 py-3
                     bg-[linear-gradient(90deg,#008DB9_0%,#c43d56_50%,#008DB9_100%)] 
                     bg-[length:200%_100%] animate-gradient text-white shadow-2xl hover:shadow-[#c43d56]/50 transition-all"
                >
                    Need any solution?
                </Link>
            </nav>

            {/* Hero Section */}
            <main className="flex flex-col lg:flex-row justify-between items-center max-w-6xl mx-auto px-8 pt-12 gap-12 relative z-10">
                <div className="flex-1 space-y-6">
                    <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-[#008DB9] to-white bg-clip-text text-transparent leading-tight'>
                        Hi, I&apos;m Ayan Sujon
                    </h1>
                    <p className='text-xl text-zinc-400 max-w-md'>
                        Tech Enthusiast | React Developer.<br />
                        I love turning ideas into clean, impactful, and user-friendly web experiences.
                    </p>

                    <div className='flex items-center gap-6'>
                        <button className='bg-white text-black font-semibold py-3.5 px-9 rounded-2xl hover:bg-white/90 transition-all active:scale-95'>
                            Hire Me
                        </button>

                        <div className='flex items-center gap-5 text-3xl'>
                            <Link href="https://www.linkedin.com/in/ayansujon" target='_blank' className='text-zinc-400 hover:text-[#008DB9] transition-colors'>
                                <LuLinkedin />
                            </Link>
                            <Link href="https://github.com/AyanSujon" target='_blank' className='text-zinc-400 hover:text-white transition-colors'>
                                <LuGithub />
                            </Link>
                            <Link href="mailto:ayansujon.contact@gmail.com" target='_blank' className='text-zinc-400 hover:text-[#c43d56] transition-colors'>
                                <MdOutlineEmail />
                            </Link>
                        </div>
                    </div>

                    {/* Experience Badge */}
                    <div className="inline-flex items-center gap-3 bg-zinc-900/80 border border-[#008DB9]/30 rounded-2xl px-5 py-3 backdrop-blur-md">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-[#008DB9] font-medium">4 months of working experience</span>
                    </div>
                </div>

                {/* Animated Avatar with Neon Glow */}
                <div className="relative flex-shrink-0 group">
                    {/* Neon Glow Border */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-[#008DB9] via-[#c43d56] to-[#008DB9] rounded-3xl opacity-70 blur-xl group-hover:opacity-90 transition-opacity duration-500" />

                    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <figure>
                            <Image
                                src="https://i.ibb.co/qXdkjZV/ayansujon-copy.jpg"
                                alt="Ayan Sujon"
                                width={300}
                                height={300}
                                className="rounded-lg shadow-lg"
                            />
                        </figure>

                    </div>

                    {/* Top Left Badge */}
                    <div className="absolute -top-8 -left-6 bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/25 dark:border-white/10 rounded-2xl px-4 py-2.5 flex items-center gap-3 shadow-xl">
                        <div>
                            <p className="text-sm font-medium text-white">4 months</p>
                            <p className="text-[#58C7FF] text-sm -mt-0.5">Working experience</p>
                        </div>
                    </div>

                    {/* Bottom Right Badge - "Open to impact" */}
                    <div className="absolute -bottom-6 -right-4 bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/25 dark:border-white/10 rounded-2xl px-5 py-3 shadow-xl">
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
