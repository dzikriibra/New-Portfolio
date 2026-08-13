import Navbar from "@/components/layout/navbar/Navbar";
import HomeSection from "./modules/home/HomeSection";
import AboutSection from "./modules/about/AboutSection";
import ProjectSection from "./modules/project/ProjectSection";
import SkillSection from "./modules/skill/SkillSection";
import ContactSection from "./modules/contact/ContactSection";
import ExperienceSection from "./modules/experience/ExperienceSection";

export default function Home() {
  return (
    <main className="relative bg-primary-bg overflow-hidden">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
    </main>
  );
}
