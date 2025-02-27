
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const menuItems = [
  { title: "News", path: "/news" },
  { title: "Creditcards", path: "/Creditcards" },
  { title: "Dumps", path: "/Dumps" },
  { title: "CCchecker", path: "/CCchecker" },
  { title: "Bonus", path: "/Bonus" },
  { title: "Mycards", path: "/Mycards" },
  { title: "Mydumps", path: "/Mydumps" },
  { title: "Clearance", path: "/clearance" },
  { title: "Shopping Cart", path: "/cart" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("");
  const [userType, setUserType] = useState<"shoes" | "clothes">();

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedType = localStorage.getItem("userType") as "shoes" | "clothes";

    if (!storedName || !storedType) {
      navigate("/");
      return;
    }

    setUserName(storedName);
    setUserType(storedType);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/10 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-primary">
            Welcome {userName}!
          </h1>
          <Drawer>
            <DrawerTrigger asChild>
              <button className="p-2 hover:bg-accent rounded-full">
                <Menu className="h-6 w-6" />
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>
                  {userType === "shoes" ? "CVV menu" : "CVV Menu"}
                </DrawerTitle>
              </DrawerHeader>
              <div className="p-4 space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className="w-full text-left p-3 hover:bg-accent rounded-lg transition-colors"
                  >
                    {item.title}
                  </button>
                ))}
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">
                    Close Menu
                  </button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
        <p className="text-xl text-gray-600">
          {userType === "shoes" 
            ? "Explore CVV card in the menu" 
            : "Explore CVV card in the menu"
          }
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
