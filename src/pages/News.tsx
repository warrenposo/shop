import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";

const News = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/10 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-primary">News</h1>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
        
        <ScrollArea className="h-[600px] rounded-md border p-4">
          <div className="news">
            <h2>News</h2>
            <p>Thank You for choosing us -</p>
            <div className="faq-section">
              <h3>Frequently Asked Questions</h3>
              <div className="faq-item">
                <h4>Q: How do I get refunding if I got dead card?</h4>
                <p>A: Simple. All you need to do is use one of the checkers within your warranty time and if the CVV is declined you get automatically refunded.</p>
              </div>
              <div className="faq-item">
                <h4>Q: Why do not you show ccType - Bank - Mark at "Credit Cards" page?</h4>
                <p>A: Because you are a free member. Deposit money now!!!</p>
              </div>
              <div className="faq-item">
                <h4>Q: How to get bulk list on SHOP?</h4>
                <p>A: After depositing contact us via support ticket online to have access granted to VIP group.</p>
              </div>
              <div className="faq-item">
                <h4>Q: Paygate Error. Please contact Admin. What can I do?</h4>
                <p>A: Please open ticket online "inbox.". We will fix soon.</p>
              </div>
              <div className="faq-item">
                <h4>Q: When do you upload cards databases?</h4>
                <p>A: Please, do not open a ticket. We upload databases as soon as we get them, making a ticket won't help.</p>
              </div>
              <div className="faq-item">
                <h4>Q: Does CVVShop Store refund cards manually?</h4>
                <p>A: Only when the card has a wrong number or country. Read the rules for more.</p>
              </div>
              <div className="faq-item">
                <h4>Q: All is dumps with pin?</h4>
                <p>A: Yes. All with pin track 1 and 2 with pin.</p>
              </div>
            </div>
            <div className="chat-section">
              <button>Chat with us</button>
            </div>

            <div className="bitcoin-exchange">
              <h3>Bitcoin Exchange</h3>
              <ul>
                <li>
                  <a href="https://coinbase.com" target="_blank" rel="noopener noreferrer">
                    (coinbase.com) Buy BITCOIN With Your Credit Card
                  </a>
                </li>
                <li>
                  <a href="https://locabitcoins.com" target="_blank" rel="noopener noreferrer">
                    (Locabitcoins.com) Buy BITCOIN From Vendor in Your Country, City...
                  </a>
                </li>
                <li>
                  <a href="https://paxful.com" target="_blank" rel="noopener noreferrer">
                    (Paxful.com) Exchange Bitcoin with Cash App - PM - VMZ ...
                  </a>
                </li>
                <li>
                  <a href="https://buy.moonpay.io" target="_blank" rel="noopener noreferrer">
                    (Buy.moonpay.io) Buy or Sell Payments Infrastructure for Crypto
                  </a>
                </li>
              </ul>
              <p>If you need help open a ticket online, we are online and ready to help.</p>
              <p>Our support team is here for You!</p>
              <button>Click here to open a ticket!</button>
              <div className="warning">
                <p><strong>WARNING!</strong></p>
                <p>We do not have any FCA Yahoo or Jabber ID. The only way to contact us is by the ticket system. Please be careful and avoid the rippers.</p>
              </div>
              <div className="domains">
                <p>Domains</p>
                <p>Hi/Hi</p>
              </div>
              <div className="payment-methods">
                <p>Payment Methods:</p>
                <p>©bircoin | Bircoin Automatic</p>
              </div>
            </div>

            <div className="payment-refill-section">
              <h3>Payment Methods</h3>
              <div className="payment-cards">
                <div className="payment-card">
                  <h4>Dbltcoin Bitcoin Automatic</h4>
                </div>
              </div>
              <div className="refill-balance">
                <h3>Refill Balance</h3>
                <div className="refill-options">
                  <button>Pay with Bitcoin</button>
                  <button>Payment</button>
                  <button>Deposit</button>
                  <button>Withdraw</button>
                </div>
                <p>MINIMUM Withdraw: $20.00</p>
                <p>Bitcoin funding is fully automated and has to go through all confirmations before it can be deposited to your account.</p>
                <p>Minimal deposit=$20. Only one transfer can be accepted to generated Bitcoin address. Do NOT use the same Bitcoin address for repeating payments. Always come back for a NEW Bitcoin address. Merchant processing fee of %5 applies. Buyer Protection-any time you like, you can ask for BALANCE REFUND</p>
                <div className="bitcoin-wallet">
                  <p>Your Bitcoin Wallet</p>
                  <input type="text" placeholder="USD" />
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default News;