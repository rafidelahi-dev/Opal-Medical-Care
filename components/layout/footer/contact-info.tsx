import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div className="space-y-4">
      <h4 className="font-playfair text-lg font-semibold mb-4">Contact Us</h4>
      <div className="space-y-3">
        <ContactItem icon={<MapPin size={18} />}>
          123 Wellness Street, Medical District
          <br />
          New York, NY 10001
        </ContactItem>
        <ContactItem icon={<Phone size={18} />}>
          <a href="tel:+1234567890" className="hover:text-accent-600 transition-colors">
            (123) 456-7890
          </a>
        </ContactItem>
        <ContactItem icon={<Mail size={18} />}>
          <a href="mailto:info@opalspa.com" className="hover:text-accent-600 transition-colors">
            info@opalspa.com
          </a>
        </ContactItem>
        <ContactItem icon={<Clock size={18} />}>
          Mon-Fri: 9:00 AM - 8:00 PM
          <br />
          Sat-Sun: 10:00 AM - 6:00 PM
        </ContactItem>
      </div>
    </div>
  );
};

const ContactItem = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="flex items-start gap-3 text-gray-600">
    <div className="mt-1">{icon}</div>
    <div>{children}</div>
  </div>
);