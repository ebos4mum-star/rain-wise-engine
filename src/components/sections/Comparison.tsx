import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const comparisons = [
  { traditional: "No visibility", rainwatr: "Real-time analytics" },
  { traditional: "Manual texting", rainwatr: "AI-powered SMS" },
  { traditional: "Guessing", rainwatr: "AI reasoning" },
  { traditional: "Disorganized", rainwatr: "One smart system" },
  { traditional: "Slow replies", rainwatr: "Instant engagement" },
  { traditional: "Missed deals", rainwatr: "Higher close rates" },
];

const Comparison = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why RainWatr <span className="text-rain-accent">Wins</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-border shadow-lg"
        >
          {/* Header */}
          <div className="grid grid-cols-2">
            <div className="p-6 bg-muted text-center">
              <span className="font-semibold text-muted-foreground">Traditional Locators</span>
            </div>
            <div className="p-6 bg-rain-deep text-center">
              <span className="font-semibold text-primary-foreground">RainWatr</span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, index) => (
            <div key={index} className="grid grid-cols-2 border-t border-border">
              <div className="p-5 flex items-center justify-center gap-3 bg-card">
                <X className="w-5 h-5 text-destructive flex-shrink-0" />
                <span className="text-muted-foreground">{row.traditional}</span>
              </div>
              <div className="p-5 flex items-center justify-center gap-3 bg-rain-surface">
                <Check className="w-5 h-5 text-rain-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{row.rainwatr}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
