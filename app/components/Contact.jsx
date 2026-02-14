"use client";
import { motion } from "framer-motion";
import Card from "./Card";

const contactInfo = [
  {
    icon: "✉️",
    label: "Email",
    value: "paulvismonte0@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=paulvismonte0@gmail.com",
  },
  {
    icon: "💼",
    label: "LinkedIn", 
    value: "Paul Vismonte",
    href: "https://www.linkedin.com/in/paul-vismonte-613966365/",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/Paul-Vismonte", 
    href: "https://github.com/Paul-Vismonte",
  },
  {
    icon: "📚",
    label: "Facebook",
    value: "Paul Vismonte",
    href: "https://www.facebook.com/paul.vismonte",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 flex min-h-screen flex-col justify-center overflow-hidden px-6 py-24 lg:px-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-10 top-[-60px] h-80 w-80 rounded-full bg-[radial-gradient(circle,#915eff44,transparent_65%)] blur-3xl" />
        <div className="absolute left-[-120px] top-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle,#00b4ff33,transparent_65%)] blur-3xl" />
        <div className="hero-grid" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl w-full space-y-8"
      >
        <div className="text-center space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.5em] text-white/70">
            <span className="h-2 w-2 rounded-full bg-(--accent)" aria-hidden />
            Contact
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Get in touch
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Feel free to reach out through any of these channels. I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <Card className="p-8">
          <div className="grid gap-6 md:grid-cols-2">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-white/10"
              >
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60 mb-1">
                    {item.label}
                  </p>
                  <p className="text-white group-hover:text-(--accent) transition-colors text-sm">
                    {item.value}
                  </p>
                </div>
                <svg 
                  className="w-4 h-4 text-white/40 group-hover:text-(--accent) transition-all duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            ))}
          </div>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center pt-4"
        >
          <p className="text-white/60 text-sm">
            I&apos;ll get back to you as soon as possible. Let&apos;s create something amazing together!
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
