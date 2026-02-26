import { useScrollReveal, useParallax } from "@/hooks/useScrollAnimation";
import { Users, Package, Settings, BarChart3 } from "lucide-react";

interface FeatureBlockProps {
  reverse?: boolean;
  icon: React.ReactNode;
  title: string;
  description: string;
  visual: React.ReactNode;
}

const FeatureBlock = ({ reverse, icon, title, description, visual }: FeatureBlockProps) => {
  const { ref, isVisible } = useScrollReveal();
  const { ref: pRef, offset } = useParallax(0.03);

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? "lg:direction-rtl" : ""} transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className={`space-y-4 ${reverse ? "lg:order-2 lg:text-left" : ""}`} style={{ direction: "ltr" }}>
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">{icon}</div>
        <h3 className="text-2xl sm:text-3xl font-bold">{title}</h3>
        <p className="text-muted-foreground leading-relaxed max-w-md">{description}</p>
      </div>
      <div ref={pRef} className={`${reverse ? "lg:order-1" : ""}`} style={{ direction: "ltr", transform: `translateY(${offset}px)` }}>
        {visual}
      </div>
    </div>
  );
};

const LeadPipelineVisual = () => (
  <div className="bg-card rounded-2xl border border-border shadow-lg p-6 space-y-5">
    <div className="text-sm font-bold">Lead Pipeline</div>
    <div className="space-y-4">
      {[
        { name: "New Leads", count: 24, percent: 100, color: "bg-blue-500" },
        { name: "Contacted", count: 17, percent: 70, color: "bg-blue-400" },
        { name: "Test Drive", count: 9, percent: 38, color: "bg-blue-400" },
        { name: "Deals Closed", count: 6, percent: 25, color: "bg-emerald-500" },
      ].map((stage) => (
        <div key={stage.name} className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">{stage.name}</span>
            <span className="text-sm font-bold">{stage.count}</span>
          </div>
          <div className="h-2.5 bg-muted rounded-full overflow-hidden">
            <div 
              className={`h-full ${stage.color} rounded-full transition-all duration-500`} 
              style={{ width: `${stage.percent}%` }} 
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const StatsVisual = () => (
  <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100">
    <div className="text-xs font-bold text-gray-800 mb-3">Stock Overview</div>
    <div className="grid grid-cols-2 gap-2">
      <div className="bg-blue-50 text-blue-700 rounded-xl p-2.5">
        <div className="text-[9px] opacity-70">Total Stock</div>
        <div className="text-lg font-black">43</div>
      </div>
      <div className="bg-emerald-50 text-emerald-700 rounded-xl p-2.5">
        <div className="text-[9px] opacity-70">Available</div>
        <div className="text-lg font-black">31</div>
      </div>
      <div className="bg-amber-50 text-amber-700 rounded-xl p-2.5">
        <div className="text-[9px] opacity-70">Pending Deal</div>
        <div className="text-lg font-black">8</div>
      </div>
      <div className="bg-blue-50 text-blue-700 rounded-xl p-2.5">
        <div className="text-[9px] opacity-70">Sold This Month</div>
        <div className="text-lg font-black">54</div>
      </div>
    </div>
  </div>
);

const AutomationVisual = () => (
  <div className="bg-card rounded-2xl border border-border shadow-lg p-6 space-y-4">
    <div className="text-sm font-bold">Automation Rules</div>
    <div className="space-y-3">
      {[
        { trigger: "New lead received", action: "Send WhatsApp welcome" },
        { trigger: "No response 24h", action: "Auto follow-up email" },
        { trigger: "Test drive completed", action: "Send feedback form" },
      ].map((rule) => (
        <div key={rule.trigger} className="bg-muted rounded-xl p-3 flex items-center gap-3 text-sm">
          <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
          <span className="text-muted-foreground">{rule.trigger}</span>
          <span className="text-primary font-medium ml-auto text-xs whitespace-nowrap">→ {rule.action}</span>
        </div>
      ))}
    </div>
  </div>
);

const ChartVisual = () => (
  <div className="bg-card rounded-2xl border border-border shadow-lg p-6">
    <div className="flex justify-between items-center mb-4">
      <div className="text-sm font-bold">Monthly Revenue</div>
      <div className="text-xl font-extrabold text-primary">R2.7M</div>
    </div>
    <div className="flex items-end gap-2 h-32">
      {[35, 50, 40, 65, 55, 80, 70, 90, 75, 85, 95, 88].map((h, i) => (
        <div key={i} className="flex-1 bg-primary/20 rounded-t relative overflow-hidden" style={{ height: `${h}%` }}>
          <div className="absolute inset-x-0 bottom-0 bg-primary rounded-t" style={{ height: "60%" }} />
        </div>
      ))}
    </div>
    <div className="flex justify-between mt-2 text-[10px] text-muted-foreground">
      <span>Jan</span><span>Jun</span><span>Dec</span>
    </div>
  </div>
);

const FeaturesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section id="platform" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={headerRef} className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            <em className="not-italic text-primary">Fast-track</em> leads to deals
          </h2>
          <p className="text-muted-foreground text-lg">Everything you need to manage your dealership efficiently, from lead capture to deal closure.</p>
        </div>

        <div className="space-y-20 lg:space-y-28">
          <FeatureBlock
            icon={<Users className="w-6 h-6" />}
            title="Boost leads with a unified view"
            description="See all your leads in one place. Track every interaction, follow-up, and deal stage in a centralised pipeline designed for motor dealerships."
            visual={<LeadPipelineVisual />}
          />
          <FeatureBlock
            reverse
            icon={<Package className="w-6 h-6" />}
            title="Integrate inventory and operations"
            description="Manage your vehicle stock, pricing, and listings across multiple platforms — all synced in real time from a single dashboard."
            visual={<StatsVisual />}
          />
          <FeatureBlock
            icon={<Settings className="w-6 h-6" />}
            title="Automate routine tasks"
            description="Set up powerful automation rules to handle follow-ups, reminders, and notifications so your team can focus on closing deals."
            visual={<AutomationVisual />}
          />
          <FeatureBlock
            reverse
            icon={<BarChart3 className="w-6 h-6" />}
            title="Track performance and ROI"
            description="Get real-time insights into your dealership's performance. Monitor revenue, conversion rates, and team productivity with detailed analytics."
            visual={<ChartVisual />}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
