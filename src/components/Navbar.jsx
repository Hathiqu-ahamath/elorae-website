import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <header className="sticky top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-editorial">
      <nav className="flex justify-between items-center px-4 md:px-6 py-3 md:py-4 w-full max-w-7xl mx-auto">
        <button 
          className="md:hidden text-primary hover:opacity-70 transition-opacity p-2 -ml-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
        
        <Link to="/" className="font-headline text-xl md:text-2xl font-light tracking-tighter text-primary uppercase">
          ELORAE.MODEST
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative font-label text-xs tracking-[0.2em] uppercase transition-all duration-300 group ${
                isActive(link.path) ? 'text-primary' : 'text-stone-500 hover:text-stone-700'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-primary transition-all duration-300 ${
                isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
        </div>
        
        <button className="text-primary hover:opacity-70 transition-opacity p-2 -mr-2">
          <span className="material-symbols-outlined">shopping_bag</span>
        </button>
      </nav>
      
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface border-t border-outline-variant/20 shadow-editorial">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-label text-sm tracking-[0.2em] uppercase py-3 border-b border-outline-variant/10 transition-all ${
                  isActive(link.path) ? 'text-primary' : 'text-stone-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
