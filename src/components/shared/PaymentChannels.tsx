
import React from 'react';
import SectionHeader from './SectionHeader';

const PaymentChannels = () => {
  const paymentMethods = [
    { category: "Credit Cards", items: ["Visa", "Mastercard", "American Express"] },
    { category: "Internet Banking", items: ["DBBL Nexus", "Bank Asia", "EBL", "City Bank"] },
    { category: "Mobile Banking", items: ["bKash", "Nagad", "Rocket", "Upay"] },
    { category: "Other Methods", items: ["SureCash", "DBBL Mobile", "OK Wallet", "Islamic Wallet"] }
  ];
  
  return (
    <section className="section bg-white py-16">
      <div className="container-custom">
        <SectionHeader
          title="Payment Channels"
          subtitle="We support all major payment methods in Bangladesh"
          centered
        />
        
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-24 border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="h-10 w-full bg-gray-200/50 rounded flex items-center justify-center">
                <span className="text-gray-500 text-sm">Payment Logo</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentChannels;
