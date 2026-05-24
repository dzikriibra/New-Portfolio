// "use client";
// import { useState } from "react";
// import SkillAccordionItem from "./SkillAccordionItem";
// import SkillDetailPanel from "./SkillDetailPanel";
// import { skillCategories } from "../data/skillset";

// export default function SkillAccordion() {
//   const [activeId, setActiveId] = useState(1);

//   const activeItem = skillCategories.find((item) => item.id === activeId) || skillCategories[0];

//   return (
//     <div
//       className="
//         mx-auto grid w-full max-w-7xl
//         grid-cols-1 gap-10
//         lg:grid-cols-[0.9fr_1.1fr]
//         lg:items-start
//       "
//     >
//       {/* LEFT */}
//       <div className="space-y-2">
//         {skillCategories.map((item) => (
//           <SkillAccordionItem key={item.id} item={item} active={activeId === item.id} onClick={() => setActiveId(item.id)} />
//         ))}
//       </div>

//       {/* RIGHT */}
//       <SkillDetailPanel item={activeItem} />
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import SkillAccordionItem from "./SkillAccordionItem";
import SkillDetailPanel from "./SkillDetailPanel";

import { skillCategories } from "../data/skillset";

export default function SkillAccordion() {
  const [activeId, setActiveId] = useState(1);

  const activeItem = skillCategories.find((item) => item.id === activeId) || skillCategories[0];

  return (
    <div
      className="
        mx-auto grid w-full max-w-7xl
        grid-cols-1 gap-10
        lg:grid-cols-[0.9fr_1.1fr]
        lg:items-start
      "
    >
      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="space-y-2"
      >
        {skillCategories.map((item) => (
          <SkillAccordionItem key={item.id} item={item} active={activeId === item.id} onClick={() => setActiveId(item.id)} />
        ))}
      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <SkillDetailPanel item={activeItem} />
      </motion.div>
    </div>
  );
}
