import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, Building2, Truck, Percent, Users, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  {
    icon: Percent,
    title: "Competitive Pricing",
    description: "Enjoy wholesale discounts of up to 20% on bulk orders.",
  },
  {
    icon: Truck,
    title: "Priority Delivery",
    description: "Fast and reliable nationwide delivery for wholesale partners.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Personal account manager to assist with all your needs.",
  },
  {
    icon: Building2,
    title: "Marketing Support",
    description: "POS materials and co-branding opportunities available.",
  },
];

const partnerTypes = [
  "Restaurant / Cafe",
  "Hotel / Resort",
  "Supermarket / Retail Store",
  "Event Planning Company",
  "Corporate Office",
  "Other",
];

const Wholesale = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    businessType: "",
    location: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Received!",
      description: "Our wholesale team will contact you within 24 hours.",
    });
    setFormData({
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      businessType: "",
      location: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden gradient-hero">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary-foreground blur-3xl" />
          </div>
          <div className="container-rosella relative z-10 text-center">
            <span className="font-body text-sm font-medium text-primary-foreground/80 uppercase tracking-wider mb-2 block">
              Wholesale Program
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Partner With Rosella
            </h1>
            <p className="font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Join our network of retailers and bring Nigeria's favorite premium beverages to your customers.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-background">
          <div className="container-rosella">
            <div className="text-center mb-12">
              <span className="font-body text-sm font-medium text-primary uppercase tracking-wider mb-2 block">
                Why Partner With Us
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Wholesale Benefits
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 text-center shadow-card hover-lift"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="section-padding bg-secondary">
          <div className="container-rosella">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pricing Tiers
              </h2>
              <p className="font-body text-muted-foreground">
                The more you order, the more you save.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { tier: "Starter", quantity: "50-99 cases", discount: "10%" },
                { tier: "Growth", quantity: "100-249 cases", discount: "15%", featured: true },
                { tier: "Enterprise", quantity: "250+ cases", discount: "20%" },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 text-center ${
                    plan.featured
                      ? "bg-primary text-primary-foreground shadow-hover scale-105"
                      : "bg-card shadow-card"
                  }`}
                >
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    {plan.tier}
                  </h3>
                  <p className={`font-body text-sm mb-4 ${plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {plan.quantity}
                  </p>
                  <div className="mb-6">
                    <span className="font-heading text-4xl font-bold">{plan.discount}</span>
                    <span className={`font-body text-sm ${plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}> off</span>
                  </div>
                  <ul className="space-y-3 text-left mb-6">
                    {["Free delivery", "Net 30 payment", "Priority support"].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className={`w-4 h-4 ${plan.featured ? "text-success" : "text-success"}`} />
                        <span className="font-body text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="section-padding bg-background">
          <div className="container-rosella">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Apply to Become a Partner
                </h2>
                <p className="font-body text-muted-foreground">
                  Fill out the form below and our team will get in touch within 24 hours.
                </p>
              </div>

              <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-body text-sm font-medium text-foreground mb-2">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body"
                        placeholder="Your business name"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-medium text-foreground mb-2">
                        Contact Person *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-body text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body"
                        placeholder="business@email.com"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body"
                        placeholder="+234..."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-body text-sm font-medium text-foreground mb-2">
                        Business Type *
                      </label>
                      <select
                        required
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body"
                      >
                        <option value="">Select type...</option>
                        {partnerTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-body text-sm font-medium text-foreground mb-2">
                        Location (City) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body"
                        placeholder="Lagos, Abuja, etc."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-2">
                      Additional Information
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body resize-none"
                      placeholder="Tell us about your business and expected order volumes..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-5 h-5" />
                    Submit Application
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Wholesale;
