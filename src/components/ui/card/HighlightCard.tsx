// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight, Eye, ExternalLink } from "lucide-react";
// import { featuredProjects } from "@/app/modules/project/column/ColumnProject";

// export const HighlightCard = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const project = featuredProjects[currentIndex];

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1));
//   };

//   return (
//     <div className="relative w-full mb-16 lg:mb-24">
//       {/* Container Utama */}
//       <div className="relative flex flex-col lg:flex-row bg-card-bg/20 rounded-4xl border border-white/5 overflow-hidden backdrop-blur-xl min-h-100">
//         {/* Sisi Foto (Kiri) */}
//         <div className="relative w-full lg:w-[50%] aspect-video lg:aspect-auto min-h-75 overflow-hidden">
//           <Image src={project.image} alt={project.title} fill className="object-cover transition-all duration-700" />
//           <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/60 lg:hidden" />
//         </div>

//         {/* Sisi Deskripsi (Kanan) */}
//         <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
//           <h3 className="text-white text-xl lg:text-2xl font-bold mb-3 text-right lg:text-left">{project.title}</h3>

//           <div className="relative mb-6 lg:mb-8">
//             {/* Box Deskripsi (Sesuai desain prjct.png) */}
//             <div className="bg-card-bg/80 border border-white/10 p-6 rounded-2xl lg:-ml-20 lg:relative z-10 shadow-2xl backdrop-blur-md">
//               <p className="text-description-text text-sm md:text-base leading-relaxed font-body">{project.description}</p>
//             </div>
//           </div>

//           {/* Tech Stack */}
//           <div className="flex flex-wrap gap-2 mb-8 justify-end lg:justify-start">
//             {project.tags.map((tag: any) => (
//               <span key={tag} className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[10px] md:text-xs text-accent">
//                 {tag}
//               </span>
//             ))}
//           </div>

//           {/* Buttons */}
//           <div className="flex items-center gap-4 justify-end lg:justify-start">
//             <a href={project.link} className="flex items-center gap-2 px-6 py-2.5 bg-accent rounded-full text-xs font-bold text-white hover:bg-accent/80 transition-all">
//               View Project <Eye size={14} />
//             </a>
//             <button className="flex items-center gap-2 px-6 py-2.5 border border-white/10 rounded-full text-xs font-bold text-white hover:bg-white/5 transition-all">
//               Detail <ExternalLink size={14} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Navigasi < > */}
//       <div className="absolute -bottom-6 right-8 lg:right-12 flex gap-3 z-20">
//         <button onClick={prevSlide} className="p-3 rounded-full bg-card-bg border border-white/10 text-white hover:border-accent hover:text-accent transition-all">
//           <ChevronLeft size={20} />
//         </button>
//         <button onClick={nextSlide} className="p-3 rounded-full bg-card-bg border border-white/10 text-white hover:border-accent hover:text-accent transition-all">
//           <ChevronRight size={20} />
//         </button>
//       </div>
//     </div>
//   );
// };

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Eye, ExternalLink } from "lucide-react";
import { featured } from "@/app/modules/project/data/featured";
import { BaseButton } from "../button/BaseButton";

export const HighlightCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = featured[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === featured.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? featured.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full mb-16 lg:mb-24">
      {/* Container Utama */}
      <div className="relative flex flex-col lg:flex-row bg-card-bg/20 rounded-4xl border border-white/5 overflow-hidden backdrop-blur-xl h-[450px] lg:h-[400px]">
        {/* Sisi Foto (Di mobile jadi background full, di desktop jadi sisi kiri) */}
        <div className="absolute inset-0 lg:relative lg:w-[50%] lg:aspect-auto overflow-hidden z-0">
          <Image src={project.image} alt={project.title} fill className="object-cover transition-all duration-700 brightness-[0.3] lg:brightness-100" />
          {/* Overlay remang-remang khusus mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/40 to-transparent lg:hidden" />
        </div>

        {/* Sisi Deskripsi (Di mobile numpuk di atas foto, di desktop di samping) */}
        <div className="relative z-10 flex-1 p-8 lg:p-12 flex flex-col justify-center">
          {/* Title - Mobile: Center, Desktop: Left */}
          <h3 className="text-white text-2xl lg:text-2xl font-bold mb-6 lg:mb-3 text-center lg:text-left leading-tight">{project.title}</h3>

          <div className="relative mb-6 lg:mb-8">
            {/* Box Deskripsi - Mobile: Background Transparan, Desktop: Box Melayang */}
            <div className="bg-transparent lg:bg-card-bg/80 border-none lg:border lg:border-white/10 p-0 lg:p-6 rounded-2xl lg:-ml-20 lg:relative z-10 lg:shadow-2xl lg:backdrop-blur-md">
              <p className="text-description-text text-sm md:text-base leading-relaxed font-body text-center lg:text-left line-clamp-3">{project.description}</p>
            </div>
          </div>

          {/* Tech Stack - Mobile: Center, Desktop: Left */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
            {project.tags.map((tag: any) => (
              <span key={tag} className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[10px] md:text-xs text-accent">
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons - Mobile: Stack/Center, Desktop: Row/Left */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <BaseButton as="a" href={project.link} variant="primary" size="md" className="w-full sm:w-auto">
              View Project <Eye size={14} />
            </BaseButton>

            <BaseButton variant="outline" size="md" className="w-full sm:w-auto">
              Detail <ExternalLink size={14} />
            </BaseButton>
          </div>
        </div>
      </div>

      {/* Navigasi < > */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-12 flex gap-3 z-20">
        <button onClick={prevSlide} className="p-3 rounded-full bg-card-bg border border-white/10 text-white hover:border-accent hover:text-accent transition-all">
          <ChevronLeft size={20} />
        </button>
        <button onClick={nextSlide} className="p-3 rounded-full bg-card-bg border border-white/10 text-white hover:border-accent hover:text-accent transition-all">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};
