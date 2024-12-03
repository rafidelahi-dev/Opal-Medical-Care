"use client";

import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const ServiceOptions = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Choose Your Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're seeking aesthetic enhancement or holistic well-being,
            we offer specialized services tailored to your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard
            title="Aesthetic Beauty"
            description="Transform your appearance with our advanced skincare treatments and aesthetic procedures."
            image="https://images.unsplash.com/photo-1619451427882-6aaaded0cc61?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            icon={<Sparkles className="w-6 h-6" />}
            href="/aesthetic"
          />
          <ServiceCard
            title="Holistic Well-being"
            description="Nurture your body and mind with our comprehensive wellness treatments and therapies."
            image="https://media.istockphoto.com/id/1049788076/photo/lace-up-and-make-your-way-to-the-end.jpg?s=1024x1024&w=is&k=20&c=eOTWtQhJDm9UNLQnXEwnEDP0Kn8iUMvGlVV161gEYig="
            icon={<Heart className="w-6 h-6" />}
            href="/wellbeing"
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({
  title,
  description,
  image,
  icon,
  href,
}: {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  href: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={href}>
        <div className="relative group overflow-hidden rounded-2xl">
          <div className="relative h-[400px]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-50" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
            <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm mb-4">
              {icon}
            </div>
            <h3 className="font-playfair text-3xl font-bold mb-3">{title}</h3>
            <p className="text-center max-w-md">{description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};