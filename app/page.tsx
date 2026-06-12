import { About } from "@/components/about";
import { Cases } from "@/components/cases";
import { Contact } from "@/components/contact";
import { CustomCursor } from "@/components/custom-cursor";
import { GalleryMarquee } from "@/components/gallery-marquee";
import { Hero } from "@/components/hero";
import { LoadingScreen } from "@/components/loading-screen";
import { Presentations } from "@/components/presentations";
import { ScrollEffects } from "@/components/scroll-effects";
import { SkillsOrbit } from "@/components/skills-orbit";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Stats } from "@/components/stats";

export default function Home() {
  return (
    <SmoothScroll>
      <LoadingScreen />
      <CustomCursor />
      <ScrollEffects />
      <main>
        <Hero />
        <About />
        <Stats />
        <Cases />
        <Presentations />
        <GalleryMarquee />
        <SkillsOrbit />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
