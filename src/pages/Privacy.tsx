import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

const Privacy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: January 2026
            </p>

            <div className="prose prose-slate max-w-none space-y-8">
              {/* Section 1 */}
              <section>
                <h2 className="text-2xl font-semibold text-rain-deep mb-4">
                  1. Introduction
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  RainWatr ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect information when you use the RainWatr mobile application, website, and related services (the "Service").
                </p>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  RainWatr is an AI-powered Smart Locator Engine designed for professional apartment locators. We are NOT a listing marketplace. By using RainWatr, you agree to the collection and use of information in accordance with this policy.
                </p>
                <div className="bg-rain-deep/5 border border-rain-deep/10 rounded-lg p-4 mt-4">
                  <p className="text-foreground/80 leading-relaxed">
                    <strong>Important:</strong> RainWatr acts as a data processor for renter information that locators input into the system. Locators remain the data controllers and are responsible for obtaining proper consent from renters before entering their information into RainWatr.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-2xl font-semibold text-rain-deep mb-4">
                  2. Information We Collect
                </h2>
                
                <h3 className="text-xl font-medium text-rain-deep mt-6 mb-3">
                  User Account Data
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  When you create an account, we collect:
                </p>
                <ul className="list-disc list-inside text-foreground/80 mt-2 space-y-2">
                  <li>Name and email address</li>
                  <li>Phone number</li>
                  <li>Password (encrypted)</li>
                  <li>Business name and license information (if applicable)</li>
                  <li>Payment and billing information</li>
                </ul>

                <h3 className="text-xl font-medium text-rain-deep mt-6 mb-3">
                  Renter Data Processed on Behalf of Locators
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Locators input renter information into RainWatr to facilitate apartment matching. This may include:
                </p>
                <ul className="list-disc list-inside text-foreground/80 mt-2 space-y-2">
                  <li>Renter name, email, and phone number</li>
                  <li>Housing preferences (budget, location, move-in date, amenities)</li>
                  <li>Communication history and notes</li>
                  <li>Tour schedules and lease status</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  RainWatr processes this data on behalf of locators. Locators are responsible for ensuring they have proper consent to collect and share this information.
                </p>

                <h3 className="text-xl font-medium text-rain-deep mt-6 mb-3">
                  Messaging and Communication Data
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  When you use our SMS and messaging features, we collect:
                </p>
                <ul className="list-disc list-inside text-foreground/80 mt-2 space-y-2">
                  <li>Message content (sent and received)</li>
                  <li>Message timestamps and delivery status</li>
                  <li>Phone numbers involved in communications</li>
                  <li>Opt-in and opt-out records</li>
                </ul>

                <h3 className="text-xl font-medium text-rain-deep mt-6 mb-3">
                  Automatically Collected Data
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  When you use our Service, we automatically collect:
                </p>
                <ul className="list-disc list-inside text-foreground/80 mt-2 space-y-2">
                  <li>Device type, operating system, and unique device identifiers</li>
                  <li>IP address and approximate location</li>
                  <li>App usage patterns, feature interactions, and session data</li>
                  <li>Error logs and performance data</li>
                  <li>Browser type (for web access)</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-2xl font-semibold text-rain-deep mb-4">
                  3. How We Use Information
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-foreground/80 mt-4 space-y-2">
                  <li>Provide, maintain, and improve the RainWatr Service</li>
                  <li>Process renter-to-apartment matching using AI</li>
                  <li>Enable SMS and messaging functionality</li>
                  <li>Track commissions and manage your pipeline</li>
                  <li>Generate analytics and performance insights</li>
                  <li>Process payments and manage subscriptions</li>
                  <li>Send service-related notifications and updates</li>
                  <li>Provide customer support</li>
                  <li>Detect and prevent fraud, abuse, and security threats</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-2xl font-semibold text-rain-deep mb-4">
                  4. SMS & Messaging Data
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  RainWatr provides SMS messaging features to help locators communicate with renters efficiently. We store messaging data for the following purposes:
                </p>
                <ul className="list-disc list-inside text-foreground/80 mt-4 space-y-2">
                  <li><strong>Service delivery:</strong> To send, receive, and display messages within the app</li>
                  <li><strong>Performance analytics:</strong> To help you understand response rates and engagement</li>
                  <li><strong>Compliance:</strong> To maintain records for regulatory and legal requirements</li>
                  <li><strong>AI improvement:</strong> To enhance message suggestions and automation</li>
                </ul>
                <div className="bg-rain-accent/10 border border-rain-accent/20 rounded-lg p-4 mt-4">
                  <p className="text-foreground/80 leading-relaxed">
                    <strong>Your responsibility:</strong> You must obtain proper consent from renters before sending SMS messages. RainWatr is not responsible for messages sent without consent.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-2xl font-semibold text-rain-deep mb-4">
                  5. AI, Analytics & Automated Processing
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  RainWatr uses artificial intelligence and machine learning to power core features of the Service, including:
                </p>
                <ul className="list-disc list-inside text-foreground/80 mt-4 space-y-2">
                  <li>Matching renters to apartments based on preferences</li>
                  <li>Generating message suggestions and automated responses</li>
                  <li>Providing analytics on lead performance and conversion rates</li>
                  <li>Identifying follow-up opportunities</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  Our AI systems use aggregated and anonymized data to improve matching accuracy and messaging effectiveness across the platform. Individual renter data is processed to provide personalized recommendations within your account.
                </p>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  AI recommendations are suggestions only. You maintain full control over all decisions and communications.
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-2xl font-semibold text-rain-deep mb-4">
                  6. Data Sharing & Third Parties
                </h2>
                <div className="bg-rain-deep/5 border border-rain-deep/10 rounded-lg p-4 mb-4">
                  <p className="text-foreground/80 leading-relaxed font-medium">
                    <strong>RainWatr does not sell your personal data or renter data to third parties.</strong>
                  </p>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  We may share information with third parties only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-foreground/80 mt-4 space-y-2">
                  <li><strong>Service providers:</strong> Companies that help us deliver the Service (SMS providers, cloud hosting, payment processors, analytics tools)</li>
                  <li><strong>Legal compliance:</strong> When required by law, subpoena, or government request</li>
                  <li><strong>Safety and security:</strong> To protect against fraud, abuse, or security threats</li>
                  <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>With your consent:</strong> When you explicitly authorize sharing</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  All third-party service providers are contractually obligated to protect your data and use it only for the purposes we specify.
                </p>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-2xl font-semibold text-rain-deep mb-4">
                  7. Data Storage & Security
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  We take the security of your data seriously and implement industry-standard measures to protect it:
                </p>
                <ul className="list-disc list-inside text-foreground/80 mt-4 space-y-2">
                  <li>Encryption of data in transit (TLS/SSL) and at rest</li>
                  <li>Secure cloud infrastructure with access controls</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Employee access limited to authorized personnel only</li>
                  <li>Multi-factor authentication options for user accounts</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  While we strive to protect your data, no method of transmission or storage is 100% secure. You are responsible for maintaining the security of your account credentials.
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-2xl font-semibold text-rain-deep mb-4">
                  8. Data Retention
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  We retain your data for as long as your account is active or as needed to provide the Service. Specific retention periods include:
                </p>
                <ul className="list-disc list-inside text-foreground/80 mt-4 space-y-2">
                  <li><strong>Account data:</strong> Retained while your account is active, plus 30 days after deletion request</li>
                  <li><strong>Renter data:</strong> Retained according to your account status and applicable regulations</li>
                  <li><strong>Messaging data:</strong> Retained for compliance and analytics purposes as required by law</li>
                  <li><strong>Analytics data:</strong> Aggregated data may be retained indefinitely for platform improvement</li>
                  <li><strong>Billing records:</strong> Retained as required by tax and financial regulations</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  You may request deletion of your data at any time, subject to legal retention requirements.
                </p>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="text-2xl font-semibold text-rain-deep mb-4">
                  9. User Rights
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  Depending on your location, you may have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside text-foreground/80 mt-4 space-y-2">
                  <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal requirements)</li>
                  <li><strong>Export:</strong> Request a portable copy of your data in a common format</li>
                  <li><strong>Opt-out:</strong> Opt out of marketing communications at any time</li>
                  <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  To exercise any of these rights, please contact us at privacy@rainwatr.com. We will respond to your request within the timeframe required by applicable law.
                </p>
              </section>

              {/* Section 10 */}
              <section>
                <h2 className="text-2xl font-semibold text-rain-deep mb-4">
                  10. Children's Privacy
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  RainWatr is designed for professional apartment locators and is not intended for use by individuals under 18 years of age. We do not knowingly collect personal information from children under 18.
                </p>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  If we become aware that we have collected personal information from a child under 18, we will take steps to delete that information promptly. If you believe we have inadvertently collected such information, please contact us immediately.
                </p>
              </section>

              {/* Section 11 */}
              <section>
                <h2 className="text-2xl font-semibold text-rain-deep mb-4">
                  11. Changes to This Policy
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will:
                </p>
                <ul className="list-disc list-inside text-foreground/80 mt-4 space-y-2">
                  <li>Update the "Last updated" date at the top of this page</li>
                  <li>Notify you by email or through the Service</li>
                  <li>Provide a summary of key changes</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  Your continued use of RainWatr after changes take effect constitutes acceptance of the updated policy. We encourage you to review this policy periodically.
                </p>
              </section>

              {/* Section 12 */}
              <section>
                <h2 className="text-2xl font-semibold text-rain-deep mb-4">
                  12. Contact Information
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-rain-deep/5 border border-rain-deep/10 rounded-lg p-4 mt-4">
                  <p className="text-foreground/80">
                    <strong>Privacy inquiries:</strong> privacy@rainwatr.com
                  </p>
                  <p className="text-foreground/80 mt-2">
                    <strong>General support:</strong> support@rainwatr.com
                  </p>
                  <p className="text-foreground/80 mt-2">
                    <strong>Data requests:</strong> data@rainwatr.com
                  </p>
                </div>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  We will respond to all privacy-related inquiries within 30 days.
                </p>
              </section>

              {/* Final Note */}
              <section className="border-t border-border pt-8 mt-12">
                <p className="text-muted-foreground text-sm">
                  By using RainWatr, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of your information as described herein.
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

export default Privacy;
