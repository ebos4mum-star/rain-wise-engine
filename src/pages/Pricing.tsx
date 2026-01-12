import { motion } from "framer-motion";
import { Check, Zap, TrendingUp, MessageSquare, BarChart3, Users, Sparkles, ArrowRight, Crown } from "lucide-react";
import { RainButton } from "@/components/ui/RainButton";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const starterFeatures = [
  "Lead inbox management",
  "AI renter matching",
  "Basic SMS messaging",
  "Tour scheduling",
  "Commission tracking",
  "Analytics dashboard",
];

const proFeatures = [
  "Everything in Starter",
  "Automated SMS workflows",
  "Advanced analytics & insights",
  "Unlimited leads",
  "Priority support",
  "Custom AI recommendations",
];

const addOns = [
  {
    icon: MessageSquare,
    title: "Extra SMS Credits",
    description: "Send more messages to your leads with additional SMS packages.",
    price: "$9.99/500 credits",
  },
  {
    icon: Sparkles,
    title: "Advanced AI Insights",
    description: "Get deeper AI-powered analysis and ranking for better matches.",
    price: "$14.99/month",
  },
  {
    icon: BarChart3,
    title: "Exportable Reports",
    description: "Download analytics and commission reports for your records.",
    price: "$7.99/month",
  },
];

const valuePoints = [
  {
    icon: Users,
    title: "Perfect for Solo Locators",
    description: "Start with Starter and scale as you grow. No hidden fees, no surprises.",
  },
  {
    icon: TrendingUp,
    title: "Built for Professionals",
    description: "Pro tier gives you unlimited leads and automation to handle high volume.",
  },
  {
    icon: Zap,
    title: "AI That Pays for Itself",
    description: "One closed deal covers months of RainWatr. The AI advantage is real ROI.",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-rain-gradient" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rain-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rain-surface text-rain-accent text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              AI-Powered Apartment Locating
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Close More Deals with{" "}
              <span className="text-gradient">AI-Powered Matching</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground mb-8"
            >
              Start your <strong className="text-foreground">30-day free trial</strong> today. 
              Full access to AI matching, SMS, analytics, and commission tracking.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <RainButton size="lg" variant="accent">
                Start Free 30-Day Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </RainButton>
              <RainButton size="lg" variant="outline">
                See How It Works
              </RainButton>
            </motion.div>
          </motion.div>

          {/* App Mockup Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 relative"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { label: "Lead Inbox", icon: Users },
                { label: "AI Matches", icon: Sparkles },
                { label: "SMS Hub", icon: MessageSquare },
                { label: "Analytics", icon: BarChart3 },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-md border border-border text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-rain-surface flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-rain-accent" />
                  </div>
                  <p className="font-medium text-foreground">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground"
            >
              Choose the plan that fits your business. All plans include a 30-day free trial.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-sm text-rain-accent mt-2 font-medium"
            >
              💡 Save 10% with annual billing
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-3xl p-8 border border-border shadow-md"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Starter</h3>
                <p className="text-muted-foreground">Perfect for solo locators</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">$19.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-rain-accent font-medium mt-2">
                  30-day free trial included
                </p>
              </div>

              <RainButton variant="outline" className="w-full mb-8">
                Start Free Trial
              </RainButton>

              <ul className="space-y-4">
                {starterFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-rain-surface flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-rain-accent" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-rain-deep to-rain-medium rounded-3xl p-8 text-primary-foreground relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rain-accent text-accent-foreground text-xs font-semibold">
                  <Crown className="w-3 h-3" />
                  Most Popular
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <p className="text-primary-foreground/80">For professional locators</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$35</span>
                  <span className="text-primary-foreground/80">/month</span>
                </div>
                <p className="text-sm text-rain-glow font-medium mt-2">
                  30-day free trial included
                </p>
              </div>

              <RainButton variant="accent" className="w-full mb-8">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </RainButton>

              <ul className="space-y-4">
                {proFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why This Pricing Works */}
      <section className="py-20 px-4 bg-rain-surface">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Why This Pricing Works
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              We built RainWatr to be affordable and valuable. Low monthly cost, high AI + workflow value.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {valuePoints.map((point) => (
              <motion.div
                key={point.title}
                variants={fadeInUp}
                className="bg-card rounded-2xl p-6 border border-border shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-rain-surface flex items-center justify-center mb-4">
                  <point.icon className="w-6 h-6 text-rain-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Optional Add-Ons */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Optional Add-Ons
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground"
            >
              Boost your workflow with additional features when you need them.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {addOns.map((addon) => (
              <motion.div
                key={addon.title}
                variants={fadeInUp}
                className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-rain-surface flex items-center justify-center mb-4">
                  <addon.icon className="w-5 h-5 text-rain-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{addon.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{addon.description}</p>
                <p className="text-rain-accent font-semibold">{addon.price}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-rain-deep to-rain-medium">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4"
            >
              Start Your Free 30-Day Trial Today
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-primary-foreground/80 mb-8"
            >
              No credit card required. Cancel anytime. Full access to all features.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <RainButton size="xl" variant="accent" className="shadow-glow">
                Start Free 30-Day Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </RainButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
