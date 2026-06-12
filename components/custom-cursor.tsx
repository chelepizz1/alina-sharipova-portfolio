"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = cursor.current;
    if (!node) return;

    const move = (event: PointerEvent) => {
      node.animate(
        {
          transform: `translate(${event.clientX - 14}px, ${event.clientY - 14}px)`
        },
        { duration: 420, fill: "forwards", easing: "cubic-bezier(.2,.8,.2,1)" }
      );
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return <div ref={cursor} className="pointer-events-none fixed left-0 top-0 z-40 hidden size-7 rounded-full border border-white/45 mix-blend-difference shadow-[0_0_32px_rgba(215,255,66,.55)] md:block" />;
}
