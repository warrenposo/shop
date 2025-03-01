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
  { title: "Checkbalance", path: "/Addbalance" },
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

        {/* Added Content Below */}
        <div className="space-y-6">
          <Card className="p-6 bg-white shadow-sm">
            <h2 className="text-2xl font-bold mb-4">SALES RULES:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>The probability of being valid of these cards is very high.</li>
              <li>The price is favorable.</li>
              <li>We have a large database with great diversity.</li>
              <li>Deliver purchased CVV immediately.</li>
              <li>We cannot guarantee or control the account balance of the cards we sell.</li>
              <li>There are different types of cards: non-refundable and refundable.</li>
            </ul>
          </Card>

          <Card className="p-6 bg-white shadow-sm">
            <h2 className="text-2xl font-bold mb-4">REFUND RULES:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Purchased refundable cards can be refunded within 5 to 30 minutes after sales.</li>
              <li>Valid cards cannot be refunded.</li>
              <li>We only accept BTC, USDT, ETH, and LTC payments.</li>
              <li>Quick / automatic payment.</li>
              <li>The first deposit of a new user created is $50, and $55 will be added to your balance.</li>
              <li>Accounts of new users who do not deposit within 7 days will be automatically deleted.</li>
            </ul>
          </Card>

          <Card className="p-6 bg-white shadow-sm">
            <h2 className="text-2xl font-bold mb-4">PRECAUTIONS FOR USE:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Please keep your own account and password. Do not share your password with anyone.</li>
              <li>We will not save your password. If your password is lost, we will not be responsible.</li>
            </ul>
          </Card>

          <Card className="p-6 bg-white shadow-sm">
            <h2 className="text-2xl font-bold mb-4">RELATED KEYWORDS:</h2>
            <p className="text-gray-700">
              buy cvv with debit card, buy cvv2, cvv shop telegram, buy non vbv cc online, buy cvv fullz online, sites to buy cc for
              buy credit card dumps online, buy live cc for carding, cvv shop sites, cvv bins for sale, legit cvv shops,
              dumps for sale cvv, milad cc shop, forum cvv shop, buy ssn dob dl fullz, buy cvv with paypal, cvv dumps for sale,
              buy cc fullz with debit card, shop dumps with pin, buy cvv shop, master cvv shop, trusted cvv shop 2025 list,
              approved cvv shop, buy cc fullz with paypal, legit dumps, good cvv shop, non vbv live cc, cc cvv shop online,
              dark web cvv shop, dumps and cvv2 shop, new dumps shop, top cvv shop, cvv fullz online shop, dumps and cvv
              buy ssn fullz online, dumps with pin sites, new cc dump sites, dumps with pin online shop, live non vbv cc with
              beat cvv shop online, best sites to buy cc dumps, best cvv shop 2025, cvv ssn dob shop, buy cvv 2025, valid cc
              card dumps for sale, buy cheap fullz, buy cc online for carding, new cvv shop, cvv shop reddit, buy cc dumps with
              buy bank logins cvv, no cvv shopping, legit cc dumps, buy cc cvv online, verified cvv shop, cvv selling sites, legit
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;