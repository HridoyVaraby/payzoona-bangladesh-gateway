
import React from 'react';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/shared/SectionHeader';
import CallToAction from '../components/shared/CallToAction';
import { CreditCard, Globe, Clock, Code, ShoppingCart, ShieldCheck } from 'lucide-react';

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-payzoona-blue/5 to-payzoona-indigo/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Our Services</h1>
            <p className="text-xl text-gray-600">
              Complete payment solutions for businesses operating in Bangladesh.
              From payment acceptance to settlement, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Online Payment Gateway */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Online Payment Gateway"
                subtitle="Accept payments from customers in Bangladesh through multiple payment methods."
              />
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-payzoona-blue/10 p-1 rounded-full mr-3 mt-1">
                    <ShieldCheck className="h-4 w-4 text-payzoona-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Credit & Debit Cards</h4>
                    <p className="text-gray-600">Support for all major Bangladeshi bank cards, plus Visa, Mastercard, and American Express.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-payzoona-blue/10 p-1 rounded-full mr-3 mt-1">
                    <ShieldCheck className="h-4 w-4 text-payzoona-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Mobile Banking</h4>
                    <p className="text-gray-600">Integration with popular mobile financial services like bKash, Nagad, and Rocket.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-payzoona-blue/10 p-1 rounded-full mr-3 mt-1">
                    <ShieldCheck className="h-4 w-4 text-payzoona-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Net Banking</h4>
                    <p className="text-gray-600">Direct integration with major Bangladeshi banks for secure online transfers.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="bg-gray-50 rounded-lg p-5 mb-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">Payment Checkout</h3>
                  <span className="text-sm text-payzoona-blue">Secure</span>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white border border-gray-200 rounded p-3 flex items-center justify-center shadow-sm">
                      <CreditCard className="h-8 w-8 text-payzoona-blue mr-2" />
                      <span className="font-medium">Card</span>
                    </div>
                    <div className="bg-white border border-gray-200 rounded p-3 flex items-center justify-center shadow-sm">
                      <span className="font-bold mr-2 text-pink-600">bKash</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white border border-gray-200 rounded p-3 flex items-center justify-center shadow-sm">
                      <span className="font-bold mr-2 text-orange-600">Nagad</span>
                    </div>
                    <div className="bg-white border border-gray-200 rounded p-3 flex items-center justify-center shadow-sm">
                      <span className="font-bold mr-2 text-blue-600">Bank</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-primary text-white rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <span>Total Amount:</span>
                  <span className="font-bold">৳5,500 BDT</span>
                </div>
                <button className="bg-white text-black w-full py-2 rounded font-medium">
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cross-border Settlement */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="bg-gray-50 rounded-lg p-5 mb-5">
                  <h3 className="font-medium mb-4">Settlement Dashboard</h3>
                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 rounded-md p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">Available for settlement</span>
                        <span className="text-sm text-payzoona-blue">View details</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-xl">৳125,450 BDT</h4>
                          <span className="text-sm text-gray-500">≈ $1,143.89 USD</span>
                        </div>
                        <button className="bg-payzoona-blue text-white px-3 py-1 rounded-md text-sm">
                          Settle Now
                        </button>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Settlement Accounts</h4>
                      <div className="flex items-center justify-between bg-white border border-gray-200 rounded-md p-3 mb-2">
                        <div className="flex items-center">
                          <div className="bg-payzoona-blue/10 p-1 rounded-full mr-2">
                            <Globe className="h-4 w-4 text-payzoona-blue" />
                          </div>
                          <span>USD Account (Primary)</span>
                        </div>
                        <span className="text-sm">Wise</span>
                      </div>
                      <div className="flex items-center justify-between bg-white border border-gray-200 rounded-md p-3">
                        <div className="flex items-center">
                          <div className="bg-payzoona-indigo/10 p-1 rounded-full mr-2">
                            <Globe className="h-4 w-4 text-payzoona-indigo" />
                          </div>
                          <span>EUR Account</span>
                        </div>
                        <span className="text-sm">Revolut</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeader
                title="Cross-border Settlement"
                subtitle="Collect payments in BDT and receive settlements in your preferred currency."
              />
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-payzoona-indigo/10 p-1 rounded-full mr-3 mt-1">
                    <Globe className="h-4 w-4 text-payzoona-indigo" />
                  </div>
                  <div>
                    <h4 className="font-medium">Multi-currency Support</h4>
                    <p className="text-gray-600">Settle funds in USD, EUR, GBP, and other major currencies to your international bank account.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-payzoona-indigo/10 p-1 rounded-full mr-3 mt-1">
                    <Clock className="h-4 w-4 text-payzoona-indigo" />
                  </div>
                  <div>
                    <h4 className="font-medium">Fast Settlement</h4>
                    <p className="text-gray-600">Get your funds within 3-5 business days, with options for faster settlement for eligible merchants.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-payzoona-indigo/10 p-1 rounded-full mr-3 mt-1">
                    <CreditCard className="h-4 w-4 text-payzoona-indigo" />
                  </div>
                  <div>
                    <h4 className="font-medium">Competitive Exchange Rates</h4>
                    <p className="text-gray-600">Benefit from transparent and competitive currency conversion rates for all settlements.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Subscription Billing */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Subscription Billing"
                subtitle="Automate recurring payments for your business with our subscription management tools."
              />
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-payzoona-blue/10 p-1 rounded-full mr-3 mt-1">
                    <Clock className="h-4 w-4 text-payzoona-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Flexible Billing Cycles</h4>
                    <p className="text-gray-600">Set up daily, weekly, monthly, or annual billing cycles to match your business model.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-payzoona-blue/10 p-1 rounded-full mr-3 mt-1">
                    <ShieldCheck className="h-4 w-4 text-payzoona-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Smart Retry Logic</h4>
                    <p className="text-gray-600">Automatic retry of failed payments to reduce churn and maximize revenue.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-payzoona-blue/10 p-1 rounded-full mr-3 mt-1">
                    <CreditCard className="h-4 w-4 text-payzoona-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Customer Portal</h4>
                    <p className="text-gray-600">Let customers manage their own subscriptions, update payment methods, and view billing history.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="mb-6">
                <h3 className="font-medium mb-4">Subscription Plans</h3>
                <div className="space-y-3">
                  <div className="bg-gradient-primary text-white rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Premium Plan</span>
                      <span className="bg-white text-black text-xs px-2 py-1 rounded font-medium">Active</span>
                    </div>
                    <div className="flex justify-between items-baseline mb-3">
                      <span className="font-bold text-xl">৳1,200</span>
                      <span className="text-sm">/month</span>
                    </div>
                    <div className="text-sm">
                      <div className="flex justify-between">
                        <span>Next billing date:</span>
                        <span>June 15, 2025</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Basic Plan</span>
                      <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded font-medium">Inactive</span>
                    </div>
                    <div className="flex justify-between items-baseline mb-3">
                      <span className="font-bold text-xl">৳500</span>
                      <span className="text-sm text-gray-500">/month</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      <div className="flex justify-between">
                        <span>Click to activate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-medium mb-3">Payment History</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">May 15, 2025</span>
                    <span className="font-medium">৳1,200</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Apr 15, 2025</span>
                    <span className="font-medium">৳1,200</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Mar 15, 2025</span>
                    <span className="font-medium">৳1,200</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* eCommerce Integrations */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="eCommerce Integrations"
            subtitle="Seamlessly connect Payzoona with your preferred eCommerce platform."
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center aspect-square">
              <div className="font-bold text-xl mb-2">WooCommerce</div>
              <p className="text-sm text-center text-gray-600">WordPress integration</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center aspect-square">
              <div className="font-bold text-xl mb-2">Shopify</div>
              <p className="text-sm text-center text-gray-600">App store plugin</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center aspect-square">
              <div className="font-bold text-xl mb-2">Magento</div>
              <p className="text-sm text-center text-gray-600">Extension available</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center aspect-square">
              <div className="font-bold text-xl mb-2">Custom Store</div>
              <p className="text-sm text-center text-gray-600">API integration</p>
            </div>
          </div>
          
          <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="bg-payzoona-blue/10 p-2 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <ShoppingCart className="h-6 w-6 text-payzoona-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">One-click Installation</h3>
                <p className="text-gray-600">
                  Install our plugins with a single click. No complex configuration required.
                </p>
              </div>
              <div>
                <div className="bg-payzoona-blue/10 p-2 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-payzoona-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Customization Options</h3>
                <p className="text-gray-600">
                  Customize the checkout experience to match your brand and requirements.
                </p>
              </div>
              <div>
                <div className="bg-payzoona-blue/10 p-2 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-payzoona-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Order Synchronization</h3>
                <p className="text-gray-600">
                  Automatically sync orders and payment statuses with your eCommerce platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Developer Dashboard & Fraud Detection */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                title="Developer Dashboard"
                subtitle="Comprehensive tools to manage your payment integration."
              />
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-payzoona-indigo/10 p-1 rounded-full mr-3 mt-1">
                    <Code className="h-4 w-4 text-payzoona-indigo" />
                  </div>
                  <div>
                    <h4 className="font-medium">API Management</h4>
                    <p className="text-gray-600">Generate and manage API keys, view usage statistics, and access logs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-payzoona-indigo/10 p-1 rounded-full mr-3 mt-1">
                    <Code className="h-4 w-4 text-payzoona-indigo" />
                  </div>
                  <div>
                    <h4 className="font-medium">Sandbox Environment</h4>
                    <p className="text-gray-600">Test your integration thoroughly before going live with our sandbox environment.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-payzoona-indigo/10 p-1 rounded-full mr-3 mt-1">
                    <Code className="h-4 w-4 text-payzoona-indigo" />
                  </div>
                  <div>
                    <h4 className="font-medium">Webhook Configuration</h4>
                    <p className="text-gray-600">Set up and manage webhooks to receive real-time notifications about payment events.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <SectionHeader
                title="Fraud Detection"
                subtitle="Protect your business with advanced fraud prevention tools."
              />
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-payzoona-blue/10 p-1 rounded-full mr-3 mt-1">
                    <ShieldCheck className="h-4 w-4 text-payzoona-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Risk Scoring</h4>
                    <p className="text-gray-600">Automatically assess transaction risk based on multiple factors.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-payzoona-blue/10 p-1 rounded-full mr-3 mt-1">
                    <ShieldCheck className="h-4 w-4 text-payzoona-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Custom Rules</h4>
                    <p className="text-gray-600">Create custom fraud prevention rules tailored to your business needs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-payzoona-blue/10 p-1 rounded-full mr-3 mt-1">
                    <ShieldCheck className="h-4 w-4 text-payzoona-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Real-time Monitoring</h4>
                    <p className="text-gray-600">Monitor transactions in real-time and receive alerts for suspicious activity.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <CallToAction
            title="Ready to enhance your payment experience?"
            description="Join hundreds of businesses using Payzoona to power their payment infrastructure in Bangladesh."
            primaryButtonText="Get Started"
            primaryButtonLink="/onboarding"
            secondaryButtonText="Contact Sales"
            secondaryButtonLink="/contact"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Services;
