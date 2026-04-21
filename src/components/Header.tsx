import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '../constants';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex flex-col items-center group">
          <span className="font-serif text-2xl tracking-[0.2em] uppercase text-brand-text group-hover:text-brand-accent transition-colors">
            Flower Atelier
          </span>
          <span className="text-[10px] tracking-[0.3em] font-medium text-brand-muted mt-0.5">
            플라워아틀리에
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-wider text-brand-muted hover:text-brand-accent transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-brand-text p-2" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl p-8 flex flex-col items-center space-y-6 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-brand-text hover:text-brand-accent transition-colors uppercase tracking-widest"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CONTACT_INFO.kakaotalk}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center items-center gap-3 bg-brand-accent text-white py-4 rounded-xl font-bold shadow-lg shadow-brand-accent/20"
            >
              <MessageCircle size={20} />
              카카오톡으로 주문하기
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
