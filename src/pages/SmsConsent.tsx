import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import { Link } from "react-router-dom";

const SmsConsent = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-8">
              SMS Consent & Messaging Policy
            </h1>

            <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
              <p>
                Rainwatr provides SMS messaging functionality to support communication between apartment locators and renters and to deliver service-related account notifications.
              </p>

              <div>
                <p className="mb-3">Types of messages that may be sent through Rainwatr include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Apartment tour confirmations and reminders</li>
                  <li>Responses to renter inquiries about apartment availability</li>
                  <li>Follow-up messages between apartment locators and renters</li>
                  <li>Account-related notifications such as subscription expiration reminders or service alerts</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Consent to Receive SMS Messages</h2>
                <p>
                  Users provide their phone number when creating a Rainwatr account or when communicating with an apartment locator regarding rental inquiries. By providing a phone number and using the Rainwatr platform, users consent to receive SMS communications related to their account activity or rental inquiries.
                </p>
                <p className="mt-3">
                  Rainwatr users are responsible for obtaining proper consent from renters before sending SMS communications through the platform.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Opt-Out Instructions</h2>
                <p>Recipients may opt out of receiving SMS messages at any time by replying:</p>
                <p className="mt-2"><strong className="text-foreground">STOP</strong> — to unsubscribe from further messages</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Help Instructions</h2>
                <p>Recipients may reply:</p>
                <p className="mt-2"><strong className="text-foreground">HELP</strong> — for assistance or support information.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Message Frequency</h2>
                <p>
                  Message frequency varies depending on account activity, renter inquiries, and communication between locators and renters.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Fees</h2>
                <p>
                  Message and data rates may apply depending on the recipient's mobile carrier plan.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Support</h2>
                <p>
                  For assistance, contact:{" "}
                  <a href="mailto:support@rainwatr.app" className="text-primary hover:underline">
                    support@rainwatr.app
                  </a>
                </p>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex gap-6">
                  <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                  <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SmsConsent;