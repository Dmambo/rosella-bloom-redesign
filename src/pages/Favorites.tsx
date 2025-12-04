import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/contexts/FavoritesContext";
import { Heart, ArrowLeft, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24 pb-16">
          <section className="container-rosella py-16">
            <div className="max-w-2xl mx-auto text-center">
              <Heart className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                No Favorites Yet
              </h1>
              <p className="font-body text-muted-foreground mb-8">
                Start adding products to your favorites to see them here.
              </p>
              <Button asChild size="lg">
                <Link to="/shop">
                  <ShoppingBag className="w-4 h-4" />
                  Browse Products
                </Link>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="container-rosella py-12">
          <div className="mb-8">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body"
            >
              <ArrowLeft className="w-4 h-4" />
              Continue Shopping
            </Link>
          </div>

          <div className="mb-12">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
              My Favorites
            </h1>
            <p className="font-body text-muted-foreground">
              {favorites.length} {favorites.length === 1 ? "item" : "items"} saved
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((product, index) => (
              <div
                key={product.id}
                className="scroll-animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Favorites;

