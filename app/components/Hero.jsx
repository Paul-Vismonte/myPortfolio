"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Card from "./Card";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#stack" },
];

const stats = [

];

const quickLinks = [

];

const focusAreas = [
  { title: "2D Game Dev, Unity Engine", copy: "Ironbound Climb " },
  { title: "Book Search, Integrating APIs to fetch and display data", copy: "BookSeek" },
  { title: "Marketing, POS Website", copy: "BarberHub" },
];

export default function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [clickAnimation, setClickAnimation] = useState(false);
  const fullText = "luminous web systems";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, []);

  const handleTextClick = () => {
    if (!isTyping) {
      setClickAnimation(true);
      setTimeout(() => setClickAnimation(false), 1000);
      
      setTypedText("");
      setIsTyping(true);
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
        }
      }, 80);
    }
  };

  const handleTextAnimation = () => {
    // Trigger particle explosion effect
    const particles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
      scale: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 0.5 + 0.5
    }));
    return particles;
  };

  return (
    <section className="relative z-10 flex min-h-screen flex-col gap-12 overflow-hidden px-6 pb-24 pt-10 lg:px-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-10 top-[-60px] h-80 w-80 rounded-full bg-[radial-gradient(circle,#915eff44,transparent_65%)] blur-3xl" />
        <div className="absolute left-[-120px] top-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle,#00b4ff33,transparent_65%)] blur-3xl" />
        <div className="hero-grid" />
      </div>

      <header className="relative overflow-hidden rounded-3xl border border-white/10 bg-[rgba(5,8,22,0.85)]/90 px-6 py-5 shadow-[0_25px_70px_rgba(3,4,15,0.65)]">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-50 bg-[radial-gradient(circle_at_top_left,rgba(145,94,255,0.4),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(0,180,255,0.35),transparent_60%)]" />
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center gap-4">
              <span className="rounded-2xl bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.5em] text-white/80">
                Paul Vismonte
              </span>
              <p className="font-script text-2xl text-white">Portfolio</p>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-white/5 transition hover:bg-white/10"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5 flex flex-col justify-center items-center">
                <span 
                  className={`absolute h-0.5 w-4 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}
                />
                <span 
                  className={`h-0.5 w-4 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                />
                <span 
                  className={`absolute h-0.5 w-4 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}
                />
              </div>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-wrap items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-white/70">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-2 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-white/15 px-5 py-2 text-white shadow-[0_0_18px_rgba(145,94,255,0.4)] transition hover:bg-white/25"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-white/10 pt-4 mt-4"
          >
            <nav className="flex flex-col gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-white/70">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-full px-4 py-3 transition hover:text-white hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-full bg-white/15 px-4 py-3 text-white shadow-[0_0_18px_rgba(145,94,255,0.4)] transition hover:bg-white/25"
              >
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </header>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
          className="space-y-8"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.5em] text-white/70">
            <span className="h-2 w-2 rounded-full bg-(--accent)" aria-hidden />
            Developing tools for real-world impact
          </p>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[4.6rem] lg:leading-[1.02]">
              Creative engineer building
              <span className="block relative">
                {clickAnimation && (
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 8 }, (_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-(--accent) rounded-full"
                        style={{
                          left: '50%',
                          top: '50%',
                        }}
                        initial={{ 
                          scale: 0,
                          x: 0,
                          y: 0,
                          opacity: 1
                        }}
                        animate={{
                          scale: [0, 1.5, 0],
                          x: (Math.random() - 0.5) * 200,
                          y: (Math.random() - 0.5) * 200,
                          opacity: [1, 0.8, 0]
                        }}
                        transition={{
                          duration: 0.8,
                          delay: i * 0.05,
                          ease: "easeOut"
                        }}
                      />
                    ))}
                  </div>
                )}
                <motion.span 
                  className="block bg-linear-to-r from-(--accent) via-(--accent-strong) to-white bg-clip-text text-transparent cursor-pointer select-none transition-transform hover:scale-105"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  onClick={handleTextClick}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {typedText}
                  <motion.span 
                    className="inline-block ml-1"
                    animate={{ 
                      opacity: isTyping ? [1, 0] : (isHovered ? [1, 0.3, 1] : 1),
                      scale: isHovered ? 1.2 : 1
                    }}
                    transition={{ 
                      opacity: { duration: isTyping ? 0.8 : 1.5, repeat: isTyping ? Infinity : (isHovered ? Infinity : 0) },
                      scale: { duration: 0.3 }
                    }}
                  >
                    |
                  </motion.span>
                </motion.span>
                <motion.span 
                  className="absolute inset-0 bg-linear-to-r from-(--accent) via-(--accent-strong) to-white bg-clip-text text-transparent blur-lg"
                  animate={{ 
                    opacity: isHovered ? [0.4, 0.7, 0.4] : [0.3, 0.5, 0.3],
                    scale: isHovered ? 1.05 : 1
                  }}
                  transition={{ 
                    opacity: { duration: isHovered ? 1 : 2, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 0.3 }
                  }}
                >
                  {typedText}
                </motion.span>
              </span>
              with cinematic code.
            </h1>
            <p className="max-w-2xl text-lg text-white/70">
              I craft expressive front-ends that balance
              storytelling, motion design, and performance. From hero experiments to production systems,
              every detail is intentional.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-[#050816] shadow-[0_10px_35px_rgba(255,255,255,0.25)] transition hover:-translate-y-0.5"
            >
              Let&apos;s build
            </a>
            
          </div>
          <dl className="grid gap-4 pt-2 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/5 px-5 py-6 text-center shadow-[0_20px_50px_rgba(5,8,22,0.45)]"
              >
                <dt className="text-xs uppercase tracking-[0.5em] text-white/60">{stat.label}</dt>
                <dd className="mt-3 text-3xl font-semibold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-wrap gap-4 border-t border-white/10 pt-6">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex min-w-[180px] flex-1 items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left transition hover:border-white/30 hover:bg-white/10"
              >
                <div>
                  <p className="text-sm font-semibold text-white">{link.label}</p>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/50">{link.detail}</p>
                </div>
                <span className="text-lg text-white/70 transition group-hover:translate-x-1">{link.icon}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative lg:sticky lg:top-10"
        >
          <Card
            glow
            className="inline-flex w-full flex-col overflow-hidden border-white/20 bg-linear-to-br from-white/10 via-[#1b123a]/70 to-[#060b2a]/90 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.5em] text-white/60">Now building</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Projects in Progress</h3>
              </div>
              <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.5em] text-white/70">
                2026
              </span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {focusAreas.map((item) => (
                <li key={item.title} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/50">{item.title}</p>
                  <p className="mt-1 text-base text-white">{item.copy}</p>
                </li>
              ))}
            </ul>
          </Card>
          <div className="pointer-events-none absolute -right-6 bottom-4 hidden h-36 w-36 rounded-full border border-white/20 opacity-60 blur-xl lg:block" />
        </motion.div>
      </div>
    </section>
  );
}
