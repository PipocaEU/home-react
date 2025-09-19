import React from "react";

interface CourseCardProps {
  title: string;
  imageSrc: string;
  id: string;
  imageWidth?: number;
  hasLineBreak?: boolean;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  title,
  imageSrc,
  id,
  imageWidth = 70,
}) => {
  return (
    <div className="relative w-full h-[172px] max-w-[275px] transition-all duration-300 hover:scale-105">
      <button
        className="relative bg-white border-2 border-[#FBBB18] rounded-lg w-full h-full p-4 sm:p-5 shadow-md hover:shadow-lg transition-all"
        id={id}
      >
        <div
          className="absolute right-0 top-0 w-[140px] h-full bg-[#FBBB18] rounded-r-lg transition-all duration-300 group-hover:w-[150px]"
          style={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />

        <div className="relative z-10 flex flex-col items-start justify-between h-full">
          <p className="font-bold text-xl text-gray-800 text-left whitespace-pre-line group-hover:text-[22px] transition-all">
            {title}
          </p>

          <div className="self-end transition-all duration-300 group-hover:scale-110">
            <img
              src={imageSrc}
              className="object-contain transition-all"
              style={{
                width: `${imageWidth}px`,
                height: "auto",
                maxHeight: "70px",
              }}
              alt={`Ícone de ${title}`}
            />
          </div>
        </div>
      </button>
    </div>
  );
};
