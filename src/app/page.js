import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ExperiencesSection from "./components/ExperiencesSection";
import SkillsSection from "./components/SkillsSection";
import ProjecstSections from "./components/ProjectsSections";
import EducationsSection from "./components/EducationsSection";
import Footer from "./components/Footer";
import { JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-jetbrains",
})

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col ${jetBrains.className}`} data-theme="emerald">
      <Navbar />
      <div className="container mt-20 mx-auto py-4 px-8">
        <HeroSection />
        <ExperiencesSection />
        <SkillsSection />
        <ProjecstSections />
        <EducationsSection />
      </div>
      <Footer />
    </main>
  );
}
