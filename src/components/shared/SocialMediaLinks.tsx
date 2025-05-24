import React from 'react';
import { useSocialMedia } from '@/hooks/use-social-media';
import { Facebook, Twitter, Instagram, Linkedin, Github, Youtube } from 'lucide-react';

type SocialMediaLinksProps = {
  className?: string;
  iconClassName?: string;
  containerClassName?: string;
};

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({
  className = '',
  iconClassName = 'h-6 w-6',
  containerClassName = 'flex space-x-4',
}) => {
  const { socialMedia, isLoading } = useSocialMedia();

  if (isLoading) {
    return null;
  }

  // Define social media platforms with their icons
  const socialPlatforms = [
    { key: 'facebook', icon: <Facebook className={iconClassName} />, label: 'Facebook' },
    { key: 'twitter', icon: <Twitter className={iconClassName} />, label: 'Twitter' },
    { key: 'instagram', icon: <Instagram className={iconClassName} />, label: 'Instagram' },
    { key: 'linkedin', icon: <Linkedin className={iconClassName} />, label: 'LinkedIn' },
    { key: 'github', icon: <Github className={iconClassName} />, label: 'GitHub' },
    { key: 'youtube', icon: <Youtube className={iconClassName} />, label: 'YouTube' },
  ];

  // Filter out platforms that don't have a URL
  const availablePlatforms = socialPlatforms.filter(
    (platform) => socialMedia[platform.key] && socialMedia[platform.key]?.trim() !== ''
  );

  if (availablePlatforms.length === 0) {
    return null;
  }

  return (
    <div className={containerClassName}>
      {availablePlatforms.map((platform) => (
        <a
          key={platform.key}
          href={socialMedia[platform.key]}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          aria-label={platform.label}
        >
          <span className="sr-only">{platform.label}</span>
          {platform.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;