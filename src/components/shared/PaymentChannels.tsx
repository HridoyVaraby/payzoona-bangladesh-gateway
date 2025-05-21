
import React from 'react';
import SectionHeader from './SectionHeader';

const PaymentChannels = () => {
  const paymentChannels = [
    { name: "Visa", icon: "/payment_channels/visa.svg" },
    { name: "Mastercard", icon: "/payment_channels/mastercard.svg" },
    { name: "American Express", icon: "/payment_channels/amex.svg" },
    { name: "bKash", icon: "/payment_channels/bkash.svg" },
    { name: "Nagad", icon: "/payment_channels/nagad.svg" },
    { name: "Nexus", icon: "/payment_channels/nexus.svg" },
    { name: "Rocket", icon: "/payment_channels/rocket.svg" },
    { name: "iPay", icon: "/payment_channels/ipay.svg" },
    { name: "Upay", icon: "/payment_channels/upay.svg" },
    { name: "QCash", icon: "/payment_channels/qcash.svg" },
    { name: "mCash", icon: "/payment_channels/mcash.svg" },
    { name: "MyCash", icon: "/payment_channels/mycash.svg" },
    { name: "OKWallet", icon: "/payment_channels/okwallet.svg" },
    { name: "Islamic Wallet", icon: "/payment_channels/islamicwallet.svg" },
    { name: "TapnPay", icon: "/payment_channels/tapnpay.svg" },
    { name: "UnionPay", icon: "/payment_channels/unionpay.svg" }
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
          {paymentChannels.map((channel, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-24 border border-gray-100 hover:border-blue-100 transition-colors hover:shadow-sm"
            >
              <div className="h-12 w-full flex items-center justify-center">
                <img 
                  src={channel.icon} 
                  alt={`${channel.name} logo`} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentChannels;
