import SiteHeader from "./components/SiteHeader";
import Hero from "./components/Hero";
import { CoursesSection } from "./components/CoursesSection";
import logo from "./assets/pipoca-academy-logo.png";
import heroImage from "./assets/img_hero.jpg";
import mentoriaImg from "./assets/img_mentores.jpg";
import primeiraImg from "./assets/cadastro/primeira_img.jpg";
import segundaImg from "./assets/cadastro/segunda_img.jpg";
import terceiraImg from "./assets/cadastro/terceira_img.jpg";
import CadastroSection from "./components/CadastroSection";
import TrilhaSection from "./components/TrilhaSection";
import MentoriaSection from "./components/MentoriaSection";
import EquipeSection from "./components/EquipeSection";
import SiteFooter from "./components/SiteFooter";
import ary from "./assets/team/ary_profile.jpg";
import fernando from "./assets/team/fernando_profile.jpg";
import marcus from "./assets/team/marcus_profile.jpg";
import carol from "./assets/team/carol_profile.jpg";
import carlos from "./assets/team/carlos_profile.jpg";
import caio from "./assets/team/caio_profile.jpg";

const team = [
  { nome: "Caroline Videira", cargo: "Scrum Master", foto: carol, linkedin: "https://linkedin.com/in/ana" },
  { nome: "Fernando Freitas", cargo: "Scrum Master", foto: fernando, linkedin: "https://linkedin.com/in/ana" },
  { nome: "Marcus", cargo: "Product Owner", foto: marcus, linkedin: "https://linkedin.com/in/ana" },
  { nome: "Caio", cargo: "Product Owner", foto: caio, linkedin: "https://linkedin.com/in/csantos" },
  { nome: "Mozart", cargo: "User Experience Design(UX)", foto: caio, linkedin: "https://linkedin.com/in/mariana" },
  { nome: "Ary Hauffe Neto", cargo: "FullStack Developer", foto: ary, linkedin: "https://www.linkedin.com/in/ary-hauffe-neto-bb6a0a23/" },
  { nome: "Aysla Loureiro", cargo: "FullStack Developer", foto: caio, linkedin: "https://linkedin.com/in/csantos" },
  { nome: "Leandro", cargo: "Quality Assurance (QA)", foto: caio, linkedin: "https://linkedin.com/in/mariana" },
  { nome: "Giovana", cargo: "User Experience Design(UX)", foto: caio, linkedin: "https://linkedin.com/in/mariana" },
  { nome: "Simone", cargo: "Quality Assurance (QA)", foto: caio, linkedin: "https://linkedin.com/in/ana" },
  { nome: "Carlos ", cargo: "Quality Assurance (QA)", foto: carlos, linkedin: "https://linkedin.com/in/csantos" },
  
  // ...
];

export default function App() {
  return (
    <>
      <SiteHeader brandName="Pipoca Academy" logoSrc={logo} />
      <Hero imageSrc={heroImage} imageAlt="Pessoa estudando em um notebook" />
      <CoursesSection />
      <TrilhaSection />
       <MentoriaSection bgImage={mentoriaImg} alt="Sessão de mentoria" />
       <EquipeSection team={team} />
      <CadastroSection
        images={{
          left: primeiraImg,
          center: segundaImg,
          right: terceiraImg,
        }}
      />

      <SiteFooter brandName="Pipoca Academy" logoSrc={logo} />
    </>
  );
}
