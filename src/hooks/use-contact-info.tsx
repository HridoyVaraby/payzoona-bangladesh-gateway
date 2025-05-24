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
        throw new Error(error.message);
      }

      return data.setting_value as ContactInfo;
    },
  });

  return {
    contactInfo: data || {
      phone: '',
      email: '',
      address: '',
      business_hours: ''
    },
    isLoading,
    error,
  };
};