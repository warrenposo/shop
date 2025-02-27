
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  
  // Bitcoin address (replace with your actual address in a real application)
  const bitcoinAddress = "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh";

  useEffect(() => {
    // Retrieve cart items from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    
    if (storedCart.length === 0) {
      navigate("/cart");
      return;
    }
    
    setCartItems(storedCart);

    // Calculate total price
    const total = storedCart.reduce((sum: number, item: Product) => sum + item.price, 0);
    setTotalPrice(total);
  }, [navigate]);

  const handlePayment = () => {
    setIsPaymentDialogOpen(true);
  };

  const handlePaymentConfirmation = () => {
    // Clear the cart after successful payment
    localStorage.setItem("cart", JSON.stringify([]));
    
    // Close dialog
    setIsPaymentDialogOpen(false);
    
    // Show toast notification
    toast({
      title: "Payment Verification Initiated",
      description: "We will contact you to verify your payment.",
    });
    
    // Redirect to dashboard
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/10 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-primary">Checkout</h1>
          <button
            onClick={() => navigate("/cart")}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Back to Cart
          </button>
        </div>
        
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-2 border-b">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <p className="font-bold">${item.price.toFixed(2)}</p>
                </div>
              ))}
              
              <div className="flex justify-between items-center pt-4 text-lg font-bold">
                <p>Total</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Payment with Bitcoin</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-600">
                Please send the exact amount of ${totalPrice.toFixed(2)} worth of Bitcoin to the following address:
              </p>
              
              <div className="p-4 bg-gray-100 rounded-md break-all font-mono text-sm">
                {bitcoinAddress}
              </div>
              
              <p className="text-gray-600">
                After sending the payment, click the button below to confirm your payment.
              </p>
              
              <p className="text-center font-medium text-gray-600 mt-6">
                Thank you for shopping with us!
              </p>
              
              <Dialog open={isPaymentDialogOpen} onOpenChange={setIsPaymentDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    className="w-full py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-lg font-medium"
                    onClick={handlePayment}
                  >
                    I Have Paid
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Payment Confirmation</DialogTitle>
                    <DialogDescription>
                      We will verify your payment and contact you at the following information:
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <p className="mb-2"><strong>Email:</strong> support@warrenshop.com</p>
                    <p className="mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p className="mb-2"><strong>Hours:</strong> Mon-Fri, 9am-5pm EST</p>
                  </div>
                  <DialogFooter>
                    <Button 
                      variant="default" 
                      onClick={handlePaymentConfirmation}
                      className="w-full"
                    >
                      Confirm
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Checkout;
