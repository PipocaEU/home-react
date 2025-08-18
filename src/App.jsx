import SiteHeader from "./components/SiteHeader";
import Hero from "./components/Hero";
import { CoursesSection } from "./components/CoursesSection";
import logo from "./assets/pipoca-academy-logo.png";
import heroImage from "./assets/img_hero.jpg";


export default function App() {
  return (
    <>
      <SiteHeader
        brandName="Pipoca Academy"
        logoSrc={logo}  
      />
      <Hero
        imageSrc={heroImage} 
        imageAlt="Pessoa estudando em um notebook"
       
      />
       <CoursesSection />
    </>
  );
}
