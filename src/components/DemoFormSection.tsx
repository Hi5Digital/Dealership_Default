import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { CheckCircle2, Sparkles, Loader2 } from "lucide-react";

const DemoFormSection = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", phone: "", dealership: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Demo request sent!",
          description: "We'll be in touch within 24 hours to schedule your demo.",
        });
        setForm({ name: "", email: "", phone: "", dealership: "" });
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to send request. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send request. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Left */}
          <div className="max-w-lg">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Ready to transform your <em className="not-italic text-primary">sales performance</em>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Join leading motor dealerships across South Africa who trust CarLeads to drive their business forward.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-sm">Expert onboarding</div>
                  <div className="text-sm text-muted-foreground">Our team will get you set up and running in no time</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-sm">No obligation</div>
                  <div className="text-sm text-muted-foreground">See the platform in action before you commit</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-card rounded-2xl border border-border shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Full Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-xl h-12"
              />
              <Input
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="rounded-xl h-12"
              />
              <div className="flex gap-2">
                <div className="bg-muted rounded-xl h-12 px-3 flex items-center text-sm text-muted-foreground font-medium shrink-0">+27</div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="rounded-xl h-12"
                />
              </div>
              <Input
                placeholder="Dealership Name"
                required
                value={form.dealership}
                onChange={(e) => setForm({ ...form, dealership: e.target.value })}
                className="rounded-xl h-12"
              />
              <Button type="submit" size="lg" className="w-full rounded-xl h-12 text-base font-bold tracking-wide" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    SENDING...
                  </>
                ) : (
                  "SEND"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoFormSection;
