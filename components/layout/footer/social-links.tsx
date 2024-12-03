import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      <SocialLink href="https://facebook.com" icon={<Facebook size={20} />} />
      <SocialLink href="https://instagram.com" icon={<Instagram size={20} />} />
      <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} />
    </div>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <Link
    href={href}
    className="text-gray-600 hover:text-accent-600 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </Link>
);