import React from "react";

interface HeroProps {
  imageSrc: string;
  imageAlt?: string;
}

export const Hero = ({ imageSrc, imageAlt = "Imagem hero" }: HeroProps) => {
  return (
    <section
      id="hero"
      className="h-screen pt-[64px] bg-cover bg-center md:bg-top text-white flex items-end md:items-center justify-center md:justify-start p-4 md:pl-[50px] lg:pl-[100px]"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className="absolute inset-0" aria-hidden />
      {/* Card (roxo) */}
      <div
        id="hero-content"
        className="
            bg-[#3F1F56]/80 rounded-2xl
            px-10 py-14
            flex flex-col
            gap-8
            w-full max-w-[648px]
            md:absolute md:left-20 md:top-[222px]
            md:w-[648px]
          "
        style={{ height: "auto" }}
      >
        <h1
          id="hero-title"
          className="
              font-inter font-medium
              text-[32px] leading-[1.2]
              sm:text-[40px]
              lg:text-[48px]
            "
        >
          Transforme sua carreira. <br />
          Migre para a tecnologia com suporte real e personalizado.
        </h1>

        <h3
          id="hero-subtitle"
          className="
              font-inter font-normal
              text-[18px] leading-[1.35]
              sm:text-[24px]
              lg:text-[32px] lg:leading-[1.3]
              text-white
            "
        >
          Se reinvente com aprendizado ágil e mentorias focadas na sua entrada
          no mercado de TI.
        </h3>

        <div className="flex flex-col gap-4 pt-6 md:flex-row" id="hero-buttons">
          <a
            href="#cadastro"
            className="bg-[#FFD700] text-black rounded-lg py-2 px-6 text-center font-inter font-semibold hover:bg-[#FFC000] transition-colors"
            id="btn-cadastro"
          >
            Cadastre-se grátis!
          </a>
          <button
            className="bg-transparent rounded-lg border-[#FFD700] text-[#FFD700] border-2 py-2 px-6 font-inter font-semibold hover:bg-[#3F1F56] transition-colors"
            id="btn-saiba-mais"
            onClick={() => {
              const section = document.getElementById("trilhas");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Saiba mais
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
