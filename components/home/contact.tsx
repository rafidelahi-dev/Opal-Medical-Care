"use client";

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contact us to schedule a consultation or learn more about our services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <ContactItem
              icon={<MapPin className="w-6 h-6" />}
              title="Visit Us"
              content="123 Wellness Street, Medical District, New York, NY 10001"
            />
            <ContactItem
              icon={<Phone className="w-6 h-6" />}
              title="Call Us"
              content={
                <a
                  href="tel:+1234567890"
                  className="hover:text-accent-600 transition-colors"
                >
                  (123) 456-7890
                </a>
              }
            />
            <ContactItem
              icon={<Mail className="w-6 h-6" />}
              title="Email Us"
              content={
                <a
                  href="mailto:info@opalspa.com"
                  className="hover:text-accent-600 transition-colors"
                >
                  info@opalspa.com
                </a>
              }
            />
            <ContactItem
              icon={<Clock className="w-6 h-6" />}
              title="Opening Hours"
              content={
                <>
                  Mon-Fri: 9:00 AM - 8:00 PM
                  <br />
                  Sat-Sun: 10:00 AM - 6:00 PM
                </>
              }
            />
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-accent-600 text-white px-6 py-3 rounded-md hover:bg-accent-700 transition-colors"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}) => (
  <div className="flex items-start gap-4">
    <div className="bg-accent-50 p-3 rounded-full text-accent-600">{icon}</div>
    <div>
      <h3 className="font-playfair text-lg font-semibold mb-2">{title}</h3>
      <div className="text-gray-600">{content}</div>
    </div>
  </div>
);