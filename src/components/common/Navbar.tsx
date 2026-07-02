

// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Navbar() {
//     const navRef = useRef<HTMLDivElement>(null);
//     const [menuOpen, setMenuOpen] = useState(false);

//     useEffect(() => {
//         const el = navRef.current;

//         if (!el) return;

//         // initial state (hidden below screen)
//         gsap.set(el, {
//             y: 120,
//             opacity: 0,
//         });

//         // animate on scroll
//         gsap.to(el, {
//             y: 0,
//             opacity: 1,
//             duration: 1.5,
//             delay: 1,
//             ease: "power3.out",
//             scrollTrigger: {
//                 trigger: document.body,
//                 start: "top top",
//                 toggleActions: "play none none reverse",
//             },
//         });

//     }, []);

//     return (
//         <div
//             ref={navRef}
//             className="
//                 fixed top-0 left-0 right-0 z-50 
//                 w-full flex justify-center
//             "
//         >
//             <nav
//                 className="
//                     w-[95%] md:w-[70%] lg:w-[50%]
//                     flex items-center justify-between
//                     px-6 py-4
//                     bg-white/20 dark:bg-black/40
//                     backdrop-blur
//                     border border-white/20 dark:border-white/10
//                     rounded-b-3xl
//                     shadow-lg
//                 "
//             >
//                 {/* Logo */}
//                 <Link
//                     href="/"
//                     className=" font-heading uppercase text-xl font-bold text-zinc-800 dark:text-white"
//                 >
//                     Ayan Sujon
//                 </Link>

//                 {/* Desktop Menu */}
//                 <ul className="hidden md:flex items-center gap-6 text-sm uppercase">
//                     <li><Link className="font-heading hover:underline " href="/">Home</Link></li>
//                     <li><Link className="font-heading hover:underline " href="/about">About</Link></li>
//                     <li><Link className="font-heading hover:underline " href="/services">Services</Link></li>
//                     <li><Link className="font-heading hover:underline " href="/projects">Projects</Link></li>
//                     <li><Link className="font-heading hover:underline " href="/blog">Blog</Link></li>
//                     <li><Link className="font-heading hover:underline " href="/contact">Contact</Link></li>
//                 </ul>

//                 {/* Mobile Button */}
//                 <button
//                     className="md:hidden text-black dark:text-white"
//                     onClick={() => setMenuOpen(!menuOpen)}
//                 >
//                     ☰
//                 </button>
//             </nav>

//             {/* Mobile Menu */}
//             {menuOpen && (
//                 <div className=" font-heading absolute top-full mt-2 w-[95%] bg-white dark:bg-black rounded-2xl shadow-lg p-4 flex flex-col gap-3 md:hidden">
//                     <Link className="font-heading hover:underline " href="/">Home</Link>
//                     <Link className="font-heading hover:underline " href="/about">About</Link>
//                     <Link className="font-heading hover:underline " href="/services">Services</Link>
//                     <Link className="font-heading hover:underline " href="/projects">Projects</Link>
//                     <Link className="font-heading hover:underline " href="/blog">Blog</Link>
//                     <Link className="font-heading hover:underline " href="/contact">Contact</Link>
//                 </div>
//             )}
//         </div>
//     );
// }



















































"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { GoDotFill } from "react-icons/go";


