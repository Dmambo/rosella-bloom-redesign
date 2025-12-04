import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ProductCard";
import { cn } from "@/lib/utils";
import productHibiscus from "@/assets/product-hibiscus.jpg";
import productTigernut from "@/assets/product-tigernut.jpg";
import productGingerBlend from "@/assets/product-ginger-blend.jpg";

const categories = ["All", "Hibiscus", "Tigernut", "Blends"];

const allProducts = [
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
    category: "Blends",
  },
  {
    id: "4",
    name: "Premium Zobo",
    price: 1600,
    image: productHibiscus,
    category: "Hibiscus",
  },
  {
    id: "5",
    name: "Vanilla Tigernut",
    price: 2000,
    image: productTigernut,
    category: "Tigernut",
  },
  {
    id: "6",
    name: "Spiced Hibiscus",
    price: 1800,
    image: productGingerBlend,
    category: "Blends",
  },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(allProducts.filter((p) => p.category === selectedCategory));
    }
  }, [selectedCategory]);

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
  }, [filteredProducts]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Banner */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-rosella-brown/10 py-16 md:py-24">
          <div className="container-rosella text-center">
            <span className="font-body text-sm font-medium text-primary uppercase tracking-wider mb-2 block">
              Shop
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Products
            </h1>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Discover our range of premium natural beverages, crafted with love and the finest ingredients.
            </p>
          </div>
        </section>

        {/* Filters & Products */}
        <section className="container-rosella py-12">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full font-body text-sm font-medium transition-all duration-300",
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="scroll-animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="font-body text-muted-foreground">
                No products found in this category.
              </p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
