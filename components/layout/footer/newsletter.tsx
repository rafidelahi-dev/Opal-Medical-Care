"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  return (
    <div className="mb-8">
      <h4 className="font-playfair text-lg font-semibold mb-4">Newsletter</h4>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          id="email-address"
          name="email-address"
          type="email"
          autoComplete="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 sm:max-w-xs"
          placeholder="Enter your email"
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-accent-600 text-white px-4 py-2 rounded-md hover:bg-accent-700 transition-colors"
        >
          Subscribe
        </motion.button>
      </form>
    </div>
  );
};