const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const ACCENT = "#008DB9";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLAnchorElement[]>([]);
  const lineRefs = useRef<(SVGLineElement | null)[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const isAnimatingRef = useRef(false);

  // ✅ CHANGED ONLY: scroll-based navbar visibility logic
  useEffect(() => {
    if (!navRef.current) return;

    let visible = false;

    // initial hidden state
    gsap.set(navRef.current, { y: -100, opacity: 0 });

    const showNav = () => {
      gsap.to(navRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      });
      visible = true;
    };

    const hideNav = () => {
      gsap.to(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.4,
        ease: "power3.inOut",
      });
      visible = false;
    };

    const onScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 80 && !visible) {
        showNav();
      }

      if (scrollY <= 80 && visible) {
        hideNav();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const animateHamburger = (open: boolean) => {
    const [l1, l2, l3] = lineRefs.current;
    const tl = gsap.timeline({ defaults: { duration: 0.3, ease: "power2.inOut" } });

    if (open) {
      tl.to(l1, { attr: { y1: 12, y2: 12 }, duration: 0.2 })
        .to(l3, { attr: { y1: 12, y2: 12 }, duration: 0.2 }, "<")
        .to(l2, { opacity: 0, duration: 0.15 }, "<")
        .to(l1, { rotation: 45, transformOrigin: "50% 50%" })
        .to(l3, { rotation: -45, transformOrigin: "50% 50%" }, "<");
    } else {
      tl.to([l1, l3], { rotation: 0, transformOrigin: "50% 50%", duration: 0.2 })
        .to(l1, { attr: { y1: 6, y2: 6 } })
        .to(l3, { attr: { y1: 18, y2: 18 } }, "<")
        .to(l2, { opacity: 1, duration: 0.15 }, "<0.1");
    }
  };

  const openMenu = () => {
    const menu = mobileMenuRef.current;
    const items = menuItemsRef.current;
    if (!menu) return;

    menu.style.display = "flex";
    gsap.set(menu, { opacity: 0, y: -12, scale: 0.97 });
    gsap.set(items, { opacity: 0, y: 16 });

    gsap.to(menu, { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: "power3.out" });
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
      stagger: 0.06,
      delay: 0.1,
    });
  };

  const closeMenu = (onComplete?: () => void) => {
    const menu = mobileMenuRef.current;
    const items = menuItemsRef.current;
    if (!menu) return;

    gsap.to(items, {
      opacity: 0,
      y: -10,
      duration: 0.25,
      ease: "power2.in",
      stagger: 0.04,
    });

    gsap.to(menu, {
      opacity: 0,
      y: -8,
      scale: 0.97,
      duration: 0.3,
      delay: 0.1,
      ease: "power2.in",
      onComplete: () => {
        menu.style.display = "none";
        onComplete?.();
      },
    });
  };

  const toggleMenu = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const next = !menuOpen;
    setMenuOpen(next);
    animateHamburger(next);

    if (next) {
      openMenu();
      setTimeout(() => {
        isAnimatingRef.current = false;
      }, 400);
    } else {
      closeMenu(() => {
        isAnimatingRef.current = false;
      });
    }
  };

  return (
    <div ref={navRef} className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center">
      <nav className="w-[95%] md:w-[75%] lg:w-[55%] flex items-center justify-between px-5 py-3.5 bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/25 dark:border-white/10 rounded-b-3xl shadow-[0_8px_32px_rgba(0,141,185,0.12)]">
        {/* <Link href="/" className="font-heading flex items-center uppercase text-xl font-bold tracking-wider text-[#008DB9]">
          Ayan<span><GoDotFill size={12} className=" text-[#008DB9]"/></span>
          
        </Link> */}

        <Link
          href="/"
          className="font-heading flex items-center uppercase text-xl font-bold tracking-wider 
             bg-gradient-to-r from-[#008DB9] to-[#c43d56] 
             bg-clip-text text-transparent"
        >
          Ayan
          <span>
            <GoDotFill size={12} className="text-[#c43d56]" />
          </span>
        </Link>
        <ul className="hidden md:flex items-center gap-5 text-sm uppercase tracking-wide">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="font-heading relative py-1 text-white dark:text-zinc-200 transition-colors duration-200 hover:text-[#008DB9] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:rounded-full after:bg-[#008DB9] after:transition-[width] after:duration-300 hover:after:w-full"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-1.5 rounded-lg transition-colors duration-200 hover:bg-white/10 dark:hover:bg-white/10 focus:outline-none"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round">
            <line ref={(el) => { lineRefs.current[0] = el; }} x1="3" y1="6" x2="21" y2="6" />
            <line ref={(el) => { lineRefs.current[1] = el; }} x1="3" y1="12" x2="21" y2="12" />
            <line ref={(el) => { lineRefs.current[2] = el; }} x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      <div
        ref={mobileMenuRef}
        className="md:hidden absolute top-full mt-2 w-[95%] flex-col gap-1 rounded-2xl bg-white/20 backdrop-blur-[20px] border border-white/10 dark:border-white/10 shadow-[0_16px_48px_rgba(0,141,185,0.18)] overflow-hidden"
        style={{ display: "none" }}
      >
        <div className="h-[3px] w-full bg-gradient-to-r from-[#008DB9] to-[#00c6f0] " />
        <div className="flex flex-col gap-1 p-3">
          {NAV_LINKS.map(({ label, href }, i) => (
            <Link
              key={href}
              href={href}
              ref={(el) => {
                if (el) menuItemsRef.current[i] = el;
              }}

              className="font-heading uppercase tracking-widest text-sm font-medium px-4 py-3 rounded-xl text-zinc-800 dark:text-zinc-100 bg-white/10 backdrop-blur transition-colors duration-200"

              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  backgroundColor: "rgba(0,141,185,0.12)",
                  color: ACCENT,
                  duration: 0.2,
                  ease: "power1.out",
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  backgroundColor: "rgba(255,255,255,0.3)",
                  color: "",
                  duration: 0.2,
                  ease: "power1.out",
                });
              }}
              onClick={toggleMenu}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}





















