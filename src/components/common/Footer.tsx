import Link from "next/link";
import React from "react";
import {
  LuGithub,
  LuLinkedin,
  LuMail,
  LuFacebook,
  LuInstagram,
  LuMapPin,
  LuPhone,
} from "react-icons/lu";

const socialLinks = [
  {
    icon: <LuGithub size={20} />,
    href: "https://github.com/AyanSujon",
  },
  {
    icon: <LuLinkedin size={20} />,
    href: "https://linkedin.com/in/ayansujon",
  },
  {
    icon: <LuFacebook size={20} />,
    href: "https://facebook.com/",
  },
  {
    icon: <LuInstagram size={20} />,
    href: "https://instagram.com/",
  },
  {
    icon: <LuMail size={20} />,
    href: "mailto:ayansujon.contact@gmail.com",
  },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  {
    name: "Web Application Development",
    href: "/services/web-development",
  },
  {
    name: "SaaS Development",
    href: "/services/saas-development",
  },
  {
    name: "E-commerce Development",
    href: "/services/ecommerce-development",
  },
  {
    name: "Custom Dashboard Development",
    href: "/services/dashboard-development",
  },
  {
    name: "REST API Development",
    href: "/services/api-development",
  },
  {
    name: "Performance Optimization",
    href: "/services/performance-optimization",
  },
];

const footerLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Disclaimer", href: "/disclaimer" },
  { name: "Sitemap", href: "/sitemap.xml" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-800 bg-black">
      {/* Animated Gradient Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#008DB9_0%,transparent_50%)] opacity-30 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(at_bottom_left,#c43d56_0%,transparent_50%)] opacity-30 animate-pulse [animation-delay:1.5s]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* ================= Brand ================= */}
          <div>
            <h2 className="bg-gradient-to-r from-[#008DB9] to-[#c43d56] bg-clip-text text-3xl font-bold text-transparent">
              Ayan Sujon
            </h2>

            <p className="mt-5 leading-7 text-zinc-400">
              Helping startups and businesses transform ideas into scalable,
              high-performance digital products with modern web technologies and
              exceptional user experiences.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  className="group flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 text-white transition-all duration-500 hover:-translate-y-2 hover:scale-110 hover:border-[#008DB9] hover:bg-[#008DB9] hover:shadow-lg hover:shadow-cyan-500/30"
                >
                  <span className="transition-transform duration-500 group-hover:rotate-12">
                    {item.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* ================= Quick Links ================= */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Quick Access
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-zinc-400 transition-all duration-300 hover:translate-x-2 hover:text-[#008DB9]"
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#008DB9] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Services ================= */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Core Services
            </h3>

            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex text-zinc-400 transition-all duration-300 hover:translate-x-2 hover:text-[#008DB9]"
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#008DB9] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Contact ================= */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Get In Touch
            </h3>

            <div className="space-y-2">
              {/* Google Map */}
              <div className="overflow-hidden rounded-2xl border border-zinc-700 transition-all duration-500 hover:scale-[1.03] hover:border-[#008DB9]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58539.4914481168!2d90.27226692167967!3d23.506657000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x873e6f297b14503f%3A0x97f78b950ef58dd6!2sAyan%20Sujon!5e0!3m2!1sen!2sbd!4v1782972225665!5m2!1sen!2sbd"
                  className="h-40 w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Ayan Sujon Location"
                />
              </div>

              <div className="group flex items-start gap-3">
                <LuPhone
                  className="mt-1 text-[#008DB9] transition-transform duration-300 group-hover:scale-125"
                  size={20}
                />
                <span className="text-zinc-400 transition-colors duration-300 group-hover:text-white">
                  +880 1684-770240
                </span>
              </div>

              <div className="group flex items-start gap-3">
                <LuMail
                  className="mt-1 text-[#c43d56] transition-transform duration-300 group-hover:scale-125"
                  size={20}
                />
                <span className="break-all text-zinc-400 transition-colors duration-300 group-hover:text-white">
                  ayansujon.contact@gmail.com
                </span>
              </div>

              <div className="group flex items-start gap-3">
                <LuMapPin
                  className="mt-1 text-[#008DB9] transition-transform duration-300 group-hover:scale-125"
                  size={20}
                />
                <span className="text-zinc-400 transition-colors duration-300 group-hover:text-white">
                  Noakhali, Bangladesh
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

        {/* ================= Bottom ================= */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-zinc-500 md:flex-row">
          <p className="transition-colors duration-300 hover:text-zinc-300">
            © {new Date().getFullYear()} Ayan Sujon. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative text-zinc-500 transition-colors duration-300 hover:text-[#008DB9]"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#008DB9] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}