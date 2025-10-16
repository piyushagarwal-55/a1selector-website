import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ContractHiring from "./pages/ContractHiring";
import ItNonIt from "./pages/ItNonIt";
import ContactForm from "./pages/ContactForm";
import HireTalent from "./pages/HireTalent";
import JobSeekers from "./pages/JobSeekers";
import Rpo from "./pages/Rpo";
import Staffing from "./pages/Staffing";
import Employers from "./pages/Employers";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Jobs from "./pages/jobs";
import CareerService from "./pages/CareerService";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/contract-hiring" element={<ContractHiring />} />
          <Route path="/services/it-non-it" element={<ItNonIt />} />
          <Route path="/services/rpo" element={<Rpo />} />
          <Route path="/services/contact" element={<ContactForm />} />
          <Route path="/employers" element={<HireTalent />} />
          <Route path="/jobseekers" element={<JobSeekers />} />
          <Route path="/services/staffing" element={<Staffing />} />
          <Route path="/companies" element={<Employers />} />
           <Route path="/about" element={<About />} />
           <Route path="/blog" element={<Blog />} />
           <Route path="/contact" element={<Contact />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/career-services" element={<CareerService />} />
            
          

          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
