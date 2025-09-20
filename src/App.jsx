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
import marcus from "./assets/team/marcus_profile.jpeg";
import carol from "./assets/team/carol_profile.jpeg";
import carlos from "./assets/team/carlos_profile.jpg";
import caio from "./assets/team/caio_profile.jpg";
import aysla from "./assets/team/aysla_profile.jpeg";
import leandro from "./assets/team/leandro_profile.jpeg";
import mozart from "./assets/team/mozart_profile.jpeg";
import simone from "./assets/team/simone_profile.png";

const team = [
  {
    nome: "Caroline Videira",
    cargo: "Scrum Master",
    foto: carol,
    linkedin: "https://www.linkedin.com/in/carolinevideira",
  },
  {
    nome: "Fernando Freitas",
    cargo: "Scrum Master",
    foto: fernando,
    linkedin: "https://www.linkedin.com/in/fernando-freitas02",
  },
  {
    nome: "Marcus Siqueira",
    cargo: "Product Owner",
    foto: marcus,
    linkedin: "https://www.linkedin.com/in/marcus-siqueira-b8a28727",
  },
  {
    nome: "Caio Servulo",
    cargo: "Product Owner",
    foto: caio,
    linkedin: "https://www.linkedin.com/in/caioservulo",
  },
  {
    nome: "Mozart Souza Junior",
    cargo: "UX/UI Designer",
    foto: mozart,
    linkedin: "https://www.linkedin.com/in/mozartuxdesigner",
  },
  {
    nome: "Giovana",
    cargo: "UX/UI Designer",
    foto: caio,
    linkedin: "https://linkedin.com/in/mariana",
  },
  {
    nome: "Ary Hauffe Neto",
    cargo: "FullStack Developer",
    foto: ary,
    linkedin: "https://www.linkedin.com/in/ary-hauffe-neto-bb6a0a23/",
  },
  {
    nome: "Aysla Loureiro",
    cargo: "FullStack Developer",
    foto: aysla,
    linkedin: "https://www.linkedin.com/in/aysla-loureiro-664004322",
  },
  {
    nome: "Leandro Mendes Peixoto",
    cargo: "Quality Assurance (QA)",
    foto: leandro,
    linkedin: "https://www.linkedin.com/in/leandromendespeixoto",
  },

  {
    nome: "Simone Gabionetta",
    cargo: "Quality Assurance (QA)",
    foto: simone,
    linkedin: "https://www.linkedin.com/in/smgabionetta",
  },
  {
    nome: "Carlos Roberto Alcaires",
    cargo: "Quality Assurance (QA)",
    foto: carlos,
    linkedin: "https://www.linkedin.com/in/carlosrobertoaj",
  },
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
