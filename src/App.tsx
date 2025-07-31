import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EconomizarEnergiaAquecedorSolar from "./pages/articles/economizar-energia-aquecedor-solar";
import ManutencaoPreventiva from "./pages/articles/manutencao-preventiva-quando-como-fazer";
import AquecedorSolarVsGas from "./pages/articles/aquecedor-solar-vs-gas";
import ProblemasBanheirasHidromassagem from "./pages/articles/problemas-banheiras-hidromassagem";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/articles/economizar-energia-aquecedor-solar" element={<EconomizarEnergiaAquecedorSolar />} />
          <Route path="/articles/manutencao-preventiva-quando-como-fazer" element={<ManutencaoPreventiva />} />
          <Route path="/articles/aquecedor-solar-vs-gas" element={<AquecedorSolarVsGas />} />
          <Route path="/articles/problemas-banheiras-hidromassagem" element={<ProblemasBanheirasHidromassagem />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
