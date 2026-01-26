export default function Card({
  as: Component = "article",
  glow = false,
  className = "",
  children,
}) {
  return (
    <Component
      className={`glass-panel relative overflow-hidden rounded-3xl border border-white/10 p-6 text-white transition duration-300 hover:border-white/30 hover:shadow-[0_0_30px_rgba(96,132,255,0.3)] ${
        glow ? "shadow-[0_0_30px_rgba(145,94,255,0.45)]" : ""
      } ${className}`}
    >
      {glow && (
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-px bg-[conic-gradient(from_120deg,rgba(145,94,255,0.25),rgba(0,180,255,0.25),transparent)] opacity-60 blur-xl"
        />
      )}

      <div className="relative">{children}</div>
    </Component>
  );
}