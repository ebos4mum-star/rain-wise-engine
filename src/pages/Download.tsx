import logo from "@/assets/rainwatr-logo.png";

const Download = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center">
      <img src={logo} alt="RainWatr logo" className="h-16 w-auto mb-8" />
      <h1 className="text-3xl font-bold text-foreground mb-3">Download RainWatr</h1>
      <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
        AI-powered app for apartment locators.
        <br />
        Track renters, follow-ups, tours, and commissions in one place.
      </p>
      <a
        href="https://apple.co/4cK0Lt5"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-8 py-3.5 text-base font-semibold transition-opacity hover:opacity-90"
      >
        Download on the App Store
      </a>
    </div>
  );
};

export default Download;
