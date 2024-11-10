"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full h-20 shadow-xl bg-white z-50">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <div className="relative w-[100px] h-[100px]">
            <Image
              src="/images/mzscodew.png" 
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <ul className="flex items-center space-x-8">
            <li>
              <Link 
                href="/" 
                className="text-gray-800 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/skills" 
                className="text-gray-800 hover:text-blue-600 transition-colors"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="text-gray-800 hover:text-blue-600 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="text-gray-800 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg">
          <ul className="flex flex-col py-4">
            <li>
              <Link 
                href="/" 
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/skills" 
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
