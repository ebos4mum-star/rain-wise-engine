import { motion } from "framer-motion";
import { AlertCircle, Ghost, Clock, DollarSign, MessageSquare, HelpCircle } from "lucide-react";

const problems = [
  { icon: AlertCircle, text: "Leads come from everywhere" },
  { icon: Ghost, text: "Renters ghost" },
  { icon: Clock, text: "You forget to follow up" },
  { icon: DollarSign, text: "You lose track of commissions" },
  { icon: MessageSquare, text: "You're always texting" },
  { icon: HelpCircle, text: "You don't know what's actually working" },
];

const Problem = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Locating is <span className="text-rain-accent">disorganized</span> and time-consuming.
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.text}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-4 py-4 border-b border-border last:border-0"
            >
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <problem.icon className="w-5 h-5 text-destructive" />
              </div>
              <span className="text-lg text-foreground">{problem.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
