import logo from "@/assets/rainwatr-logo.png";

const APP_STORE_URL = "https://apps.apple.com/us/app/rainwatr/id6759077977";

const Ios = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center">
      <img src={logo} alt="RainWatr logo" className="h-16 w-auto mb-8" />
      <h1 className="text-2xl font-bold text-foreground mb-2">
        Download RainWatr
      </h1>
      <p className="text-muted-foreground max-w-xs mb-8 leading-relaxed">
        AI-powered app for apartment locators. Track renters, follow-ups, tours, and commissions in one place.
      </p>
      <a
        href={APP_STORE_URL}
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-8 py-3.5 text-base font-semibold transition-opacity hover:opacity-90"
      >
        Download on the App Store
      </a>
    </div>
  );
};

export default Ios;
