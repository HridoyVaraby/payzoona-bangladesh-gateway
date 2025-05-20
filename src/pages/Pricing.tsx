
import React from 'react';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/shared/SectionHeader';
import CallToAction from '../components/shared/CallToAction';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, CheckCircle, HelpCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Pricing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-payzoona-blue/5 to-payzoona-indigo/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600">
              No hidden fees. Pay only for what you use with competitive rates designed for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-6 py-5 text-left font-semibold text-gray-900 bg-gray-50 border-b border-gray-200">Payment Method</th>
                  <th className="px-6 py-5 text-center font-semibold text-gray-900 bg-gray-50 border-b border-gray-200">Transaction Fee</th>
                  <th className="px-6 py-5 text-center font-semibold text-gray-900 bg-gray-50 border-b border-gray-200">Settlement Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b border-gray-200">
                    <div className="font-medium">Bangladeshi Debit/Credit Cards</div>
                    <div className="text-sm text-gray-600">VISA, Mastercard, Amex issued in Bangladesh</div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center">
                    <div className="font-medium">2.5%</div>
                    <div className="text-sm text-gray-600">+ ৳2 BDT</div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center" rowSpan={3}>
                    <div className="font-medium">No fee for BDT settlements</div>
                    <div className="text-sm text-gray-600">1.0% for foreign currency</div>
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b border-gray-200">
                    <div className="font-medium">International Cards</div>
                    <div className="text-sm text-gray-600">VISA, Mastercard, Amex issued outside Bangladesh</div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center">
                    <div className="font-medium">3.5%</div>
                    <div className="text-sm text-gray-600">+ ৳5 BDT</div>
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b border-gray-200">
                    <div className="font-medium">Mobile Wallets</div>
                    <div className="text-sm text-gray-600">bKash, Nagad, Rocket</div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center">
                    <div className="font-medium">1.8%</div>
                    <div className="text-sm text-gray-600">+ ৳2 BDT</div>
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b border-gray-200">
                    <div className="font-medium">Subscription Billing</div>
                    <div className="text-sm text-gray-600">Recurring payments (monthly, annual)</div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center">
                    <div className="font-medium">2.0%</div>
                    <div className="text-sm text-gray-600">+ ৳2 BDT</div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center">
                    <div className="font-medium">No fee for BDT settlements</div>
                    <div className="text-sm text-gray-600">1.0% for foreign currency</div>
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b border-gray-200">
                    <div className="font-medium">Payouts (to Bangladesh)</div>
                    <div className="text-sm text-gray-600">Send money to banks in Bangladesh</div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center">
                    <div className="font-medium">0.5%</div>
                    <div className="text-sm text-gray-600">+ ৳10 BDT</div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center">
                    <div className="font-medium">N/A</div>
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b border-gray-200">
                    <div className="font-medium">Payouts (International)</div>
                    <div className="text-sm text-gray-600">Send money to international banks</div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center">
                    <div className="font-medium">1.0%</div>
                    <div className="text-sm text-gray-600">+ $5 USD</div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center">
                    <div className="font-medium">N/A</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 text-sm text-gray-600">
            <p>* All fees are subject to 15% VAT as per Bangladesh government regulations.</p>
          </div>
        </div>
      </section>
      
      {/* Volume Discounts */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Volume Discounts"
            subtitle="Process more transactions and pay less per transaction. Our volume discounts automatically apply as your business grows."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-xl mb-2">Standard</h3>
              <p className="text-gray-600 mb-6">Up to ৳10,00,000 BDT monthly</p>
              <p className="text-3xl font-bold mb-6">Standard Rates</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>All payment methods</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Basic fraud detection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Weekly settlements</span>
                </li>
              </ul>
              <Link to="/onboarding">
                <Button className="w-full bg-gradient-primary hover:brightness-110 rounded-full">
                  Get Started
                </Button>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 transform md:-translate-y-4 relative before:absolute before:top-0 before:right-0 before:left-0 before:h-1 before:bg-gradient-primary">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3 bg-gradient-primary text-white text-xs font-semibold py-1 px-3 rounded-full">
                Most Popular
              </div>
              <h3 className="font-semibold text-xl mb-2">Growth</h3>
              <p className="text-gray-600 mb-6">৳10,00,001 to ৳50,00,000 BDT monthly</p>
              <p className="text-3xl font-bold mb-6">-0.3% Discount</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>All payment methods</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Advanced fraud detection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Bi-weekly settlements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Dedicated account manager</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button className="w-full bg-gradient-primary hover:brightness-110 rounded-full">
                  Contact Sales
                </Button>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-xl mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">Above ৳50,00,000 BDT monthly</p>
              <p className="text-3xl font-bold mb-6">Custom Pricing</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>All payment methods</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Enterprise fraud protection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Custom settlement schedules</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Priority support 24/7</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Custom integration support</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button className="w-full bg-gradient-primary hover:brightness-110 rounded-full">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Comparison */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Features Comparison"
            subtitle="Compare all features across our different plans to find the right fit for your business."
            centered
          />
          
          <div className="overflow-x-auto mt-10">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900 bg-gray-50 border-b border-gray-200"></th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900 bg-gray-50 border-b border-gray-200">Standard</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900 bg-gray-50 border-b border-gray-200">Growth</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900 bg-gray-50 border-b border-gray-200">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4} className="px-6 py-3 font-semibold bg-gray-50 border-b border-gray-200">Payment Processing</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3 border-b border-gray-200">
                    <div className="flex items-center">
                      <span>Credit/Debit Cards</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="ml-1 cursor-help">
                              <HelpCircle className="h-4 w-4 text-gray-400" />
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">Support for all major cards including Visa, Mastercard, and American Express</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3 border-b border-gray-200">
                    <div className="flex items-center">
                      <span>Mobile Wallets</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="ml-1 cursor-help">
                              <HelpCircle className="h-4 w-4 text-gray-400" />
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">Support for bKash, Nagad, Rocket, and other popular mobile payment methods</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3 border-b border-gray-200">
                    <div className="flex items-center">
                      <span>Net Banking</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3 border-b border-gray-200">
                    <div className="flex items-center">
                      <span>Recurring Payments</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                
                <tr>
                  <td colSpan={4} className="px-6 py-3 font-semibold bg-gray-50 border-b border-gray-200">Settlements</td>
                </tr>
                
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3 border-b border-gray-200">
                    <div className="flex items-center">
                      <span>Settlement Frequency</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <span>Weekly</span>
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <span>Bi-weekly</span>
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <span>Custom</span>
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3 border-b border-gray-200">
                    <div className="flex items-center">
                      <span>Multi-currency Settlements</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3 border-b border-gray-200">
                    <div className="flex items-center">
                      <span>Priority Settlements</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <span className="text-gray-400">-</span>
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                
                <tr>
                  <td colSpan={4} className="px-6 py-3 font-semibold bg-gray-50 border-b border-gray-200">Support & Services</td>
                </tr>
                
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3 border-b border-gray-200">
                    <div className="flex items-center">
                      <span>Customer Support</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <span>Email</span>
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <span>Email & Chat</span>
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <span>24/7 Priority</span>
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3 border-b border-gray-200">
                    <div className="flex items-center">
                      <span>Dedicated Account Manager</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <span className="text-gray-400">-</span>
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3 border-b border-gray-200">
                    <div className="flex items-center">
                      <span>Custom Integration Support</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <span className="text-gray-400">-</span>
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <span className="text-gray-400">-</span>
                  </td>
                  <td className="px-6 py-3 border-b border-gray-200 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Get answers to common questions about our pricing and payment services."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Are there any setup fees?</h3>
              <p className="text-gray-600">
                No, Payzoona does not charge any setup fees. You can create an account and start integrating our payment solutions at no initial cost.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">How long do settlements take?</h3>
              <p className="text-gray-600">
                Settlement times depend on your plan. Standard accounts receive weekly settlements, Growth accounts bi-weekly, and Enterprise accounts can have custom settlement schedules.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Do you charge for failed transactions?</h3>
              <p className="text-gray-600">
                No, we only charge for successful transactions. If a payment fails or is declined, you won't be charged any fees.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Can I upgrade my plan as my business grows?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade your plan at any time. Volume discounts are applied automatically based on your monthly transaction volume.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Do you support international settlements?</h3>
              <p className="text-gray-600">
                Yes, we support settlements in multiple currencies including USD, EUR, and GBP. There is a 1% fee for foreign currency settlements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Is there a minimum transaction amount?</h3>
              <p className="text-gray-600">
                No, there is no minimum transaction amount. However, for very small transactions, the fixed fee component (e.g., ৳2 BDT) may represent a higher percentage of the total.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="section bg-white">
        <div className="container-custom">
          <CallToAction
            title="Ready to get started with Payzoona?"
            description="Talk to our sales team to find the right solution for your business."
            primaryButtonText="Contact Sales"
            primaryButtonLink="/contact"
            secondaryButtonText="Get Started"
            secondaryButtonLink="/onboarding"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
