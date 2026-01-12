import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import WhoItsFor from "@/components/sections/WhoItsFor";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Features from "@/components/sections/Features";
import Analytics from "@/components/sections/Analytics";
import HowItWorks from "@/components/sections/HowItWorks";
import Comparison from "@/components/sections/Comparison";
import Benefits from "@/components/sections/Benefits";
import MobileFirst from "@/components/sections/MobileFirst";
import AIExplainer from "@/components/sections/AIExplainer";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WhoItsFor />
        <Problem />
        <Solution />
        <section id="features">
          <Features />
        </section>
        <section id="analytics">
          <Analytics />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="why-rainwatr">
          <Comparison />
        </section>
        <Benefits />
        <MobileFirst />
        <AIExplainer />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
