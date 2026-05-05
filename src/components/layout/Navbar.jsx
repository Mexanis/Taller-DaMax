import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Car, Droplets, PenTool, Wrench, Globe } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  const navLinks = [
    { name: t('nav.washing'), to: '/lavado', icon: <Droplets size={18} /> },
    { name: t('nav.painting'), to: '/chapa-pintura', icon: <PenTool size={18} /> },
    { name: t('nav.mechanical'), to: '/mecanica', icon: <Wrench size={18} /> },
    { name: t('nav.selling'), to: '/venta', icon: <Car size={18} /> },
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-logo">DM</span>
          <span className="brand-text">DaMax Autoservice</span>
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-menu desktop-only">
          {navLinks.map((link, idx) => (
            <Link key={idx} to={link.to} className="nav-link">
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle hide-desktop" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu hide-desktop">
          {navLinks.map((link, idx) => (
            <Link key={idx} to={link.to} className="mobile-nav-link" onClick={() => setIsOpen(false)}>
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
          {/* Temporarily hidden language toggle 
          <button className="mobile-nav-link lang-toggle" onClick={toggleLanguage}>
            <Globe size={18} />
            <span>Switch Language ({i18n.language.toUpperCase()})</span>
          </button>
          */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
