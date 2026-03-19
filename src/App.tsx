import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "@/components/ScrollToTop";

// Loading component for lazy routes
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
      <p className="mt-4 text-muted-foreground">Loading...</p>
    </div>
  </div>
);

// Eager load only critical pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load all other pages for code splitting
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));

// Platform & Features
const Platform = lazy(() => import("./pages/Platform"));
const Features = lazy(() => import("./pages/Features"));
const LeadManagementCRM = lazy(() => import("./pages/features/LeadManagementCRM"));
const VehicleInventoryManagement = lazy(() => import("./pages/features/VehicleInventoryManagement"));
const WhatsAppMessaging = lazy(() => import("./pages/features/WhatsAppMessaging"));
const DealTracking = lazy(() => import("./pages/features/DealTracking"));
const SalesAnalytics = lazy(() => import("./pages/features/SalesAnalytics"));
const MultiBranchManagement = lazy(() => import("./pages/features/MultiBranchManagement"));
const AutomotiveLeadManagement = lazy(() => import("./pages/features/AutomotiveLeadManagement"));
const AutomotiveDealershipKPI = lazy(() => import("./pages/features/AutomotiveDealershipKPI"));

// Integrations
const CarsCoZa = lazy(() => import("./pages/integrations/CarsCoZa"));
const AutoTrader = lazy(() => import("./pages/integrations/AutoTrader"));
const WeBuyCars = lazy(() => import("./pages/integrations/WeBuyCars"));
const Xero = lazy(() => import("./pages/integrations/Xero"));
const SagePastel = lazy(() => import("./pages/integrations/SagePastel"));

// Solutions
const NewCarDealerships = lazy(() => import("./pages/solutions/NewCarDealerships"));
const UsedCarDealerships = lazy(() => import("./pages/solutions/UsedCarDealerships"));
const MultiBranchGroups = lazy(() => import("./pages/solutions/MultiBranchGroups"));

// Other Pages
const Pricing = lazy(() => import("./pages/Pricing"));
const Blog = lazy(() => import("./pages/Blog"));
const StopLosingLeads = lazy(() => import("./pages/blog/StopLosingLeads"));
const WhatsAppStrategies = lazy(() => import("./pages/blog/WhatsAppStrategies"));
const DealershipDashboard = lazy(() => import("./pages/blog/DealershipDashboard"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
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
            <Route path="/features/automotive-lead-management-system" element={<AutomotiveLeadManagement />} />
            <Route path="/features/automotive-dealership-kpi-system-with-reporting" element={<AutomotiveDealershipKPI />} />
            
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
