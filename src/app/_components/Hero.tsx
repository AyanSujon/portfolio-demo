
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

export default function Hero() {
    return (
        <div className='w-full h-screen '>
            <nav className='flex items-center justify-between w-full py-4 dark:bg-black'>
                <Link href="/" className=' font-heading uppercase text-xl font-bold text-zinc-800 dark:text-white'>
                    Ayan Sujon
                </Link>
                <Link href="/meeting" className='font-heading text-lg font-semibold capitalize rounded-lg px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white'>
                    Need any solution?
                </Link>


            </nav>


            {/* Hero Section */}
            <main className="flex justify-between items-center align-center py-12">
                <div>

                    <h1 className='text-4xl font-bold text-zinc-800 dark:text-white'>Hi, I'm Ayan Sujon</h1>
                    <p className='text-zinc-600 dark:text-zinc-400'>Tech Enthusiast | React Developer. I love turning ideas into clean, impactful, and user-friendly web experiences.</p>
                    <div className='flex items-center gap-4 mt-4'>

                        <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
                            Hire Me
                        </button>
                        <ul className='flex items-center gap-4'>
                            <li><Link href="https://www.linkedin.com/in/ayansujon" target='_blank' className='text-zinc-600 hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400'>
                                <LuLinkedin size={24} />


                            </Link></li>
                            <li><Link href="https://github.com/AyanSujon" target='_blank' className='text-zinc-600 hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400'>
                                <LuGithub  size={24}/>

                            </Link></li>
                            <li><Link href="mailto:ayansujon.contact@gmail.com" target='_blank' className='text-zinc-600 hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400'>
                                <MdOutlineEmail size={24} />

                            </Link></li>
                        </ul>
                    </div>

                </div>
                <div>
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
            </main>


        </div>
    )
}

















