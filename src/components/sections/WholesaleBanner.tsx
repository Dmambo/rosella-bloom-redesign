import { Link } from "react-router-dom";
import { Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WholesaleBanner = () => {
  return (
    <section className="section-padding">
      <div className="container-rosella">
        <div className="relative gradient-hero rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-primary-foreground blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-8 h-8 text-primary-foreground" />
            </div>

            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Partner With Rosella
            </h2>
            <p className="font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Are you a restaurant, hotel, supermarket, or event planner? 
              Join our wholesale program and bring Rosella's premium beverages to your customers.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="heroSolid" size="lg" asChild>
                <Link to="/wholesale">
                  Become a Partner
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12 pt-12 border-t border-primary-foreground/20">
              <div>
                <span className="block font-heading text-3xl font-bold text-primary-foreground">50+</span>
                <span className="font-body text-sm text-primary-foreground/70">Retail Partners</span>
              </div>
              <div>
                <span className="block font-heading text-3xl font-bold text-primary-foreground">20%</span>
                <span className="font-body text-sm text-primary-foreground/70">Wholesale Discount</span>
              </div>
              <div>
                <span className="block font-heading text-3xl font-bold text-primary-foreground">24hrs</span>
                <span className="font-body text-sm text-primary-foreground/70">Fast Response</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
