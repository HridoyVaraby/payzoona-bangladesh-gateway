
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export type ContactInfo = {
  phone: string;
  email: string;
  address: string;
  business_hours: string;
};

export const useContactInfo = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['contactInfo'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('website_settings')
        .select('setting_value')
        .eq('setting_key', 'contact_info')
        .single();

      if (error) {
        console.error('Error fetching contact info:', error);
        // Return default values if there's an error
        return {
          phone: '',
          email: 'info@payzoona.com',
          address: 'Visit our office for more information',
          business_hours: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed'
        };
      }

      return data?.setting_value as ContactInfo || {
        phone: '',
        email: 'info@payzoona.com',
        address: 'Visit our office for more information',
        business_hours: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed'
      };
    },
    retry: 1,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return {
    contactInfo: data || {
      phone: '',
      email: 'info@payzoona.com',
      address: 'Visit our office for more information',
      business_hours: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed'
    },
    isLoading,
    error,
  };
};
