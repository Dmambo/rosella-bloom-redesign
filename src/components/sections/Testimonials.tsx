import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Adaeze Okonkwo",
    role: "Lagos, Nigeria",
    content: "Rosella's hibiscus drink is absolutely divine! It tastes just like the zobo my grandmother used to make, but elevated to a whole new level. I order a case every week now.",
    rating: 5,
    avatar: "AO",
  },
  {
    id: 2,
    name: "Emeka Nwosu",
    role: "Abuja, Nigeria",
    content: "The tigernut milk is incredibly refreshing and perfect for my morning smoothies. It's great to find a Nigerian brand with such premium quality.",
    rating: 5,
    avatar: "EN",
  },
  {
    id: 3,
    name: "Folake Adeleke",
    role: "Port Harcourt, Nigeria",
    content: "I serve Rosella at all my events now. Guests always ask where I got these beautiful bottles. The ginger blend is my personal favorite!",
    rating: 5,
    avatar: "FA",
  },
  {
    id: 4,
    name: "Tunde Bakare",
    role: "Ibadan, Nigeria",
    content: "Finally, a natural drink that doesn't compromise on taste. Rosella has become a staple in our household. Even my kids love it!",
    rating: 5,
    avatar: "TB",
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextSlide = () => {
    goToSlide((activeIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    goToSlide((activeIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-rosella-brown/5">
      <div className="container-rosella">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-sm font-medium text-primary uppercase tracking-wider mb-2 block">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Quote className="w-8 h-8 text-primary" />
          </div>

          {/* Testimonial Card */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card text-center pt-12">
            <div
              className={cn(
                "transition-all duration-500",
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              )}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-rosella-brown text-rosella-brown" />
                ))}
              </div>

              {/* Content */}
              <p className="font-body text-lg md:text-xl text-foreground mb-8 leading-relaxed italic">
                "{testimonials[activeIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-semibold">
                  {testimonials[activeIndex].avatar}
                </div>
                <div className="text-left">
                  <p className="font-heading font-semibold text-foreground">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    activeIndex === index
                      ? "bg-primary w-8"
                      : "bg-muted hover:bg-primary/50"
                  )}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
