
import React from 'react';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/shared/SectionHeader';
import CallToAction from '../components/shared/CallToAction';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Code, CheckCircle, Database, Globe, Layers } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Developers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-payzoona-blue/5 to-payzoona-indigo/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Developer Resources</h1>
            <p className="text-xl text-gray-600">
              Everything you need to integrate Payzoona's payment solutions into your applications.
              Simple, powerful APIs designed for developers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button className="bg-gradient-primary hover:brightness-110 rounded-full">
                View API Docs
              </Button>
              <Button variant="outline" className="rounded-full">
                Start in Sandbox
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* API Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title="API Overview"
            subtitle="Our RESTful APIs make it simple to integrate payment functionality into your application."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-payzoona-blue/10 p-2 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-payzoona-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-3">RESTful API</h3>
              <p className="text-gray-600 mb-4">
                Standard REST API with JSON payloads. Simple request and response formats.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-600">HTTPS Endpoints</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-600">JSON Response Format</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-600">Comprehensive Documentation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-payzoona-indigo/10 p-2 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-payzoona-indigo" />
              </div>
              <h3 className="text-lg font-semibold mb-3">SDKs</h3>
              <p className="text-gray-600 mb-4">
                Libraries to help you integrate quickly in your preferred programming language.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-600">JavaScript/TypeScript</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-600">PHP</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-600">Python</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-payzoona-blue/10 p-2 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-payzoona-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Sandbox</h3>
              <p className="text-gray-600 mb-4">
                Test environment to simulate payments without processing real transactions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-600">Test Cards</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-600">Simulated Responses</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-600">Error Scenario Testing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Code Snippets */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Code Snippets"
            subtitle="Get started quickly with these example code snippets for common operations."
            centered
          />
          
          <div className="mt-10">
            <Tabs defaultValue="javascript" className="max-w-3xl mx-auto">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="php">PHP</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
              </TabsList>
              <TabsContent value="javascript">
                <div className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-hidden">
                  <pre className="text-sm overflow-x-auto">
                    <code>
{`// Creating a payment intent
const payzoona = require('payzoona-sdk');
payzoona.configure({
  apiKey: 'your_api_key'
});

async function createPayment() {
  try {
    const payment = await payzoona.payments.create({
      amount: 5000, // Amount in BDT (৳50.00)
      currency: 'BDT',
      description: 'Order #123',
      customer: {
        email: 'customer@example.com',
        name: 'John Doe'
      },
      metadata: {
        order_id: '123'
      },
      success_url: 'https://yourwebsite.com/success',
      cancel_url: 'https://yourwebsite.com/cancel'
    });
    
    console.log(payment.id);
    // Redirect the customer to payment.checkout_url
    return payment.checkout_url;
  } catch (error) {
    console.error(error);
  }
}`}
                    </code>
                  </pre>
                </div>
              </TabsContent>
              <TabsContent value="php">
                <div className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-hidden">
                  <pre className="text-sm overflow-x-auto">
                    <code>
{`<?php
// Creating a payment intent
require_once('vendor/autoload.php');

$payzoona = new \\Payzoona\\Client('your_api_key');

try {
    $payment = $payzoona->payments->create([
        'amount' => 5000, // Amount in BDT (৳50.00)
        'currency' => 'BDT',
        'description' => 'Order #123',
        'customer' => [
            'email' => 'customer@example.com',
            'name' => 'John Doe'
        ],
        'metadata' => [
            'order_id' => '123'
        ],
        'success_url' => 'https://yourwebsite.com/success',
        'cancel_url' => 'https://yourwebsite.com/cancel'
    ]);
    
    echo $payment->id;
    // Redirect the customer to $payment->checkout_url
    header('Location: ' . $payment->checkout_url);
} catch (\\Exception $e) {
    echo $e->getMessage();
}
?>`}
                    </code>
                  </pre>
                </div>
              </TabsContent>
              <TabsContent value="python">
                <div className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-hidden">
                  <pre className="text-sm overflow-x-auto">
                    <code>
{`# Creating a payment intent
import payzoona

payzoona.api_key = "your_api_key"

try:
    payment = payzoona.Payment.create(
        amount=5000,  # Amount in BDT (৳50.00)
        currency="BDT",
        description="Order #123",
        customer={
            "email": "customer@example.com",
            "name": "John Doe"
        },
        metadata={
            "order_id": "123"
        },
        success_url="https://yourwebsite.com/success",
        cancel_url="https://yourwebsite.com/cancel"
    )
    
    print(payment.id)
    # Redirect the customer to payment.checkout_url
except Exception as e:
    print(str(e))`}
                    </code>
                  </pre>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold mb-4">More Examples</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" className="rounded-full">
                Handle Webhooks
              </Button>
              <Button variant="outline" className="rounded-full">
                Verify Transactions
              </Button>
              <Button variant="outline" className="rounded-full">
                Manage Subscriptions
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Integration Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Integration Process"
            subtitle="Follow these steps to integrate Payzoona into your application."
            centered
          />
          
          <div className="relative mt-12">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            
            <div className="space-y-12">
              <div className="relative">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="flex items-center md:w-1/2 md:pr-8 mb-4 md:mb-0">
                    <div className="z-10 bg-payzoona-blue text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 md:mr-0">
                      <span>1</span>
                    </div>
                    <h3 className="text-xl font-semibold md:hidden">Create Account</h3>
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <h3 className="text-xl font-semibold hidden md:block mb-3">Create Account</h3>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <p className="text-gray-600 mb-4">
                        Sign up for a developer account to get access to the dashboard and API credentials.
                      </p>
                      <Link to="/onboarding">
                        <Button className="bg-gradient-primary hover:brightness-110 rounded-full">
                          Create Account
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="flex items-center md:w-1/2 md:pr-8 mb-4 md:mb-0">
                    <div className="z-10 bg-payzoona-indigo text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 md:mr-0">
                      <span>2</span>
                    </div>
                    <h3 className="text-xl font-semibold md:hidden">Test in Sandbox</h3>
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <h3 className="text-xl font-semibold hidden md:block mb-3">Test in Sandbox</h3>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <p className="text-gray-600 mb-4">
                        Use our sandbox environment to test your integration without processing real transactions.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg text-sm mb-4">
                        <p className="font-medium mb-2">Test Card:</p>
                        <p className="mb-1">Number: 4242 4242 4242 4242</p>
                        <p className="mb-1">Expiry: Any future date</p>
                        <p>CVC: Any 3 digits</p>
                      </div>
                      <Button variant="outline" className="rounded-full">
                        Go to Sandbox
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="flex items-center md:w-1/2 md:pr-8 mb-4 md:mb-0">
                    <div className="z-10 bg-payzoona-blue text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 md:mr-0">
                      <span>3</span>
                    </div>
                    <h3 className="text-xl font-semibold md:hidden">Configure Webhooks</h3>
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <h3 className="text-xl font-semibold hidden md:block mb-3">Configure Webhooks</h3>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <p className="text-gray-600 mb-4">
                        Set up webhook endpoints to receive real-time notifications about payment events.
                      </p>
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm mb-4">
                        <code>POST https://yourwebsite.com/webhooks/payzoona</code>
                      </div>
                      <Button variant="outline" className="rounded-full">
                        Webhook Documentation
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="flex items-center md:w-1/2 md:pr-8 mb-4 md:mb-0">
                    <div className="z-10 bg-payzoona-indigo text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 md:mr-0">
                      <span>4</span>
                    </div>
                    <h3 className="text-xl font-semibold md:hidden">Go Live</h3>
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <h3 className="text-xl font-semibold hidden md:block mb-3">Go Live</h3>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <p className="text-gray-600 mb-4">
                        Switch from sandbox to production mode when you're ready to accept real payments.
                      </p>
                      <div className="flex space-x-4">
                        <Button className="bg-gradient-primary hover:brightness-110 rounded-full">
                          Go Live
                        </Button>
                        <Button variant="outline" className="rounded-full">
                          Production Checklist
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* API Reference */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="API Reference"
            subtitle="Explore our comprehensive API documentation."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-payzoona-blue/10 p-2 rounded-full mr-3">
                  <Layers className="h-5 w-5 text-payzoona-blue" />
                </div>
                <h3 className="font-semibold text-lg">Payments</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Create and manage one-time payments.
              </p>
              <ul className="text-sm space-y-2 mb-4">
                <li className="flex items-center">
                  <Code className="h-4 w-4 text-payzoona-indigo mr-2" />
                  <span>Create payment</span>
                </li>
                <li className="flex items-center">
                  <Code className="h-4 w-4 text-payzoona-indigo mr-2" />
                  <span>Retrieve payment</span>
                </li>
                <li className="flex items-center">
                  <Code className="h-4 w-4 text-payzoona-indigo mr-2" />
                  <span>List payments</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">View Reference</Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-payzoona-blue/10 p-2 rounded-full mr-3">
                  <Layers className="h-5 w-5 text-payzoona-blue" />
                </div>
                <h3 className="font-semibold text-lg">Customers</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Create and manage customer profiles.
              </p>
              <ul className="text-sm space-y-2 mb-4">
                <li className="flex items-center">
                  <Code className="h-4 w-4 text-payzoona-indigo mr-2" />
                  <span>Create customer</span>
                </li>
                <li className="flex items-center">
                  <Code className="h-4 w-4 text-payzoona-indigo mr-2" />
                  <span>Update customer</span>
                </li>
                <li className="flex items-center">
                  <Code className="h-4 w-4 text-payzoona-indigo mr-2" />
                  <span>Delete customer</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">View Reference</Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-payzoona-blue/10 p-2 rounded-full mr-3">
                  <Layers className="h-5 w-5 text-payzoona-blue" />
                </div>
                <h3 className="font-semibold text-lg">Subscriptions</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Create and manage recurring billing.
              </p>
              <ul className="text-sm space-y-2 mb-4">
                <li className="flex items-center">
                  <Code className="h-4 w-4 text-payzoona-indigo mr-2" />
                  <span>Create subscription</span>
                </li>
                <li className="flex items-center">
                  <Code className="h-4 w-4 text-payzoona-indigo mr-2" />
                  <span>Update subscription</span>
                </li>
                <li className="flex items-center">
                  <Code className="h-4 w-4 text-payzoona-indigo mr-2" />
                  <span>Cancel subscription</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">View Reference</Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-payzoona-blue/10 p-2 rounded-full mr-3">
                  <Layers className="h-5 w-5 text-payzoona-blue" />
                </div>
                <h3 className="font-semibold text-lg">Settlements</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Manage your settlements and payouts.
              </p>
              <ul className="text-sm space-y-2 mb-4">
                <li className="flex items-center">
                  <Code className="h-4 w-4 text-payzoona-indigo mr-2" />
                  <span>List settlements</span>
                </li>
                <li className="flex items-center">
                  <Code className="h-4 w-4 text-payzoona-indigo mr-2" />
                  <span>Retrieve settlement</span>
                </li>
                <li className="flex items-center">
                  <Code className="h-4 w-4 text-payzoona-indigo mr-2" />
                  <span>Request payout</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">View Reference</Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-payzoona-blue/10 p-2 rounded-full mr-3">
                  <Layers className="h-5 w-5 text-payzoona-blue" />
                </div>
                <h3 className="font-semibold text-lg">Webhooks</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Receive real-time notifications for events.
              </p>
              <ul className="text-sm space-y-2 mb-4">
                <li className="flex items-center">
                  <Code className="h-4 w-4 text-payzoona-indigo mr-2" />
                  <span>Create webhook</span>
                </li>
                <li className="flex items-center">
                  <Code className="h-4 w-4 text-payzoona-indigo mr-2" />
                  <span>List webhooks</span>
                </li>
                <li className="flex items-center">
                  <Code className="h-4 w-4 text-payzoona-indigo mr-2" />
                  <span>Test webhook</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">View Reference</Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-payzoona-blue/10 p-2 rounded-full mr-3">
                  <Layers className="h-5 w-5 text-payzoona-blue" />
                </div>
                <h3 className="font-semibold text-lg">Reports</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Generate transaction and settlement reports.
              </p>
              <ul className="text-sm space-y-2 mb-4">
                <li className="flex items-center">
                  <Code className="h-4 w-4 text-payzoona-indigo mr-2" />
                  <span>Generate report</span>
                </li>
                <li className="flex items-center">
                  <Code className="h-4 w-4 text-payzoona-indigo mr-2" />
                  <span>List reports</span>
                </li>
                <li className="flex items-center">
                  <Code className="h-4 w-4 text-payzoona-indigo mr-2" />
                  <span>Download report</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">View Reference</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="section bg-white">
        <div className="container-custom">
          <CallToAction
            title="Ready to start integrating?"
            description="Join hundreds of developers using Payzoona's APIs to power their applications."
            primaryButtonText="View API Docs"
            primaryButtonLink="#"
            secondaryButtonText="Start in Sandbox"
            secondaryButtonLink="#"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Developers;
