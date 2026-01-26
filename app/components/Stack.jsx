"use client";
import { motion } from "framer-motion";

const stackRows = [
  ["React", "Next.js", "TypeScript", "Framer Motion", "Tailwind"],
  ["Three.js", "WebGL", "ShaderToy", "GSAP", "WebGL2"],
  ["AWS", "Edge Runtimes", "CI/CD", "Design Systems", "Storybook"],
];

const stackMeta = [
  { label: "Front-end choreography", detail: "React + Motion systems" },
  { label: "Realtime canvases", detail: "Three.js · WebGL" },
  { label: "Delivery ops", detail: "Cloud · CI/CD" },
];

export default function Stack() {
  return (
    <section
      id="stack"
      className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 overflow-hidden rounded-[40px] border border-white/5 bg-[rgba(4,6,20,0.9)] px-6 pb-24 pt-14 shadow-[0_25px_70px_rgba(3,4,15,0.7)] lg:px-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-linear-to-b from-transparent via-white/10 to-transparent opacity-40 lg:block" />
        <div className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,#00b4ff2a,transparent_60%)] blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,#915eff33,transparent_65%)] blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-6 text-center lg:text-left"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.6em] text-(--muted)">Stack</p>
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-[2.9rem]">
            Tools powering these cinematic front-end builds.
          </h2>
          <p className="text-base text-white/70 lg:max-w-3xl">
            From shader-driven canvases to systems design, here&apos;s the toolkit I lean on to craft luminous,
            motion-rich experiences across AI, climate, and creative tech teams.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.4em] text-white/60 lg:justify-start">
          {stackMeta.map((meta) => (
            <span
              key={meta.label}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center shadow-[0_12px_30px_rgba(3,4,15,0.45)]"
            >
              <span className="text-white text-[0.7rem] font-semibold">{meta.label}</span>
              <span className="mt-1 text-[0.55rem] text-white/60 tracking-[0.3em]">{meta.detail}</span>
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-6"
      >
        {stackRows.map((row, rowIndex) => {
          const gradient = ["from-[#915eff22]", "from-[#00b4ff22]", "from-[#ffb34722]"][rowIndex % 3];
          return (
            <div
              key={row.join("-")}
              className={`relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_25px_60px_rgba(2,4,16,0.65)] backdrop-blur-xl`}
            >
              <div className={`pointer-events-none absolute inset-0 bg-linear-to-r ${gradient} via-transparent to-transparent opacity-60`} />
              <div className="relative flex flex-wrap justify-center gap-4 lg:justify-between">
                {row.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[rgba(3,5,18,0.8)] px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40"
                  >
                    <span className="h-2 w-2 rounded-full bg-(--accent)" aria-hidden />
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
