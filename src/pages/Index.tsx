
import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

const Index = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (type: "shoes" | "clothes") => {
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please enter both email and password",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Login Successful",
      description: `Welcome to the ${type} shop!`,
    });
    
    localStorage.setItem("userType", type);
    localStorage.setItem("userName", email.split("@")[0]); // Use email username as display name
    navigate("/dashboard");
  };

  const handleSignup = (type: "shoes" | "clothes") => {
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please enter both email and password",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Sign Up Successful",
      description: `Welcome to the ${type} shop! You can now login.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/10 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-center text-primary">
          CVV Shop
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4">CVV Shop</h2>
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={() => handleLogin("shoes")}
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Login to CVV Shop
              </button>
              <button
                onClick={() => handleSignup("shoes")}
                className="w-full border border-primary text-primary py-2 rounded-md hover:bg-primary/10 transition-colors"
              >
                Sign Up for CVV Shop
              </button>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4">CVV cite</h2>
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={() => handleLogin("clothes")}
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Login to CVV CITE
              </button>
              <button
                onClick={() => handleSignup("clothes")}
                className="w-full border border-primary text-primary py-2 rounded-md hover:bg-primary/10 transition-colors"
              >
                Sign Up for CVV cite
              </button>
            </div>
          </Card>
        </div>

        <Card className="p-6 mt-8 bg-white/80 backdrop-blur">
          <h2 className="text-2xl font-semibold mb-4">About CVV Shop</h2>
          <p className="text-gray-600 leading-relaxed">
          CVV Shop is a cutting-edge, cloud-based platform designed to revolutionize the way e-commerce businesses operate. By leveraging advanced technology, CVV Shop empowers businesses to streamline their operations, enhance customer satisfaction, and boost sales. Whether you're a small online store or a large e-commerce enterprise, CVV Shop offers a suite of tools and features tailored to meet your unique need
          </p>
        </Card>
      </motion.div>
    </div>
  );
};

export default Index;
