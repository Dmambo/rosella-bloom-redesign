import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Heart, Users, Award, Target } from "lucide-react";
import ingredientsImage from "@/assets/ingredients.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We pour our hearts into every bottle, ensuring each sip delivers authentic Nigerian flavors.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We support local farmers and contribute to the growth of Nigeria's agricultural sector.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "NAFDAC approved with rigorous quality control at every step of production.",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Blending traditional recipes with modern techniques for the perfect taste.",
  },
];

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroBg} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-rosella-dark/80" />
          </div>
          <div className="container-rosella relative z-10 text-center">
            <span className="font-body text-sm font-medium text-rosella-red-light uppercase tracking-wider mb-2 block">
              Our Story
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              About Rosella
            </h1>
            <p className="font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              A journey from grandmother's kitchen to Nigeria's favorite premium beverage brand.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-background">
          <div className="container-rosella">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="scroll-animate">
                <img
                  src={ingredientsImage}
                  alt="Natural Ingredients"
                  className="rounded-3xl shadow-hover w-full"
                />
              </div>
              <div className="scroll-animate" style={{ animationDelay: "0.2s" }}>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  From Tradition to{" "}
                  <span className="text-primary">Innovation</span>
                </h2>
                <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p>
                    Rosella began in 2019 when our founder, inspired by her grandmother's 
                    legendary zobo recipe, decided to share this taste of home with the world. 
                    What started as small batches prepared with love has grown into Nigeria's 
                    most loved premium beverage brand.
                  </p>
                  <p>
                    Every bottle of Rosella carries the same care and attention that went into 
                    those first batches. We source our hibiscus flowers and tigernuts directly 
                    from local farmers, ensuring the freshest ingredients while supporting 
                    Nigerian agriculture.
                  </p>
                  <p>
                    Our mission is simple: to celebrate Nigeria's rich botanical heritage by 
                    creating beverages that are not only delicious but also healthy, natural, 
                    and proudly Nigerian.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-secondary">
          <div className="container-rosella">
            <div className="text-center mb-16">
              <span className="font-body text-sm font-medium text-primary uppercase tracking-wider mb-2 block">
                What We Stand For
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Our Values
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 text-center hover-lift scroll-animate"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="section-padding bg-background">
          <div className="container-rosella">
            <div className="max-w-4xl mx-auto text-center scroll-animate">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
                Our Mission
              </h2>
              <blockquote className="font-heading text-2xl md:text-3xl text-primary italic leading-relaxed">
                "To bring the authentic taste of Nigeria to every home, one bottle at a time, 
                while preserving traditional recipes and supporting local communities."
              </blockquote>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
