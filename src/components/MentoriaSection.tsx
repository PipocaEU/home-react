// MentoriaSection.tsx
import React from "react";
import icon from "../assets/cursos-btn-icon.png";
import carrerIcon from "../assets/carrericon.png";
import codeReviewIcon from "../assets/codereviewicon.png";
import interviewIcon from "../assets/interviewicon.png";
import networkingIcon from "../assets/networkingicon.png";

type MentoriaSectionProps = {
  /** imagem de background do topo */
  bgImage?: string;
  alt?: string;
};

export default function MentoriaSection({
  bgImage = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&h=500&q=80",
  alt = "Mentores da Pipoca Academy",
}: MentoriaSectionProps) {
  return (
    <section id="mentoria" className="px-4 py-24 bg-white md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Imagem de topo (vem por props) */}
        <div className="mb-16 overflow-hidden h-96 rounded-2xl">
          <img src={bgImage} alt={alt} className="object-cover w-full h-full" />
        </div>

        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Coluna esquerda - Texto e botão CTA */}
          <div className="lg:w-2/5">
            <span className="inline-block bg-[#E6F7F9] text-[#0E7981] text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Suporte Individual
            </span>

            <h2 className="text-3xl md:text-4xl font-medium text-[#2A1140] mb-6 leading-tight">
              Mentoria Especializada para Acelerar sua Carreira
            </h2>

            <p className="text-lg text-[#495057] mb-8 leading-relaxed">
              Nosso programa de mentoria conecta você a profissionais
              experientes do mercado para um acompanhamento personalizado.
              Através de sessões individuais, você recebe orientação focada nos
              seus desafios, acelera seu aprendizado e ganha a confiança
              necessária para dar o próximo passo na sua carreira.
            </p>

            <button
              className="w-full md:w-auto bg-[#FBBB18] text-[#2A1140] font-bold text-lg py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              onClick={() => {
                const section = document.getElementById("cadastro");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <img src={icon} alt="Ícone de cursos" />
              Tenho interesse em uma mentoria
            </button>
          </div>

          {/* Coluna direita - Cards de benefícios */}
          <div className="lg:w-3/5">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            
             {/* Card 1 - Suporte Profissionais Consagrados */}
              <div className="bg-[#F3EFF7] border border-[#D9CCEA] rounded-xl p-6">
                <div className="bg-[#431B61] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  {/* <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 10L21 3M21 3H15M21 3V9M10 21H7C5.34315 21 4 19.6569 4 18V7C4 5.34315 5.34315 4 7 4H10M14 21H17C18.6569 21 20 19.6569 20 18V14"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg> */}
                  <img src={codeReviewIcon} alt="code review icon" />
                </div>
                <h3 className="text-xl font-medium text-[#2A1140] mb-4">
                  Suporte de profissionais consagrados
                </h3>
                <p className="text-[#6C757D]">
                  Receba feedbacks detalhados para elevar a
                  qualidade do suas entregas.
                </p>
              </div>

              {/* Card 2 - Plano de Carreira */}
              <div className="bg-[#F3EFF7] border border-[#D9CCEA] rounded-xl p-6">
                <div className="bg-[#431B61] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  {/* <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 15L12 18M9 21H15M5 21H5.2C6.88063 21 7.72094 21 8.36197 20.673C8.92646 20.3854 9.3854 19.9265 9.67303 19.362C10 18.7209 10 17.8806 10 16.2V5.8C10 4.11984 10 3.27976 9.67303 2.63803C9.3854 2.07354 8.92646 1.6146 8.36197 1.32697C7.72094 1 6.88063 1 5.2 1H5C3.34315 1 2 2.34315 2 4V18C2 19.6569 3.34315 21 5 21ZM19 21H18.8C17.1194 21 16.2791 21 15.638 20.673C15.0735 20.3854 14.6146 19.9265 14.327 19.362C14 18.7209 14 17.8806 14 16.2V5.8C14 4.11984 14 3.27976 14.327 2.63803C14.6146 2.07354 15.0735 1.6146 15.638 1.32697C16.2791 1 17.1194 1 18.8 1H19C20.6569 1 22 2.34315 22 4V18C22 19.6569 20.6569 21 19 21Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg> */}
                  <img src={carrerIcon} alt="carrer icon" />
                </div>
                <h3 className="text-xl font-medium text-[#2A1140] mb-4">
                  Plano de Carreira
                </h3>
                <p className="text-[#6C757D]">
                  Trace um plano claro e estratégico para alcançar seus
                  objetivos profissionais com a ajuda de um especialista.
                </p>
              </div>

             
              {/* Card 3 - Preparo para Entrevistas */}
              <div className="bg-[#F3EFF7] border border-[#D9CCEA] rounded-xl p-6">
                <div className="bg-[#431B61] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  {/* <svg
                    width="21"
                    height="24"
                    viewBox="0 0 21 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 8V6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V8M5 23H19C20.1046 23 21 22.1046 21 21V11C21 9.89543 20.1046 9 19 9H5C3.89543 9 3 9.89543 3 11V21C3 22.1046 3.89543 23 5 23Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg> */}
                  <img src={interviewIcon} alt="interview icon" />
                </div>
                <h3 className="text-xl font-medium text-[#2A1140] mb-4">
                  Preparo para
                  <br />
                  Entrevistas
                </h3>
                <p className="text-[#6C757D]">
                  Simule entrevistas técnicas e comportamentais para ganhar
                  confiança e se destacar nos processos seletivos.
                </p>
              </div>

              {/* Card 4 - Networking */}
              <div className="bg-[#F3EFF7] border border-[#D9CCEA] rounded-xl p-6">
                <div className="bg-[#431B61] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  {/* <svg
                    width="30"
                    height="24"
                    viewBox="0 0 30 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 19C17 16.2386 19.2386 14 22 14C24.7614 14 27 16.2386 27 19M3 19C3 16.2386 5.23858 14 8 14C10.7614 14 13 16.2386 13 19M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 7C21 8.65685 19.6569 10 18 10C16.3431 10 15 8.65685 15 7C15 5.34315 16.3431 4 18 4C19.6569 4 21 5.34315 21 7ZM7 7C7 8.65685 5.65685 10 4 10C2.34315 10 1 8.65685 1 7C1 5.34315 2.34315 4 4 4C5.65685 4 7 5.34315 7 7Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg> */}
                  <img src={networkingIcon} alt="networking icon" />
                </div>
                <h3 className="text-xl font-medium text-[#2A1140] mb-4">
                  Networking
                </h3>
                <p className="text-[#6C757D]">
                  Amplie sua rede de contatos e conecte-se com profissionais
                  influentes da sua área de interesse.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-[#495057] font-medium">Também oferecemos:</p>
              <p className="text-[#6C757D] mt-2">
                Acompanhamento contínuo, suporte para dúvidas técnicas e
                desenvolvimento de soft skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
