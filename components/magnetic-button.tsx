"use client";

import { ReactNode, useRef } from "react";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "light" | "outline";
};

export function MagneticButton({ href, children, variant = "light" }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  function onMove(event: React.MouseEvent<HTMLAnchorElement>) {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
  }

  function onLeave() {
    const element = ref.current;
    if (!element) return;
    element.style.transform = "translate(0, 0)";
  }

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`magnetic-button ${variant === "light" ? "bg-bone text-ink" : "border border-white/20 text-bone"}`}
    >
      {children}
    </a>
  );
}
