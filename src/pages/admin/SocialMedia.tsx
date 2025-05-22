
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Facebook, Twitter, Instagram, Linkedin, Github, Youtube } from 'lucide-react';

type SocialMediaLinks = {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
  youtube?: string;
  [key: string]: string | undefined;
};

const socialIcons: Record<string, React.ReactNode> = {
  facebook: <Facebook className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
  instagram: <Instagram className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  github: <Github className="w-5 h-5" />,
  youtube: <Youtube className="w-5 h-5" />,
};

const SocialMedia: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<SocialMediaLinks>({});

  const { isLoading } = useQuery({
    queryKey: ['socialMedia'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('website_settings')
        .select('setting_value')
        .eq('setting_key', 'social_media')
        .single();

      if (error) {
        throw new Error(error.message);
      }

      const socialLinks = data.setting_value as SocialMediaLinks;
      setFormData(socialLinks);
      return socialLinks;
    },
  });

  const updateSocialMedia = useMutation({
    mutationFn: async (newSocialLinks: SocialMediaLinks) => {
      const { data, error } = await supabase
        .from('website_settings')
        .update({ 
          setting_value: newSocialLinks,
          updated_at: new Date().toISOString(),
          updated_by: user?.id
        })
        .eq('setting_key', 'social_media');

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['socialMedia'] });
      toast({
        title: 'Success',
        description: 'Social media links updated successfully',
      });
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: `Failed to update social media links: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: 'destructive',
      });
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateSocialMedia.mutate(formData);
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
        <h1 className="text-2xl font-bold">Social Media Links</h1>
        <p className="text-gray-500">Update your website's social media links</p>
      </div>

      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Manage Social Media</CardTitle>
            <CardDescription>
              Add or update links to your social media profiles.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.keys(socialIcons).map((platform) => (
              <div key={platform} className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                  {socialIcons[platform]}
                </div>
                <Input
                  id={platform}
                  value={formData[platform] || ''}
                  onChange={handleChange}
                  placeholder={`Enter ${platform} URL`}
                  className="flex-1"
                />
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button 
              type="submit" 
              className="bg-gradient-primary hover:brightness-110"
              disabled={updateSocialMedia.isPending}
            >
              {updateSocialMedia.isPending ? 'Saving...' : 'Save Changes'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default SocialMedia;
