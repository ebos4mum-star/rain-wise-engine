import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RainButton } from "@/components/ui/RainButton";
import { Link } from "react-router-dom";

const DeleteAccount = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    setLoading(true);

    const mailtoLink = `mailto:support@rainwatr.app?subject=${encodeURIComponent(
      "RainWatr Account Deletion Request"
    )}&body=${encodeURIComponent(
      `Account deletion request\n\nEmail: ${email}\n\nMessage: ${message || "No additional message provided."}`
    )}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      form.reset();
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Delete Your RainWatr Account
            </h1>

            <p className="text-muted-foreground mb-8">
              Deleting your RainWatr account will permanently remove your account and all associated data from our systems. This action cannot be undone.
            </p>

            {submitted ? (
              <div className="rounded-2xl border border-border bg-card p-8 text-center">
                <CheckCircle className="w-10 h-10 text-primary mx-auto mb-4" />
                <p className="text-foreground font-medium">
                  Your account deletion request has been received. Our team will permanently delete your account and associated data.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border bg-card p-8 space-y-5"
              >
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
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
                  <Label htmlFor="message">Message (optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Any additional information..."
                    rows={4}
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
                  {loading ? "Sending…" : "Request Account Deletion"}
                </RainButton>
              </form>
            )}

            <div className="mt-8 pt-6 border-t border-border flex gap-6">
              <Link to="/privacy" className="text-primary hover:underline text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-primary hover:underline text-sm">Terms of Service</Link>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DeleteAccount;
