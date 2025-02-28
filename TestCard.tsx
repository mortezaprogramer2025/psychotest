import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Clock, ListChecks } from 'lucide-react';
import { Test } from '../types';

interface TestCardProps {
  test: Test;
}

const TestCard: React.FC<TestCardProps> = ({ test }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <img 
        src={test.imageUrl} 
        alt={t(test.title)} 
        className="w-full h-48 object-cover"
      />
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{t(test.title)}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{t(test.description)}</p>
        
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{test.timeMinutes} {t('tests.minutes')}</span>
          </div>
          <div className="flex items-center gap-1">
            <ListChecks size={16} />
            <span>{test.questionCount} {t('tests.questions')}</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Link 
            to={`/test/${test.id}`} 
            className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md text-center hover:bg-indigo-700 transition-colors"
          >
            {t('tests.start')}
          </Link>
          <Link 
            to={`/test/${test.id}/info`} 
            className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md text-center hover:bg-gray-300 transition-colors"
          >
            {t('tests.info')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestCard;