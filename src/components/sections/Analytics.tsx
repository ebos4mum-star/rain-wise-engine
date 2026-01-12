import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Brain, 
  DollarSign,
  BarChart3,
  Clock,
  Building2
} from "lucide-react";

const analyticsCategories = [
  {
    title: "Lead Performance",
    icon: Users,
    items: [
      "Where your best renters come from",
      "How many leads turn into tours",
      "How many tours become leases",
    ],
  },
  {
    title: "Response & Follow-Up",
    icon: Clock,
    items: [
      "How fast you reply",
      "Which messages get responses",
      "Which renters are going cold",
    ],
  },
  {
    title: "AI Match Quality",
    icon: Brain,
    items: [
      "Which apartments close",
      "Which price ranges perform best",
      "Which buildings convert",
    ],
  },
  {
    title: "Revenue & Commissions",
    icon: DollarSign,
    items: [
      "Pipeline: lead → tour → lease → paid",
      "Expected commissions",
      "Money earned this month",
    ],
  },
];

const Analytics = () => {
  return (
    <section className="py-20 lg:py-28 bg-rain-surface overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rain-accent/10 border border-rain-accent/20 mb-6">
            <BarChart3 className="w-4 h-4 text-rain-accent" />
            <span className="text-sm font-medium text-rain-accent">Analytics & Insights</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Know exactly what <span className="text-rain-accent">makes you money</span>.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            RainWatr tracks every renter, every message, and every lease — so you can optimize what actually closes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {analyticsCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-rain-accent/30 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rain-accent to-rain-light flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.05 }}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-rain-accent flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Analytics;
