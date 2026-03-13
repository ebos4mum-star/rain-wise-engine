import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import FAQ from "./pages/FAQ";
import Pricing from "./pages/Pricing";
import Support from "./pages/Support";
import SmsConsent from "./pages/SmsConsent";
import DeleteAccount from "./pages/DeleteAccount";
import Download from "./pages/Download";
import Ios from "./pages/Ios";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// GitHub Pages serves this project at /rain-wise-engine/, while custom domains serve at /
const basename = window.location.hostname.endsWith("github.io")
  ? "/rain-wise-engine"
  : "/";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} />
          <Route path="/sms-consent" element={<SmsConsent />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/download" element={<Download />} />
          <Route path="/ios" element={<Ios />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
