import type { CSSProperties } from "react";

export type CSSVarStyle = CSSProperties & Record<`--${string}`, string | number>;

export function splitLetters(text: string) {
  return text.split("").map((letter, index) => ({
    letter: letter === " " ? "\u00A0" : letter,
    key: `${letter}-${index}`
  }));
}
