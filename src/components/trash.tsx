import React from "react";

interface HeroProps {
  imageSrc: string;
  imageAlt?: string;
}

export const Hero = ({ imageSrc, imageAlt = "Imagem hero" }: HeroProps) => {
  return (
    <section
      id="hero"
      aria-label={imageAlt}
      className="
        relative mx-auto w-full max-w-[1440px]
        bg-cover bg-center md:bg-top text-white
        min-h-[1024px]
      "
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      {/* Overlay de segurança para contraste (opcional) */}
      <div className="absolute inset-0" aria-hidden />

      {/* Card (Frame 12) */}
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
        style={{ height: "auto" }} // se quiser travar mesmo: use h-[569px]
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

        <h2
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
        </h2>

        <div
          id="hero-buttons"
          className="flex flex-col sm:flex-row flex-wrap items-center gap-6"
        >
          <button
            id="btn-cadastro"
            className="
              w-[196px] h-[51px]
              bg-[#FBBB18] text-black
              rounded-lg
              font-inter font-medium text-[16px] leading-[19px]
              hover:brightness-95 transition
            "
          >
            Cadastre-se grátis!
          </button>

          <button
            id="btn-saiba-mais"
            className="
              w-[131px] h-[51px]
              rounded-lg
              border-2 border-[#FBBB18]
              text-[#FBBB18]
              bg-transparent
              font-inter font-medium text-[16px] leading-[19px]
              hover:bg-white/5 transition
            "
          >
            Saiba mais
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
