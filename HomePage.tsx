import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import TestCard from '../components/TestCard';
import { tests } from '../data/tests';

const HomePage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const popularTests = tests.slice(0, 3);
  const isRtl = i18n.language === 'fa';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('home.welcome')}</h1>
            <p className="text-xl mb-8">{t('home.intro')}</p>
            <Link 
              to="/tests" 
              className="inline-flex items-center gap-2 bg-white text-indigo-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              {t('home.all')}
              {isRtl ? <ArrowRight className="rtl:rotate-180" size={20} /> : <ArrowRight size={20} />}
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Tests Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('home.popular')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularTests.map(test => (
              <TestCard key={test.id} test={test} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/tests" 
              className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
            >
              {t('home.all')}
              {isRtl ? <ArrowRight className="rtl:rotate-180" size={20} /> : <ArrowRight size={20} />}
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-700 italic">{t('home.disclaimer')}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;