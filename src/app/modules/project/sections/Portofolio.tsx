"use client";
import { useSearchParams } from "next/navigation";
import { BasicCard } from "@/components/ui/card/BasicCard";
import { projects } from "@/app/modules/project/data/projects";
import { certificates } from "@/app/modules/project/data/certificates";
import { FilterTabs } from "../features/FilterTabs";

export default function PortfolioPage() {
  const params = useSearchParams();
  const filter = (params.get("filter") as "all" | "project" | "certificate") || "all";

  const allItems = [...projects, ...certificates];

  const filteredItems = filter === "all" ? allItems : allItems.filter((item) => item.type === filter);

  return (
    <section className="min-h-screen bg-primary-bg py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl text-white font-bold mb-10 text-center">Portfolio</h1>

        <FilterTabs active={filter} onChange={() => {}} />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <BasicCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
