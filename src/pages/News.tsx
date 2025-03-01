import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";

const News = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/10 p-8">
      <div className="max-w-4xl mx-auto h-full flex flex-col">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-primary">News</h1>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Back to Dashboard
          </button>
        </div>

        {/* Scrollable Content */}
        <ScrollArea className="flex-1 rounded-md border">
          <div className="space-y-6 p-4">
            {/* Thank You Section */}
            <Card className="p-6 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Thank You for Choosing Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We appreciate your trust in our services. Below you'll find important updates, FAQs, and resources to help you get the most out of our platform.
                </p>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="p-6 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="faq-item">
                    <h4 className="text-lg font-semibold">Q: How do I get a refund if I get a dead card?</h4>
                    <p className="text-gray-700">
                      A: Simple. All you need to do is use one of the checkers within your warranty time, and if the CVV is declined, you get automatically refunded.
                    </p>
                  </div>
                  <div className="faq-item">
                    <h4 className="text-lg font-semibold">Q: Why don't you show ccType - Bank - Mark on the "Credit Cards" page?</h4>
                    <p className="text-gray-700">
                      A: Because you are a free member. Deposit money now to access this feature!
                    </p>
                  </div>
                  <div className="faq-item">
                    <h4 className="text-lg font-semibold">Q: How do I get bulk lists on SHOP?</h4>
                    <p className="text-gray-700">
                      A: After depositing, contact us via the support ticket system to gain access to the VIP group.
                    </p>
                  </div>
                  <div className="faq-item">
                    <h4 className="text-lg font-semibold">Q: Paygate Error. Please contact Admin. What can I do?</h4>
                    <p className="text-gray-700">
                      A: Please open a ticket in the "Inbox" section. We will resolve the issue as soon as possible.
                    </p>
                  </div>
                  <div className="faq-item">
                    <h4 className="text-lg font-semibold">Q: When do you upload card databases?</h4>
                    <p className="text-gray-700">
                      A: We upload databases as soon as we receive them. Opening a ticket will not speed up the process.
                    </p>
                  </div>
                  <div className="faq-item">
                    <h4 className="text-lg font-semibold">Q: Does CVVShop Store refund cards manually?</h4>
                    <p className="text-gray-700">
                      A: Only when the card has a wrong number or country. Please read the rules for more details.
                    </p>
                  </div>
                  <div className="faq-item">
                    <h4 className="text-lg font-semibold">Q: Are all dumps with a pin?</h4>
                    <p className="text-gray-700">
                      A: Yes. All dumps come with a pin, track 1, and track 2 data.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chat Section */}
            <Card className="p-6 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Chat with Us</CardTitle>
              </CardHeader>
              <CardContent>
                <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                  Start Chat
                </button>
              </CardContent>
            </Card>

            {/* Bitcoin Exchange Section */}
            <Card className="p-6 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Bitcoin Exchange</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <a
                      href="https://coinbase.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      (coinbase.com) Buy BITCOIN With Your Credit Card
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://locabitcoins.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      (Locabitcoins.com) Buy BITCOIN From Vendors in Your Country, City...
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://paxful.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      (Paxful.com) Exchange Bitcoin with Cash App - PM - VMZ ...
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://buy.moonpay.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      (Buy.moonpay.io) Buy or Sell Payments Infrastructure for Crypto
                    </a>
                  </li>
                </ul>
                <p className="text-gray-700">
                  If you need help, open a ticket online. We are online and ready to assist you!
                </p>
                <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                  Open a Ticket
                </button>
              </CardContent>
            </Card>

            {/* Warning Section */}
            <Card className="p-6 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-red-600">WARNING!</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We do not have any FCA Yahoo or Jabber ID. The only way to contact us is through the ticket system. Please be careful and avoid scammers.
                </p>
              </CardContent>
            </Card>

            {/* Payment Methods Section */}
            <Card className="p-6 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Payment Methods</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">© Bitcoin | Bitcoin Automatic</p>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">Refill Balance</h4>
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                      Pay with Bitcoin
                    </button>
                    <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                      Deposit
                    </button>
                    <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                      Withdraw
                    </button>
                  </div>
                  <p className="text-gray-700">
                    MINIMUM Withdraw: $20.00. Bitcoin funding is fully automated and requires confirmations before depositing to your account.
                  </p>
                  <p className="text-gray-700">
                    Minimal deposit = $20. Only one transfer can be accepted per generated Bitcoin address. Do NOT reuse Bitcoin addresses. A 5% merchant processing fee applies.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default News;