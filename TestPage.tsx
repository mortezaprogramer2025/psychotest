import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight, AlertTriangle } from 'lucide-react';
import TestQuestion from '../components/TestQuestion';
import { testDataMap } from '../data/testData';

const TestPage: React.FC = () => {
  const { testId } = useParams<{ testId: string }>();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRtl = i18n.language === 'fa';
  
  const testData = testId ? testDataMap[testId as keyof typeof testDataMap] : undefined;
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showInstructions, setShowInstructions] = useState(true);
  
  useEffect(() => {
    // Reset state when test changes
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowInstructions(true);
  }, [testId]);
  
  if (!testData) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">آزمون یافت نشد</h1>
          <button 
            onClick={() => navigate('/tests')}
            className="text-indigo-600 hover:text-indigo-800"
          >
            بازگشت به لیست آزمون‌ها
          </button>
        </div>
      </div>
    );
  }
  
  const currentQuestion = testData.questions[currentQuestionIndex];
  const totalQuestions = testData.questions.length;
  
  const handleAnswerChange = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };
  
  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };
  
  const handleSubmit = () => {
    // Navigate to results page with answers
    navigate(`/test/${testId}/results`, { state: { answers } });
  };
  
  const startTest = () => {
    setShowInstructions(false);
  };
  
  const progressPercentage = (Object.keys(answers).length / totalQuestions) * 100;
  
  if (showInstructions) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">{t(testData.title)}</h1>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">{t('test.instructions')}</h2>
              <p className="text-gray-700 mb-4">{t(testData.instructions)}</p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                <div className="flex">
                  <AlertTriangle className="text-yellow-500 mt-0.5 mr-2" size={20} />
                  <p className="text-yellow-700 text-sm">
                    لطفاً به تمام سؤالات با دقت و صداقت پاسخ دهید. نتایج این آزمون صرفاً جنبه آگاهی‌بخشی دارد و جایگزین مشاوره تخصصی با روانشناس یا روانپزشک نیست.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button 
                onClick={startTest}
                className="bg-indigo-600 text-white py-3 px-8 rounded-md font-medium hover:bg-indigo-700 transition-colors"
              >
                {t('test.start')}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">{t(testData.title)}</h1>
            
            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
              <div 
                className="bg-indigo-600 h-2.5 rounded-full" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="text-sm text-gray-500">
              {Object.keys(answers).length} / {totalQuestions} {t('tests.questions')}
            </div>
          </div>
          
          <TestQuestion
            question={currentQuestion}
            currentAnswer={answers[currentQuestion.id] || null}
            onAnswerChange={handleAnswerChange}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={totalQuestions}
          />
          
          <div className="mt-6 flex justify-between">
            <button
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                currentQuestionIndex === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              } transition-colors`}
            >
              {isRtl ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
              {t('test.prev')}
            </button>
            
            {currentQuestionIndex === totalQuestions - 1 ? (
              <button
                onClick={handleSubmit}
                disabled={Object.keys(answers).length !== totalQuestions}
                className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                  Object.keys(answers).length !== totalQuestions
                    ? 'bg-indigo-400 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700'
                } text-white transition-colors`}
              >
                {t('test.submit')}
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                {t('test.next')}
                {isRtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;