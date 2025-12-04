import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ingredientsImage from "@/assets/ingredients.jpg";

export const AboutPreview = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-rosella">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative scroll-animate">
            <div className="relative rounded-3xl overflow-hidden shadow-hover">
              <img
                src={ingredientsImage}
                alt="Rosella Natural Ingredients"
                className="w-full h-auto object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
                <span className="block font-heading text-4xl font-bold">Since</span>
                <span className="font-body text-lg">2019</span>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-rosella-brown/20 blur-2xl" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
          </div>

          {/* Content Side */}
          <div className="scroll-animate" style={{ animationDelay: "0.2s" }}>
            <span className="font-body text-sm font-medium text-primary uppercase tracking-wider mb-2 block">
              Our Story
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Crafted with Love,{" "}
              <span className="text-primary">Rooted in Tradition</span>
            </h2>
            <p className="font-body text-muted-foreground mb-6 leading-relaxed">
              Rosella was born from a passion for celebrating Nigeria's incredible natural ingredients. 
              Our founder grew up watching her grandmother prepare zobo and kunu from fresh hibiscus flowers 
              and tigernuts — recipes passed down through generations.
            </p>
            <p className="font-body text-muted-foreground mb-8 leading-relaxed">
              Today, we've elevated these traditional beverages into a premium experience, 
              maintaining the authentic taste while meeting the highest standards of quality and hygiene.
            </p>
            
            {/* Key Points */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span className="font-body text-foreground">Locally Sourced</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span className="font-body text-foreground">Family Recipes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span className="font-body text-foreground">Zero Preservatives</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span className="font-body text-foreground">NAFDAC Approved</span>
              </div>
            </div>

            <Button asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
