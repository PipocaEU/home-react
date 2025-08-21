import React from "react";
import { CourseCard } from "./CourseCard";

// Importe as imagens corretamente (exemplo com Vite)
import frontendImg from "/src/assets/frontend-img.png";
import programacaoImg from "/src/assets/programacao.png";
import mobileImg from "/src/assets/mobile.png";
import devopsImg from "/src/assets/devops.png";
import uxDesignImg from "/src/assets/ux-e-design.png";
import dataScienceImg from "/src/assets/data-science.png";
import inovacaoGestaoImg from "/src/assets/inovacao-e-gestao.png";
import inteligenciaArtificialImg from "/src/assets/inteligencia-artificial.png";

export const CoursesSection = () => {
  const courses = [
    { id: "btn-front-end", title: "Front-end", imageSrc: frontendImg },
    { id: "btn-ux-e-design", title: "UX\n& Design", imageSrc: uxDesignImg },
    { id: "btn-programacao", title: "Programação", imageSrc: programacaoImg },
    {
      id: "btn-data-science",
      title: "Data Science",
      imageSrc: dataScienceImg,
    },
    { id: "btn-mobile", title: "Mobile", imageSrc: mobileImg, imageWidth: 60 },
    {
      id: "btn-inovacao-e-gestao",
      title: "Inovação\n& Gestão",
      imageSrc: inovacaoGestaoImg,
    },
    { id: "btn-devops", title: "Devops", imageSrc: devopsImg },
    {
      id: "btn-inteligencia-artificial",
      title: "Inteligência\nArtificial",
      imageSrc: inteligenciaArtificialImg,
    },
  ];

  return (
    <section id="cursos" className="px-4 py-16 mx-auto bg-white max-w-7xl">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          Comece sua <span className="text-[#FBBB18]">transição</span> com o pé
          direito<span className="text-[#FBBB18]">.</span>
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Aqui, aprender tecnologia é simples, direto e do seu jeito. Nossos
          cursos de aprendizagem rápida são pensados para quem tem pouco tempo,
          mas muita vontade de mudar de vida.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            imageSrc={course.imageSrc}
            imageWidth={course.imageWidth}
          />
        ))}
      </div>
    </section>
  );
};
