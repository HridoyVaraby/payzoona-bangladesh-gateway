
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    toast({
      title: "Message sent",
      description: "We've received your message and will get back to you shortly.",
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
          <Input id="name" placeholder="Your name" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-gray-700">Company</label>
          <Input id="company" placeholder="Your company" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
          <Input id="email" type="email" placeholder="your@email.com" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
          <Input id="phone" placeholder="Your phone number" />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
        <Textarea id="message" placeholder="How can we help you today?" rows={5} required />
      </div>
      
      <Button type="submit" className="bg-gradient-primary hover:brightness-110 rounded-full px-8 py-6">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
