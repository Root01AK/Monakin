"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image"

const Navbar = () => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Animate navbar on load
    if (navRef.current) {
      gsap.fromTo(navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  const solutions = [
    { name: "Monetapay", href: "/solutions#monetapay" },
    { name: "Smart Finance", href: "/solutions#smart-finance" },
    { name: "Finance-as-a-Service (FaaS)", href: "/solutions#faas" },
    { name: "Digital Development Services", href: "/solutions#digital-development" },
  ];

  const navLinks = [
    { name: "Solutions", href: "/solutions", hasDropdown: true },
    { name: "Use Cases", href: "/use-cases" },
    { name: "Technology", href: "/technology" },
    { name: "Customers", href: "/customers" },
    { name: "Get Started", href: "/get-started" },
  ];

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* Logo Image */}
            <Image
              src="/logo.png"   // or /logo.png
              alt="Monakin logo"
              width={100}
              height={100}
              priority
            />

            {/* Brand Text */}
            {/* <div className="text-2xl font-bold text-black">
              <span className="text-cyan-500">Mona</span>kin
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="flex items-center space-x-1 text-gray-700 hover:text-black cursor-pointer transition-colors"
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                  >
                    <Link href={link.href} className="font-medium">
                      {link.name}
                    </Link>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="font-medium text-gray-700 hover:text-black transition-colors"
                  >
                    {link.name}
                  </Link>
                )}

                {/* Solutions Dropdown */}
                {link.hasDropdown && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-64 glass-card rounded-xl overflow-hidden transition-all duration-300 ${isSolutionsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                  >
                    {solutions.map((solution) => (
                      <Link
                        key={solution.name}
                        href={solution.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-white/10 hover:text-black transition-colors"
                      >
                        {solution.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="py-4 space-y-2 border-t border-gray-200">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="block px-4 py-2 text-gray-700 hover:text-black hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-8 space-y-1">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.name}
                        href={solution.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {solution.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;