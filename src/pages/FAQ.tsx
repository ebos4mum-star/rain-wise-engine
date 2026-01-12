import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { RainButton } from "@/components/ui/RainButton";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const faqItems = [
  {
    question: "What is RainWatr?",
    answer: "RainWatr is a mobile app and AI-powered Smart Locator Engine for professional apartment locators. It helps you manage leads, match renters to apartments using AI, send and receive SMS, schedule tours, track commissions, and view analytics — all in one place. RainWatr is NOT a listing site or renter marketplace."
  },
  {
    question: "Who is RainWatr for?",
    answer: "RainWatr is built for independent apartment locators, broker teams, and anyone who handles high volumes of renter leads and wants to close more deals faster without hiring assistants."
  },
  {
    question: "How does RainWatr help me close more deals?",
    answer: "AI pre-qualifies renters and ranks the best apartment matches. Automated messaging keeps renters engaged 24/7. Tour scheduling & follow-ups ensure no lead slips through the cracks. Commission tracking ensures you never lose money. Analytics show you what leads and apartments convert best."
  },
  {
    question: "Do I need my renters' consent for RainWatr to send messages?",
    answer: "Yes. RainWatr requires that you have permission to contact renters. All messaging complies with SMS and telecommunication regulations. Renters can opt out at any time."
  },
  {
    question: "Can RainWatr guarantee leases or commissions?",
    answer: "No. RainWatr provides AI-powered recommendations, automation, and analytics to increase your chances of closing deals, but lease outcomes and commissions depend on your interactions and apartment availability."
  },
  {
    question: "What devices does RainWatr work on?",
    answer: "RainWatr is fully mobile-first and works on iPhone and Android. All your leads, messages, matches, tours, analytics, and commissions are available in your pocket."
  },
  {
    question: "How does RainWatr use AI?",
    answer: "RainWatr's AI understands renter needs and preferences, matches renters with the best apartments, suggests what to text and when, tracks follow-ups and commissions, and provides insights from analytics to improve performance over time."
  },
  {
    question: "Can I track my performance and earnings in RainWatr?",
    answer: "Yes. RainWatr provides a real-time analytics dashboard showing lead performance, message engagement, match quality and AI recommendations, tours scheduled vs. closed, and your commission pipeline."
  },
  {
    question: "Is my data safe with RainWatr?",
    answer: "Absolutely. RainWatr uses encrypted databases, secure cloud infrastructure, and restricted internal access. We never sell your data. Renter data is stored securely and processed only to deliver the Service."
  },
  {
    question: "How do I get started?",
    answer: "Download RainWatr on iPhone or Android, sign up with your locator account, import leads and apartment lists, let the AI rank matches, send messages, and track commissions. Start closing more leases faster!"
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-12 md:py-20">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about RainWatr and how it helps apartment locators close more deals.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 data-[state=open]:bg-muted/30"
            >
              <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-5">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-border">
          <h2 className="text-2xl font-bold mb-3">Ready to get started?</h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of locators closing more deals with RainWatr.
          </p>
          <RainButton size="lg" variant="primary">
            Start Free
          </RainButton>
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            Still have questions?{" "}
            <a 
              href="mailto:support@rainwatr.com" 
              className="text-primary hover:underline"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
