import { Link } from "react-router-dom";
import rainwatrLogo from "@/assets/rainwatr-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-rain-deep text-primary-foreground">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo & Contact */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <img src={rainwatrLogo} alt="RainWatr" className="w-7 h-7 rounded-lg" />
              <span className="text-xl font-bold font-display">RAINWATR</span>
            </div>
            <div className="flex flex-col items-center md:items-start gap-1 text-sm text-primary-foreground/70">
              <a href="mailto:Support@rainwatr.app" className="hover:text-primary-foreground transition-colors">Support@rainwatr.app</a>
              <a href="tel:+19205093267" className="hover:text-primary-foreground transition-colors">+1 (920) 509-3267</a>
              <span>3463 Walnut St. Denver, CO 80205</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link to="/pricing" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Pricing
            </Link>
            <Link to="/faq" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              FAQ
            </Link>
            <Link to="/privacy" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Terms
            </Link>
            <a href="mailto:support@rainwatr.com" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-primary-foreground/60 max-w-2xl mx-auto">
            RainWatr is not a listing marketplace. It is an AI-powered Smart Locator Engine for professional apartment locators.
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} RainWatr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
