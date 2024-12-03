"use client";

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What treatments do you offer?",
      answer: "We offer a comprehensive range of aesthetic and wellness treatments, including skin rejuvenation, body contouring, facial treatments, massage therapy, and holistic wellness services.",
    },
    {
      question: "How long do treatments typically take?",
      answer: "Treatment duration varies depending on the service. Most facial treatments take 60-90 minutes, while body treatments can range from 30 minutes to 2 hours.",
    },
    {
      question: "Is there any downtime after treatments?",
      answer: "Downtime varies by treatment. Some services have no downtime, while others may require a few days of recovery. We'll discuss this during your consultation.",
    },
    {
      question: "Do you offer consultations?",
      answer: "Yes, we offer complimentary consultations to discuss your goals and create a personalized treatment plan tailored to your needs.",
    },
  ];

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
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and treatments.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};