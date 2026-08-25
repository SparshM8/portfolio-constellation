/** Orbiting Archive design reminder: routes form eight creative worlds connected through one high-contrast personal-brand shell. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import KineticPortfolio from "./portfolios/kinetic";
import ArchitectPortfolio from "./portfolios/architect";
import VoidPortfolio from "./portfolios/void";
import ArtifactPortfolio from "./portfolios/artifact";
import MonoPortfolio from "./portfolios/mono";
import NeonPortfolio from "./portfolios/neon";
import EditorialPortfolio from "./portfolios/editorial";
import ChromePortfolio from "./portfolios/chrome";
function Router(){return <Switch><Route path="/" component={Home}/><Route path="/portfolios/kinetic" component={KineticPortfolio}/><Route path="/portfolios/architect" component={ArchitectPortfolio}/><Route path="/portfolios/void" component={VoidPortfolio}/><Route path="/portfolios/artifact" component={ArtifactPortfolio}/><Route path="/portfolios/mono" component={MonoPortfolio}/><Route path="/portfolios/neon" component={NeonPortfolio}/><Route path="/portfolios/editorial" component={EditorialPortfolio}/><Route path="/portfolios/chrome" component={ChromePortfolio}/><Route path="/404" component={NotFound}/><Route component={NotFound}/></Switch>}
export default function App(){return <ErrorBoundary><ThemeProvider defaultTheme="dark"><TooltipProvider><Toaster/><Router/></TooltipProvider></ThemeProvider></ErrorBoundary>}
