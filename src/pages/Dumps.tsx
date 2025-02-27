
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const shoeProducts = [
  {
    id: "bs1",
    name: "Classic Sneakers",
    price: 79.99,
    description: "Our most popular everyday sneakers with timeless design",
    image: "/placeholder.svg"
  },
  {
    id: "bs2",
    name: "Comfort Plus Loafers",
    price: 119.99,
    description: "Best-selling slip-on loafers with memory foam insoles",
    image: "/placeholder.svg"
  },
  {
    id: "bs3",
    name: "Sports Elite",
    price: 99.99,
    description: "Top-rated athletic shoes for all sports activities",
    image: "/placeholder.svg"
  },
];

const clothingProducts = [
  {
    id: "bs1",
    name: "Essential T-Shirt Pack",
    price: 49.99,
    description: "Set of 3 premium cotton t-shirts in essential colors",
    image: "/placeholder.svg"
  },
  {
    id: "bs2",
    name: "Classic Denim Jeans",
    price: 69.99,
    description: "Our bestselling comfortable and durable jeans",
    image: "/placeholder.svg"
  },
  {
    id: "bs3",
    name: "Everyday Hoodie",
    price: 59.99,
    description: "Versatile hoodie that goes with everything in your wardrobe",
    image: "/placeholder.svg"
  },
];

const BestSellers = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userType, setUserType] = useState<"shoes" | "clothes">();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedType = localStorage.getItem("userType") as "shoes" | "clothes";
    if (!storedType) {
      navigate("/");
      return;
    }
    setUserType(storedType);
    setProducts(storedType === "shoes" ? shoeProducts : clothingProducts);
  }, [navigate]);

  const handleAddToCart = (product: Product) => {
    // Get existing cart items or initialize empty array
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    
    // Add new item to cart
    const updatedCart = [...existingCart, product];
    
    // Save updated cart
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/10 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-primary">Dumps</h1>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
        
        <ScrollArea className="h-[600px] rounded-md border p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-lg">${product.price}</p>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default BestSellers;
