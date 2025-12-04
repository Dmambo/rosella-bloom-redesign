import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Rosella Premium Hibiscus Drink"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rosella-dark/80 via-rosella-dark/60 to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 rounded-full bg-rosella-red-light/20 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-rosella-brown/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="container-rosella relative z-10 pt-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-primary-foreground/90 font-body text-sm">
              Made Fresh in Nigeria
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Taste Luxury,{" "}
            <span className="text-rosella-red-light">Naturally.</span>
          </h1>

          {/* Subheading */}
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Premium hibiscus & tigernut beverages crafted with 100% natural ingredients. 
            Experience the authentic taste of Nigeria.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="heroSolid" size="lg" asChild>
              <Link to="/shop">
                Order Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <Link to="/shop">
                <Play className="w-5 h-5" />
                See Products
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <span className="block font-heading text-3xl font-bold text-primary-foreground">100%</span>
              <span className="font-body text-sm text-primary-foreground/60">Natural</span>
            </div>
            <div>
              <span className="block font-heading text-3xl font-bold text-primary-foreground">5K+</span>
              <span className="font-body text-sm text-primary-foreground/60">Happy Customers</span>
            </div>
            <div>
              <span className="block font-heading text-3xl font-bold text-primary-foreground">4.9</span>
              <span className="font-body text-sm text-primary-foreground/60">Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
