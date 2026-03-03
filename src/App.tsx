import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// Platform & Features
import Platform from "./pages/Platform";
import Features from "./pages/Features";
import LeadManagementCRM from "./pages/features/LeadManagementCRM";
import VehicleInventoryManagement from "./pages/features/VehicleInventoryManagement";
import WhatsAppMessaging from "./pages/features/WhatsAppMessaging";
import DealTracking from "./pages/features/DealTracking";
import SalesAnalytics from "./pages/features/SalesAnalytics";
import MultiBranchManagement from "./pages/features/MultiBranchManagement";

// Integrations
import CarsCoZa from "./pages/integrations/CarsCoZa";
import AutoTrader from "./pages/integrations/AutoTrader";
import WeBuyCars from "./pages/integrations/WeBuyCars";
import Xero from "./pages/integrations/Xero";
import SagePastel from "./pages/integrations/SagePastel";

// Solutions
import NewCarDealerships from "./pages/solutions/NewCarDealerships";
import UsedCarDealerships from "./pages/solutions/UsedCarDealerships";
import MultiBranchGroups from "./pages/solutions/MultiBranchGroups";

// Other Pages
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import StopLosingLeads from "./pages/blog/StopLosingLeads";
import WhatsAppStrategies from "./pages/blog/WhatsAppStrategies";
import DealershipDashboard from "./pages/blog/DealershipDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Platform & Features */}
          <Route path="/platform" element={<Platform />} />
          <Route path="/features" element={<Features />} />
          <Route path="/features/lead-management-crm" element={<LeadManagementCRM />} />
          <Route path="/features/vehicle-inventory-management" element={<VehicleInventoryManagement />} />
          <Route path="/features/whatsapp-messaging-for-dealerships" element={<WhatsAppMessaging />} />
          <Route path="/features/deal-tracking-gross-profit" element={<DealTracking />} />
          <Route path="/features/dealership-sales-analytics-south-africa" element={<SalesAnalytics />} />
          <Route path="/features/multi-branch-dealership-management" element={<MultiBranchManagement />} />
          
          {/* Integrations */}
          <Route path="/integrations/cars-co-za" element={<CarsCoZa />} />
          <Route path="/integrations/autotrader" element={<AutoTrader />} />
          <Route path="/integrations/webuycars" element={<WeBuyCars />} />
          <Route path="/integrations/xero" element={<Xero />} />
          <Route path="/integrations/sage-pastel" element={<SagePastel />} />
          
          {/* Solutions */}
          <Route path="/solutions/new-car-dealerships" element={<NewCarDealerships />} />
          <Route path="/solutions/used-car-dealerships" element={<UsedCarDealerships />} />
          <Route path="/solutions/multi-branch-dealership-groups" element={<MultiBranchGroups />} />
          
          {/* Other Pages */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/stop-losing-leads-autotrader-cars-co-za" element={<StopLosingLeads />} />
          <Route path="/blog/whatsapp-strategies-increase-test-drive-bookings" element={<WhatsAppStrategies />} />
          <Route path="/blog/what-to-track-dealership-sales-dashboard-south-africa" element={<DealershipDashboard />} />
          <Route path="/resources" element={<Blog />} />
          
          {/* Legal */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
