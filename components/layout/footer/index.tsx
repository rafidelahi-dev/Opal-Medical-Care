"use client";

import { motion } from 'framer-motion';
import { Newsletter } from './newsletter';
import { SocialLinks } from './social-links';
import { FooterLinks } from './footer-links';
import { ContactInfo } from './contact-info';
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


export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo and About */}
          <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 mr-2">
                <path d="M12 2L2 12L12 22L22 12L12 2Z" strokeWidth="1" />
              </svg>
              <span className="font-light text-2xl tracking-widest">OPAL</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Your destination for beauty and wellness excellence. We provide top-tier aesthetic treatments and holistic wellness solutions.
            </p>
            <div className="flex space-x-4">
              <SocialLinks/>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <FooterSection title="Services" links={links.services} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <FooterSection title="Company" links={links.company} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <FooterSection title="Resources" links={links.resources} />
      </motion.div>


          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/*<h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-gray-500">123 Beauty Lane, Wellness City, WC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-gray-400 mr-2" />
                <a href="tel:+11234567890" className="text-gray-500 hover:text-gray-900">+1 (123) 456-7890</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 text-gray-400 mr-2" />
                <a href="mailto:info@opalaesthetics.com" className="text-gray-500 hover:text-gray-900">info@opalaesthetics.com</a>
              </li>
            </ul>*/}
            <ContactInfo/>
          </motion.div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col items-center text-center">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Subscribe to our newsletter</h3>
          {/*<p className="text-base text-gray-500 mb-4">Stay updated with our latest treatments and exclusive offers.</p>
          <form className="sm:flex">
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input
              id="email-address"
              name="email-address"
              type="email"
              autoComplete="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 sm:max-w-xs"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full bg-accent-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500"
              >
                Subscribe
              </button>
            </div>
          </form>*/}
          <Newsletter/>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-400">
              © {currentYear} Opal Aesthetics. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                {['Terms', 'Privacy', 'Cookies'].map((item) => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-gray-500">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


/* 
<footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Logo and Newsletter *//*}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <h3 className="font-playfair text-2xl font-bold">Opal</h3>
              <p className="text-gray-600 mt-2">
                Your destination for beauty and wellness excellence.
              </p>
            </div>
            <Newsletter />
            <SocialLinks />
          </motion.div>

          {/* Links Sections *//*}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <FooterLinks />
          </motion.div>

          {/* Contact Information *//*}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ContactInfo />
          </motion.div>
        </div>

        {/* Bottom Bar *//*}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {currentYear} Opal Medical Spa & Wellness Center. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-gray-600">
                <li>
                  <a href="/terms" className="hover:text-accent-600 transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-accent-600 transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/cookies" className="hover:text-accent-600 transition-colors">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer> */
/* "use client";

import { motion } from "framer-motion";
import { Newsletter } from "./newsletter";
import { SocialLinks } from "./social-links";
import { FooterLinks } from "./footer-links";
import { ContactInfo } from "./contact-info";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#d1c6b6] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Join Our Community Section *//*}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Join our community</h2>
            <p className="text-base mb-6">
              Stay up to date on exclusive deals, events, coupons, etc. Don’t
              worry, we won’t flood your inbox with silly emails. 😊
            </p>
            <Newsletter />
          </motion.div>

          {/* Quick Links Section *//*}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-between"
          >
            <FooterLinks />
          </motion.div>

          {/* Contact Section *//*}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ContactInfo />
          </motion.div>
        </div>

        {/* Bottom Bar *//*}
        <div className="mt-12 pt-8 border-t border-white">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {currentYear} Opal Aesthetics. All Rights Reserved.
            </p>
            <ul className="flex space-x-6 text-sm">
              <li>
                <a
                  href="/privacy"
                  className="hover:underline"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:underline"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};
*/