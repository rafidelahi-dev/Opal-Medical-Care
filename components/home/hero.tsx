"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://media.istockphoto.com/id/1026367516/photo/doctor-talking-to-the-patient-about-menopause-and-treatment-in-future.jpg?s=1024x1024&w=is&k=20&c=hu5JiOE-R3wkZuqpQMIq2LY8rw6R8zJS8wl2dfU94_E="
        alt="Spa background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-playfair text-5xl md:text-7xl font-bold mb-6"
        >
          Beauty & Wellness
          <br />
          in Perfect Harmony
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          Experience the perfect blend of aesthetic beauty and holistic well-being
          at Opal Medical Spa & Wellness Center
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 
              hover:text-white transition-all duration-500">
            Book Consultation
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white flex justify-center p-2">
          <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1 h-1 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </div>
  );
};