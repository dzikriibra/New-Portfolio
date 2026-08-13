"use client";

import React from "react";
import { Experience } from "@/types/experience";
import { ExperienceContent } from "./ExperienceContent";
import { ApproachAccordion } from "./ApproachAccordion";
import { Card, CardDivider, CardLeft, CardRight } from "@/components/ui/card/DoubleContentCard";

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <Card>
      {/* KIRI: Content Job Info */}
      <CardLeft>
        <ExperienceContent type={experience.type} role={experience.role} period={experience.period} company={experience.company} description={experience.description} />
      </CardLeft>

      {/* TENGAH: Garis Pemisah */}
      <CardDivider />

      {/* KANAN: Accordion */}
      <CardRight>
        <ApproachAccordion approaches={experience.approaches} />
      </CardRight>
    </Card>
  );
};
