import HeroIdentitySection from "./components/HeroIdentitySection";
import { AboutSection } from "./components/AboutSection";
import { FeaturedProjectsSection } from "./components/FeaturedProjectsSection";
import { ContactCTASection } from "./components/ContactCTASection";

export default function HomePage() {
  return (
    <main>
      <HeroIdentitySection />
      <AboutSection />
      <FeaturedProjectsSection />
      <ContactCTASection />
    </main>
  );
}
