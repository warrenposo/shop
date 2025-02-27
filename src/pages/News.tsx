
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
    id: "1",
    name: "Air Max Comfort",
    price: 129.99,
    description: "Latest comfort technology with breathable mesh",
    image: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Runner Elite",
    price: 159.99,
    description: "Professional running shoes with enhanced support",
    image: "/placeholder.svg"
  },
  {
    id: "3",
    name: "Casual Classic",
    price: 89.99,
    description: "Timeless design for everyday wear",
    image: "/placeholder.svg"
  },
  // Add more products as needed
];

const clothingProducts = [
  {
    id: "1",
    name: "Premium T-Shirt",
    price: 29.99,
    description: "100% cotton premium quality t-shirt",
    image: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    price: 79.99,
    description: "Modern slim fit with stretch comfort",
    image: "/placeholder.svg"
  },
  {
    id: "3",
    name: "Classic Hoodie",
    price: 59.99,
    description: "Warm and comfortable casual hoodie",
    image: "/placeholder.svg"
  },
  // Add more products as needed
];

const News = () => {
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
          <h1 className="text-4xl font-bold text-primary">News</h1>
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

export default News;
