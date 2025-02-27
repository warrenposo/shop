
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

const shoeAccessories = [
  {
    id: "a1",
    name: "Premium Shoe Polish Kit",
    price: 24.99,
    description: "Complete kit for maintaining and polishing leather shoes",
    image: "/placeholder.svg"
  },
  {
    id: "a2",
    name: "Athletic Shoe Inserts",
    price: 19.99,
    description: "Cushioned inserts for enhanced comfort and performance",
    image: "/placeholder.svg"
  },
  {
    id: "a3",
    name: "Waterproofing Spray",
    price: 14.99,
    description: "Protects shoes from water and stains",
    image: "/placeholder.svg"
  },
  {
    id: "a4",
    name: "Premium Shoe Laces",
    price: 9.99,
    description: "Set of durable replacement laces in various colors",
    image: "/placeholder.svg"
  },
];

const clothingAccessories = [
  {
    id: "a1",
    name: "Leather Belt",
    price: 39.99,
    description: "Premium leather belt with classic buckle",
    image: "/placeholder.svg"
  },
  {
    id: "a2",
    name: "Silk Necktie",
    price: 29.99,
    description: "Elegant silk tie for formal occasions",
    image: "/placeholder.svg"
  },
  {
    id: "a3",
    name: "Scarf Set",
    price: 34.99,
    description: "Soft scarf and glove set for cold weather",
    image: "/placeholder.svg"
  },
  {
    id: "a4",
    name: "Watch Collection",
    price: 129.99,
    description: "Set of classic watches for every occasion",
    image: "/placeholder.svg"
  },
  {
    id: "a1",
    name: "Leather Belt",
    price: 39.99,
    description: "Premium leather belt with classic buckle",
    image: "/placeholder.svg"
  },
  {
    id: "a2",
    name: "Silk Necktie",
    price: 29.99,
    description: "Elegant silk tie for formal occasions",
    image: "/placeholder.svg"
  },
  {
    id: "a3",
    name: "Scarf Set",
    price: 34.99,
    description: "Soft scarf and glove set for cold weather",
    image: "/placeholder.svg"
  },
];

const Mycards = () => {
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
    setProducts(storedType === "shoes" ? shoeAccessories : clothingAccessories);
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
          <h1 className="text-4xl font-bold text-primary">Mycards</h1>
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

export default Mycards;
