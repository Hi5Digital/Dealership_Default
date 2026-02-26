import { Link } from "react-router-dom";
import logo from "@/assets/carleads-logo.png";

const Footer = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-footer text-footer-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="CarLeads logo" className="h-8 mb-4 brightness-0 invert opacity-90" />
            <p className="text-sm leading-relaxed opacity-70 max-w-xs">
              The smarter way to run your motor dealership. CarLeads streamlines every aspect of your dealership's operations.
            </p>
          </div>

          {/* About */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">About CarLeads</h4>
            <p className="text-sm leading-relaxed opacity-70">
              CarLeads is a comprehensive CRM and dealership management platform designed exclusively for motor dealerships in South Africa. Our mission is to help dealerships sell more cars with less effort.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Platform", href: "#platform", isRoute: false },
                { label: "Benefits", href: "#benefits", isRoute: false },
                { label: "Pricing", href: "#pricing", isRoute: false },
              ].map((l) => (
                <li key={l.label}>
                  <button onClick={() => scrollTo(l.href)} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {l.label}
                  </button>
                </li>
              ))}
              <li>
                <Link to="/privacy-policy" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm opacity-50">
          © 2026 Car Leads. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
