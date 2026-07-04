// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   FaEnvelope,
//   FaGithub,
//   FaLinkedin,
//   FaWhatsapp,
//   FaMapMarkerAlt,
// } from "react-icons/fa";
// import { MdAccessTime } from "react-icons/md";
// import { HiOutlineSparkles } from "react-icons/hi2";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="relative py-24 px-6 overflow-hidden"
//     >
    
//       <div className="relative max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl px-5 py-2">
//             <HiOutlineSparkles className="text-cyan-400" />
//             <span className="text-sm text-gray-300">
//               Get In Touch
//             </span>
//           </div>

//           <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
//             Let's Build Something
//             <span className="text-cyan-400"> Amazing Together</span>
//           </h2>

//           <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-8">
//             Have a project in mind, need a reliable developer, or simply
//             want to discuss an idea? I'd love to hear from you.
//             Let's create something meaningful together.
//           </p>
//         </div>

//         {/* Content */}
//         <div className="grid lg:grid-cols-2 gap-10">
//           {/* Left */}
//           <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
//             <h3 className="text-2xl font-semibold text-white mb-6">
//               Contact Information
//             </h3>

//             <div className="space-y-5">
//               <ContactItem
//                 icon={<FaEnvelope />}
//                 title="Email"
//                 value="ayansujon.contact@gmail.com"
//                 href="mailto:ayansujon.contact@gmail.com"
//               />

//               <ContactItem
//                 icon={<FaWhatsapp />}
//                 title="WhatsApp"
//                 value="+880 1684-770240"
//                 href="https://wa.me/+8801684770240"
//               />

//               <ContactItem
//                 icon={<FaMapMarkerAlt />}
//                 title="Location"
//                 value="Noakhali, Bangladesh"
//               />

//               <ContactItem
//                 icon={<MdAccessTime />}
//                 title="Availability"
//                 value="Available for Remote or Freelance Work"
//               />
//             </div>

//             <div className="mt-10">
//               <h4 className="text-white font-medium mb-5">
//                 Connect With Me
//               </h4>

//               <div className="flex gap-4">
//                 <SocialButton
//                   href="https://github.com/"
//                   icon={<FaGithub />}
//                 />

//                 <SocialButton
//                   href="https://linkedin.com/"
//                   icon={<FaLinkedin />}
//                 />

//                 <SocialButton
//                   href="https://wa.me/+8801684770240"
//                   icon={<FaWhatsapp />}
//                 />
//               </div>
//             </div>

//             {/* Availability Card */}
//             <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">
//               <div className="flex items-center gap-3">
//                 <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>

//                 <h4 className="text-lg font-semibold text-white">
//                   Currently Available
//                 </h4>
//               </div>

//               <p className="mt-3 text-gray-300 leading-7">
//                 I'm currently available for freelance projects,
//                 full-time opportunities, and long-term collaborations.
//                 Typical response time is within 24 hours.
//               </p>
//             </div>
//           </div>

//           {/* Right */}
//           <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
//             <h3 className="text-2xl font-semibold text-white mb-6">
//               Send a Message
//             </h3>

//             <form className="space-y-6">
//               <Input
//                 placeholder="Your Name"
//                 className="bg-white/5 border-white/10 h-12 text-white placeholder:text-gray-500"
//               />

//               <Input
//                 type="email"
//                 placeholder="Email Address"
//                 className="bg-white/5 border-white/10 h-12 text-white placeholder:text-gray-500"
//               />

//               <Input
//                 placeholder="Subject"
//                 className="bg-white/5 border-white/10 h-12 text-white placeholder:text-gray-500"
//               />

//               <Textarea
//                 rows={7}
//                 placeholder="Tell me about your project..."
//                 className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 resize-none"
//               />

//               <Button
//                 className="w-full h-12 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-all duration-300"
//               >
//                 Send Message
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// type ContactItemProps = {
//   icon: React.ReactNode;
//   title: string;
//   value: string;
//   href?: string;
// };

// function ContactItem({
//   icon,
//   title,
//   value,
//   href,
// }: ContactItemProps) {
//   return (
//     <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-cyan-500/40 transition-all duration-300">
//       <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 text-lg">
//         {icon}
//       </div>

//       <div>
//         <p className="text-sm text-gray-400">{title}</p>

//         {href ? (
//           <a
//             href={href}
//             target="_blank"
//             className="text-white hover:text-cyan-400 transition-colors"
//           >
//             {value}
//           </a>
//         ) : (
//           <p className="text-white">{value}</p>
//         )}
//       </div>
//     </div>
//   );
// }

// type SocialButtonProps = {
//   icon: React.ReactNode;
//   href: string;
// };

// function SocialButton({
//   icon,
//   href,
// }: SocialButtonProps) {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white hover:-translate-y-1"
//     >
//       {icon}
//     </a>
//   );
// }
































// "use client";

// import { useForm, SubmitHandler } from "react-hook-form";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   FaEnvelope,
//   FaGithub,
//   FaLinkedin,
//   FaWhatsapp,
//   FaMapMarkerAlt,
// } from "react-icons/fa";
// import { MdAccessTime } from "react-icons/md";
// import { HiOutlineSparkles } from "react-icons/hi2";

