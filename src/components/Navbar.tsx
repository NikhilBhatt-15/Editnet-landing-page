"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-yellow-400">
              Edit<span className="text-white">net</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#features"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Testimonials
              </a>
              <Button
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                Sign In
              </Button>
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                Get Started
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-yellow-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-yellow-500/20">
            <a
              href="#features"
              className="block px-3 py-2 text-gray-300 hover:text-yellow-400"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-2 text-gray-300 hover:text-yellow-400"
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 text-gray-300 hover:text-yellow-400"
            >
              Testimonials
            </a>
            <div className="px-3 py-2 space-y-2">
              <Button
                variant="outline"
                className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                Sign In
              </Button>
              <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
