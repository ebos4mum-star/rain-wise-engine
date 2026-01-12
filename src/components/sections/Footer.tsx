import { Droplets } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 bg-rain-deep text-primary-foreground">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Droplets className="w-6 h-6 text-rain-glow" />
            <span className="text-xl font-bold font-display">RAINWATR</span>
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
