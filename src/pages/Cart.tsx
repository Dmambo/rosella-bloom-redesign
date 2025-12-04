import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const { toast } = useToast();

  const handleCheckout = () => {
    if (items.length === 0) {
      toast({
        title: "Cart is Empty",
        description: "Please add items to your cart before checkout.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Checkout Initiated",
      description: "Thank you for your order! We'll process it shortly.",
    });
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24 pb-16">
          <section className="container-rosella py-16">
            <div className="max-w-2xl mx-auto text-center">
              <ShoppingBag className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your Cart is Empty
              </h1>
              <p className="font-body text-muted-foreground mb-8">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Button asChild size="lg">
                <Link to="/shop">
                  <ArrowLeft className="w-4 h-4" />
                  Continue Shopping
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h1 className="font-heading text-3xl font-bold text-foreground">
                  Shopping Cart ({items.length} {items.length === 1 ? "item" : "items"})
                </h1>
                {items.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      clearCart();
                      toast({
                        title: "Cart Cleared",
                        description: "All items have been removed from your cart.",
                      });
                    }}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                    Clear Cart
                  </Button>
                )}
              </div>

              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="bg-card rounded-2xl p-6 shadow-card hover-lift"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Product Image */}
                      <div className="w-full md:w-32 h-32 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                            {item.name}
                          </h3>
                          <p className="font-body text-sm text-muted-foreground mb-2">
                            {item.category} • {item.size}
                          </p>
                          <p className="font-heading text-lg font-bold text-primary">
                            ₦{item.price.toLocaleString()}
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => {
                                if (item.quantity > 1) {
                                  updateQuantity(item.id, item.size, item.quantity - 1);
                                } else {
                                  removeFromCart(item.id, item.size);
                                  toast({
                                    title: "Item Removed",
                                    description: `${item.name} has been removed from your cart.`,
                                  });
                                }
                              }}
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="font-heading text-lg font-semibold w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>

                          <div className="flex items-center gap-4">
                            <p className="font-heading text-xl font-bold text-foreground">
                              ₦{(item.price * item.quantity).toLocaleString()}
                            </p>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => {
                                removeFromCart(item.id, item.size);
                                toast({
                                  title: "Item Removed",
                                  description: `${item.name} has been removed from your cart.`,
                                });
                              }}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 shadow-card sticky top-24">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between font-body text-muted-foreground">
                    <span>Subtotal</span>
                    <span className="font-heading font-semibold text-foreground">
                      ₦{getTotalPrice().toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between font-body text-muted-foreground">
                    <span>Delivery</span>
                    <span className="font-heading font-semibold text-foreground">Free</span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between">
                      <span className="font-heading text-lg font-semibold text-foreground">Total</span>
                      <span className="font-heading text-2xl font-bold text-primary">
                        ₦{getTotalPrice().toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full mb-4"
                  onClick={handleCheckout}
                >
                  <ShoppingBag className="w-5 h-5" />
                  Proceed to Checkout
                </Button>

                <p className="font-body text-xs text-muted-foreground text-center">
                  Your personal data will be used to process your order and support your experience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;

