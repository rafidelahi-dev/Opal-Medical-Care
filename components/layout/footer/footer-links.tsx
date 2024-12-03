import Link from 'next/link';

const links = {
  services: [
    { label: 'Aesthetic Services', href: '/aesthetic' },
    { label: 'Well-being Services', href: '/wellbeing' },
    { label: 'Consultations', href: '/consultations' },
    { label: 'Special Offers', href: '/offers' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
};

export const FooterLinks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <FooterSection title="Services" links={links.services} />
      <FooterSection title="Company" links={links.company} />
      <FooterSection title="Resources" links={links.resources} />
    </div>
  );
};

const FooterSection = ({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) => (
  <div>
    <h4 className="font-playfair text-lg font-semibold mb-4">{title}</h4>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-gray-600 hover:text-accent-600 transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);