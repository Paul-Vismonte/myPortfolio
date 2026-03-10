"use client";

import { useEffect, useState } from "react";

export default function MouseLight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="mouse-light"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
        background: `radial-gradient(
          600px circle at ${mousePosition.x}px ${mousePosition.y}px,
          rgba(145, 94, 255, 0.25),
          rgba(120, 119, 198, 0.15) 30%,
          transparent 50%
        )`,
      }}
    />
  );
}
