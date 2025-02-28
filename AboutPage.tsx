import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">{t('about.title')}</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-6">
              {t('about.content')}
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-yellow-700">
                {t('about.disclaimer')}
              </p>
            </div>
            
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">تیم ما</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">دکتر علی محمدی</h3>
                  <p className="text-gray-600 text-sm">روانشناس بالینی و مشاور ارشد</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">دکتر سارا احمدی</h3>
                  <p className="text-gray-600 text-sm">متخصص روانسنجی و آزمون‌های روانشناختی</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">مهندس محمد کریمی</h3>
                  <p className="text-gray-600 text-sm">مدیر فنی و توسعه‌دهنده نرم‌افزار</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">دکتر زهرا رضایی</h3>
                  <p className="text-gray-600 text-sm">مشاور علمی و پژوهشگر</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;