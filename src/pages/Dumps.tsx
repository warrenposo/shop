import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";

interface CardProduct {
  balance: string;
  level: string;
  type: string;
  class: string;
  code: string;
  category: string;
  country: string;
  bank: string;
  action: string;
}

const cardProducts = [
  { balance: "$40002", level: "$+$228", type: "MASTERCARD", class: "STANDARD", code: "CREDIT", category: "201", country: "TURKEY", bank: "YAP I'VE KREDI BANXASI, A.S.", action: "Buy ($205)" },
  { balance: "$23411", level: "$+$600", type: "VISA", class: "PREMIUM", code: "DEBIT", category: "301", country: "USA", bank: "CHASE BANK", action: "Buy ($365)" },
  { balance: "$75923", level: "$+3700", type: "MASTERCARD", class: "GOLD", code: "CREDIT", category: "401", country: "UK", bank: "HSBC BANK", action: "Buy ($205)" },
  { balance: "402753", level: "$+3100", type: "VISA", class: "CLASSIC", code: "DEBIT", category: "201", country: "CANADA", bank: "RBC BANK", action: "Buy ($265)" },
  { balance: "432111", level: "$+5500", type: "AMEX", class: "PLATINUM", code: "CREDIT", category: "601", country: "FRANCE", bank: "BNP PARIBAS", action: "Buy ($905)" },
  { balance: "$21009", level: "$+4200", type: "MASTERCARD", class: "BUSINESS", code: "CREDIT", category: "301", country: "GERMANY", bank: "DEUTSCHE BANK", action: "Buy ($395)" },
  { balance: "$75923", level: "$+3700", type: "MASTERCARD", class: "GOLD", code: "CREDIT", category: "401", country: "UK", bank: "HSBC BANK", action: "Buy ($205)" },
  { balance: "402753", level: "$+3100", type: "VISA", class: "CLASSIC", code: "DEBIT", category: "201", country: "CANADA", bank: "RBC BANK", action: "Buy ($265)" },
  { balance: "432111", level: "$+5500", type: "AMEX", class: "PLATINUM", code: "CREDIT", category: "601", country: "FRANCE", bank: "BNP PARIBAS", action: "Buy ($905)" },
  { balance: "$40002", level: "$+$228", type: "MASTERCARD", class: "STANDARD", code: "CREDIT", category: "201", country: "TURKEY", bank: "YAP I'VE KREDI BANXASI, A.S.", action: "Buy ($205)" },
  { balance: "$23411", level: "$+$600", type: "VISA", class: "PREMIUM", code: "DEBIT", category: "301", country: "USA", bank: "CHASE BANK", action: "Buy ($365)" },
  { balance: "$75923", level: "$+3700", type: "MASTERCARD", class: "GOLD", code: "CREDIT", category: "401", country: "UK", bank: "HSBC BANK", action: "Buy ($205)" },
  { balance: "402753", level: "$+3100", type: "VISA", class: "CLASSIC", code: "DEBIT", category: "201", country: "CANADA", bank: "RBC BANK", action: "Buy ($265)" },
  { balance: "432111", level: "$+5500", type: "AMEX", class: "PLATINUM", code: "CREDIT", category: "601", country: "FRANCE", bank: "BNP PARIBAS", action: "Buy ($905)" },
  { balance: "$21009", level: "$+4200", type: "MASTERCARD", class: "BUSINESS", code: "CREDIT", category: "301", country: "GERMANY", bank: "DEUTSCHE BANK", action: "Buy ($395)" },
  { balance: "$75923", level: "$+3700", type: "MASTERCARD", class: "GOLD", code: "CREDIT", category: "401", country: "UK", bank: "HSBC BANK", action: "Buy ($205)" },
  { balance: "402753", level: "$+3100", type: "VISA", class: "CLASSIC", code: "DEBIT", category: "201", country: "CANADA", bank: "RBC BANK", action: "Buy ($265)" },
  { balance: "432111", level: "$+5500", type: "AMEX", class: "PLATINUM", code: "CREDIT", category: "601", country: "FRANCE", bank: "BNP PARIBAS", action: "Buy ($905)" },
  { balance: "$21009", level: "$+4200", type: "MASTERCARD", class: "BUSINESS", code: "CREDIT", category: "301", country: "GERMANY", bank: "DEUTSCHE BANK", action: "Buy ($395)" },
  { balance: "$75923", level: "$+3700", type: "MASTERCARD", class: "GOLD", code: "CREDIT", category: "401", country: "UK", bank: "HSBC BANK", action: "Buy ($205)" },
  { balance: "402753", level: "$+3100", type: "VISA", class: "CLASSIC", code: "DEBIT", category: "201", country: "CANADA", bank: "RBC BANK", action: "Buy ($265)" },
  { balance: "432111", level: "$+5500", type: "AMEX", class: "PLATINUM", code: "CREDIT", category: "601", country: "FRANCE", bank: "BNP PARIBAS", action: "Buy ($905)" },
  { balance: "$21009", level: "$+4200", type: "MASTERCARD", class: "BUSINESS", code: "CREDIT", category: "301", country: "GERMANY", bank: "DEUTSCHE BANK", action: "Buy ($395)" },
  { balance: "601256", level: "$+2600", type: "DISCOVER", class: "STANDARD", code: "DEBIT", category: "101", country: "AUSTRALIA", bank: "COMMONWEALTH BANK", action: "Buy ($2116)" },
  { balance: "412003", level: "$+5000", type: "VISA", class: "SIGNATURE", code: "CREDIT", category: "701", country: "SPAIN", bank: "SANTANDER", action: "Buy ($805)" },
  { balance: "352809", level: "$+4300", type: "JCB", class: "PREMIUM", code: "DEBIT", category: "501", country: "JAPAN", bank: "MIZUNO BANK", action: "Buy ($4105)" },
];

const BestSellers = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [products, setProducts] = useState<CardProduct[]>([]);

  useEffect(() => {
    // Set the card products as the default data
    setProducts(cardProducts);
  }, []);

  const handleBuyNow = (product: CardProduct) => {
    // Get existing cart items or initialize empty array
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Add new item to cart
    const updatedCart = [...existingCart, product];

    // Save updated cart
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Show toast notification
    toast({
      title: "Added to Cart",
      description: `${product.bank} has been added to your cart.`,
    });

    // Navigate to the checkout page
    navigate("/checkout");
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
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{product.bank}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">
                    <strong>Balance:</strong> {product.balance}
                    <br />
                    <strong>Level:</strong> {product.level}
                    <br />
                    <strong>Type:</strong> {product.type}
                    <br />
                    <strong>Class:</strong> {product.class}
                    <br />
                    <strong>Code:</strong> {product.code}
                    <br />
                    <strong>Category:</strong> {product.category}
                    <br />
                    <strong>Country:</strong> {product.country}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-lg">{product.action}</p>
                    <button
                      onClick={() => handleBuyNow(product)}
                      className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Buy Now
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