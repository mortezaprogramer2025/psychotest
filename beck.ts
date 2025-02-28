import { TestData, TestResult } from '../../types';

export const beckData: TestData = {
  id: 'beck',
  title: 'beck.title',
  description: 'beck.description',
  instructions: 'beck.instructions',
  questions: [
    {
      id: 1,
      text: 'احساس غمگینی',
      type: 'multiple-choice',
      options: [
        { id: 'a', text: 'من غمگین نیستم.', value: 0 },
        { id: 'b', text: 'اغلب اوقات غمگین هستم.', value: 1 },
        { id: 'c', text: 'همیشه غمگین هستم.', value: 2 },
        { id: 'd', text: 'آنقدر غمگین هستم که نمی‌توانم تحمل کنم.', value: 3 }
      ]
    },
    {
      id: 2,
      text: 'بدبینی نسبت به آینده',
      type: 'multiple-choice',
      options: [
        { id: 'a', text: 'من نسبت به آینده ناامید نیستم.', value: 0 },
        { id: 'b', text: 'نسبت به آینده بیشتر از قبل ناامید هستم.', value: 1 },
        { id: 'c', text: 'انتظار ندارم اوضاع برایم خوب پیش برود.', value: 2 },
        { id: 'd', text: 'احساس می‌کنم آینده ناامیدکننده است و اوضاع بهتر نخواهد شد.', value: 3 }
      ]
    },
    {
      id: 3,
      text: 'شکست‌های گذشته',
      type: 'multiple-choice',
      options: [
        { id: 'a', text: 'من احساس شکست‌خوردگی نمی‌کنم.', value: 0 },
        { id: 'b', text: 'بیشتر از آنچه باید شکست خورده‌ام.', value: 1 },
        { id: 'c', text: 'وقتی به گذشته نگاه می‌کنم، شکست‌های زیادی می‌بینم.', value: 2 },
        { id: 'd', text: 'احساس می‌کنم به عنوان یک فرد کاملاً شکست خورده‌ام.', value: 3 }
      ]
    },
    {
      id: 4,
      text: 'از دست دادن لذت',
      type: 'multiple-choice',
      options: [
        { id: 'a', text: 'از چیزهایی که دوست دارم، به همان اندازه قبل لذت می‌برم.', value: 0 },
        { id: 'b', text: 'از چیزها به اندازه قبل لذت نمی‌برم.', value: 1 },
        { id: 'c', text: 'از چیزهایی که قبلاً لذت می‌بردم، لذت بسیار کمی می‌برم.', value: 2 },
        { id: 'd', text: 'نمی‌توانم از چیزهایی که قبلاً لذت می‌بردم، هیچ لذتی ببرم.', value: 3 }
      ]
    },
    {
      id: 5,
      text: 'احساس گناه',
      type: 'multiple-choice',
      options: [
        { id: 'a', text: 'احساس گناه خاصی ندارم.', value: 0 },
        { id: 'b', text: 'برای بسیاری از کارهایی که انجام داده‌ام یا باید انجام می‌دادم، احساس گناه می‌کنم.', value: 1 },
        { id: 'c', text: 'اغلب اوقات احساس گناه می‌کنم.', value: 2 },
        { id: 'd', text: 'همیشه احساس گناه می‌کنم.', value: 3 }
      ]
    },
    {
      id: 6,
      text: 'احساس تنبیه شدن',
      type: 'multiple-choice',
      options: [
        { id: 'a', text: 'احساس نمی‌کنم که تنبیه می‌شوم.', value: 0 },
        { id: 'b', text: 'احساس می‌کنم ممکن است تنبیه شوم.', value: 1 },
        { id: 'c', text: 'انتظار دارم که تنبیه شوم.', value: 2 },
        { id: 'd', text: 'احساس می‌کنم در حال تنبیه شدن هستم.', value: 3 }
      ]
    },
    {
      id: 7,
      text: 'نارضایتی از خود',
      type: 'multiple-choice',
      options: [
        { id: 'a', text: 'همان احساسی را درباره خودم دارم که همیشه داشته‌ام.', value: 0 },
        { id: 'b', text: 'اعتماد به نفسم را از دست داده‌ام.', value: 1 },
        { id: 'c', text: 'از خودم ناامید شده‌ام.', value: 2 },
        { id: 'd', text: 'از خودم متنفرم.', value: 3 }
      ]
    }
    // در واقعیت، BDI دارای 21 سؤال است که به دلیل محدودیت فضا، فقط 7 سؤال نمونه آورده شده است
  ],
  scales: [
    {
      id: 'depression',
      name: 'افسردگی',
      description: 'میزان کلی افسردگی',
      minScore: 0,
      maxScore: 63
    }
  ],
  interpretations: [
    {
      scaleId: 'depression',
      rangeMin: 0,
      rangeMax: 9,
      text: 'افسردگی حداقل یا عدم وجود افسردگی',
      severity: 'low'
    },
    {
      scaleId: 'depression',
      rangeMin: 10,
      rangeMax: 18,
      text: 'افسردگی خفیف تا متوسط',
      severity: 'moderate'
    },
    {
      scaleId: 'depression',
      rangeMin: 19,
      rangeMax: 29,
      text: 'افسردگی متوسط تا شدید',
      severity: 'high'
    },
    {
      scaleId: 'depression',
      rangeMin: 30,
      rangeMax: 63,
      text: 'افسردگی شدید',
      severity: 'severe'
    }
  ],
  calculateResults: (answers: Record<number, string>): TestResult => {
    // Calculate total score
    let totalScore = 0;
    const questionCount = 7; // در نسخه واقعی 21 سوال است
    const maxPossibleScore = questionCount * 3; // هر سوال حداکثر 3 امتیاز دارد
    
    Object.entries(answers).forEach(([questionId, answerId]) => {
      const question = beckData.questions.find(q => q.id === parseInt(questionId));
      if (question && question.options) {
        const option = question.options.find(o => o.id === answerId);
        if (option && option.value !== undefined) {
          totalScore += option.value;
        }
      }
    });
    
    // Find interpretation based on total score
    const interpretation = beckData.interpretations?.find(
      i => totalScore >= i.rangeMin && totalScore <= i.rangeMax
    );
    
    return {
      scores: {
        depression: totalScore
      },
      totalScore,
      maxPossibleScore,
      interpretations: {
        depression: {
          text: interpretation?.text || 'نتیجه نامشخص',
          severity: interpretation?.severity
        }
      },
      summary: `نمره کل شما در پرسشنامه افسردگی بک ${totalScore} از ${maxPossibleScore} است که نشان‌دهنده ${interpretation?.text || 'وضعیت نامشخص'} می‌باشد.`
    };
  }
};