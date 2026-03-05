import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: February 2026</p>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the Car Leads System platform and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Description of Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Car Leads System provides a dealership management and CRM platform that enables motor dealerships to manage vehicle inventory, customer leads, sales processes, and communications including WhatsApp messaging.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use the services in compliance with all applicable laws</li>
                <li>Not misuse or attempt to gain unauthorized access to our systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. WhatsApp Messaging Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our platform uses WhatsApp Business API to facilitate communication. By using our services:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>You consent to receiving transactional messages related to your enquiries and appointments</li>
                <li>Messages are sent for legitimate business purposes only</li>
                <li>You may opt out of non-essential communications at any time</li>
                <li>We comply with WhatsApp's Business Policy and Commerce Policy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, trademarks, and intellectual property on the Car Leads System platform are owned by us or our licensors. You may not copy, modify, or distribute our content without prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Car Leads System shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                We process personal information in accordance with the Protection of Personal Information Act (POPIA). Please refer to our{" "}
                <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>{" "}
                for detailed information about how we handle your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Modifications to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service are governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes shall be subject to the exclusive jurisdiction of the South African courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For any questions regarding these Terms of Service, please contact us at:{" "}
                <a href="mailto:info@carleads.co.za" className="text-primary hover:underline">info@carleads.co.za</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
