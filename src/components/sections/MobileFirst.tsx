import { motion } from "framer-motion";
import { Smartphone, MessageCircle, Calendar, Receipt, BarChart3, Building2 } from "lucide-react";

const MobileFirst = () => {
  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Built for <span className="text-rain-accent">iPhone</span> and{" "}
              <span className="text-rain-accent">Android</span>.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              RainWatr is designed for locators on the go — with leads, messages, matches, analytics, tours, and commissions always in your pocket.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { icon: Smartphone, text: "Leads" },
                { icon: MessageCircle, text: "Messages" },
                { icon: Building2, text: "Matches" },
                { icon: BarChart3, text: "Analytics" },
                { icon: Calendar, text: "Tours" },
                { icon: Receipt, text: "Commissions" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-rain-surface border border-border"
                >
                  <item.icon className="w-5 h-5 text-rain-accent" />
                  <span className="font-medium text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            {/* Decorative phone frames */}
            <div className="relative">
              <div className="absolute inset-0 bg-rain-accent/10 blur-3xl rounded-full" />
              
              {/* iPhone frame */}
              <div className="relative w-64 h-[500px] bg-rain-deep rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-card rounded-[2.5rem] flex items-center justify-center">
                  <div className="text-center p-6">
                    <Smartphone className="w-16 h-16 text-rain-accent mx-auto mb-4" />
                    <p className="text-lg font-semibold text-foreground">RainWatr</p>
                    <p className="text-sm text-muted-foreground">Always in your pocket</p>
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-rain-deep rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileFirst;
