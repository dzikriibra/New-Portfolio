// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";
// import Image from "next/image";

// type Card = {
//   id: number;
//   content: React.ReactNode;
//   className: string;
//   thumbnail: string;
// };

// export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
//   return (
//     <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
//       {cards.map((card, i) => (
//         <div key={i} className={cn(card.className, "relative group min-h-87.5")}>
//           <motion.div className={cn(card.className, "relative overflow-hidden bg-white rounded-xl h-full w-full border border-white/5")}>
//             {/* Thumbnail */}
//             <Image src={card.thumbnail} fill alt="thumbnail" className="object-cover object-center transition-transform duration-700 group-hover:scale-110" />

//             {/* Overlay (Muncul Pas Hover) */}
//             <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-black via-black/80 to-transparent p-6 opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
//               {card.content}
//             </div>
//           </motion.div>
//         </div>
//       ))}
//     </div>
//   );
// };

"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Award, Briefcase } from "lucide-react";

type Card = {
  id: number;
  content: React.ReactNode;
  className: string;
  thumbnail: string;
  title: string;
  type: "project" | "certificate";
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => {
        const isProject = card.type === "project";

        return (
          <motion.div key={card.id || i} variants={cardVariants} className={cn(card.className, "relative group min-h-[350px] w-full cursor-pointer")}>
            <div className="relative overflow-hidden bg-card-bg/40 rounded-xl h-full w-full border border-white/5">
              {/* Thumbnail */}
              <Image src={card.thumbnail} fill alt={card.title} className="object-cover object-center transition-transform duration-700 group-hover:scale-110" />

              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-0">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={cn(
                      "text-[10px] px-2 py-0.5 rounded-md font-bold uppercase border flex items-center gap-1",
                      isProject ? "bg-green-400/20 border-y-green-400/30 text-green-300" : "bg-yellow-400/20 border-yellow-400/30 text-yellow-300",
                    )}
                  >
                    {isProject ? <Briefcase size={10} /> : <Award size={10} />}
                    {card.type}
                  </span>
                </div>
                <h3 className="text-white font-bold text-xl drop-shadow-md line-clamp-2">{card.title}</h3>
              </div>

              {/* 2. HOVER OVERLAY (Muncul PAS di-hover) */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end bg-gradient-to-t from-black via-black/65 to-transparent p-6 opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                {card.content}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
