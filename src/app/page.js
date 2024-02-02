import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSections1 from "./components/ProjectsSections1";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchivementsSection from "./components/AchivementsSection";
import ExperiencesSection from "./components/ExperiencesSection";
import { JetBrains_Mono } from "next/font/google";
import SkillsSection from "./components/SkillsSection";
import ProjecstSections from "./components/ProjectsSections";
import EducationsSection from "./components/EducationsSection";

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-jetbrains",
})


export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col ${jetBrains.className}`} data-theme="emerald">
      {/* // <main className={`flex min-h-screen flex-col ${jetBrains.className}`} data-theme="dracula"> */}
      <Navbar />
      <div className="container mt-20 mx-auto py-4 px-8">
        <HeroSection />
        <ExperiencesSection />
        <SkillsSection />
        {/* <AchivementsSection /> */}
        {/* <AboutSection /> */}
        {/* <ProjectsSections1 /> */}
        <ProjecstSections />
        <EducationsSection />
        {/* <EmailSection /> */}
      </div>
      <Footer />
    </main>
  );
}
