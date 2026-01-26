"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const aboutPoints = [
  {
    icon: "💻",
    text: "Recent Computer Science graduate with a strong foundation in software development, problem solving, and modern computing concepts.",
  },
  {
    icon: "🎓",
    text: "Honours BSc in Computer Science from Holy Cross College",
  },
  {
    icon: "🛠️",
    text: "Hands-on experience through academic projects involving full-stack development, cloud fundamentals, and system design.",
  },
  {
    icon: "✏️",
    text: "Passionate about learning, automating workflows, and breaking down complex problems into practical solutions.",
  },
  {
    icon: "💡",
    text: "Curious, motivated, and eager to grow—excited to contribute, learn fast, and collaborate with ambitious teams.",
  },
];

const workExperiences = [
  {
    id: "ibm",
    role: "Software Engineer Intern",
    company: "IBM",
    period: "Jan. 2026 — Present",
    bullets: ["Full-Stack AI Engineering", "watsonx Workshop"],
    badge: "IBM",
    logoBg: "bg-[#1f1b3a]",
  },
  {
    id: "wonderland",
    role: "IT Technician",
    company: "Canada's Wonderland",
    period: "May 2024 — Dec. 2025",
    bullets: ["Maintained attraction control systems", "Rolled out monitoring dashboards"],
    badge: "CW",
    logoBg: "bg-[#1b2640]",
  },
  {
    id: "mackenzie",
    role: "System Support Specialist",
    company: "Mackenzie Health",
    period: "2019 — 2024",
    bullets: ["Automated incident workflows", "Supported clinical launches"],
    badge: "MH",
    logoBg: "bg-[#1a2238]",
  },
  {
    id: "staples",
    role: "Tech Sales Associate",
    company: "Staples Canada (Co-op)",
    period: "2017 — 2019",
    bullets: ["Led device demos", "Upskilled team on POS tooling"],
    badge: "SC",
    logoBg: "bg-[#2a1b3f]",
  },
];

const craftBadges = ["Creative dev", "Design systems"];

const featuredProjects = [
  {
    title: "Lumen Atlas",
    summary: "Immersive climate intelligence hub combining photoreal WebGL scenes with volumetric data overlays.",
    stack: ["Next.js", "WebGL", "GSAP"],
    year: "2025",
    href: "https://github.com",
    background: "linear-gradient(135deg,#2b1b56 0%,#0c142f 55%,#050816 100%)",
  },
  {
    title: "Prisma Forge",
    summary: "Design system generator syncing tokens across Figma, code, and docs through AI-assisted workflows.",
    stack: ["Node", "Edge", "Figma API"],
    year: "2024",
    href: "https://github.com",
    background: "linear-gradient(135deg,#1b294f 0%,#132043 60%,#050816 100%)",
  },
  {
    title: "Pulse Arcade",
    summary: "Realtime multiplayer dashboard for energy teams with shader-driven charts and latency budgets.",
    stack: ["Three.js", "WebSockets", "AWS"],
    year: "2023",
    href: "https://github.com",
    background: "linear-gradient(135deg,#2b1b3a 0%,#10152f 55%,#050816 100%)",
  },
];

const educationTimeline = [
  {
    range: "2022 — Present",
    role: "Honours BSc Computer Science · Ontario Tech University",
    summary:
      "Exploring cloud-native architectures, distributed systems, and human-computer interaction.",
  },
  {
    range: "2018 — 2022",
    role: "Diploma · Software Engineering Technology",
    summary: "Graduated with distinction while leading the campus developer club.",
  },
];

const experienceTimeline = [
  {
    range: "2023 — Now",
    role: "Lead Front-end, Studio Aster",
    summary: "Shipping narrative-rich marketing sites for climate tech + AI teams.",
  },
  {
    range: "2020 — 2023",
    role: "Senior Creative Developer, Indie Labs",
    summary: "Built award-winning experiences for Nike, Coinbase, and activist orgs.",
  },
  {
    range: "2017 — 2020",
    role: "Product Engineer, Playground",
    summary: "Launched design systems and prototyped new interaction models.",
  },
];

