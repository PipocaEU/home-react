import React from "react";

export type TeamMember = {
  id?: string | number;
  nome: string;
  cargo: string;
  foto: string;
  linkedin?: string;
};

type Props = {
  team?: TeamMember[];
};

const DEFAULT_TEAM: TeamMember[] = [
  // fallback opcional (remova se não quiser default)
  { nome: "Ana Oliveira", cargo: "CEO & Fundadora", foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&h=128&q=80", linkedin: "#" },
  // ...
];

export default function EquipeSection({ team = DEFAULT_TEAM }: Props) {
  return (
    <section id="equipe" className="bg-[#F1F2F4] py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-[#581B61] mb-6">
            Quem está por trás do Pipoca Academy
          </h2>
          <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
            Nossa equipe é formada por profissionais apaixonados por tecnologia e educação,
            dedicados a criar a melhor experiência de aprendizado para impulsionar sua carreira.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {team.map((m, idx) => (
            <div
              key={m.id ?? `${m.nome}-${idx}`}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-32 h-32 mx-auto mb-6">
                <img
                  src={m.foto}
                  alt={m.nome}
                  className="w-full h-full object-cover rounded-full border-4 border-[#F3EFF7]"
                  loading="lazy"
                />
              </div>

              <h3 className="text-lg font-medium text-[#581B61]">{m.nome}</h3>

              {/* Cargo + LinkedIn: em coluna no mobile, lado a lado do sm pra cima */}
              <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
                <p className="text-sm text-[#121212]">{m.cargo}</p>
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn de ${m.nome}`}
                    className="inline-flex items-center justify-center h-6 w-6 rounded-[4px] bg-[#0A66C2] hover:opacity-90"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="h-4 w-4 text-white" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Ícone LinkedIn */
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 8.5h4V24h-4V8.5Zm7 0h3.83v2.11h.05c.53-1 1.82-2.11 3.75-2.11 4.01 0 4.75 2.64 4.75 6.07V24h-4v-7.25c0-1.73-.03-3.95-2.41-3.95-2.41 0-2.78 1.88-2.78 3.82V24h-4V8.5Z" />
    </svg>
  );
}
