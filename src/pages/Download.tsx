import { useEffect, useState } from "react";
import logo from "@/assets/rainwatr-logo.png";

const APP_STORE_URL = "https://apps.apple.com/us/app/rainwatr/id6759077977";

const isInAppBrowser = (): boolean => {
  const ua = navigator.userAgent || "";
  return /FBAN|FBAV|Instagram|musical_ly|BytedanceWebview|TikTok|Snapchat|Line\//i.test(ua);
};

const Download = () => {
  const [inApp] = useState(() => isInAppBrowser());

  useEffect(() => {
    if (!inApp) {
      window.location.replace(APP_STORE_URL);
    } else {
      // Attempt intent-based handoff for in-app browsers
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = `itms-apps://itunes.apple.com/app/id6759077977`;
      document.body.appendChild(iframe);
      setTimeout(() => iframe.remove(), 2000);
    }
  }, [inApp]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center">
      <img src={logo} alt="RainWatr logo" className="h-16 w-auto mb-8" />
      <h1 className="text-2xl font-bold text-foreground mb-2">
        {inApp ? "Opening Rainwatr in the App Store" : "Redirecting to the App Store…"}
      </h1>
      <p className="text-muted-foreground max-w-xs mb-8 leading-relaxed">
        {inApp
          ? "If the App Store doesn't open automatically, tap below."
          : "If nothing happens, tap the button below."}
      </p>
      <a
        href={APP_STORE_URL}
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-8 py-3.5 text-base font-semibold transition-opacity hover:opacity-90"
      >
        Open in the App Store
      </a>
    </div>
  );
};

export default Download;
