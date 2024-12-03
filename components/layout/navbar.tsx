"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronUp, ChevronDown } from 'lucide-react';

const NavLinkWithDropdown = ({ 
  name, 
  items 
}: { 
  name: string; 
  items: { title: string; href: string }[] 
}) => {
  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 text-sm tracking-wider">
        <span>{name}</span>
        <ChevronDown className="w-4 h-4 transition-transform group-hover:hidden" />
        <ChevronUp className="w-4 h-4 transition-transform hidden group-hover:block" />
      </button>
      <div className="absolute left-0 mt-2 w-48 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-lg">
        <div className="py-2">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="text-sm tracking-wider hover:text-gray-600 transition-colors"
            >
              ABOUT
            </Link>
            <Link 
              href="/contact" 
              className="text-sm tracking-wider hover:text-gray-600 transition-colors"
            >
              CONTACT
            </Link>
            <Link 
              href="/book" 
              className="text-sm tracking-wider border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors"
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
