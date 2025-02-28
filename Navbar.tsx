import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Brain } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-indigo-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <Brain size={24} />
            <span>{t('app.title')}</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md ${isActive('/') ? 'bg-indigo-700' : 'hover:bg-indigo-800'} transition-colors`}
              >
                {t('nav.home')}
              </Link>
              <Link 
                to="/tests" 
                className={`px-3 py-2 rounded-md ${isActive('/tests') ? 'bg-indigo-700' : 'hover:bg-indigo-800'} transition-colors`}
              >
                {t('nav.tests')}
              </Link>
              <Link 
                to="/about" 
                className={`px-3 py-2 rounded-md ${isActive('/about') ? 'bg-indigo-700' : 'hover:bg-indigo-800'} transition-colors`}
              >
                {t('nav.about')}
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-2 rounded-md ${isActive('/contact') ? 'bg-indigo-700' : 'hover:bg-indigo-800'} transition-colors`}
              >
                {t('nav.contact')}
              </Link>
            </div>
            
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;