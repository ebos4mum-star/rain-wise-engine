import { motion } from "framer-motion";
import { Brain, Sparkles } from "lucide-react";

const AIExplainer = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-rain-deep via-rain-medium to-rain-deep text-primary-foreground overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
            <Sparkles className="w-4 h-4 text-rain-glow" />
            <span className="text-sm font-medium">Powered by AI</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            This isn't a CRM — it's a{" "}
            <span className="text-rain-glow">Smart Locator Engine</span>.
          </h2>

          <p className="text-xl text-primary-foreground/80 mb-6 max-w-3xl mx-auto">
            RainWatr uses advanced AI to understand renters' needs, analyze real apartment data, choose the best matches, decide what to text, and remind you when to follow up — automatically.
          </p>
          
          <p className="text-lg text-primary-foreground/70 mb-12 max-w-2xl mx-auto">
            It doesn't just automate. It <span className="text-rain-glow font-semibold">learns</span> which renters, apartments, and messages actually close deals.
          </p>

          {/* AI capabilities */}
          <div className="grid md:grid-cols-5 gap-4">
            {[
              "Understands needs",
              "Analyzes data",
              "Chooses matches",
              "Writes messages",
              "Reminds follow-ups",
            ].map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <Brain className="w-6 h-6 text-rain-glow mx-auto mb-2" />
                <p className="text-sm font-medium">{capability}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIExplainer;
