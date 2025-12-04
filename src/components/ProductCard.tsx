import { useState } from "react";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  sizes?: string[];
}

export const ProductCard = ({ id, name, price, image, category, sizes = ["250ml", "500ml", "1L"] }: ProductCardProps) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { toast } = useToast();

  const priceMultiplier = selectedSize === "500ml" ? 1.8 : selectedSize === "1L" ? 3.2 : 1;
  const displayPrice = Math.round(price * priceMultiplier);
  const favorite = isFavorite(id);

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price: displayPrice,
      image,
      category,
      size: selectedSize,
    });
    toast({
      title: "Added to Cart",
      description: `${name} (${selectedSize}) has been added to your cart.`,
    });
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite({ id, name, price: displayPrice, image, category });
    toast({
      title: favorite ? "Removed from Favorites" : "Added to Favorites",
      description: favorite
        ? `${name} has been removed from your favorites.`
        : `${name} has been added to your favorites.`,
    });
  };

  return (
    <div
      className="card-product group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-gradient-to-b from-secondary to-muted overflow-hidden">
        <img
          src={image}
          alt={name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        {/* Overlay on Hover */}
        <div
          className={cn(
            "absolute inset-0 bg-primary/10 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />
        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-body font-medium">
          {category}
        </span>
        {/* Favorite Button */}
        <button
          onClick={handleToggleFavorite}
          className={cn(
            "absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm",
            favorite
              ? "bg-primary text-primary-foreground"
              : "bg-card/90 text-foreground hover:bg-primary/20"
          )}
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart className={cn("w-5 h-5", favorite && "fill-current")} />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">
          {name}
        </h3>

        {/* Size Selector */}
        <div className="flex gap-2 mb-4">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-body font-medium transition-all duration-300",
                selectedSize === size
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary/10"
              )}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <span className="font-heading text-xl font-bold text-primary">
            ₦{displayPrice.toLocaleString()}
          </span>
          <Button
            variant="success"
            size="sm"
            onClick={handleAddToCart}
            className={cn(
              "transition-all duration-300",
              isHovered ? "animate-shake" : ""
            )}
          >
            <ShoppingCart className="w-4 h-4" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};
