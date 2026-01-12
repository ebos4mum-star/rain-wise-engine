import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-rain-deep mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: January 2026
            </p>

            <div className="prose prose-slate max-w-none space-y-8">
              {/* Section 1 */}
              <section>
                <h2 className="text-2xl font-semibold text-rain-deep mb-4">
                  1. Introduction & Acceptance of Terms
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  Welcome to RainWatr. These Terms of Service ("Terms") govern your access to and use of the RainWatr mobile application, website, and related services (collectively, the "Service"). By creating an account, accessing, or using RainWatr, you agree to be bound by these Terms.
                </p>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  If you do not agree to these Terms, you may not access or use the Service. We reserve the right to update these Terms at any time, and your continued use of the Service constitutes acceptance of any changes.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-2xl font-semibold text-rain-deep mb-4">
                  2. Description of the Service
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  RainWatr is an AI-powered Smart Locator Engine designed for professional apartment locators. The Service provides tools to manage renter leads, match renters to apartments using AI recommendations, send and receive SMS messages, schedule tours, track commissions, and view analytics.
                </p>
                <div className="bg-rain-deep/5 border border-rain-deep/10 rounded-lg p-4 mt-4">
                  <p className="text-foreground/80 leading-relaxed font-medium">
                    <strong>Important:</strong> RainWatr is NOT a listing marketplace. We do not own, manage, or guarantee any apartment listings. We do not act as a real estate broker, landlord, or property manager. RainWatr is a productivity and automation tool for apartment locators.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-2xl font-semibold text-rain-deep mb-4">
                  3. Eligibility & Account Responsibility
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  To use RainWatr, you must be at least 18 years old and capable of entering into a binding agreement. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
                <ul className="list-disc list-inside text-foreground/80 mt-4 space-y-2">
                  <li>You must provide accurate and complete registration information</li>
                  <li>You must not share your account with others</li>
                  <li>You must notify us immediately of any unauthorized access</li>
                  <li>You are responsible for all actions taken through your account</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-2xl font-semibold text-rain-deep mb-4">
                  4. User Responsibilities
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  As a RainWatr user, you agree to use the Service in a lawful, professional, and ethical manner. You are solely responsible for your interactions with renters, property managers, and other third parties.
                </p>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  You agree NOT to:
                </p>
                <ul className="list-disc list-inside text-foreground/80 mt-2 space-y-2">
                  <li>Use the Service for any unlawful purpose</li>
                  <li>Send unsolicited or spam messages to renters</li>
                  <li>Misrepresent apartment listings, availability, or pricing</li>
                  <li>Harass, abuse, or threaten any user or renter</li>
                  <li>Attempt to reverse-engineer, copy, or exploit the Service</li>
                  <li>Violate any applicable laws, including fair housing regulations</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-2xl font-semibold text-rain-deep mb-4">
                  5. SMS & Messaging Compliance
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  RainWatr provides SMS messaging features to help you communicate with renters. By using these features, you agree to comply with all applicable laws and regulations, including the Telephone Consumer Protection Act (TCPA) and carrier guidelines.
                </p>
                <div className="bg-rain-accent/10 border border-rain-accent/20 rounded-lg p-4 mt-4">
                  <p className="text-foreground/80 leading-relaxed font-medium">
                    <strong>You must obtain proper consent from renters before sending any SMS messages.</strong> You are solely responsible for ensuring that all recipients have opted in to receive communications from you.
                  </p>
                </div>
                <ul className="list-disc list-inside text-foreground/80 mt-4 space-y-2">
                  <li>You must have documented consent before sending messages</li>
                  <li>You must honor opt-out requests immediately</li>
                  <li>You must not send messages to numbers on the Do Not Call registry without consent</li>
                  <li>RainWatr is not responsible for SMS delivery failures or carrier blocking</li>
                  <li>Message and data rates may apply to recipients</li>
                </ul>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-2xl font-semibold text-rain-deep mb-4">
                  6. AI & Recommendation Disclaimer
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  RainWatr uses artificial intelligence to analyze renter preferences and recommend apartment matches. These recommendations are provided as suggestions only and should not be considered professional real estate advice.
                </p>
                <ul className="list-disc list-inside text-foreground/80 mt-4 space-y-2">
                  <li>AI recommendations are based on available data and may not be complete or accurate</li>
                  <li>You are responsible for verifying all apartment information independently</li>
                  <li>RainWatr does not guarantee the accuracy, availability, or suitability of any listing</li>
                  <li>AI-generated messages should be reviewed before sending</li>
                  <li>You remain responsible for all decisions made using AI recommendations</li>
                </ul>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-2xl font-semibold text-rain-deep mb-4">
                  7. Payments, Subscriptions & Billing
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  RainWatr may offer free and paid subscription plans. By subscribing to a paid plan, you agree to pay all applicable fees as described at the time of purchase.
                </p>
                <ul className="list-disc list-inside text-foreground/80 mt-4 space-y-2">
                  <li>Subscription fees are billed in advance on a recurring basis</li>
                  <li>You may cancel your subscription at any time through your account settings</li>
                  <li>Refunds are provided only as required by law or at our discretion</li>
                  <li>We reserve the right to change pricing with reasonable notice</li>
                  <li>Failure to pay may result in suspension or termination of your account</li>
                </ul>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-2xl font-semibold text-rain-deep mb-4">
                  8. Data Ownership & Privacy Reference
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  You retain ownership of the data you input into RainWatr, including renter information, notes, and communications. By using the Service, you grant us a limited license to process and store this data to provide the Service.
                </p>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand how we handle your data.
                </p>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="text-2xl font-semibold text-rain-deep mb-4">
                  9. Account Suspension & Termination
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  We reserve the right to suspend or terminate your account at any time, with or without notice, for any reason, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-foreground/80 mt-4 space-y-2">
                  <li>Violation of these Terms</li>
                  <li>Abuse of the SMS messaging system</li>
                  <li>Fraudulent or illegal activity</li>
                  <li>Non-payment of fees</li>
                  <li>Requests from law enforcement</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  Upon termination, your right to use the Service will immediately cease. You may request export of your data within 30 days of termination.
                </p>
              </section>

              {/* Section 10 */}
              <section>
                <h2 className="text-2xl font-semibold text-rain-deep mb-4">
                  10. Intellectual Property
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  The RainWatr name, logo, software, design, and all related intellectual property are owned by RainWatr and protected by copyright, trademark, and other laws. You may not copy, modify, distribute, or create derivative works without our written permission.
                </p>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  You retain ownership of content you create, but grant us a license to use, display, and process that content to provide the Service.
                </p>
              </section>

              {/* Section 11 */}
              <section>
                <h2 className="text-2xl font-semibold text-rain-deep mb-4">
                  11. No Guarantees & Platform Disclaimer
                </h2>
                <div className="bg-rain-deep/5 border border-rain-deep/10 rounded-lg p-4">
                  <p className="text-foreground/80 leading-relaxed">
                    RainWatr provides tools to help apartment locators work more efficiently. However, we make no guarantees regarding:
                  </p>
                  <ul className="list-disc list-inside text-foreground/80 mt-4 space-y-2">
                    <li>Leasing outcomes or commission earnings</li>
                    <li>Renter behavior, responsiveness, or reliability</li>
                    <li>Accuracy of apartment data or listings</li>
                    <li>SMS delivery or response rates</li>
                    <li>Availability or uptime of the Service</li>
                  </ul>
                </div>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  The Service is provided "as is" and "as available" without warranties of any kind, express or implied.
                </p>
              </section>

              {/* Section 12 */}
              <section>
                <h2 className="text-2xl font-semibold text-rain-deep mb-4">
                  12. Limitation of Liability
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  To the maximum extent permitted by law, RainWatr and its officers, directors, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
                </p>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  Our total liability for any claims arising from your use of the Service shall not exceed the amount you paid us in the 12 months preceding the claim.
                </p>
              </section>

              {/* Section 13 */}
              <section>
                <h2 className="text-2xl font-semibold text-rain-deep mb-4">
                  13. Changes to Terms
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  We may modify these Terms at any time. When we make material changes, we will notify you by email or through the Service. Your continued use of the Service after changes take effect constitutes acceptance of the updated Terms.
                </p>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  We encourage you to review these Terms periodically to stay informed of any updates.
                </p>
              </section>

              {/* Section 14 */}
              <section>
                <h2 className="text-2xl font-semibold text-rain-deep mb-4">
                  14. Governing Law
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the United States and the state in which RainWatr is headquartered, without regard to conflict of law principles.
                </p>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except where prohibited by law.
                </p>
              </section>

              {/* Section 15 */}
              <section>
                <h2 className="text-2xl font-semibold text-rain-deep mb-4">
                  15. Contact Information
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-rain-deep/5 border border-rain-deep/10 rounded-lg p-4 mt-4">
                  <p className="text-foreground/80">
                    <strong>Email:</strong> legal@rainwatr.com
                  </p>
                  <p className="text-foreground/80 mt-2">
                    <strong>Support:</strong> support@rainwatr.com
                  </p>
                </div>
              </section>

              {/* Final Note */}
              <section className="border-t border-border pt-8 mt-12">
                <p className="text-muted-foreground text-sm">
                  By using RainWatr, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