export default function About() {
  const [activeExperience, setActiveExperience] = useState(workExperiences[0]);
  return (
    <>
      <section
        id="about"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-16 lg:px-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-3 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.6em] text-(--muted)">
            Introduction
          </p>
          <h2 className="text-5xl font-semibold text-white sm:text-6xl">Overview.</h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center"
          >
            <div className="relative w-60 max-w-sm">
              <div className="rounded-[30px] bg-[rgba(9,13,35,0.85)] p-5 shadow-[0_25px_50px_rgba(5,8,22,0.7)]">
                <div className="relative mx-auto h-48 w-48 rounded-full bg-linear-to-br from-(--accent) to-(--accent-strong) p-[6px] shadow-[0_0_45px_rgba(145,94,255,0.5)]">
                  <img
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
                    alt="Portrait"
                    className="h-full w-full rounded-full border-[6px] border-[rgba(5,8,22,0.9)] object-cover"
                  />
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    href="#resume"
                    className="rounded-full bg-[#6d7dff] px-6 py-2 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(109,125,255,0.5)] transition hover:-translate-y-0.5"
                  >
                    Resume
                  </a>
                  <a
                    href="https://www.linkedin.com/in/paul-vismonte-613966365/"
                    className="rounded-full bg-[#748cf5] px-6 py-2 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(116,140,245,0.4)] transition hover:-translate-y-0.5"
                  >
                    LinkedIn
                  </a>
                </div>
                <a
                  href="https://github.com/Paul-Vismonte"
                  className="mt-4 block rounded-full bg-white/10 px-6 py-2 text-center text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-7 rounded-[32px] border border-white/10 bg-[rgba(8,10,28,0.9)] p-8 shadow-[0_25px_60px_rgba(5,8,22,0.6)]"
          >
            <ul className="space-y-5 text-lg text-white/90">
              {aboutPoints.map((point) => (
                <li key={point.text} className="flex items-start gap-4">
                  <span className="text-2xl">{point.icon}</span>
                  <p className="text-base leading-relaxed text-white/80">{point.text}</p>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 border-y border-white/5 py-4">
              {craftBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.4em] text-white/70"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4 shadow-[0_15px_35px_rgba(5,8,22,0.4)]">
                <p className="text-xs uppercase tracking-[0.5em] text-white/50">Origin story</p>
                <p className="mt-2 text-base text-white">
                  Systems thinker raised on theme parks, arcades, and late-night design jams.
                </p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.5em] text-white/50">Focus</p>
                <p className="mt-2 text-base text-white">
                  Narrative-first front-ends that feel alive yet stay performant.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="education"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-10 lg:px-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4 text-center lg:text-left"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-(--muted)">Education</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">Learning that fuels the craft.</h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="h-full space-y-6 bg-[rgba(12,16,40,0.9)] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60">
                Studio timeline
              </p>
              <ul className="space-y-4 text-white/80">
                {experienceTimeline.map((item) => (
                  <li key={item.role} className="rounded-2xl border border-white/5 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.4em] text-white/50">{item.range}</p>
                    <p className="mt-2 text-lg font-semibold text-white">{item.role}</p>
                    <p className="text-sm text-white/70">{item.summary}</p>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-white/60">
                Equal parts research, prototyping, and craft mentoring. I thrive in cross-disciplinary pods.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true, margin: "-100px" }}
            className="timeline"
          >
            {educationTimeline.map((item) => (
              <div key={item.role} className="timeline-item">
                <span className="timeline-dot" aria-hidden />
                <Card className="ml-8 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-(--muted)">
                    {item.range}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-3 text-base text-(--muted)">{item.summary}</p>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="work"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-8 lg:px-20"
      >
        <div className="overflow-hidden rounded-[40px] border border-white/5 bg-[rgba(7,10,32,0.85)] p-8 shadow-[0_30px_80px_rgba(3,4,15,0.65)] lg:p-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-120px" }}
            className="space-y-3 text-center lg:text-left"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.6em] text-(--muted)">
              My professional journey
            </p>
            <h2 className="text-5xl font-semibold text-white">Work Experience</h2>
            <p className="text-base text-white/70">
              A rotating roster of roles focused on systems thinking, shipping velocity, and story-driven craft.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-120px" }}
              className="space-y-4"
            >
              {workExperiences.map((item) => {
                const isActive = activeExperience.id === item.id;
                return (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setActiveExperience(item)}
                    className={`flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition ${
                      isActive
                        ? "border-white/30 bg-[rgba(44,28,72,0.9)] text-white shadow-[0_20px_40px_rgba(5,8,22,0.55)]"
                        : "border-white/5 bg-[rgba(8,8,28,0.75)] text-white/70 hover:bg-[rgba(15,15,40,0.9)]"
                    }`}
                  >
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold text-white ${item.logoBg}`}
                      aria-hidden
                    >
                      {item.badge}
                    </span>
                    <div>
                      <p className="text-base font-semibold">{item.role}</p>
                      <p className="text-sm text-white/70">{item.company}</p>
                    </div>
                  </button>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, margin: "-120px" }}
            >
              <Card className="p-8 lg:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.5em] text-white/70">
                  {activeExperience.company}
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-white">{activeExperience.role}</h3>
                <p className="mt-2 text-sm text-white/65">{activeExperience.period}</p>
                <ul className="mt-8 space-y-4 text-base text-white/85">
                  {activeExperience.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-[6px] h-2 w-2 rounded-full bg-(--accent)" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/50">What&apos;s next</p>
                  <p>Pairing with founders to craft AI-native launch moments.</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-10 lg:px-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4 text-center lg:text-left"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-(--muted)">Projects</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl lg:text-[3.5rem]">
            Partnering with bold teams to design the unexpected.
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-(--muted)">
            Inspired by Sunny&apos;s mix of story-driven timelines and glowing surfaces. I bring the same
            energy—mixing React, Next.js, GSAP, and WebGL to ship expressive experiences.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredProjects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              style={{ background: project.background }}
              className="group flex flex-col rounded-[32px] border border-white/10 p-6 text-white shadow-[0_25px_60px_rgba(5,8,22,0.6)] transition hover:-translate-y-2 hover:shadow-[0_35px_90px_rgba(3,4,15,0.75)]"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-white/70">
                <span>{project.year}</span>
                <span className="text-white/50">Case study</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-base text-white/80">{project.summary}</p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/70">
                {project.stack.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/20 px-3 py-1 text-[0.65rem]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.4em] text-white/80">
                View build <span aria-hidden className="transition group-hover:translate-x-1">↗</span>
              </span>
            </a>
          ))}
        </motion.div>
      </section>
    </>
  );
}
