import { Leaf, ShieldCheck, Package, Truck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Pure ingredients sourced from local Nigerian farms. No artificial additives or preservatives.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "NAFDAC approved and produced in our certified facility with strict quality standards.",
  },
  {
    icon: Package,
    title: "Premium Packaging",
    description: "Elegant glass bottles that preserve freshness and reflect our commitment to excellence.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description: "Fast and reliable delivery across Nigeria. Your refreshment arrives fresh at your door.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-rosella">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-sm font-medium text-primary uppercase tracking-wider mb-2 block">
            Why Rosella
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Rosella Difference
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            We're committed to bringing you the finest natural beverages that celebrate Nigeria's rich botanical heritage.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 text-center hover-lift scroll-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
