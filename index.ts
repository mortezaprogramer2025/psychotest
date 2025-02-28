export interface Test {
  id: string;
  title: string;
  description: string;
  category: string;
  timeMinutes: number;
  questionCount: number;
  imageUrl: string;
}

export interface Question {
  id: number;
  text: string;
  options?: {
    id: string;
    text: string;
    value?: number;
  }[];
  type: 'true-false' | 'multiple-choice';
}

export interface TestData {
  id: string;
  title: string;
  description: string;
  instructions: string;
  questions: Question[];
  scales?: Scale[];
  interpretations?: Interpretation[];
  calculateResults?: (answers: Record<number, string>) => TestResult;
}

export interface Scale {
  id: string;
  name: string;
  description: string;
  minScore: number;
  maxScore: number;
}

export interface Interpretation {
  scaleId: string;
  rangeMin: number;
  rangeMax: number;
  text: string;
  severity?: 'low' | 'moderate' | 'high' | 'severe';
}

export interface TestResult {
  scores: {
    [key: string]: number;
  };
  totalScore?: number;
  maxPossibleScore?: number;
  interpretations: {
    [key: string]: {
      text: string;
      severity?: 'low' | 'moderate' | 'high' | 'severe';
    };
  };
  summary?: string;
}