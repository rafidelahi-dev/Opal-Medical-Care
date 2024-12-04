"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const NavLinkWithDropdown = ({ 
  name, 
  items 
}: { 
  name: string; 
  items: { title: string; href: string }[] 
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative group">
      <button 
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center space-x-1 text-sm tracking-wider 
        relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 
        after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 
        hover:after:w-full after:transition-all duration-300 
        md:hover:after:w-full"
      >
        <span>{name}</span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform 
          ${isDropdownOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {/* Desktop Dropdown */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: isDropdownOpen ? 1 : 0, 
          y: isDropdownOpen ? 0 : -10 
        }}
        transition={{ duration: 0.2 }}
        className="hidden md:block absolute left-0 mt-4 w-48 bg-white 
        shadow-lg rounded-lg overflow-hidden z-50"
        style={{ 
          visibility: isDropdownOpen ? 'visible' : 'hidden',
          pointerEvents: isDropdownOpen ? 'auto' : 'none'
        }}
      >
        <div className="py-1">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 
              hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 
              transition-colors duration-200"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-4 py-2">
              {items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block py-2 text-sm text-gray-700 
                  hover:text-blue-600 transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const treatmentItems = [
    { title: "Treatment 1", href: "/treatments/1" },
    { title: "Treatment 2", href: "/treatments/2" },
    { title: "Treatment 3", href: "/treatments/3" },
  ];

  const conditionItems = [
    { title: "Condition 1", href: "/conditions/1" },
    { title: "Condition 2", href: "/conditions/2" },
    { title: "Condition 3", href: "/conditions/3" },
  ];

  const resourceItems = [
    { title: "Resource 1", href: "/resources/1" },
    { title: "Resource 2", href: "/resources/2" },
    { title: "Resource 3", href: "/resources/3" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 
      ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      {/* Desktop Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden lg:block">
        <div className="flex justify-between items-center h-20">
          {/* Left Menu */}
          <div className="flex items-center space-x-12">
            <NavLinkWithDropdown name="TREATMENT" items={treatmentItems} />
            <NavLinkWithDropdown name="CONDITIONS" items={conditionItems} />
            <NavLinkWithDropdown name="RESOURCES" items={resourceItems} />
          </div>

          {/* Center Logo */}
          <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <div className="w-8 h-8 mb-1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
                <path 
                  d="M12 2L2 12L12 22L22 12L12 2Z" 
                  strokeWidth="1" 
                />
              </svg>
            </div>
            <div className="font-light text-xl tracking-widest">OPAL</div>
            <div className="text-xs tracking-wider">AESTHETICS</div>
          </Link>

          {/* Right Menu */}
          <div className="flex items-center space-x-12">
            <Link 
              href="/about" 
              className="text-sm tracking-wider group relative
              after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 
              after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 
              hover:after:w-full after:transition-all duration-300"
            >
              ABOUT
            </Link>
            <Link 
              href="/contact" 
              className="text-sm tracking-wider group relative
              after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 
              after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 
              hover:after:w-full after:transition-all duration-300"
            >
              CONTACT
            </Link>
            <Link 
              href="/book" 
              className="text-sm tracking-wider border border-black px-6 py-2 
              hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 
              hover:text-white hover:border-transparent transition-all duration-300"
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden">
        <div className="flex justify-between items-center p-4">
          {/* Mobile Logo */}
          <Link href="/" className="flex flex-col items-center">
            <div className="w-6 h-6 mb-1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
                <path 
                  d="M12 2L2 12L12 22L22 12L12 2Z" 
                  strokeWidth="1" 
                />
              </svg>
            </div>
            <div className="font-light text-sm tracking-widest">OPAL</div>
            <div className="text-xs tracking-wider">AESTHETICS</div>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="z-50"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-white z-40 pt-20 px-6"
            >
              <div className="flex flex-col space-y-6">
                <NavLinkWithDropdown name="TREATMENT" items={treatmentItems} />
                <NavLinkWithDropdown name="CONDITIONS" items={conditionItems} />
                <NavLinkWithDropdown name="RESOURCES" items={resourceItems} />
                
                <Link 
                  href="/about" 
                  className="text-sm tracking-wider py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ABOUT
                </Link>
                <Link 
                  href="/contact" 
                  className="text-sm tracking-wider py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTACT
                </Link>
                <Link 
                  href="/book" 
                  className="text-sm tracking-wider border border-black px-6 py-3 text-center 
                  hover:bg-black hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  BOOK NOW
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}