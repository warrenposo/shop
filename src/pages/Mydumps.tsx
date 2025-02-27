
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
  discount: string;
  description: string;
  image: string;
}

const shoeProducts = [
  {
    id: "s1",
    name: "Urban Walker",
    price: 69.99,
    originalPrice: 129.99,
    discount: "46% OFF",
    description: "Comfortable city walking shoes at a special discount",
    image: "/placeholder.svg"
  },
  {
    id: "s2",
    name: "Last Season Running Shoes",
    price: 59.99,
    originalPrice: 119.99,
    discount: "50% OFF",
    description: "Previous season's running shoes at half price",
    image: "/placeholder.svg"
  },
  {
    id: "s3",
    name: "Clearance Loafers",
    price: 49.99,
    originalPrice: 89.99,
    discount: "44% OFF",
    description: "Classic loafers on clearance sale",
    image: "/placeholder.svg"
  },
];

const clothingProducts = [
  {
    id: "s1",
    name: "Summer Shorts",
    price: 19.99,
    originalPrice: 39.99,
    discount: "50% OFF",
    description: "End of season sale on summer shorts",
    image: "/placeholder.svg"
  },
  {
    id: "s2",
    name: "Casual Shirts Bundle",
    price: 59.99,
    originalPrice: 119.99,
    discount: "50% OFF",
    description: "Set of 3 shirts at a special clearance price",
    image: "/placeholder.svg"
  },
  {
    id: "s3",
    name: "Designer Jeans",
    price: 49.99,
    originalPrice: 99.99,
    discount: "50% OFF",
    description: "Limited stock designer jeans at half price",
    image: "/placeholder.svg"
  },
];

const Mydumps = () => {
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
    // Remove extra properties before adding to cart
    const { originalPrice, discount, ...cartProduct } = product;
    
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
          <h1 className="text-4xl font-bold text-primary">Mydumps</h1>
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
              <Card key={product.id} className="hover:shadow-lg transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-red-600 text-white px-2 py-1 text-xs font-bold">
                  {product.discount}
                </div>
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

export default Mydumps;
