import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import DemoFormSection from "@/components/DemoFormSection";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  const { ref: hero, isVisible: heroVisible } = useScrollReveal();
  const { ref: tiers, isVisible: tiersVisible } = useScrollReveal();
  const { ref: terms, isVisible: termsVisible } = useScrollReveal();
  const { ref: faqsRef, isVisible: faqsVisible } = useScrollReveal();

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  const pricingTiers = [
    {
      name: "Bronze",
      icon: "/pricing-bronze-icon2.webp",
      price: "R4,500",
      period: "per month",
      audience: "Perfect for single-branch dealerships focusing on core lead management.",
      features: [
        { label: "Branch Limit", value: "1 Branch" },
        { label: "User Limit", value: "Up to 10 Salespeople" },
        { text: "Core lead capture and management pipeline" },
        { text: "Manage leads up to the test-drive and high-interest stage" }
      ],
      support: [
        { text: "Basic onboarding and training" },
        { label: "Standby & Technical support", value: "2 hours / month" },
        { text: "Additional support hours billed separately", italic: true }
      ],
      color: "from-amber-500/20 to-amber-600/10"
    },
    {
      name: "Silver",
      icon: "/pricing-silver-icon2.webp",
      price: "R8,500",
      period: "per month",
      audience: "Ideal for growing multi-branch dealers needing financial integrations and digital contracts.",
      popular: true,
      features: [
        { label: "Branch Limit", value: "Up to 5 Branches" },
        { label: "User Limit", value: "Up to 30 Salespeople" },
        { text: "Everything in Bronze, plus:", italic: true },
        { text: "Automated digital Offer to Purchase (OTP) signing" },
        { text: "Supplier, bill, and invoice management linked to specific vehicles" },
        { text: "Accounting integrations with Xero and Sage Pastel" }
      ],
      support: [
        { text: "Limited training for your team" },
        { label: "Standby & Technical support", value: "6 hours / month" },
        { text: "Additional support hours billed separately", italic: true }
      ],
      color: "from-slate-400/20 to-slate-500/10"
    },
    {
      name: "Gold",
      icon: "/pricing-gold-icon2.webp",
      price: "R12,500",
      period: "per month",
      audience: "The ultimate enterprise solution for large franchise networks requiring maximum security and automation.",
      features: [
        { label: "Branch Limit", value: "Unlimited Branches" },
        { label: "User Limit", value: "Up to 1,000 Users" },
        { text: "Everything in Silver, plus:", italic: true },
        { text: "Full, comprehensive Offer to Purchase (OTP) system" },
        { text: "ITC vehicle information scanning" },
        { text: "Advanced customer fraud detection" },
        { text: "Send customized, personalized messages to customers" }
      ],
      support: [
        { text: "Full-blown onboarding and training (includes new staff training post-rollout)" },
        { label: "Standby & Technical support", value: "20 hours / month" },
        { text: "Additional support hours billed separately", italic: true }
      ],
      color: "from-yellow-500/20 to-yellow-600/10"
    }
  ];

  const faqs = [
    {
      question: "What happens if we exceed our monthly support hours?",
      answer: "Any technical support or standby assistance required beyond your tier's allocated monthly hours (2 hours for Bronze, 6 for Silver, 20 for Gold) will simply be billed at our standard hourly rate."
    },
    {
      question: "Do we pay per user or a flat monthly fee?",
      answer: "Our pricing is a flat monthly fee based on the tier you select. As long as you stay within the maximum branch and user limits of your chosen tier, your monthly rate remains the same."
    },
    {
      question: "How does onboarding work?",
      answer: "Your onboarding experience depends on your tier. Bronze includes basic setup, while Gold includes comprehensive, full-blown training for your entire organization, including training sessions for any new staff members that join after the initial rollout."
    }
  ];

  return (
    <PageLayout
      title="Dealership CRM Pricing & Software Plans | Car Leads"
      description="Transparent, scalable pricing for South African motor dealerships. Choose from Bronze, Silver, or Gold CRM tiers to capture leads, track stock, and close deals."
    >
      {/* Hero Section */}
      <section id="pricing-hero" className="pt-32 pb-20 lg:pt-30 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            ref={hero}
            className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
              Simple, Scalable Pricing for Dealerships of All Sizes
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you run a single independent showroom or a nationwide franchise group, Car Leads has a plan tailored to your sales volume and operational needs. Choose the tier that fits your business.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="pricing-tiers" className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            ref={tiers}
            className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
              tiersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {pricingTiers.map((tier, idx) => (
              <div 
                key={idx}
                className={`relative bg-card border-2 ${tier.popular ? 'border-primary' : 'border-border'} rounded-lg p-4 flex flex-col`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-lg text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="relative w-80 h-54 mb-4 mx-auto mb-0">
                  <img
                    src={tier.icon}
                    alt={`${tier.name} tier icon`}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <h2 className="text-2xl font-bold mb-2">{tier.name}</h2>
                <div className="mb-4">
                  <span className="text-4xl font-extrabold">{tier.price}</span>
                  <span className="text-muted-foreground ml-2">/ {tier.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">{tier.audience}</p>
                
                <div className="mb-6 flex-grow">
                  <h3 className="font-semibold mb-3">Features & Limits</h3>
                  <ul className="space-y-2">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className={feature.italic ? "italic text-muted-foreground" : ""}>
                          {feature.label && <strong>{feature.label}:</strong>} {feature.value || feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="font-semibold mt-6 mb-3">Training & Support</h3>
                  <ul className="space-y-2">
                    {tier.support.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className={item.italic ? "italic text-muted-foreground" : ""}>
                          {item.label && <strong>{item.label}:</strong>} {item.value || item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  onClick={scrollToContact} 
                  variant={tier.popular ? "default" : "outline"}
                  className="w-full rounded-lg"
                >
                  Choose {tier.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Terms */}
      <ContentSection className="bg-muted/30">
        <div 
          ref={terms}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            termsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            Contract Terms & Conditions
          </h2>
          
          <p className="text-lg text-muted-foreground mb-6 text-center">
            We believe in transparent partnerships. Please note the following regarding our software licenses:
          </p>
          
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Minimum Commitment</h3>
                  <p className="text-muted-foreground">All pricing tiers are subject to a minimum contract period of three (3) months.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Rolling Renewals</h3>
                  <p className="text-muted-foreground">After the initial period, contracts automatically enter a rolling 3-month renewal cycle.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Cancellation Policy</h3>
                  <p className="text-muted-foreground">Contracts can be cancelled with a written 30-day notice period, submitted before the end of the current 3-month cycle.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* FAQs */}
      <ContentSection>
        <div 
          ref={faqsRef}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            faqsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Fill out the form below to schedule your demo, and our team will help you select the perfect tier for your dealership.
          </p>
          <Button size="lg" onClick={scrollToContact} className="rounded-lg px-8">
            Book a 30-min demo
          </Button>
        </div>
      </section>

      <DemoFormSection />
    </PageLayout>
  );
};

export default Pricing;