// type ContactFormData = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// };

// export default function Contact() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm<ContactFormData>();

//   const onSubmit: SubmitHandler<ContactFormData> = (data) => {
//     console.log("Contact form submitted:", data);

//     const handleSubmit = async (
//     e: React.FormEvent
// ) => {

//     e.preventDefault();

//     setLoading(true);

//     try{

//         const res = await fetch("/api/contact",{

//             method:"POST",

//             headers:{
//                 "Content-Type":"application/json"
//             },

//             body:JSON.stringify(form)

//         });

//         const data = await res.json();

//         if(data.success){

//             toast.success("Message sent successfully!");

//             setForm({
//                 name:"",
//                 email:"",
//                 subject:"",
//                 message:"",
//             });

//         }else{

//             toast.error("Failed to send.");

//         }

//     }catch{

//         toast.error("Something went wrong.");

//     }

//     setLoading(false);
// };

//     reset();
//   };

//   return (
//     <section
//       id="contact"
//       className="relative py-24 px-6 overflow-hidden"
//     >

//       <div className="relative max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl px-5 py-2">
//             <HiOutlineSparkles className="text-cyan-400" />
//             <span className="text-sm text-gray-300">
//               Get In Touch
//             </span>
//           </div>

//           <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
//             Let's Build Something
//             <span className="text-cyan-400"> Amazing Together</span>
//           </h2>

//           <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-8">
//             Have a project in mind, need a reliable developer, or simply
//             want to discuss an idea? I'd love to hear from you.
//             Let's create something meaningful together.
//           </p>
//         </div>

//         {/* Content */}
//         <div className="grid lg:grid-cols-2 gap-10">
//           {/* Left */}
//           <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
//             <h3 className="text-2xl font-semibold text-white mb-6">
//               Contact Information
//             </h3>

//             <div className="space-y-5">
//               <ContactItem
//                 icon={<FaEnvelope />}
//                 title="Email"
//                 value="ayansujon.contact@gmail.com"
//                 href="mailto:ayansujon.contact@gmail.com"
//               />

//               <ContactItem
//                 icon={<FaWhatsapp />}
//                 title="WhatsApp"
//                 value="+880 1684-770240"
//                 href="https://wa.me/+8801684770240"
//               />

//               <ContactItem
//                 icon={<FaMapMarkerAlt />}
//                 title="Location"
//                 value="Noakhali, Bangladesh"
//               />

//               <ContactItem
//                 icon={<MdAccessTime />}
//                 title="Availability"
//                 value="Available for Remote or Freelance Work"
//               />
//             </div>

//             <div className="mt-10">
//               <h4 className="text-white font-medium mb-5">
//                 Connect With Me
//               </h4>

//               <div className="flex gap-4">
//                 <SocialButton
//                   href="https://github.com/"
//                   icon={<FaGithub />}
//                 />

//                 <SocialButton
//                   href="https://linkedin.com/"
//                   icon={<FaLinkedin />}
//                 />

//                 <SocialButton
//                   href="https://wa.me/+8801684770240"
//                   icon={<FaWhatsapp />}
//                 />
//               </div>
//             </div>

//             {/* Availability Card */}
//             <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">
//               <div className="flex items-center gap-3">
//                 <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>

//                 <h4 className="text-lg font-semibold text-white">
//                   Currently Available
//                 </h4>
//               </div>

//               <p className="mt-3 text-gray-300 leading-7">
//                 I'm currently available for freelance projects,
//                 full-time opportunities, and long-term collaborations.
//                 Typical response time is within 24 hours.
//               </p>
//             </div>
//           </div>

//           {/* Right */}
//           <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
//             <h3 className="text-2xl font-semibold text-white mb-6">
//               Send a Message
//             </h3>

//             <form
//               onSubmit={handleSubmit(onSubmit)}
//               className="space-y-6"
//               noValidate
//             >
//               <div>
//                 <Input
//                   placeholder="Your Name"
//                   className="bg-white/5 border-white/10 h-12 text-white placeholder:text-gray-500"
//                   {...register("name", { required: "Name is required" })}
//                 />
//                 {errors.name && (
//                   <p className="mt-1.5 text-sm text-red-400">
//                     {errors.name.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <Input
//                   type="email"
//                   placeholder="Email Address"
//                   className="bg-white/5 border-white/10 h-12 text-white placeholder:text-gray-500"
//                   {...register("email", {
//                     required: "Email is required",
//                     pattern: {
//                       value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                       message: "Enter a valid email address",
//                     },
//                   })}
//                 />
//                 {errors.email && (
//                   <p className="mt-1.5 text-sm text-red-400">
//                     {errors.email.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <Input
//                   placeholder="Subject"
//                   className="bg-white/5 border-white/10 h-12 text-white placeholder:text-gray-500"
//                   {...register("subject", { required: "Subject is required" })}
//                 />
//                 {errors.subject && (
//                   <p className="mt-1.5 text-sm text-red-400">
//                     {errors.subject.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <Textarea
//                   rows={7}
//                   placeholder="Tell me about your project..."
//                   className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 resize-none"
//                   {...register("message", {
//                     required: "Message is required",
//                     minLength: {
//                       value: 10,
//                       message: "Message should be at least 10 characters",
//                     },
//                   })}
//                 />
//                 {errors.message && (
//                   <p className="mt-1.5 text-sm text-red-400">
//                     {errors.message.message}
//                   </p>
//                 )}
//               </div>

