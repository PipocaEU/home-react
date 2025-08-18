import SiteHeader from "./components/SiteHeader";
import Hero from "./components/Hero";
import { CoursesSection } from "./components/CoursesSection";

export default function App() {
  return (
    <>
      <SiteHeader
        brandName="Pipoca Academy"
        logoSrc="/src/assets/pipoca-academy-logo.png"  
      />
      <Hero
        imageSrc="/src/assets/img_hero.jpg"   
        imageAlt="Pessoa estudando em um notebook"
       
      />
       <CoursesSection />
    </>
  );
}
