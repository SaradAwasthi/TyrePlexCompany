import React, { useEffect, useState } from "react";
import Card from "../../re-usable-components/Cards";
import { FaCheck } from "react-icons/fa";

const PaymentsMode = [
  {
    id: 1,
    name: "Deposit to Account",
  },
  {
    id: 2,
    name: "Credit Card/Debit Card",
  },
  {
    id: 3,
    name: "Wallets (PayTM/PhonePe/Amazon etc.)",
  },
  {
    id: 4,
    name: "Net Banking",
  },
  {
    id: 5,
    name: "UPI",
  },
];

function PaymentMode() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className={`flex justify-center  content-center mb-1 ${isMobile ? 'mobile' : 'desktop'}`}>
    <Card width="90%">
        <div className="col-12 wheel-payment shadow-box">
        <span className="font-bold text-xl mb-3">Payment Mode</span>
        <ul className="list-none grid grid-cols-2 gap-4 mt-3">
          {PaymentsMode.map((payment) => (
            <li key={payment.id} className="flex items-center">
                <span className="text-green-600"><FaCheck /></span>
                
              <span className={`${isMobile ? 'ml-2 w-24' : 'ml-2'}`}>{payment.name}</span>
            </li>
          ))}
        </ul>
      </div>

    </Card>
    </div>
  );
}

export default PaymentMode;
