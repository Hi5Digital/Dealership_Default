import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

const features = [
  "Lead Management & CRM",
  "Vehicle Inventory Management",
  "Deal Tracking & Pipeline",
  "WhatsApp & Email Integration",
  "Automated Follow-ups",
  "Performance Analytics",
  "Multi-branch Support",
  "Role-based Access Control",
  "Cars.co.za Integration",
  "AutoTrader Integration",
  "Document Management",
  "Customer Communication Log",
  "Task & Reminder System",
  "Mobile-friendly Dashboard",
];

const PlatformSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { ref: listRef, isVisible: listVisible } = useScrollReveal(0.1);

  return (
    <section id="pricing" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Left */}
          <div className="max-w-lg">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              All-in-one platform for dealership <em className="not-italic text-primary">success</em>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              CarLeads integrates with the tools you already use. Connect your listings, communication channels, and accounting in one powerful platform built for South African motor dealerships.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Cars.co.za", "AutoTrader", "Facebook", "WhatsApp"].map((name) => (
                <div key={name} className="bg-muted rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground">{name}</div>
              ))}
            </div>
            <Button size="lg" className="rounded-full px-8 hover:scale-105 transition-transform" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
              Schedule a demo
            </Button>
          </div>

          {/* Right — Checklist */}
          <div ref={listRef} className={`bg-card rounded-2xl border border-border shadow-lg p-8 transition-all duration-700 ${listVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="text-xs font-bold tracking-wider uppercase text-primary mb-6">Everything You Need</div>
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((f, i) => (
                <div key={f} className="flex items-center gap-2" style={{ transitionDelay: `${i * 30}ms` }}>
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
