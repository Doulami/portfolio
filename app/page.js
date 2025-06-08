import IntroOverlay from "./components/IntroOverlay";
/*import HeroIdentitySection from "./components/HeroIdentitySection";
import { AboutSection } from "./components/AboutSection";
import { FeaturedProjectsSection } from "./components/FeaturedProjectsSection";
import { ContactCTASection } from "./components/ContactCTASection";*/

import dynamic from 'next/dynamic';

const CubeScene = dynamic(() => import('./components/CubeScene.js'), { ssr: false });


export default function HomePage() {
  return (
    <>
      <IntroOverlay />
      {/* Your cube or main content here 
       <HeroIdentitySection />
      <AboutSection />
      <FeaturedProjectsSection />
      <ContactCTASection />*/
       <div style={{ width: '100vw', height: '100vh', background: 'black' }}>
      <CubeScene />
    </div>
      
      }
    </>
     
  );
}
