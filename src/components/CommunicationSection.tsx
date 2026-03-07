import { MessageSquare, Mail, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal, useParallax } from "@/hooks/useScrollAnimation";

const bullets = [
  "Automated WhatsApp follow-ups after enquiries",
  "Test drive reminders and confirmations",
  "Full interaction tracking per lead",
  "Personalised communication at scale",
];

const CommunicationSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { ref: bubblesRef, offset } = useParallax(0.04);

  return (
    <section id="benefits" className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Left — Copy */}
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase mb-6">
              Multi Channel Messaging
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Enhance customer <em className="not-italic text-primary">communication</em>
            </h2>
            <ul className="space-y-4 mb-8">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" className="rounded-full px-8 hover:scale-105 transition-transform" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
              Book a 30min demo
            </Button>
          </div>

          {/* Right — Message Bubbles */}
          <div ref={bubblesRef} className="relative flex justify-center" style={{ transform: `translateY(${offset}px)` }}>
            <div className="space-y-4 w-full max-w-sm">
              {/* WhatsApp bubble */}
              <div className="bg-card rounded-2xl shadow-lg border border-border p-4 ml-8 animate-float-in-right opacity-0" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="text-xs font-bold">WhatsApp</div>
                  <div className="text-[10px] text-muted-foreground ml-auto">Just now</div>
                </div>
                <p className="text-sm text-muted-foreground">Hi Johan, thanks for your enquiry on the 2024 VW Polo. When would you like to book a test drive?</p>
              </div>

              {/* Email bubble */}
              <div className="bg-card rounded-2xl shadow-lg border border-border p-4 mr-8 animate-float-in-left opacity-0" style={{ animationDelay: "0.6s" }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-xs font-bold">Email</div>
                  <div className="text-[10px] text-muted-foreground ml-auto">2min ago</div>
                </div>
                <p className="text-sm text-muted-foreground">Your vehicle valuation report is ready. Click here to view your personalised offer.</p>
              </div>

              {/* Phone bubble */}
              <div className="bg-card rounded-2xl shadow-lg border border-border p-4 ml-12 animate-float-in-right opacity-0" style={{ animationDelay: "0.9s" }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="text-xs font-bold">WhatAapp Reminder</div>
                  <div className="text-[10px] text-muted-foreground ml-auto">10:30</div>
                </div>
                <p className="text-sm text-muted-foreground">Reminder: Test drive scheduled for tomorrow at 14:00. See you at the showroom!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunicationSection;
