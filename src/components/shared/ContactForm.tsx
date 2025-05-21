
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "Message sent",
          description: "We've received your message and will get back to you shortly.",
        });
        // Reset form
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
          <Input 
            id="name" 
            placeholder="Your name" 
            required 
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-gray-700">Company</label>
          <Input 
            id="company" 
            placeholder="Your company" 
            value={formData.company}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
          <Input 
            id="email" 
            type="email" 
            placeholder="your@email.com" 
            required 
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
          <Input 
            id="phone" 
            placeholder="Your phone number" 
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
        <Textarea 
          id="message" 
          placeholder="How can we help you today?" 
          rows={5} 
          required 
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      
      <Button 
        type="submit" 
        className="bg-gradient-primary hover:brightness-110 rounded-full px-8 py-6"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
