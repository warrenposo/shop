import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";

interface CreditCard {
  type: string;
  bin: string;
  expDate: string;
  category: string;
  country: string;
  state: string;
  city: string;
  zip: string;
  action: string;
}

const creditCards: CreditCard[] = [
  { type: "VISA", bin: "471530", expDate: "1202029", category: "Category Info", country: "U.S.A", state: "NE", city: "Omaha", zip: "68108", action: "Buy (55.00)" },
  { type: "VISA", bin: "471530", expDate: "1202029", category: "Category Info", country: "U.S.A", state: "NE", city: "Omaha", zip: "68108", action: "Buy (55.00)" },
  { type: "VISA", bin: "471530", expDate: "012030", category: "Category Info", country: "U.S.A", state: "CA", city: "Los Angeles", zip: "90001", action: "Buy (55.00)" },
  { type: "VISA", bin: "471530", expDate: "012030", category: "Category Info", country: "U.S.A", state: "TX", city: "Houston", zip: "77001", action: "Buy (55.00)" },
  { type: "VISA", bin: "471530", expDate: "020031", category: "Category Info", country: "U.S.A", state: "FL", city: "Miami", zip: "33101", action: "Buy (55.00)" },
  { type: "VISA", bin: "471530", expDate: "1202029", category: "Category Info", country: "U.S.A", state: "NE", city: "Omaha", zip: "68108", action: "Buy (55.00)" },
  { type: "VISA", bin: "471530", expDate: "012030", category: "Category Info", country: "U.S.A", state: "CA", city: "Los Angeles", zip: "90001", action: "Buy (55.00)" },
  { type: "VISA", bin: "471530", expDate: "012030", category: "Category Info", country: "U.S.A", state: "TX", city: "Houston", zip: "77001", action: "Buy (55.00)" },
  { type: "VISA", bin: "471530", expDate: "020031", category: "Category Info", country: "U.S.A", state: "FL", city: "Miami", zip: "33101", action: "Buy (55.00)" },
  { type: "VISA", bin: "471530", expDate: "1202029", category: "Category Info", country: "U.S.A", state: "NE", city: "Omaha", zip: "68108", action: "Buy (55.00)" },
  { type: "VISA", bin: "471530", expDate: "012030", category: "Category Info", country: "U.S.A", state: "CA", city: "Los Angeles", zip: "90001", action: "Buy (55.00)" },
  { type: "VISA", bin: "471530", expDate: "012030", category: "Category Info", country: "U.S.A", state: "TX", city: "Houston", zip: "77001", action: "Buy (55.00)" },
  { type: "VISA", bin: "471530", expDate: "020031", category: "Category Info", country: "U.S.A", state: "FL", city: "Miami", zip: "33101", action: "Buy (55.00)" },
  { type: "VISA", bin: "471530", expDate: "1202029", category: "Category Info", country: "U.S.A", state: "NE", city: "Omaha", zip: "68108", action: "Buy (55.00)" },
  { type: "VISA", bin: "471530", expDate: "012030", category: "Category Info", country: "U.S.A", state: "CA", city: "Los Angeles", zip: "90001", action: "Buy (55.00)" },
  { type: "VISA", bin: "471530", expDate: "012030", category: "Category Info", country: "U.S.A", state: "TX", city: "Houston", zip: "77001", action: "Buy (55.00)" },
  { type: "VISA", bin: "471530", expDate: "020031", category: "Category Info", country: "U.S.A", state: "FL", city: "Miami", zip: "33101", action: "Buy (55.00)" },
  { type: "VISA", bin: "471530", expDate: "1202029", category: "Category Info", country: "U.S.A", state: "NE", city: "Omaha", zip: "68108", action: "Buy (55.00)" },
  { type: "VISA", bin: "471530", expDate: "012030", category: "Category Info", country: "U.S.A", state: "CA", city: "Los Angeles", zip: "90001", action: "Buy (55.00)" },
  { type: "VISA", bin: "471530", expDate: "012030", category: "Category Info", country: "U.S.A", state: "TX", city: "Houston", zip: "77001", action: "Buy (55.00)" },
  { type: "VISA", bin: "471530", expDate: "020031", category: "Category Info", country: "U.S.A", state: "FL", city: "Miami", zip: "33101", action: "Buy (55.00)" },
  { type: "VISA", bin: "471530", expDate: "1202029", category: "Category Info", country: "U.S.A", state: "NE", city: "Omaha", zip: "68108", action: "Buy (55.00)" },
  { type: "VISA", bin: "471530", expDate: "012030", category: "Category Info", country: "U.S.A", state: "CA", city: "Los Angeles", zip: "90001", action: "Buy (55.00)" },
  { type: "VISA", bin: "471530", expDate: "012030", category: "Category Info", country: "U.S.A", state: "TX", city: "Houston", zip: "77001", action: "Buy (55.00)" },
  { type: "VISA", bin: "471530", expDate: "020031", category: "Category Info", country: "U.S.A", state: "FL", city: "Miami", zip: "33101", action: "Buy (55.00)" },
  { type: "VISA", bin: "471530", expDate: "020031", category: "Category Info", country: "U.S.A", state: "NY", city: "New York", zip: "10001", action: "Buy (55.00)" }
];

const Creditcards = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleBuyNow = (creditCard: CreditCard) => {
    // Get existing cart items or initialize empty array
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    
    // Add new item to cart
    const updatedCart = [...existingCart, creditCard];
    
    // Save updated cart
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    
    // Show toast notification
    toast({
      title: "Added to Cart",
      description: `${creditCard.type} card has been added to your cart.`,
    });

    // Navigate to the checkout page
    navigate("/checkout");
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
            {creditCards.map((creditCard, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{creditCard.type} Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">BIN: {creditCard.bin}</p>
                  <p className="text-gray-600 mb-2">Exp Date: {creditCard.expDate}</p>
                  <p className="text-gray-600 mb-2">Category: {creditCard.category}</p>
                  <p className="text-gray-600 mb-2">Country: {creditCard.country}</p>
                  <p className="text-gray-600 mb-2">State: {creditCard.state}</p>
                  <p className="text-gray-600 mb-2">City: {creditCard.city}</p>
                  <p className="text-gray-600 mb-2">ZIP: {creditCard.zip}</p>
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-lg">{creditCard.action}</p>
                    <button
                      onClick={() => handleBuyNow(creditCard)}
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

export default Creditcards;