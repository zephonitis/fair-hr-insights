
import React from "react";
import { Linkedin, Twitter, Facebook, Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-scout-dark-olive text-scout-cream py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-scout-cream font-display text-3xl font-bold">
                Scout<span className="text-scout-tan">X</span>
              </span>
            </div>
            <p className="text-scout-cream/70">
              Transforming recruitment with AI-powered application screening that's reliable, fair, and swift.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-scout-cream/70 hover:text-scout-tan transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-scout-cream/70 hover:text-scout-tan transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-scout-cream/70 hover:text-scout-tan transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-scout-cream/70 hover:text-scout-tan transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Product</h3>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="text-scout-cream/70 hover:text-scout-tan transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-scout-cream/70 hover:text-scout-tan transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-scout-cream/70 hover:text-scout-tan transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-scout-cream/70 hover:text-scout-tan transition-colors">
                  API Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#about" className="text-scout-cream/70 hover:text-scout-tan transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-scout-cream/70 hover:text-scout-tan transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-scout-cream/70 hover:text-scout-tan transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-scout-cream/70 hover:text-scout-tan transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <a href="#contact" className="text-scout-cream/70 hover:text-scout-tan transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#faq" className="text-scout-cream/70 hover:text-scout-tan transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-scout-cream/70 hover:text-scout-tan transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-scout-cream/70 hover:text-scout-tan transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-scout-cream/70 hover:text-scout-tan transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-scout-cream/10 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-scout-cream/60 mb-4 md:mb-0">
            &copy; {currentYear} ScoutX. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-scout-cream/70 hover:text-scout-tan transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
