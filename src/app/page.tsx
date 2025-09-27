import { HeroSection } from '@/components/sections/hero-section';
import { IntroSection } from '@/components/sections/intro-section';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { SkillsOverview } from '@/components/sections/skills-overview';

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <FeaturedProjects />
      <SkillsOverview />
    </>
  );
}
