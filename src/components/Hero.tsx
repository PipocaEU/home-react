import React from 'react';

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
      <div 
        className="bg-[#3F1F56] bg-opacity-80 w-full max-w-[600px] px-5 py-7 sm:px-10 sm:py-14 rounded-2xl"
        id="hero-content"
      >
        <h2 className="text-2xl font-medium font-roboto lg:text-4xl sm:text-4xl" id="hero-title">
          Transforme sua carreira. <br />
          Migre para a tecnologia com suporte real e personalizado.
        </h2>
        <h3 className="pt-4 font-roboto lg:text-3xl/none sm:text-2xl/snug text-xl/snug" id="hero-subtitle">
          Se reinvente com aprendizado ágil e mentorias focadas na sua entrada
          no mercado de TI.
        </h3>
        <div className="flex flex-col pt-6 md:flex-row gap-4" id="hero-buttons">
          <button 
            className="bg-[#FFD700] text-black rounded-lg py-2 px-6 font-inter font-semibold hover:bg-[#FFC000] transition-colors"
            id="btn-cadastro"
          >
            Cadastre-se grátis!
          </button>
          <button
            className="bg-transparent rounded-lg border-[#FFD700] text-[#FFD700] border-2 py-2 px-6 font-inter font-semibold hover:bg-[#3F1F56] transition-colors"
            id="btn-saiba-mais"
          >
            Saiba mais
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;