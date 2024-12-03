"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const BeforeAfter = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const results = [
    {
      title: "Skin Rejuvenation",
      images: [
        {
          before: "https://img.freepik.com/free-photo/detailed-red-grunge-background-with-splats-stains_1048-12956.jpg",
          after: "https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-54581.jpg",
        },
        {
          before: "https://img.freepik.com/free-photo/texture-surface-old-red-brick-wall_7180-2091.jpg",
          after: "https://img.freepik.com/free-photo/modern-white-background-with-soft-shiny-graphic_53876-125336.jpg",
        },
      ],
    },
    {
      title: "Body Contouring",
      images: [
        {
          before: "https://img.freepik.com/free-photo/brown-concrete-wall-with-scratches-vector_53876-143109.jpg",
          after: "https://img.freepik.com/free-photo/beautiful-green-texture-with-raindrops_24972-154.jpg",
        },
        {
          before: "https://img.freepik.com/free-photo/vintage-textured-background-stone-bricks_53876-150263.jpg",
          after: "https://img.freepik.com/free-photo/abstract-soft-blue-gradient-blur-background_1150-20157.jpg",
        },
      ],
    },
  ];

  const currentCategory = results[activeCategoryIndex];
  const currentImages = currentCategory.images[activeImageIndex];

  const handleNextImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex < currentCategory.images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : currentCategory.images.length - 1
    );
  };

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
            Transformation Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See the remarkable results our clients have achieved through our
            treatments and services.
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          {/* Category Buttons */}
          <div className="flex space-x-4 mb-8">
            {results.map((result, index) => (
              <button
                key={result.title}
                onClick={() => {
                  setActiveCategoryIndex(index);
                  setActiveImageIndex(0); // Reset slider on category change
                }}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategoryIndex === index
                    ? "bg-accent-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {result.title}
              </button>
            ))}
          </div>

          {/* Image Slider */}
          <motion.div
            key={`${activeCategoryIndex}-${activeImageIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl w-full"
          >
            <div className="space-y-4">
              <h3 className="font-playfair text-xl font-semibold text-center">
                Before
              </h3>
              <div className="aspect-square w-full relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={currentImages.before}
                  alt="Before treatment"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-playfair text-xl font-semibold text-center">
                After
              </h3>
              <div className="aspect-square w-full relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={currentImages.after}
                  alt="After treatment"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </motion.div>

          {/* Slider Controls */}
          <div className="flex items-center justify-center space-x-4 mt-6">
            <button
              onClick={handlePrevImage}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
            >
              ←
            </button>
            <button
              onClick={handleNextImage}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
