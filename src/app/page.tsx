import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { cvData } from "@/data/cv-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-background bg-dot-pattern">
      {/* Background patterns */}
      {/* The previous background pattern div is replaced by bg-dot-pattern */}

      <HeroSection />

      <div className="container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent w-full" />
      </div>

      <TechStack />

      <div className="container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent w-full" />
      </div>

      <ExperienceTimeline />

      <footer className="py-12 border-t border-slate-900 bg-slate-950">
        <div className="container px-4 mx-auto text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {cvData.name}. Diseñado con Next.js y Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  );
}
