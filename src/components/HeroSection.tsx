import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref: phoneRef, offset: phoneOffset } = useParallax(0.04);

  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute -top-40 -right-40 w-[700px] h-[700px] opacity-[0.07]" viewBox="0 0 700 700">
          <circle cx="350" cy="350" r="300" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
          <circle cx="350" cy="350" r="200" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-6 animate-float-up">
              <Zap className="w-4 h-4" />
              Dealership Management
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6 animate-float-up" style={{ animationDelay: "0.1s" }}>
              The <em className="not-italic text-primary">smarter</em> way to run your motor dealership
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-float-up" style={{ animationDelay: "0.2s" }}>
              From stock management to lead tracking, CarLeads streamlines every aspect of your dealership's operations. Designed exclusively for motor dealerships in South Africa.
            </p>
            <div className="flex flex-wrap gap-4 animate-float-up" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="rounded-full px-8 text-base hover:scale-105 transition-transform" onClick={() => document.querySelector("#platform")?.scrollIntoView({ behavior: "smooth" })}>
                Platform
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base hover:scale-105 transition-transform" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
                Book a 30min demo
              </Button>
            </div>
          </div>

          {/* Right — Phone Mockup */}
          <div ref={phoneRef} className="relative flex justify-center" style={{ transform: `translateY(${phoneOffset}px)` }}>
            {/* Phone frame */}
            <div className="relative w-[280px] sm:w-[320px]">
              <div className="bg-foreground/90 rounded-[2.5rem] p-3 shadow-2xl">
                <div className="bg-background rounded-[2rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-5 py-2 text-[10px] font-medium text-muted-foreground">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                      <div className="w-4 h-2 bg-muted-foreground/30 rounded-sm" />
                    </div>
                  </div>
                  {/* Screen content */}
                  <div className="px-4 pb-6 pt-2 space-y-3">
                    <div className="text-xs font-bold text-foreground">Dashboard</div>
                    <div className="flex gap-1.5 mb-2">
                      <div className="bg-blue-500 text-white text-[8px] px-2 py-1 rounded-md flex items-center gap-1 font-medium">⊞ Filter ∨</div>
                      <div className="bg-blue-500 text-white text-[8px] px-2 py-1 rounded-md ml-auto font-medium">+ Add stock</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-primary/10 rounded-xl p-3">
                        <div className="text-lg font-bold text-primary">127</div>
                        <div className="text-[10px] text-muted-foreground">Active Leads</div>
                      </div>
                      <div className="bg-accent rounded-xl p-3">
                        <div className="text-lg font-bold text-foreground">43</div>
                        <div className="text-[10px] text-muted-foreground">Vehicles</div>
                      </div>
                    </div>
                    <div className="bg-muted rounded-xl p-3">
                      <div className="text-[10px] font-bold text-gray-800 mb-0.5">Gross profit - R520k</div>
                      <div className="text-[8px] text-gray-400 mb-2">Average profit per sale - R25 000</div>
                      <div className="flex items-end gap-1 h-10">
                        {[40, 65, 45, 80, 60, 90, 70].map((h, i) => (
                          <div key={i} className="flex-1 bg-primary/60 rounded-t" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                    {/* Sales breakdown chart */}
                    <div className="bg-muted rounded-xl p-2.5">
                      <div className="text-[10px] font-bold text-gray-800 mb-0.5">54 Vehicles sold - R2.74M</div>
                      <div className="text-[8px] text-gray-400 mb-2">Av price per unit - R140 000</div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-[7px] text-gray-400 w-9">Week 1</span>
                        <div className="bg-blue-500 h-3 rounded-sm" style={{ width: "62%" }} />
                      </div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-[7px] text-gray-400 w-9">Week 2</span>
                        <div className="bg-blue-400 h-3 rounded-sm" style={{ width: "42%" }} />
                      </div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-[7px] text-gray-400 w-9">Week 3</span>
                        <div className="bg-blue-500 h-3 rounded-sm" style={{ width: "80%" }} />
                      </div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-[7px] text-gray-400 w-9">Week 4</span>
                        <div className="bg-blue-400 h-3 rounded-sm" style={{ width: "52%" }} />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[7px] text-gray-400 w-9">Week 5</span>
                        <div className="bg-blue-300 h-3 rounded-sm" style={{ width: "35%" }} />
                      </div>
                    </div>
                    <div className="bg-muted rounded-xl p-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">JM</div>
                      <div>
                        <div className="text-[10px] font-semibold text-foreground">Johan Marais</div>
                        <div className="text-[9px] text-muted-foreground">Interested in 2024 Polo</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-foreground/90 rounded-b-2xl" />
            </div>

            {/* Floating pop-up cards */}
            <div className="absolute -left-0 sm:-left-18 top-36 bg-card rounded-2xl shadow-xl border border-border p-3 animate-pop-in opacity-0 z-10" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-bold">12 New Leads</div>
                  <div className="text-[10px] text-muted-foreground">Today</div>
                </div>
              </div>
            </div>

            <div className="absolute -right-0 sm:-right-30 top-48 bg-card rounded-2xl shadow-xl border border-border p-3 animate-pop-in opacity-0 z-10" style={{ animationDelay: "0.9s" }}>
              <div className="text-xs font-bold text-primary">R2.7M</div>
              <div className="text-[10px] text-muted-foreground">Monthly Revenue</div>
            </div>

            <div className="absolute -left-0 sm:-left-18 bottom-44 bg-primary text-primary-foreground rounded-2xl shadow-xl p-3 animate-pop-in opacity-0 z-10" style={{ animationDelay: "1.2s" }}>
              <div className="text-xs font-bold">98% Follow-up</div>
              <div className="text-[10px] opacity-80">Completion Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
