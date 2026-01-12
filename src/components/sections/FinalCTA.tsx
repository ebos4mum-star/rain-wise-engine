import { motion } from "framer-motion";
import { RainButton } from "@/components/ui/RainButton";
import { ArrowRight, Apple, Play } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Start closing more leases <span className="text-rain-accent">today</span>.
          </h2>

          <p className="text-lg text-muted-foreground mb-10">
            RainWatr helps apartment locators make more money with less work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <RainButton variant="accent" size="xl">
              Start Free
              <ArrowRight className="w-5 h-5" />
            </RainButton>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-foreground text-background hover:bg-rain-deep transition-colors">
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-80">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </button>
            <button className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-foreground text-background hover:bg-rain-deep transition-colors">
              <Play className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-80">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
