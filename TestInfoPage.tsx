import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Clock, ListChecks, ArrowLeft } from 'lucide-react';
import { tests } from '../data/tests';
import { testDataMap } from '../data/testData';

const TestInfoPage: React.FC = () => {
  const { testId } = useParams<{ testId: string }>();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'fa';
  
  const test = tests.find(t => t.id === testId);
  const testData = testId ? testDataMap[testId as keyof typeof testDataMap] : undefined;
  
  if (!test || !testData) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">آزمون یافت نشد</h1>
          <Link to="/tests" className="text-indigo-600 hover:text-indigo-800">
            بازگشت به لیست آزمون‌ها
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/tests" 
            className="inline-flex items-center gap-2 text-indigo-600 mb-6 hover:text-indigo-800"
          >
            {isRtl ? <ArrowLeft className="rtl:rotate-180" size={20} /> : <ArrowLeft size={20} />}
            {t('test.back')}
          </Link>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={test.imageUrl} 
              alt={t(test.title)} 
              className="w-full h-64 object-cover"
            />
            
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-4">{t(test.title)}</h1>
              
              <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock size={18} />
                  <span>{test.timeMinutes} {t('tests.minutes')}</span>
                </div>
                <div className="flex items-center gap-1">
                  <ListChecks size={18} />
                  <span>{test.questionCount} {t('tests.questions')}</span>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">{t('test.description')}</h2>
                <p className="text-gray-700">{t(test.description)}</p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">{t('test.instructions')}</h2>
                <p className="text-gray-700">{t(testData.instructions)}</p>
              </div>
              
              <div className="text-center">
                <Link 
                  to={`/test/${test.id}`} 
                  className="inline-block bg-indigo-600 text-white py-3 px-8 rounded-md font-medium hover:bg-indigo-700 transition-colors"
                >
                  {t('test.start')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestInfoPage;