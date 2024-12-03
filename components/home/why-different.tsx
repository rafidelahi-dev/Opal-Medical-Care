"use client";

import { motion } from 'framer-motion';
import { Award, Users, Leaf, Shield } from 'lucide-react';

export const WhyDifferent = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expert Team",
      description: "Our certified professionals bring years of experience and expertise.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Personalized Care",
      description: "Tailored treatments designed to meet your unique needs and goals.",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Natural Approach",
      description: "Combining modern techniques with natural healing principles.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety First",
      description: "State-of-the-art facilities with the highest safety standards.",
    },
  ];

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
            Why Choose Opal
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine expertise, innovation, and personalized care to deliver
            exceptional results for our clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="bg-accent-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-accent-600 mb-6">
                {feature.icon}
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};