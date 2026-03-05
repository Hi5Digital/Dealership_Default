import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation, Link } from "react-router-dom";
import logo from "@/assets/carleads-logo.png";

interface NavItem {
  label: string;
  href?: string;
  isScroll?: boolean;
  children?: { label: string; href: string; isScroll?: boolean }[];
}

const navLinks: NavItem[] = [
  {
    label: "Home",
    children: [
      { label: "Platform", href: "#platform", isScroll: true },
      { label: "Benefits", href: "#benefits", isScroll: true },
      { label: "Features", href: "#pricing", isScroll: true },
      { label: "Contact", href: "#contact", isScroll: true },
    ]
  },
  {
    label: "Features",
    children: [
      { label: "Lead Management CRM", href: "/features/lead-management-crm" },
      { label: "Vehicle Inventory Management", href: "/features/vehicle-inventory-management" },
      { label: "WhatsApp Messaging", href: "/features/whatsapp-messaging-for-dealerships" },
      { label: "Deal Tracking & Gross Profit", href: "/features/deal-tracking-gross-profit" },
      { label: "Sales Analytics", href: "/features/dealership-sales-analytics-south-africa" },
      { label: "Multi-Branch Management", href: "/features/multi-branch-dealership-management" },
    ]
  },
  {
    label: "Integrations",
    children: [
      { label: "Cars.co.za", href: "/integrations/cars-co-za" },
      { label: "AutoTrader", href: "/integrations/autotrader" },
      { label: "Xero Accounting", href: "/integrations/xero" },
      { label: "Sage Pastel", href: "/integrations/sage-pastel" },
    ]
  },
  {
    label: "Solutions",
    children: [
      { label: "Used Car Dealerships", href: "/solutions/used-car-dealerships" },
      { label: "New Car Dealerships", href: "/solutions/new-car-dealerships" },
      { label: "Multi-Branch Groups", href: "/solutions/multi-branch-dealership-groups" },
    ]
  },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpenMenus, setMobileOpenMenus] = useState<Set<string>>(new Set());
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (href: string) => {
    setOpen(false);
    setActiveDropdown(null);
    
    if (location.pathname !== "/") {
      navigate("/" + href);
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleMobileMenu = (label: string) => {
    const newSet = new Set(mobileOpenMenus);
    if (newSet.has(label)) {
      newSet.delete(label);
    } else {
      newSet.add(label);
    }
    setMobileOpenMenus(newSet);
  };

  const handleNavClick = (item: NavItem) => {
    if (item.href) {
      setOpen(false);
      setActiveDropdown(null);
      navigate(item.href);
    }
  };

  const handleChildClick = (child: { label: string; href: string; isScroll?: boolean }) => {
    setOpen(false);
    setActiveDropdown(null);
    
    if (child.isScroll) {
      scrollTo(child.href);
    } else {
      navigate(child.href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="/" onClick={handleLogoClick}>
          <img src={logo} alt="CarLeads logo" className="h-9" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.children && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.children ? (
                <>
                  <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-2 w-64">
                      <div className="bg-background border border-border rounded-lg shadow-lg py-2 animate-float-up">
                        {item.children.map((child) => (
                          <button
                            key={child.href}
                            onClick={() => handleChildClick(child)}
                            className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <button
                  onClick={() => handleNavClick(item)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}
          <Button onClick={() => scrollTo("#contact")} className="rounded-full px-6">
            Book a demo
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 animate-float-up">
          {navLinks.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleMobileMenu(item.label)}
                    className="flex items-center justify-between w-full py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpenMenus.has(item.label) ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileOpenMenus.has(item.label) && (
                    <div className="pl-4 pb-2">
                      {item.children.map((child) => (
                        <button
                          key={child.href}
                          onClick={() => handleChildClick(child)}
                          className="block w-full text-left py-2 text-sm text-muted-foreground hover:text-foreground"
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <button
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}
          <Button onClick={() => scrollTo("#contact")} className="w-full mt-2 rounded-lg">
            Book a demo
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
