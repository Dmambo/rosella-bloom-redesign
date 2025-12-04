import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import productHibiscus from "@/assets/product-hibiscus.jpg";
import productTigernut from "@/assets/product-tigernut.jpg";
import productGingerBlend from "@/assets/product-ginger-blend.jpg";

const featuredProducts = [
  {
    id: "1",
    name: "Classic Hibiscus",
    price: 1500,
    image: productHibiscus,
    category: "Hibiscus",
  },
  {
    id: "2",
    name: "Tigernut Milk",
    price: 1800,
    image: productTigernut,
    category: "Tigernut",
  },
  {
    id: "3",
    name: "Ginger Hibiscus Blend",
    price: 1700,
    image: productGingerBlend,
    category: "Blend",
  },
];

export const FeaturedProducts = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-rosella">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="font-body text-sm font-medium text-primary uppercase tracking-wider mb-2 block">
              Our Collection
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Featured Products
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/shop">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="scroll-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
