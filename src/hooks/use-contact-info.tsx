
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
        .maybeSingle();

      if (error) {
        console.error('Error fetching contact info:', error);
        return null;
      }

      return data?.setting_value as ContactInfo || null;
    },
    retry: 1,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return {
    contactInfo: data,
    isLoading,
    error,
  };
};
