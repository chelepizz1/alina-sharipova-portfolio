"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { MagneticButton } from "@/components/magnetic-button";
import { splitLetters } from "@/lib/utils";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useTransform(mouseX, [0, 1], [-24, 24]);
  const y = useTransform(mouseY, [0, 1], [-18, 18]);

  return (
    <section
      className="relative flex min-h-screen overflow-hidden bg-ink px-5 py-6 text-bone sm:px-8 lg:px-12"
      onMouseMove={(event) => {
        mouseX.set(event.clientX / window.innerWidth);
        mouseY.set(event.clientY / window.innerHeight);
      }}
    >
      <motion.div style={{ x, y }} className="absolute inset-0 opacity-80">
        <div className="abstract-lines" />
      </motion.div>

      <nav className="absolute left-5 right-5 top-6 z-10 flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white/60 sm:left-8 sm:right-8 lg:left-12 lg:right-12">
        <span>Portfolio 2026</span>
        <a href="#contact" className="transition hover:text-bone">Hire / Internship</a>
      </nav>

      <div className="relative z-10 flex w-full flex-col justify-end pb-10 pt-28">
        <div className="max-w-[1160px]">
          <p className="mb-5 font-display text-sm uppercase tracking-[0.42em] text-acid">
            Graphic Designer
          </p>
          <h1 className="font-display text-[clamp(3rem,10.5vw,10.8rem)] uppercase leading-[0.92] tracking-tightish">
            {["АЛИНА", "ШАРИПОВА"].map((line, lineIndex) => (
              <span key={line} className="block">
                {splitLetters(line).map(({ letter, key }, index) => (
                  <motion.span
                    key={key}
                    className="inline-block"
                    initial={{ opacity: 0, y: 80, rotateX: -70 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.04 * (index + lineIndex * 7),
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
        </div>

        <div className="mt-10 grid gap-8 border-t border-white/12 pt-8 lg:grid-cols-[1fr_.65fr]">
          <p className="max-w-2xl text-[clamp(1.35rem,2.6vw,3rem)] leading-[1.05] text-white/86">
            Создаю айдентику, афиши, презентации и визуальные системы.
          </p>
          <div className="flex flex-wrap items-start gap-4 lg:justify-end">
            <MagneticButton href="#portfolio">Портфолио</MagneticButton>
            <MagneticButton href="#contact" variant="outline">Связаться</MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
