/** Orbiting Archive design reminder: the design-library experience opens with a brief constellation calibration, then offers eight visibly distinct portfolio worlds and reuse paths. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ConstellationCursor } from "./components/brand/ConstellationCursor";
import { ConstellationLoader } from "./components/brand/ConstellationLoader";
import { ThemeToggle } from "./components/brand/ThemeToggle";
import { RouteTransition } from "./components/shared/RouteTransition";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import KineticPortfolio from "./portfolios/kinetic";
import ArchitectPortfolio from "./portfolios/architect";
import VoidPortfolio from "./portfolios/void";
import ArtifactPortfolio from "./portfolios/artifact";
import MonoPortfolio from "./portfolios/mono";
import NeonPortfolio from "./portfolios/neon";
import EditorialPortfolio from "./portfolios/editorial";
import ChromePortfolio from "./portfolios/chrome";
function Router(){return <Switch><Route path="/" component={Home}/><Route path="/portfolios/kinetic" component={KineticPortfolio}/><Route path="/portfolios/architect" component={ArchitectPortfolio}/><Route path="/portfolios/void" component={VoidPortfolio}/><Route path="/portfolios/artifact" component={ArtifactPortfolio}/><Route path="/portfolios/mono" component={MonoPortfolio}/><Route path="/portfolios/neon" component={NeonPortfolio}/><Route path="/portfolios/editorial" component={EditorialPortfolio}/><Route path="/portfolios/chrome" component={ChromePortfolio}/><Route path="/case-studies/:world/:project" component={CaseStudy}/><Route path="/404" component={NotFound}/><Route component={NotFound}/></Switch>}
export default function App(){return <ErrorBoundary><ThemeProvider defaultTheme="dark" switchable><TooltipProvider><Toaster/><a className="skip-link" href="#main-content">SKIP TO MAIN CONTENT</a><ConstellationLoader/><ConstellationCursor/><ThemeToggle/><RouteTransition><Router/></RouteTransition></TooltipProvider></ThemeProvider></ErrorBoundary>}
