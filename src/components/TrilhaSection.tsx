import React, { useState } from "react";

interface TrilhaItem {
  id: number;
  titulo: string;
  descricao: string;
  tecnologias: string[];
  expandido: boolean;
}

export default function TrilhaSection() {
  const [trilhas, setTrilhas] = useState<TrilhaItem[]>([
    {
      id: 1,
      titulo: "Desenvolvedor Full Stack",
      descricao:
        "Torne-se um profissional versátil, capaz de construir aplicações web completas, do frontend ao backend. Domine as tecnologias mais modernas e crie soluções de ponta a ponta.",
      tecnologias: [
        "Criação de APIs RESTful",
        "Interfaces com React",
        "Bancos de Dados SQL e NoSQL",
        "Autenticação e Segurança",
      ],
      expandido: true,
    },
    {
      id: 2,
      titulo: "Engenheiro de Dados",
      descricao:
        "Aprenda a construir e manter pipelines de dados robustos e escaláveis. Seja o profissional que transforma dados brutos em informações valiosas para as empresas.",
      tecnologias: [
        "ETL e Data Warehousing",
        "Big Data com Spark",
        "Modelagem de Dados",
        "Orquestração com Airflow",
      ],
      expandido: false,
    },
    {
      id: 3,
      titulo: "Especialista em DevOps",
      descricao:
        "Automatize a entrega de software e otimize a infraestrutura de aplicações. Aprenda a usar Docker, Kubernetes e CI/CD para acelerar o desenvolvimento e aumentar a confiabilidade.",
      tecnologias: [
        "Containers com Docker",
        "Orquestração com Kubernetes",
        "CI/CD com Jenkins/GitLab",
        "Monitoramento e Logging",
      ],
      expandido: false,
    },
    {
      id: 4,
      titulo: "Product Owner",
      descricao:
        "Aprenda a liderar produtos digitais, definir backlog, priorizar entregas e gerar valor real com metodologias ágeis.",
      tecnologias: [
        "Gestão de backlog",
        "Priorização de entregas",
        "Scrum e Kanban",
      ],
      expandido: false,
    },
    {
      id: 5,
      titulo: "Scrum Master",
      descricao:
        "Domine o papel de facilitador ágil, ajudando times a alcançar alta performance com foco em colaboração e melhoria contínua.",
      tecnologias: ["Eventos Scrum", "Remoção de impedimentos", "Cultura ágil"],
      expandido: false,
    },
    {
      id: 6,
      titulo: "Quality Assurance (QA)",
      descricao:
        "Entenda o ciclo de testes, automação e boas práticas para garantir a qualidade de software em ambientes ágeis.",
      tecnologias: [
        "Testes manuais e automatizados",
        "Selenium / Cypress",
        "Boas práticas de QA",
      ],
      expandido: false,
    },
    {
      id: 7,
      titulo: "Front-end",
      descricao:
        "Desenvolva interfaces modernas, responsivas e acessíveis usando HTML, CSS, JavaScript e frameworks como React.",
      tecnologias: [
        "HTML, CSS e JavaScript",
        "React",
        "Acessibilidade e responsividade",
      ],
      expandido: false,
    },
    {
      id: 8,
      titulo: "Programação (Back-end)",
      descricao:
        "Construa a lógica por trás das aplicações com foco em linguagens como Python, Node.js ou Java, além de bancos de dados e APIs.",
      tecnologias: [
        "APIs REST e GraphQL",
        "Node.js, Java ou Python",
        "Banco de dados SQL/NoSQL",
      ],
      expandido: false,
    },
    {
      id: 9,
      titulo: "Mobile",
      descricao:
        "Crie aplicativos para Android e iOS com tecnologias como Flutter ou React Native, do protótipo à publicação.",
      tecnologias: [
        "React Native ou Flutter",
        "Publicação em App Stores",
        "Integração com APIs",
      ],
      expandido: false,
    },
    {
      id: 10,
      titulo: "UX & Design",
      descricao:
        "Explore fundamentos de design centrado no usuário, prototipagem, testes de usabilidade e ferramentas como Figma.",
      tecnologias: ["Figma", "Prototipagem", "Testes de usabilidade"],
      expandido: false,
    },
    {
      id: 11,
      titulo: "Data Science",
      descricao:
        "Aprenda a transformar dados em decisões com estatística, programação, análise de dados, machine learning e visualização.",
      tecnologias: [
        "Python para análise de dados",
        "Machine Learning",
        "Visualização de dados",
      ],
      expandido: false,
    },
    {
      id: 12,
      titulo: "Inovação & Gestão de Produtos",
      descricao:
        "Entenda como gerir times, criar soluções inovadoras e conduzir produtos digitais com visão estratégica.",
      tecnologias: [
        "Gestão de times",
        "Estratégia de produto",
        "Inovação digital",
      ],
      expandido: false,
    },
    {
      id: 13,
      titulo: "Inteligência Artificial",
      descricao:
        "Entre no mundo da IA com fundamentos de machine learning, redes neurais e aplicações práticas em negócios e tecnologia.",
      tecnologias: [
        "Machine Learning",
        "Redes neurais",
        "Casos de uso em negócios",
      ],
      expandido: false,
    },
  ]);

  const toggleTrilha = (id: number) => {
    setTrilhas(
      trilhas.map((trilha) => ({
        ...trilha,
        expandido: trilha.id === id ? !trilha.expandido : false,
      }))
    );
  };

  return (
    <section id="trilhas" className="bg-[#FBBB18] py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Coluna esquerda - Texto descritivo */}
            <div className="lg:w-2/5">
              <span className="inline-block bg-[#D9CCEA] text-[#431B61] text-sm font-semibold px-4 py-1 rounded-full mb-6">
                Aprendizado Estruturado
              </span>

              <h2 className="text-3xl md:text-4xl font-medium text-[#2A1140] mb-6 leading-tight">
                Trilhas de Carreira Guiadas
              </h2>

              <p className="text-lg text-[#495057] mb-8 leading-relaxed">
                “Nossas trilhas foram criadas para te colocar no caminho do seu
                futuro. Cada uma oferece um passo a passo claro, organizado e
                prático, para que você desenvolva habilidades essenciais para a
                carreira dos seus sonhos.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#FBBB18] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3334 4L6.00008 11.3333L2.66675 8"
                        stroke="#2A1140"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium text-[#2A1140]">
                      Currículo Focado
                    </h3>
                    <p className="text-[#6C757D]">
                      Aprenda exatamente o que o mercado de trabalho exige.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#FBBB18] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      width="12"
                      height="16"
                      viewBox="0 0 12 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6667 8.66667V12.6667C10.6667 13.0203 10.5262 13.3594 10.2761 13.6095C10.026 13.8595 9.68696 14 9.33333 14H2.66667C2.31304 14 1.9739 13.8595 1.72381 13.6095C1.47371 13.3594 1.33333 13.0203 1.33333 12.6667V3.33333C1.33333 2.97971 1.47371 2.64057 1.72381 2.39048C1.9739 2.14038 2.31304 2 2.66667 2H6"
                        stroke="#2A1140"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.33333 1.33333V4.66667H10.6667"
                        stroke="#2A1140"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 8H8"
                        stroke="#2A1140"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 10.6667H6.66667"
                        stroke="#2A1140"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium text-[#2A1140]">
                      Projetos Práticos
                    </h3>
                    <p className="text-[#6C757D]">
                      Construa um portfólio robusto com projetos do mundo real.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#FBBB18] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      width="14"
                      height="16"
                      viewBox="0 0 14 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.6667 14V12.6667C11.6667 11.9594 11.3857 11.2811 10.8856 10.781C10.3855 10.281 9.70724 10 9 10H4.33333C3.62609 10 2.94781 10.281 2.44771 10.781C1.94762 11.2811 1.66667 11.9594 1.66667 12.6667V14"
                        stroke="#2A1140"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66667 7.33333C8.13943 7.33333 9.33333 6.13943 9.33333 4.66667C9.33333 3.19391 8.13943 2 6.66667 2C5.19391 2 4 3.19391 4 4.66667C4 6.13943 5.19391 7.33333 6.66667 7.33333Z"
                        stroke="#2A1140"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium text-[#2A1140]">
                      Mentoria Exclusiva
                    </h3>
                    <p className="text-[#6C757D]">
                      Receba orientação de profissionais experientes da área.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna direita - Acordeão de trilhas */}
            <div className="lg:w-3/5 space-y-6">
              {trilhas.map((trilha) => (
                <div
                  key={trilha.id}
                  className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                    trilha.expandido
                      ? "border-[#B69AD4] shadow-lg"
                      : "border-[#E9ECEF] shadow-md"
                  }`}
                >
                  <button
                    className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => toggleTrilha(trilha.id)}
                  >
                    <h3 className="text-xl font-medium text-[#2A1140]">
                      {trilha.titulo}
                    </h3>
                    <svg
                      className={`transform transition-transform duration-300 ${
                        trilha.expandido ? "rotate-180" : ""
                      }`}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="#343A40"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {trilha.expandido && (
                    <div className="px-6 pb-6">
                      <p className="text-[#495057] mb-6">{trilha.descricao}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {trilha.tecnologias.map((tech, index) => (
                          <div
                            key={index}
                            className="bg-[#F3EFF7] bg-opacity-50 rounded-lg p-3 flex items-center"
                          >
                            <div className="bg-[#18AFBB] rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mr-3">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 3L4.5 8.5L2 6"
                                  stroke="white"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <span className="text-[#343A40]">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
