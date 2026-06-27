import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center" style={{ backgroundColor: "var(--brand-parchment)" }}>
      <Card className="w-full max-w-lg mx-4 shadow-lg backdrop-blur-sm" style={{ backgroundColor: "rgba(255,255,255,0.88)", border: "1px solid var(--brand-border)" }}>
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full animate-pulse" style={{ backgroundColor: "rgba(159,58,56,0.12)" }} />
              <AlertCircle className="relative h-16 w-16" style={{ color: "var(--brand-danger)" }} />
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-2" style={{ color: "var(--brand-ink)" }}>404</h1>

          <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--brand-ink-3)" }}>
            Page Not Found
          </h2>

          <p className="mb-8 leading-relaxed" style={{ color: "var(--brand-text-muted)" }}>
            Sorry, the page you are looking for doesn't exist.
            <br />
            It may have been moved or deleted.
          </p>

          <div
            id="not-found-button-group"
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button
              onClick={handleGoHome}
              className="text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              style={{ backgroundColor: "var(--brand-champagne)" }}
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
