// "use client";
// import React from "react";
// import { motion, Variants } from "framer-motion";
// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import { Award, Briefcase } from "lucide-react";
// import { ProjectReaction } from "../reaction/ProjectReaction";

// type Card = {
//   id: number;
//   content: React.ReactNode;
//   className: string;
//   thumbnail: string;
//   title: string;
//   type: "project" | "certificate";
//   initialReactions?: any;
// };

// const cardVariants: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
//   },
// };

// export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
//   return (
//     <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-3">
//       {cards.map((card, i) => {
//         const isProject = card.type === "project";

//         return (
//           <motion.div key={card.id || i} variants={cardVariants} className={cn(card.className, "group relative min-h-[350px] w-full cursor-pointer")}>
//             <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/5 bg-card-bg/40">
//               <Image src={card.thumbnail} fill alt={card.title} className="object-cover object-center transition-transform duration-700 group-hover:scale-110" />

//               <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-0">
//                 <div className="mb-2 flex items-center gap-2">
//                   <span
//                     className={cn(
//                       "flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase",
//                       isProject ? "border-y-green-400/30 bg-green-400/20 text-green-300" : "border-yellow-400/30 bg-yellow-400/20 text-yellow-300",
//                     )}
//                   >
//                     {isProject ? <Briefcase size={10} /> : <Award size={10} />}
//                     {card.type}
//                   </span>
//                 </div>
//                 <h3 className="line-clamp-2 text-xl font-bold text-white drop-shadow-md">{card.title}</h3>
//               </div>

//               <div className="absolute inset-0 z-20 flex flex-col justify-end bg-gradient-to-t from-black via-black/65 to-transparent p-6 opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
//                 {card.content}
//               </div>
//             </div>

//             <div
//               className="
//     absolute
//     bottom-2
//     left-6
//     z-30
//   "
//             >
//               <div className="mt-1">
//                 <ProjectReaction projectId={String(card.id)} initialReactions={card.initialReactions} />
//               </div>
//             </div>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// };

"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Award, Briefcase } from "lucide-react";
import { ProjectReaction } from "../reaction/ProjectReaction";

type Card = {
  id: number;
  content: React.ReactNode;
  className: string;
  thumbnail: string;
  title: string;
  type: "project" | "certificate";
  initialReactions?: any;
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  return (
    <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-3">
      {cards.map((card, index) => {
        const isProject = card.type === "project";

        return (
          <motion.div key={card.id || index} variants={cardVariants} className={cn(card.className, "group relative min-h-[350px] w-full")}>
            {/* CARD */}
            <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/5 bg-card-bg/40">
              {/* THUMBNAIL */}
              <Image
                src={card.thumbnail}
                fill
                alt={card.title}
                className="
                  object-cover object-center
                  transition-transform duration-700
                  lg:group-hover:scale-110
                "
              />

              {/* 
                DESKTOP:
                Title preview sebelum hover.

                TABLET / MOBILE:
                Tidak perlu preview karena content langsung tampil.
              */}
              <div
                className="
                  absolute inset-0 z-10
                  flex flex-col justify-end
                  bg-gradient-to-t
                  from-black/80 via-black/20 to-transparent
                  p-6

                  opacity-0

                  lg:opacity-100
                  lg:transition-opacity
                  lg:duration-500
                  lg:group-hover:opacity-0
                "
              >
                <div className="mb-2 flex items-center gap-2">
                  <span
                    className={cn(
                      "flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase",
                      isProject ? "border-green-400/30 bg-green-400/20 text-green-300" : "border-yellow-400/30 bg-yellow-400/20 text-yellow-300",
                    )}
                  >
                    {isProject ? <Briefcase size={10} /> : <Award size={10} />}

                    {card.type}
                  </span>
                </div>

                <h3 className="line-clamp-2 text-xl font-bold text-white drop-shadow-md">{card.title}</h3>
              </div>

              {/* 
                CONTENT

                MOBILE / TABLET:
                langsung terlihat.

                DESKTOP:
                tersembunyi → muncul ketika hover.
              */}
              <div
                className="
                  absolute inset-0 z-20
                  flex flex-col justify-end
                  bg-gradient-to-t
                  from-black via-black/65 to-transparent
                  p-6

                  opacity-100
                  translate-y-0

                  lg:translate-y-4
                  lg:opacity-0
                  lg:transition-all
                  lg:duration-500
                  lg:ease-out
                  lg:group-hover:translate-y-0
                  lg:group-hover:opacity-100
                "
              >
                {card.content}
              </div>
            </div>

            {/* REACTION */}
            <div className="absolute bottom-2 left-6 z-30">
              <div className="mt-1">
                <ProjectReaction projectId={String(card.id)} initialReactions={card.initialReactions} />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
