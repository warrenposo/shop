
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import News from "./pages/News";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
import CreditCards from "./pages/CreditCards";
import Dumps from "./pages/Dumps";
import CCchecker from "./pages/CCchecker";
import Collections from "./pages/Collections";
import Mycards from "./pages/Mycards";
import Mydumps from "./pages/Mydumps";
import Bonus from "./pages/Bonus";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/news" element={<News />} />
          <Route path="/creditcards" element={<CreditCards />} />
          <Route path="/dumps" element={<Dumps />} />
          <Route path="/ccchecker" element={<CCchecker />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/mycards" element={<Mycards />} />
          <Route path="/Mydumps" element={<Mydumps />} />
          <Route path="/Bonus" element={<Bonus />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
