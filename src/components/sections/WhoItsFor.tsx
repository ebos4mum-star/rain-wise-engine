import { motion } from "framer-motion";
import { Users, TrendingUp, Building2 } from "lucide-react";

const WhoItsFor = () => {
  return (
    <section className="py-20 lg:py-28 bg-rain-surface">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built for apartment locators who want to{" "}
            <span className="text-rain-accent">scale.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            RainWatr is designed for independent locators and broker teams who handle high volumes of renter leads and want to close more deals without hiring assistants.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Users,
              title: "Independent Locators",
              description: "Solo operators who need to maximize every lead without burning out.",
            },
            {
              icon: Building2,
              title: "Broker Teams",
              description: "Scaling teams that want consistent processes across all agents.",
            },
            {
              icon: TrendingUp,
              title: "High-Volume Closers",
              description: "Top performers ready to automate and close even more deals.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-rain-accent/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-rain-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
