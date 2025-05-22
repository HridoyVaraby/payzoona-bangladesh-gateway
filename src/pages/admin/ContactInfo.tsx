
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

type ContactInfo = {
  phone: string;
  email: string;
  address: string;
  business_hours: string;
};

const ContactInfo: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<ContactInfo>({
    phone: '',
    email: '',
    address: '',
    business_hours: '',
  });

  const { isLoading } = useQuery({
    queryKey: ['contactInfo'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('website_settings')
        .select('setting_value')
        .eq('setting_key', 'contact_info')
        .single();

      if (error) {
        throw new Error(error.message);
      }

      const contactInfo = data.setting_value as ContactInfo;
      setFormData(contactInfo);
      return contactInfo;
    },
  });

  const updateContactInfo = useMutation({
    mutationFn: async (newContactInfo: ContactInfo) => {
      const { data, error } = await supabase
        .from('website_settings')
        .update({ 
          setting_value: newContactInfo,
          updated_at: new Date().toISOString(),
          updated_by: user?.id
        })
        .eq('setting_key', 'contact_info');

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactInfo'] });
      toast({
        title: 'Success',
        description: 'Contact information updated successfully',
      });
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: `Failed to update contact information: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: 'destructive',
      });
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateContactInfo.mutate(formData);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-payzoona-teal"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Contact Information</h1>
        <p className="text-gray-500">Update your website contact information</p>
      </div>

      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Update Contact Details</CardTitle>
            <CardDescription>
              These details will be displayed on your website's contact page.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="address" className="text-sm font-medium">
                Office Address
              </label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter office address"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="business_hours" className="text-sm font-medium">
                Business Hours
              </label>
              <Textarea
                id="business_hours"
                value={formData.business_hours}
                onChange={handleChange}
                placeholder="Enter business hours"
                rows={3}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              type="submit" 
              className="bg-gradient-primary hover:brightness-110"
              disabled={updateContactInfo.isPending}
            >
              {updateContactInfo.isPending ? 'Saving...' : 'Save Changes'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default ContactInfo;
