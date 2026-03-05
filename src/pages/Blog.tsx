import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const Blog = () => {
  const { ref: hero, isVisible: heroVisible } = useScrollReveal();
  const { ref: grid, isVisible: gridVisible } = useScrollReveal();

  const blogPosts = [
    {
      title: "How South African dealerships can stop losing leads from AutoTrader and Cars.co.za",
      excerpt: "You spend thousands on classified portals every month, but manual processes are costing you sales. Learn how to fix your speed-to-lead.",
      category: "Lead Management",
      slug: "/blog/stop-losing-leads-autotrader-cars-co-za",
      featured: true,
      image: "/blog-thumb-stop-losing-leads.webp"
    },
    {
      title: "WhatsApp strategies to increase test drive bookings",
      excerpt: "Discover how automated reminders and personalized multi-channel messaging can drastically reduce your dealership's no-show rate.",
      category: "Sales Automation",
      slug: "/blog/whatsapp-strategies-increase-test-drive-bookings",
      image: "/blog-hero-dealership-whatsapp-strategies.webp"
    },
    {
      title: "What to track in your dealership sales dashboard (South Africa)",
      excerpt: "Are you tracking the right metrics? Find out which KPIs actually drive gross profit and team efficiency on your showroom floor.",
      category: "Dealership Analytics",
      slug: "/blog/what-to-track-dealership-sales-dashboard-south-africa",
      image: "/blog-hero-dealership-sales-dashboard.webp"
    }
  ];

  return (
    <PageLayout
      title="Dealership Resources, Sales Tips & CRM Insights | Car Leads"
      description="Read the latest strategies, CRM tips, and sales insights to help your South African motor dealership capture more leads and close more deals."
    >
      {/* Hero Section */}
      <section id="blog-hub-hero" className="pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            ref={hero}
            className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Dealership Resources & Insights
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Actionable sales strategies, CRM best practices, and industry insights designed to help South African auto dealerships capture leads, automate follow-ups, streamline operations, and boost sales performance.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section id="blog-grid" className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            ref={grid}
            className={`max-w-6xl mx-auto transition-all duration-700 ${
              gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, idx) => (
                <article
                  key={idx}
                  className={`bg-card border border-border rounded-lg overflow-hidden hover:border-primary hover:shadow-lg transition-all ${
                    post.featured ? 'md:col-span-2 lg:col-span-3' : ''
                  }`}
                >
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full aspect-video object-cover"
                    />
                  )}
                  
                  <div className="p-6">
                    <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                      {post.category}
                    </div>
                    <h2 className={`font-bold mb-3 ${post.featured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
                      <Link to={post.slug} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Link 
                      to={post.slug}
                      className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1"
                    >
                      Read Article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
