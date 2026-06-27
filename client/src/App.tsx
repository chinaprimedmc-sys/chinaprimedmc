import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Destinations = lazy(() => import("./pages/Destinations"));
const DestinationDetail = lazy(() => import("./pages/DestinationDetail"));
const Journeys = lazy(() => import("./pages/Journeys"));
const JourneyDetail = lazy(() => import("./pages/JourneyDetail"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const B2B = lazy(() => import("./pages/B2B"));
const Contact = lazy(() => import("./pages/Contact"));
const TradeShows = lazy(() => import("./pages/TradeShows"));
const TradeShowDetail = lazy(() => import("./pages/TradeShowDetail"));

function PageLoader() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white pt-[72px]">
      <div className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-gray-500)]">Loading</div>
    </main>
  );
}

function Router() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const canonicalUrl = `https://www.chinaprimedmc.com${location === "/" ? "/" : location}`;
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    ogUrl?.setAttribute("content", canonicalUrl);
  }, [location]);
  
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/destinations" component={Destinations} />
        <Route path="/destinations/:id" component={DestinationDetail} />
        <Route path="/journeys" component={Journeys} />
        <Route path="/journeys/:id" component={JourneyDetail} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:id" component={BlogPost} />
        <Route path="/b2b" component={B2B} />
        <Route path="/trade-shows" component={TradeShows} />
        <Route path="/trade-shows/:id" component={TradeShowDetail} />
        <Route path="/contact" component={Contact} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Navbar />
          <Router />
          <Footer />
          <FloatingButtons />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
