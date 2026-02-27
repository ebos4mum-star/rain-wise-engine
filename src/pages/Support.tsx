import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RainButton } from "@/components/ui/RainButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I reset my password?",
    answer: 'Use the "Forgot Password" option on the login screen.',
  },
  {
    question: "How do I manage my subscription?",
    answer: "Go to Settings → Manage Subscription inside the app.",
  },
  {
    question: "Why am I not receiving SMS?",
    answer:
      "Ensure your subscription is active and the recipient number is valid.",
  },
  {
    question: "How do I request a new feature?",
    answer: "Use the Feature Request option in the support form above.",
  },
];

const Support = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    setLoading(true);

    // Open mailto with pre-filled fields
    const mailtoLink = `mailto:support@rainwatr.app?subject=${encodeURIComponent(
      subject || "General Question"
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      form.reset();
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-20">
        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
            Rainwatr Support
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            We're here to help professional apartment locators succeed.
          </p>
        </motion.section>

        {/* Contact Info */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="container max-w-2xl mb-16"
        >
          <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-semibold font-display text-foreground mb-2">
              Contact Us
            </h2>
            <p className="text-muted-foreground mb-1">
              Support Email:{" "}
              <a
                href="mailto:support@rainwatr.app"
                className="text-primary hover:underline font-medium"
              >
                support@rainwatr.app
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              Our team typically responds within 24–48 hours.
            </p>
          </div>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container max-w-2xl mb-20"
        >
          <h2 className="text-2xl font-bold font-display text-foreground mb-6 text-center">
            Send Us a Message
          </h2>

          {submitted ? (
            <div className="rounded-2xl border border-border bg-card p-8 text-center">
              <CheckCircle className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="text-foreground font-medium">
                Your message has been sent. We'll get back to you shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-8 space-y-5"
            >
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Your full name"
                  maxLength={100}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  maxLength={255}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select name="subject" defaultValue="General Question">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="General Question">
                      General Question
                    </SelectItem>
                    <SelectItem value="Report a Bug">Report a Bug</SelectItem>
                    <SelectItem value="Billing Issue">Billing Issue</SelectItem>
                    <SelectItem value="Feature Request">
                      Feature Request
                    </SelectItem>
                    <SelectItem value="Account Access Issue">
                      Account Access Issue
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="How can we help?"
                  rows={5}
                  maxLength={1000}
                />
              </div>

              <RainButton
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                <Send className="w-4 h-4 mr-2" />
                {loading ? "Sending…" : "Submit"}
              </RainButton>
            </form>
          )}
        </motion.section>

        {/* FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="container max-w-2xl mb-16"
        >
          <h2 className="text-2xl font-bold font-display text-foreground mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>

        {/* Footer Links */}
        <section className="container max-w-2xl text-center">
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <Link
              to="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
