import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Download, Share2, AlertTriangle } from 'lucide-react';
import { testDataMap } from '../data/testData';

const TestResultsPage: React.FC = () => {
  const { testId } = useParams<{ testId: string }>();
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isRtl = i18n.language === 'fa';
  
  const testData = testId ? testDataMap[testId as keyof typeof testDataMap] : undefined;
  const answers = location.state?.answers as Record<number, string> || {};
  
  if (!testData) {
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

  // محاسبه نتایج آزمون
  const results = testData.calculateResults ? testData.calculateResults(answers) : null;
  
  // تعیین رنگ برای هر سطح شدت
  const getSeverityColor = (severity?: 'low' | 'moderate' | 'high' | 'severe') => {
    switch (severity) {
      case 'low':
        return 'bg-green-600';
      case 'moderate':
        return 'bg-yellow-500';
      case 'high':
        return 'bg-orange-500';
      case 'severe':
        return 'bg-red-600';
      default:
        return 'bg-gray-500';
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Link 
            to="/tests" 
            className="inline-flex items-center gap-2 text-indigo-600 mb-6 hover:text-indigo-800"
          >
            {isRtl ? <ArrowLeft className="rtl:rotate-180" size={20} /> : <ArrowLeft size={20} />}
            {t('test.back')}
          </Link>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">{t('test.results')}</h1>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">{t(testData.title)}</h2>
              
              {results ? (
                <>
                  {/* خلاصه نتایج */}
                  {results.summary && (
                     <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-6">
                      <p className="text-indigo-900">{results.summary}</p>
                    </div>
                  )}
                  
                  {/* نمایش نمره کلی (اگر وجود داشته باشد) */}
                  {results.totalScore !== undefined && results.maxPossibleScore !== undefined && (
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">نمره کلی</h3>
                      <div className="flex items-center gap-4">
                        <div className="w-full bg-gray-200 rounded-full h-4">
                          <div 
                            className={`h-4 rounded-full ${getSeverityColor(
                              Object.values(results.interpretations)[0]?.severity
                            )}`} 
                            style={{ width: `${(results.totalScore / results.maxPossibleScore) * 100}%` }}
                          ></div>
                        </div>
                        <span className="font-bold whitespace-nowrap">
                          {results.totalScore} / {results.maxPossibleScore}
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {/* نمایش نمرات مقیاس‌ها */}
                  <div className="bg-gray-100 p-6 rounded-lg mb-6">
                    <h3 className="font-semibold mb-4">نمرات مقیاس‌ها</h3>
                    
                    {Object.entries(results.scores).map(([scaleId, score]) => {
                      const scale = testData.scales?.find(s => s.id === scaleId);
                      const interpretation = results.interpretations[scaleId];
                      
                      return (
                        <div key={scaleId} className="mb-4 last:mb-0">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">{scale?.name || scaleId}</span>
                            <span>{score}{scale?.maxScore ? `/${scale.maxScore}` : ''}</span>
                          </div>
                          <div className="w-full bg-gray-300 rounded-full h-2.5 mb-1">
                            <div 
                              className={`h-2.5 rounded-full ${getSeverityColor(interpretation?.severity)}`} 
                              style={{ width: `${scale?.maxScore ? (score / scale.maxScore) * 100 : score}%` }}
                            ></div>
                          </div>
                          <p className="text-sm text-gray-600">{interpretation?.text}</p>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* تفسیر نتایج */}
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="font-semibold mb-2">تفسیر نتایج</h3>
                    
                    {Object.entries(results.interpretations).map(([scaleId, interpretation]) => {
                      const scale = testData.scales?.find(s => s.id === scaleId);
                      
                      return (
                        <div key={scaleId} className="mb-4 last:mb-0">
                          <h4 className="font-medium">{scale?.name || scaleId}</h4>
                          <p className="text-gray-700">{interpretation.text}</p>
                        </div>
                      );
                    })}
                    
                    <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <div className="flex items-start">
                        <AlertTriangle className="text-yellow-500 mt-0.5 mr-2" size={20} />
                        <p className="text-yellow-700 text-sm">
                          توجه: این نتایج صرفاً جنبه آگاهی‌بخشی دارد و برای تفسیر دقیق‌تر، توصیه می‌شود با یک متخصص روانشناسی مشورت کنید.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">اطلاعات کافی برای نمایش نتایج وجود ندارد.</p>
                </div>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                <Download size={20} />
                دانلود نتایج
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
                <Share2 size={20} />
                اشتراک‌گذاری
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestResultsPage;