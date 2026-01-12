import { motion } from "framer-motion";
import { RainButton } from "@/components/ui/RainButton";
import { Apple, Play, ArrowRight, Droplets } from "lucide-react";
import heroPhones from "@/assets/hero-phones.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Subtle rain gradient background */}
      <div className="absolute inset-0 bg-rain-gradient" />
      
      {/* Animated rain drops */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-8 bg-gradient-to-b from-rain-accent/20 to-transparent rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: -32,
            }}
            animate={{
              y: ["0vh", "100vh"],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rain-surface border border-border mb-6"
            >
              <Droplets className="w-4 h-4 text-rain-accent" />
              <span className="text-sm font-medium text-rain-deep">
                AI-Powered Smart Locator Engine
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
              <span className="text-foreground">Turn every renter lead into a lease</span>
              <span className="text-gradient"> — automatically.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              RainWatr is the AI-powered mobile app that runs your apartment locating business for you.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <RainButton variant="accent" size="lg">
                Start Free
                <ArrowRight className="w-5 h-5" />
              </RainButton>
              <RainButton variant="outline" size="lg">
                See How It Works
              </RainButton>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <button className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-foreground text-background hover:bg-rain-deep transition-colors">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              <button className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-foreground text-background hover:bg-rain-deep transition-colors">
                <Play className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>

            {/* Trust line */}
            <p className="text-sm text-muted-foreground">
              RainWatr is not a listing site. It's an AI-powered Smart Locator Engine for professional apartment locators.
            </p>
          </motion.div>

          {/* Right: Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-rain-accent/10 blur-3xl rounded-full scale-75" />
              
              <motion.img
                src={heroPhones}
                alt="RainWatr App - Lead Inbox, Apartment Matches, Messages, Analytics Dashboard, Commission Tracker"
                className="relative w-full max-w-lg mx-auto drop-shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
