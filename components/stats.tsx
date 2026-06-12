"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  ["30", "мероприятий организовано"],
  ["20", "дизайн-проектов"],
  ["10", "дизайн-презентаций"],
  ["100", "любовь к дизайну"]
] as const;

function Counter({ value, suffix = "+" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const spring = useSpring(count, { stiffness: 80, damping: 18 });
  const rounded = useTransform(spring, (latest) => `${Math.round(latest)}${suffix}`);

  useEffect(() => {
    if (inView) count.set(Number(value));
  }, [count, inView, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Stats() {
  return (
    <section className="bg-bone px-5 py-20 text-ink sm:px-8 lg:px-12">
      <div className="grid gap-px overflow-hidden rounded-lg bg-ink/10 md:grid-cols-4">
        {stats.map(([value, label], index) => (
          <div key={label} className="bg-bone p-8 sm:p-10">
            <div className="font-display text-6xl uppercase leading-none">
              <Counter value={value} suffix={index === 3 ? "%" : "+"} />
            </div>
            <p className="mt-5 max-w-40 text-sm uppercase leading-relaxed tracking-[0.18em] text-ink/58">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
