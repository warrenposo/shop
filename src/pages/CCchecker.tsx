
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  image: string;
}

const shoeProducts = [
  {
    id: "so1",
    name: "Limited Edition Sneakers",
    price: 89.99,
    originalPrice: 129.99,
    description: "Special edition designer sneakers at a 30% discount",
    image: "/placeholder.svg"
  },
  {
    id: "so2",
    name: "Hiking Boots Bundle",
    price: 149.99,
    originalPrice: 199.99,
    description: "Premium hiking boots with free socks and care kit",
    image: "/placeholder.svg"
  },
  {
    id: "so3",
    name: "Summer Sandals",
    price: 49.99,
    originalPrice: 79.99,
    description: "End of season sale on popular summer sandals",
    image: "/placeholder.svg"
  },
];

const clothingProducts = [
  {
    id: "so1",
    name: "Winter Jacket",
    price: 159.99,
    originalPrice: 229.99,
    description: "Premium insulated winter jacket at a special discount",
    image: "/placeholder.svg"
  },
  {
    id: "so2",
    name: "Activewear Set",
    price: 79.99,
    originalPrice: 119.99,
    description: "Complete activewear set including top and bottoms",
    image: "/placeholder.svg"
  },
  {
    id: "so3",
    name: "Business Casual Bundle",
    price: 199.99,
    originalPrice: 279.99,
    description: "Complete outfit with shirt, pants, and accessories",
    image: "/placeholder.svg"
  },
];

const SpecialOffers = () => {
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
    // Remove originalPrice before adding to cart
    const { originalPrice, ...cartProduct } = product;
    
    // Get existing cart items or initialize empty array
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    
    // Add new item to cart
    const updatedCart = [...existingCart, cartProduct];
    
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
          <h1 className="text-4xl font-bold text-primary">CCchecker</h1>
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
                    <div>
                      <p className="font-bold text-lg">${product.price}</p>
                      <p className="text-sm text-gray-500 line-through">${product.originalPrice}</p>
                    </div>
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

export default SpecialOffers;
