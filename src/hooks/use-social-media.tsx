
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

type SocialMediaLinks = {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
  youtube?: string;
  [key: string]: string | undefined;
};

export const useSocialMedia = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['socialMedia'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('website_settings')
        .select('setting_value')
        .eq('setting_key', 'social_media')
        .single();

      if (error) {
        console.error('Error fetching social media:', error);
        // Return default/empty values if there's an error
        return {};
      }

      return data?.setting_value as SocialMediaLinks || {};
    },
    retry: 1,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return {
    socialMedia: data || {},
    isLoading,
    error,
  };
};
