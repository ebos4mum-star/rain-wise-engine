import { motion } from "framer-motion";
import { 
  UserCheck, Brain, MessageCircle, Heart, Zap,
  ClipboardList, User, Building, Send, Calendar, Receipt, BarChart3
} from "lucide-react";

const aiFeatures = [
  { icon: UserCheck, text: "Pre-qualifies renters" },
  { icon: Brain, text: "Matches apartments using AI reasoning" },
  { icon: MessageCircle, text: "Responds instantly via SMS" },
  { icon: Heart, text: "Remembers renter preferences" },
  { icon: Zap, text: "Helps locators close faster" },
];

const allInOne = [
  { icon: ClipboardList, text: "Lead intake" },
  { icon: User, text: "Renter profiling" },
  { icon: Building, text: "Apartment matching" },
  { icon: Send, text: "Text messaging" },
  { icon: Calendar, text: "Tour scheduling" },
  { icon: BarChart3, text: "Analytics & insights" },
  { icon: Receipt, text: "Commission tracking" },
];

const Solution = () => {
  return (
    <section className="py-20 lg:py-28 bg-rain-deep text-primary-foreground overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            RainWatr runs your locating workflow.
          </h2>
          <p className="text-xl text-primary-foreground/80">
            RainWatr is a mobile app that:
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* AI Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              {aiFeatures.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-rain-accent flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* All in One */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
              Everything in one place
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {allInOne.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <item.icon className="w-5 h-5 text-rain-glow flex-shrink-0" />
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
