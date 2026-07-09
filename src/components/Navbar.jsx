import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Use case", href: "/#use-case" },
    { name: "Features", href: "/#features" },
    { name: "Contact Sales", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <Sparkles className="h-6 w-6 text-slate-800" />
            <span className="font-bold text-xl tracking-tight text-slate-900">MeetMind</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center">
            <Link
              to="/dashboard"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF7A85] to-[#B06AB3] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 hover:text-slate-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <Link
                  to="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-4 py-3 text-center text-sm font-semibold rounded-xl bg-gradient-to-r from-[#FF7A85] to-[#B06AB3] text-white shadow-md"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}