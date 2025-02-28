import React from 'react';
import { useTranslation } from 'react-i18next';
import { Question } from '../types';

interface TestQuestionProps {
  question: Question;
  currentAnswer: string | null;
  onAnswerChange: (answer: string) => void;
  questionNumber: number;
  totalQuestions: number;
}

const TestQuestion: React.FC<TestQuestionProps> = ({
  question,
  currentAnswer,
  onAnswerChange,
  questionNumber,
  totalQuestions
}) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4 text-sm text-gray-500">
        {t('test.question')} {questionNumber} {t('test.of')} {totalQuestions}
      </div>
      
      <h3 className="text-xl font-medium mb-6">{question.text}</h3>
      
      {question.type === 'true-false' ? (
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-3 p-4 border rounded-md cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name={`question-${question.id}`}
              value="true"
              checked={currentAnswer === 'true'}
              onChange={() => onAnswerChange('true')}
              className="w-5 h-5 text-indigo-600"
            />
            <span>{t('test.true')}</span>
          </label>
          
          <label className="flex items-center gap-3 p-4 border rounded-md cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name={`question-${question.id}`}
              value="false"
              checked={currentAnswer === 'false'}
              onChange={() => onAnswerChange('false')}
              className="w-5 h-5 text-indigo-600"
            />
            <span>{t('test.false')}</span>
          </label>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {question.options?.map((option) => (
            <label 
              key={option.id} 
              className="flex items-center gap-3 p-4 border rounded-md cursor-pointer hover:bg-gray-50"
            >
              <input
                type="radio"
                name={`question-${question.id}`}
                value={option.id}
                checked={currentAnswer === option.id}
                onChange={() => onAnswerChange(option.id)}
                className="w-5 h-5 text-indigo-600"
              />
              <span>{option.text}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestQuestion;