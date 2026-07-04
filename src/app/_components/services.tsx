"use client";

import { motion } from "framer-motion";
import {
  FaGlobe,
  FaCloud,
  FaShoppingCart,
  FaChartBar,
  FaServer,
  FaBolt,
} from "react-icons/fa";

const services = [
  {
    title: "Web Application Development",
    description:
      "Build fast, scalable, and responsive web applications using modern technologies and best development practices.",
    icon: FaGlobe,
  },
  {
    title: "SaaS Development",
    description:
      "Develop secure and scalable SaaS platforms with authentication, user management, and business-focused features.",
    icon: FaCloud,
  },
  {
    title: "E-commerce Development",
    description:
      "Create modern online stores with seamless shopping experiences, payment integration, and product management.",
    icon: FaShoppingCart,
  },
  {
    title: "Custom Dashboard Development",
    description:
      "Design powerful admin dashboards, CRM systems, analytics panels, and management platforms.",
    icon: FaChartBar,
  },
  {
    title: "REST API Development",
    description:
      "Develop secure, maintainable REST APIs that connect applications, databases, and third-party services.",
    icon: FaServer,
  },
  {
    title: "Performance Optimization",
    description:
      "Improve website speed, Core Web Vitals, SEO, and overall application performance for the best user experience.",
    icon: FaBolt,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >

          {/* Header */}
          <div className="max-w-7xl mx-auto px-6 pt-2 pb-2">
            <div className="text-center">
              <div className="inline-flex bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl px-5 py-2">
                <div className="flex items-center gap-2 text-emerald-400">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                  <span className="font-medium text-sm">Services</span>
                </div>
              </div>

              <h2 className="mt-6 max-w-6xl text-4xl font-semibold leading-[1.05] tracking-tighter text-white sm:text-5xl lg:text-7xl">
                <span className="bg-gradient-to-r from-[#008DB9] to-[#C43D56] bg-clip-text text-transparent">
                  Turning Ideas Into Digital Products
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
                Whether you need a business website, a powerful SaaS platform, or a custom
                dashboard, I deliver fast, scalable, and user-centric solutions built for
                real-world success.
                 </p>
            </div>
          </div>



        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition-all duration-300 hover:border-[#008DB9]/50 hover:bg-white/10"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#008DB9]/10 text-[#008DB9] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="leading-7 text-gray-400">
                  {service.description}
                </p>

                {/* Bottom Line */}
                <div className="mt-6 h-[2px] w-0 rounded-full bg-gradient-to-r from-[#008DB9] to-[#c43d56] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}