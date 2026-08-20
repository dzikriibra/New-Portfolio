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
      <CardLeft>
        <ExperienceContent type={experience.type} role={experience.role} period={experience.period} company={experience.company} description={experience.description} />
      </CardLeft>

      <CardDivider />

      <CardRight>
        <ApproachAccordion approaches={experience.approaches} />
      </CardRight>
    </Card>
  );
};
