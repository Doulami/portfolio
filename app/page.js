import IntroOverlay from "./components/IntroOverlay";
import HeroIdentitySection from "./components/HeroIdentitySection";
import { AboutSection } from "./components/AboutSection";
import { FeaturedProjectsSection } from "./components/FeaturedProjectsSection";
import { ContactCTASection } from "./components/ContactCTASection";

export default function HomePage() {
  return (
       <>
      <IntroOverlay />
      {/* Your cube or main content here */
      
       <HeroIdentitySection />
      <AboutSection />
      <FeaturedProjectsSection />
      <ContactCTASection />
      }
    </>
     
  );
}
