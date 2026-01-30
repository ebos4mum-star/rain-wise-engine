import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, Zap } from "lucide-react";
import { RainButton } from "@/components/ui/RainButton";
import { Switch } from "@/components/ui/switch";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const allFeatures = [
  "Unlimited leads",
  "Two-way SMS messaging",
  "Automated SMS workflows",
  "AI-assisted replies & follow-ups",
  "Tour scheduling",
  "Tour reminders",
  "Send tour details via SMS",
  "Post-tour follow-up messages",
  "Native phone push notifications",
  "In-app notifications",
  "Interactive push actions (Yes / No)",
  "Deep links to leads & tours",
  "Custom AI recommendations",
  "Advanced AI insights & lead ranking",
  "Smart follow-up timers",
  "Quiet hours protection",
  "Advanced analytics & insights",
  "Exportable analytics & commission reports",
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const starterMonthly = 19.99;
  const proMonthly = 30;
  const starterYearly = +(starterMonthly * 12 * 0.9).toFixed(2);
  const proYearly = +(proMonthly * 12 * 0.9).toFixed(2);

  const starterPrice = isYearly ? (starterYearly / 12).toFixed(2) : starterMonthly.toFixed(2);
  const proPrice = isYearly ? (proYearly / 12).toFixed(2) : proMonthly.toFixed(2);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-rain-gradient" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rain-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rain-surface text-rain-accent text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Simple, Transparent Pricing
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              One Platform.{" "}
              <span className="text-gradient">Two Plans.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto"
            >
              Both plans include the <strong className="text-foreground">full Rainwatr experience</strong> — 
              the only difference is SMS volume.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base text-muted-foreground mb-8"
            >
              Start your <strong className="text-foreground">30-day free trial</strong> today. No credit card required.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="px-4 pb-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="flex items-center gap-4 bg-card rounded-full px-6 py-3 border border-border shadow-sm">
              <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
              />
              <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
                Yearly
              </span>
              {isYearly && (
                <span className="ml-1 px-2 py-0.5 rounded-full bg-rain-accent text-accent-foreground text-xs font-semibold">
                  Save 10%
                </span>
              )}
            </div>
            {isYearly && (
              <p className="text-sm text-rain-accent font-medium">
                Pay yearly and save 10% — more than one month free.
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-5xl">
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
                <h3 className="text-2xl font-bold text-foreground mb-2">Starter Locator</h3>
                <p className="text-muted-foreground">For solo locators with moderate messaging volume.</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">${starterPrice}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                {isYearly && (
                  <p className="text-sm text-muted-foreground mt-1">
                    Billed ${starterYearly}/year
                  </p>
                )}
                <p className="text-sm text-rain-accent font-medium mt-2">
                  30-day free trial included
                </p>
              </div>

              <RainButton variant="outline" className="w-full mb-6">
                Start Free Trial
              </RainButton>

              {/* SMS Limit Highlight */}
              <div className="bg-rain-surface rounded-xl p-4 mb-6 border border-border">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-rain-accent" />
                  <span className="font-semibold text-foreground">200 SMS per month</span>
                </div>
                <p className="text-sm text-muted-foreground">Includes up to 200 SMS per month.</p>
              </div>

              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-4 font-medium">Everything included:</p>
              <ul className="space-y-3">
                {allFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-rain-surface flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-rain-accent" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
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
                  Best Value
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Pro Locator</h3>
                <p className="text-primary-foreground/80">For full-time, high-volume locators.</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">${proPrice}</span>
                  <span className="text-primary-foreground/80">/month</span>
                </div>
                {isYearly && (
                  <p className="text-sm text-primary-foreground/70 mt-1">
                    Billed ${proYearly}/year
                  </p>
                )}
                <p className="text-sm text-rain-glow font-medium mt-2">
                  30-day free trial included
                </p>
              </div>

              <RainButton variant="accent" className="w-full mb-6">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </RainButton>

              {/* SMS Limit Highlight */}
              <div className="bg-primary-foreground/10 rounded-xl p-4 mb-6 border border-primary-foreground/20">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-rain-glow" />
                  <span className="font-semibold">Unlimited SMS messaging</span>
                </div>
                <p className="text-sm text-primary-foreground/80">No message counting. No throttling.</p>
              </div>

              <p className="text-xs text-primary-foreground/70 uppercase tracking-wide mb-4 font-medium">Everything in Starter, plus:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium">Unlimited SMS messaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-sm">No message counting</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-sm">No throttling</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Transparency Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center text-muted-foreground text-sm mt-8 max-w-xl mx-auto"
          >
            Both plans include the full Rainwatr experience — the only difference is SMS volume.
            Upgrade or downgrade anytime.
          </motion.p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-rain-deep to-rain-medium mt-12">
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
