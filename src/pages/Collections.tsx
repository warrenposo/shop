
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";

interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
}

const shoeCollections = [
  {
    id: "c1",
    name: "Summer Collection",
    description: "Light and breathable footwear for the summer season",
    image: "/placeholder.svg"
  },
  {
    id: "c2",
    name: "Athletic Performance",
    description: "Specialized shoes for various athletic activities",
    image: "/placeholder.svg"
  },
  {
    id: "c3",
    name: "Business Professional",
    description: "Elegant and comfortable footwear for the workplace",
    image: "/placeholder.svg"
  },
  {
    id: "c4",
    name: "Outdoor Adventure",
    description: "Rugged shoes designed for outdoor activities",
    image: "/placeholder.svg"
  },
];

const clothingCollections = [
  {
    id: "c1",
    name: "Summer Essentials",
    description: "Light and breathable clothing for hot summer days",
    image: "/placeholder.svg"
  },
  {
    id: "c2",
    name: "Workout Gear",
    description: "Performance clothing for all types of exercise",
    image: "/placeholder.svg"
  },
  {
    id: "c3",
    name: "Business Attire",
    description: "Professional clothing for the modern workplace",
    image: "/placeholder.svg"
  },
  {
    id: "c4",
    name: "Outdoor Collection",
    description: "Durable clothing designed for outdoor adventures",
    image: "/placeholder.svg"
  },
];

const Collections = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userType, setUserType] = useState<"shoes" | "clothes">();
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    const storedType = localStorage.getItem("userType") as "shoes" | "clothes";
    if (!storedType) {
      navigate("/");
      return;
    }
    setUserType(storedType);
    setCollections(storedType === "shoes" ? shoeCollections : clothingCollections);
  }, [navigate]);

  const handleViewCollection = (collectionId: string) => {
    toast({
      title: "Collection Selected",
      description: "This feature is coming soon.",
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
            {collections.map((collection) => (
              <Card key={collection.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{collection.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="text-gray-600 mb-4">{collection.description}</p>
                  <div className="flex justify-center">
                    <button
                      onClick={() => handleViewCollection(collection.id)}
                      className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                    >
                      View Collection
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

export default Collections;
