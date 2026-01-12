import { motion } from "framer-motion";
import { TrendingUp, Zap, Clock, Shield, Banknote, BarChart3 } from "lucide-react";

const benefits = [
  { icon: TrendingUp, text: "Close more deals" },
  { icon: Zap, text: "Respond faster" },
  { icon: Clock, text: "Work fewer hours" },
  { icon: Shield, text: "Never lose a lead" },
  { icon: Banknote, text: "Get paid on every match" },
  { icon: BarChart3, text: "Know what's working" },
];

const Benefits = () => {
  return (
    <section className="py-20 lg:py-28 bg-rain-surface">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Why Locators Use RainWatr
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.text}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:border-rain-accent/30 hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-rain-accent/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7 text-rain-accent" />
              </div>
              <span className="text-foreground font-semibold">{benefit.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
