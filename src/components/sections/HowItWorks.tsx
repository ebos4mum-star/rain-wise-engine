import { motion } from "framer-motion";

const steps = [
  { num: 1, title: "A renter fills out your form or texts you" },
  { num: 2, title: "RainWatr builds a renter profile" },
  { num: 3, title: "You paste an apartment list" },
  { num: 4, title: "RainWatr ranks the best matches" },
  { num: 5, title: "RainWatr texts the renter" },
  { num: 6, title: "You close the lease" },
  { num: 7, title: "RainWatr tracks your commission" },
];

const HowItWorks = () => {
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            From lead to commission in 7 simple steps.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-rain-accent via-rain-light to-rain-accent/30 hidden md:block" />

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-6"
                >
                  <div className="relative z-10 w-12 h-12 rounded-full bg-rain-deep flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-lg shadow-accent">
                    {step.num}
                  </div>
                  <div className="flex-1 p-4 rounded-xl bg-card border border-border">
                    <p className="text-foreground font-medium">{step.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
