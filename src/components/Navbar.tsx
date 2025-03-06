
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Problem", href: "#problem" },
    { label: "Features", href: "#features" },
    { label: "About", href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
    { label: "FAQ", href: "#faq" },
  ];

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-scout-cream/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <span className="text-scout-olive font-display text-2xl font-bold">
            Scout<span className="text-scout-brown">X</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-scout-dark-olive hover:text-scout-brown font-medium transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
          <a
            href="#contact"
            className="bg-scout-olive hover:bg-scout-dark-olive text-white px-6 py-2 rounded-md font-medium transition-colors duration-300"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-scout-dark-olive"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-scout-cream absolute top-full left-0 right-0 py-6 px-4 shadow-lg animate-slideInRight">
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-scout-dark-olive hover:text-scout-brown font-medium py-2 transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <a
              href="#contact"
              className="bg-scout-olive hover:bg-scout-dark-olive text-white py-3 rounded-md font-medium text-center transition-colors duration-300"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
