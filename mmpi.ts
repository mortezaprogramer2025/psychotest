import { TestData, TestResult } from '../../types';

export const mmpiData: TestData = {
  id: 'mmpi',
  title: 'mmpi.title',
  description: 'mmpi.description',
  instructions: 'mmpi.instructions',
  questions: [
    {
      id: 1,
      text: 'من از مطالعه مجلات مکانیک لذت می‌برم.',
      type: 'true-false'
    },
    {
      id: 2,
      text: 'من اشتهای خوبی دارم.',
      type: 'true-false'
    },
    {
      id: 3,
      text: 'من هر صبح با انرژی از خواب بیدار می‌شوم.',
      type: 'true-false'
    },
    {
      id: 4,
      text: 'اگر پزشک بودم، از جراحی لذت می‌بردم.',
      type: 'true-false'
    },
    {
      id: 5,
      text: 'من اغلب دچار سردرد می‌شوم.',
      type: 'true-false'
    },
    {
      id: 6,
      text: 'من گاهی اوقات احساس می‌کنم که می‌خواهم فحش بدهم.',
      type: 'true-false'
    },
    {
      id: 7,
      text: 'من به ندرت نگران سلامتی خود هستم.',
      type: 'true-false'
    },
    {
      id: 8,
      text: 'من اغلب آرزو می‌کنم که ای کاش به اندازه دیگران جذاب بودم.',
      type: 'true-false'
    },
    {
      id: 9,
      text: 'من تقریباً هرگز کابوس نمی‌بینم.',
      type: 'true-false'
    },
    {
      id: 10,
      text: 'من گاهی اوقات وقتی عصبانی هستم، دست خودم نیست.',
      type: 'true-false'
    },
    {
      id: 11,
      text: 'من دوست دارم داستان‌های عاشقانه بخوانم.',
      type: 'true-false'
    },
    {
      id: 12,
      text: 'من فکر می‌کنم که تقریباً همه دروغ می‌گویند تا از مشکلات دور بمانند.',
      type: 'true-false'
    },
    {
      id: 13,
      text: 'من همیشه می‌دانم چه می‌خواهم انجام دهم.',
      type: 'true-false'
    },
    {
      id: 14,
      text: 'من فکر می‌کنم که زندگی خانوادگی من به اندازه اکثر افرادی که می‌شناسم خوب است.',
      type: 'true-false'
    },
    {
      id: 15,
      text: 'من گاهی اوقات احساس می‌کنم که دیگران به من نگاه می‌کنند و درباره من صحبت می‌کنند.',
      type: 'true-false'
    }
    // در واقعیت، MMPI دارای 567 سؤال است که به دلیل محدودیت فضا، فقط 15 سؤال نمونه آورده شده است
  ],
  scales: [
    {
      id: 'hs',
      name: 'خودبیمارانگاری (Hs)',
      description: 'نگرانی بیش از حد در مورد سلامتی و عملکرد بدن',
      minScore: 0,
      maxScore: 100
    },
    {
      id: 'd',
      name: 'افسردگی (D)',
      description: 'احساس ناامیدی، بی‌علاقگی به زندگی و نارضایتی عمومی',
      minScore: 0,
      maxScore: 100
    },
    {
      id: 'hy',
      name: 'هیستری (Hy)',
      description: 'واکنش‌های هیستریک به استرس و انکار مشکلات',
      minScore: 0,
      maxScore: 100
    },
    {
      id: 'pd',
      name: 'انحراف روانی-اجتماعی (Pd)',
      description: 'عدم توجه به هنجارهای اجتماعی و اخلاقی',
      minScore: 0,
      maxScore: 100
    },
    {
      id: 'pa',
      name: 'پارانویا (Pa)',
      description: 'بدگمانی، حساسیت بیش از حد و افکار توهمی',
      minScore: 0,
      maxScore: 100
    }
  ],
  interpretations: [
    {
      scaleId: 'hs',
      rangeMin: 0,
      rangeMax: 50,
      text: 'نگرانی طبیعی در مورد سلامتی',
      severity: 'low'
    },
    {
      scaleId: 'hs',
      rangeMin: 51,
      rangeMax: 65,
      text: 'نگرانی بالاتر از حد متوسط در مورد سلامتی',
      severity: 'moderate'
    },
    {
      scaleId: 'hs',
      rangeMin: 66,
      rangeMax: 100,
      text: 'نگرانی شدید در مورد سلامتی، احتمال خودبیمارانگاری',
      severity: 'high'
    },
    {
      scaleId: 'd',
      rangeMin: 0,
      rangeMax: 50,
      text: 'خلق طبیعی، بدون علائم افسردگی',
      severity: 'low'
    },
    {
      scaleId: 'd',
      rangeMin: 51,
      rangeMax: 65,
      text: 'علائم خفیف تا متوسط افسردگی',
      severity: 'moderate'
    },
    {
      scaleId: 'd',
      rangeMin: 66,
      rangeMax: 100,
      text: 'افسردگی قابل توجه، احساس ناامیدی و بی‌علاقگی به زندگی',
      severity: 'high'
    },
    {
      scaleId: 'hy',
      rangeMin: 0,
      rangeMax: 50,
      text: 'واکنش طبیعی به استرس',
      severity: 'low'
    },
    {
      scaleId: 'hy',
      rangeMin: 51,
      rangeMax: 65,
      text: 'تمایل به انکار مشکلات و واکنش‌های هیجانی',
      severity: 'moderate'
    },
    {
      scaleId: 'hy',
      rangeMin: 66,
      rangeMax: 100,
      text: 'واکنش‌های هیستریک به استرس، انکار شدید مشکلات',
      severity: 'high'
    },
    {
      scaleId: 'pd',
      rangeMin: 0,
      rangeMax: 50,
      text: 'پایبندی به هنجارهای اجتماعی و اخلاقی',
      severity: 'low'
    },
    {
      scaleId: 'pd',
      rangeMin: 51,
      rangeMax: 65,
      text: 'برخی مشکلات در پذیرش قوانین و هنجارهای اجتماعی',
      severity: 'moderate'
    },
    {
      scaleId: 'pd',
      rangeMin: 66,
      rangeMax: 100,
      text: 'مشکلات جدی در پذیرش هنجارهای اجتماعی، احتمال رفتارهای ضداجتماعی',
      severity: 'high'
    },
    {
      scaleId: 'pa',
      rangeMin: 0,
      rangeMax: 50,
      text: 'اعتماد طبیعی به دیگران',
      severity: 'low'
    },
    {
      scaleId: 'pa',
      rangeMin: 51,
      rangeMax: 65,
      text: 'حساسیت بیش از حد و بدگمانی خفیف',
      severity: 'moderate'
    },
    {
      scaleId: 'pa',
      rangeMin: 66,
      rangeMax: 100,
      text: 'بدگمانی شدید، افکار پارانوئیدی',
      severity: 'high'
    }
  ],
  calculateResults: (answers: Record<number, string>): TestResult => {
    // در یک پیاده‌سازی واقعی، محاسبه نمرات MMPI بسیار پیچیده‌تر است
    // این یک نمونه ساده‌سازی شده است
    
    // تعریف کلیدهای پاسخ برای هر مقیاس (در واقعیت پیچیده‌تر است)
    const scoringKeys = {
      hs: { 
        true: [5], 
        false: [7] 
      },
      d: { 
        true: [8, 15], 
        false: [3, 14] 
      },
      hy: { 
        true: [11], 
        false: [9] 
      },
      pd: { 
        true: [6, 10, 12], 
        false: [13] 
      },
      pa: { 
        true: [15], 
        false: [] 
      }
    };
    
    // محاسبه نمرات خام
    const rawScores: Record<string, number> = {
      hs: 0,
      d: 0,
      hy: 0,
      pd: 0,
      pa: 0
    };
    
    // بررسی پاسخ‌ها و محاسبه نمرات
    Object.entries(answers).forEach(([questionId, answer]) => {
      const qId = parseInt(questionId);
      
      Object.entries(scoringKeys).forEach(([scale, keys]) => {
        if (answer === 'true' && keys.true.includes(qId)) {
          rawScores[scale]++;
        } else if (answer === 'false' && keys.false.includes(qId)) {
          rawScores[scale]++;
        }
      });
    });
    
    // تبدیل نمرات خام به نمرات T (در واقعیت پیچیده‌تر است)
    // برای این مثال، ما فقط نمرات را به مقیاس 0-100 تبدیل می‌کنیم
    const maxPossibleRawScores = {
      hs: 2,
      d: 4,
      hy: 2,
      pd: 4,
      pa: 1
    };
    
    const tScores: Record<string, number> = {};
    Object.entries(rawScores).forEach(([scale, score]) => {
      // تبدیل به مقیاس 0-100
      tScores[scale] = Math.round((score / maxPossibleRawScores[scale as keyof typeof maxPossibleRawScores]) * 100);
    });
    
    // یافتن تفسیرها برای هر مقیاس
    const interpretations: Record<string, { text: string; severity?: 'low' | 'moderate' | 'high' | 'severe' }> = {};
    
    Object.entries(tScores).forEach(([scale, score]) => {
      const interpretation = mmpiData.interpretations?.find(
        i => i.scaleId === scale && score >= i.rangeMin && score <= i.rangeMax
      );
      
      interpretations[scale] = {
        text: interpretation?.text || 'نتیجه نامشخص',
        severity: interpretation?.severity
      };
    });
    
    // ایجاد خلاصه
    const highestScale = Object.entries(tScores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
    const highestScaleName = mmpiData.scales?.find(s => s.id === highestScale)?.name || highestScale;
    
    return {
      scores: tScores,
      interpretations,
      summary: `بر اساس پاسخ‌های شما، بالاترین نمره در مقیاس ${highestScaleName} با نمره ${tScores[highestScale]} است. ${interpretations[highestScale].text}`
    };
  }
};