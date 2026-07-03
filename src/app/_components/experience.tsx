'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaAward 
} from "react-icons/fa";
import { 
  SiReact, SiNextdotjs, SiTypescript, 
  SiTailwindcss, SiNodedotjs, SiMongodb 
} from "react-icons/si";

export default function Experience() {
  const handleCredentials = () => {
    window.open("https://drive.google.com/file/d/YOUR_FILE_ID/view", "_blank");
  };

  return (
    <section className="relative py-24 bg-[#050816] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#008DB9_0%,transparent_50%)] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(at_bottom_left,#C43D56_0%,transparent_50%)] opacity-30" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#008DB9] via-cyan-400 to-[#C43D56] bg-clip-text text-transparent"
        >
          Engineering Journey
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="group relative"
        >
          {/* Glass Card */}
          <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 overflow-hidden">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-[#008DB9]/30 via-transparent to-[#C43D56]/30 -z-10 group-hover:opacity-100 opacity-50 transition-opacity" />

            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-5">
                {/* Glowing Logo */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#008DB9] to-[#C43D56] flex items-center justify-center shadow-2xl shadow-cyan-500/50">
                  <span className="text-4xl font-bold text-white">GDC</span>
                </div>
                <div>
                  <h3 className="text-3xl font-semibold text-white">Global Dream Connect</h3>
                  <p className="text-2xl text-cyan-400 mt-1">Tech Lead</p>
                </div>
              </div>

              <Badge className="bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-400/30 text-cyan-300 px-5 py-2 text-sm font-medium">
                🏆 Promoted in 4 Months
              </Badge>
            </div>

            {/* Timeline & Info */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-10">
              <div className="flex items-center gap-2">
                <FaCalendarAlt /> Dec 12, 2025 — Apr 2026
              </div>
              <div className="flex items-center gap-2">
                <span>🌍</span> Full-time • Remote
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt /> New Delhi, India
              </div>
            </div>

            {/* Mission */}
            <p className="text-lg text-gray-300 leading-relaxed mb-10">
              Promoted to Tech Lead in recognition of outstanding performance and impact. 
              Leading with energy, ownership, and excellence — driven by the mission{" "}
              <span className="text-cyan-400">"Fresh Minds, Global Futures."</span>
            </p>

            {/* Tech Stack - Floating Pills */}
            <div className="mb-12">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: <SiReact />, name: "React" },
                  { icon: <SiNextdotjs />, name: "Next.js" },
                  { icon: <SiTypescript />, name: "TypeScript" },
                  { icon: <SiTailwindcss />, name: "Tailwind" },
                  { icon: <SiNodedotjs />, name: "Node.js" },
                  { icon: <SiMongodb />, name: "MongoDB" },
                ].map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-cyan-400/50 px-5 py-3 rounded-2xl text-sm transition-all hover:scale-105"
                  >
                    <span className="text-xl text-cyan-400">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Responsibilities */}
            <div className="mb-12">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">Key Impact</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Led development projects from ideation to delivery",
                  "Designed scalable full-stack architectures",
                  "Mentored junior developers & improved team velocity",
                  "Conducted code reviews & enforced best practices",
                  "Built AI-powered features & integrations",
                  "Aligned technical execution with business goals"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white/5 border border-white/10 hover:border-white/20 p-5 rounded-2xl text-gray-300 transition-all hover:bg-white/10"
                  >
                    ✓ {item}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { label: "Promoted In", value: "4 Months" },
                { label: "Projects Delivered", value: "10+" },
                { label: "Team Leadership", value: "Active" },
                { label: "Remote", value: "100%" },
              ].map((metric, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400/30 transition-all"
                >
                  <p className="text-2xl font-semibold text-white">{metric.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{metric.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Credentials Button */}
            <Button
              onClick={handleCredentials}
              className="w-full md:w-auto bg-gradient-to-r from-[#008DB9] to-[#C43D56] hover:brightness-110 text-white text-lg px-10 py-7 rounded-2xl font-medium flex items-center gap-3 group"
            >
              View Official Credentials
              <span className="group-hover:translate-x-1 transition">→</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}