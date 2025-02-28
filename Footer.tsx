import React from 'react';
import { useTranslation } from 'react-i18next';
import { Brain } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 text-xl font-bold mb-4 md:mb-0">
            <Brain size={24} />
            <span>{t('app.title')}</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-indigo-400 transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>© {currentYear} {t('app.title')} - {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;