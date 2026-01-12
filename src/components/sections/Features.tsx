import { motion } from "framer-motion";
import { Brain, Building2, MessageSquare, CalendarCheck, Receipt } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Lead Qualification",
    description: "Automatically understands renter budget, timing, and preferences.",
  },
  {
    icon: Building2,
    title: "Smart Apartment Matching",
    description: "Paste Smart Apartment Data links and let AI rank the best matches.",
  },
  {
    icon: MessageSquare,
    title: "Built-in Messaging",
    description: "Text renters manually or let RainWatr send messages for you.",
  },
  {
    icon: CalendarCheck,
    title: "Tour & Follow-Up Automation",
    description: "Never forget to follow up or confirm tours.",
  },
  {
    icon: Receipt,
    title: "Commission Pipeline",
    description: "Track every match from lead → tour → invoice → check.",
  },
];

const Features = () => {
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
            Key Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every tool you need to close more leases, in one intelligent platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-rain-accent/30 transition-all hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rain-accent to-rain-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
