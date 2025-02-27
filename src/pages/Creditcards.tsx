
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
    id: "f1",
    name: "Premium Leather Oxford",
    price: 199.99,
    description: "Handcrafted premium leather oxford shoes for formal occasions",
    image: "/placeholder.svg"
  },
  {
    id: "f2",
    name: "Trail Runner Pro",
    price: 149.99,
    description: "All-terrain trail running shoes with advanced grip technology",
    image: "/placeholder.svg"
  },
  {
    id: "f3",
    name: "Urban Commuter",
    price: 129.99,
    description: "Lightweight, comfortable shoes perfect for city commuting",
    image: "/placeholder.svg"
  },
];

const clothingProducts = [
  {
    id: "f1",
    name: "Designer Blazer",
    price: 249.99,
    description: "Premium tailored blazer for professional and formal settings",
    image: "/placeholder.svg"
  },
  {
    id: "f2",
    name: "Merino Wool Sweater",
    price: 119.99,
    description: "Luxury merino wool sweater that's both warm and breathable",
    image: "/placeholder.svg"
  },
  {
    id: "f3",
    name: "Tailored Dress Shirt",
    price: 89.99,
    description: "Premium cotton dress shirt with perfect fit",
    image: "/placeholder.svg"
  },
];

const Creditcards = () => {
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
          <h1 className="text-4xl font-bold text-primary">Creditcards</h1>
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

export default Creditcards;
