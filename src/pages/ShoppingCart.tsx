
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import { Trash2 } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const ShoppingCart = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Retrieve cart items from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);

    // Calculate total price
    const total = storedCart.reduce((sum: number, item: Product) => sum + item.price, 0);
    setTotalPrice(total);
  }, []);

  const handleRemoveItem = (productId: string) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    
    // Recalculate total price
    const total = updatedCart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);

    toast({
      title: "Item Removed",
      description: "The item has been removed from your cart.",
    });
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/10 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-primary">Shopping Cart</h1>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
        
        {cartItems.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-xl text-gray-500">Your cart is empty</p>
            <button
              onClick={() => navigate("/new-arrivals")}
              className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Shop Now
            </button>
          </Card>
        ) : (
          <>
            <ScrollArea className="h-[400px] rounded-md border p-4">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{item.name}</h3>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                          <p className="font-bold">${item.price.toFixed(2)}</p>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>

            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Order Summary</h2>
                <p className="text-2xl font-bold">${totalPrice.toFixed(2)}</p>
              </div>
              <p className="text-center mb-4 text-gray-600">Thank you for shopping with us!</p>
              <button
                onClick={handleCheckout}
                className="w-full py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-lg font-medium"
              >
                Proceed to Checkout
              </button>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
