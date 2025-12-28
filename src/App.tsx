import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import BaseCamp from "./pages/BaseCamp";
import StratigraphyLab from "./pages/StratigraphyLab";
import ExcavationGrid from "./pages/ExcavationGrid";
import HydrologicalStation from "./pages/HydrologicalStation";
import SurvivalCompound from "./pages/SurvivalCompound";
import TransmissionRelay from "./pages/TransmissionRelay";
import CodingNexus from './pages/CodingNexus';

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ExpeditionProvider } from "@/context/ExpeditionContext";

import ExpeditionMap from "./components/ExpeditionMap";
import CompassNav from "./components/CompassNav";
import PageTransition from "./components/PageTransition";
import AmbientSoundscape from "./components/AmbientSoundscape";
import NatureBackground from "./components/NatureBackground";
import LatestProjectPopup from "./components/LatestProjectPopup";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <ExpeditionProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <LatestProjectPopup />
            <div className="flex bg-transparent overflow-hidden min-h-screen relative">
              {/* Global Technical Overlays */}
              <div className="fixed inset-0 pointer-events-none z-[1] bg-blueprint-grid opacity-20" />
              <div className="fixed inset-0 pointer-events-none z-[2] scanline-overlay opacity-10" />

              <ExpeditionMap />
              <main className="flex-grow lg:pl-64 relative z-10">
                <PageTransition>
                  <Routes>
                    <Route path="/" element={<BaseCamp />} />
                    <Route path="/stratigraphy" element={<StratigraphyLab />} />
                    <Route path="/excavation" element={<ExcavationGrid />} />
                    <Route path="/hydrology" element={<HydrologicalStation />} />
                    <Route path="/survival" element={<SurvivalCompound />} />
                    <Route path="/coding" element={<CodingNexus />} />
                    <Route path="/transmission" element={<TransmissionRelay />} />
                    <Route path="/old-home" element={<Index />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </PageTransition>
                <CompassNav />
                <AmbientSoundscape />
                <NatureBackground />
              </main>
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ExpeditionProvider>
  </ThemeProvider>
);

export default App;