//               <Button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full h-12 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-all duration-300 disabled:opacity-60"
//               >
//                 {isSubmitting ? "Sending..." : "Send Message"}
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// type ContactItemProps = {
//   icon: React.ReactNode;
//   title: string;
//   value: string;
//   href?: string;
// };

// function ContactItem({
//   icon,
//   title,
//   value,
//   href,
// }: ContactItemProps) {
//   return (
//     <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-cyan-500/40 transition-all duration-300">
//       <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 text-lg">
//         {icon}
//       </div>

//       <div>
//         <p className="text-sm text-gray-400">{title}</p>

//         {href ? (
//           <a
//             href={href}
//             target="_blank"
//             className="text-white hover:text-cyan-400 transition-colors"
//           >
//             {value}
//           </a>
//         ) : (
//           <p className="text-white">{value}</p>
//         )}
//       </div>
//     </div>
//   );
// }

// type SocialButtonProps = {
//   icon: React.ReactNode;
//   href: string;
// };

// function SocialButton({
//   icon,
//   href,
// }: SocialButtonProps) {
//   return (
// <a
//       href={href}
//       target="_blank"
//       className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white hover:-translate-y-1"
//     >
//       {icon}
//     </a>
//   );
// }












































"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi2";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error(result.message || "Failed to send.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl px-5 py-2">
            <HiOutlineSparkles className="text-cyan-400" />
            <span className="text-sm text-gray-300">Get In Touch</span>
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Let's Build Something
            <span className="text-cyan-400"> Amazing Together</span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-8">
            Have a project in mind, need a reliable developer, or simply
            want to discuss an idea? I'd love to hear from you. Let's
            create something meaningful together.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-5">
              <ContactItem
                icon={<FaEnvelope />}
                title="Email"
                value="ayansujon.contact@gmail.com"
                href="mailto:ayansujon.contact@gmail.com"
              />
              <ContactItem
                icon={<FaWhatsapp />}
                title="WhatsApp"
                value="+880 1684-770240"
                href="https://wa.me/+8801684770240"
              />
              <ContactItem
                icon={<FaMapMarkerAlt />}
                title="Location"
                value="Noakhali, Bangladesh"
              />
              <ContactItem
                icon={<MdAccessTime />}
                title="Availability"
                value="Available for Remote or Freelance Work"
              />
            </div>

            <div className="mt-10">
              <h4 className="text-white font-medium mb-5">Connect With Me</h4>
              <div className="flex gap-4">
                <SocialButton href="https://github.com/" icon={<FaGithub />} />
                <SocialButton href="https://linkedin.com/" icon={<FaLinkedin />} />
                <SocialButton
                  href="https://wa.me/+8801684770240"
                  icon={<FaWhatsapp />}
                />
              </div>
            </div>

          </div>

          {/* Right */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              <div>
                <Input
                  placeholder="Your Name"
                  className="bg-white/5 border-white/10 h-12 text-white placeholder:text-gray-500"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="mt-1.5 text-sm text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white/5 border-white/10 h-12 text-white placeholder:text-gray-500"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1.5 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Input
                  placeholder="Subject"
                  className="bg-white/5 border-white/10 h-12 text-white placeholder:text-gray-500"
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && (
                  <p className="mt-1.5 text-sm text-red-400">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <Textarea
                  rows={7}
                  placeholder="Tell me about your project..."
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 resize-none"
                  {...register("message", {
                    required: "Message is required",
                    minLength: { value: 10, message: "Message should be at least 10 characters" },
                  })}
                />
                {errors.message && (
                  <p className="mt-1.5 text-sm text-red-400">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-all duration-300 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
            
            <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
                <h4 className="text-lg font-semibold text-white">
                  Currently Available
                </h4>
              </div>
              <p className="mt-3 text-gray-300 leading-7">
                I'm currently available for freelance projects, full-time
                opportunities, and long-term collaborations. Typical response
                time is within 24 hours.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

type ContactItemProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
};

function ContactItem({ icon, title, value, href }: ContactItemProps) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-cyan-500/40 transition-all duration-300">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 text-lg">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-400">{title}</p>
        {href ? (
          <a
            href={href}
            target="_blank"
            className="text-white hover:text-cyan-400 transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-white">{value}</p>
        )}
      </div>
    </div>
  );
}

type SocialButtonProps = {
  icon: React.ReactNode;
  href: string;
};

function SocialButton({ icon, href }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white hover:-translate-y-1"
    >
      {icon}
    </a>
  );
}