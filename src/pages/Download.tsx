import { useEffect } from "react";

const Download = () => {
  useEffect(() => {
    window.location.replace("https://apple.co/4cK0Lt5");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">Redirecting to the App Store…</p>
    </div>
  );
};

export default Download;
