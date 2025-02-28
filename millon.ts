import { TestData, TestResult } from '../../types';

export const millonData: TestData = {
  id: 'millon',
  title: 'millon.title',
  description: 'millon.description',
  instructions: 'millon.instructions',
  questions: [
    {
      id: 1,
      text: 'من همیشه از قوانین و مقررات پیروی می‌کنم، حتی اگر احتمال دستگیر شدنم وجود نداشته باشد.',
      type: 'true-false'
    },
    {
      id: 2,
      text: 'من همیشه به دیگران اجازه می‌دهم که از من سوءاستفاده کنند.',
      type: 'true-false'
    },
    {
      id: 3,
      text: 'من ترجیح می‌دهم با افرادی باشم که به من محبت می‌کنند.',
      type: 'true-false'
    },
    {
      id: 4,
      text: 'من اغلب احساس می‌کنم که زندگی ارزش زندگی کردن ندارد.',
      type: 'true-false'
    },
    {
      id: 5,
      text: 'من همیشه سعی می‌کنم با دیگران همکاری کنم و فرد مفیدی باشم.',
      type: 'true-false'
    },
    {
      id: 6,
      text: 'من فکر می‌کنم که بسیاری از افراد از من سوءاستفاده می‌کنند.',
      type: 'true-false'
    },
    {
      id: 7,
      text: 'من اغلب احساس می‌کنم که دیگران من را درک نمی‌کنند.',
      type: 'true-false'
    },
    {
      id: 8,
      text: 'من اغلب احساس تنهایی و غم می‌کنم، حتی وقتی در جمع هستم.',
      type: 'true-false'
    },
    {
      id: 9,
      text: 'من اغلب از اینکه دیگران من را طرد کنند، می‌ترسم.',
      type: 'true-false'
    },
    {
      id: 10,
      text: 'من اغلب احساس می‌کنم که دیگران به من حسادت می‌کنند.',
      type: 'true-false'
    },
    {
      id: 11,
      text: 'من به ندرت احساسات واقعی خود را به دیگران نشان می‌دهم.',
      type: 'true-false'
    },
    {
      id: 12,
      text: 'من اغلب احساس می‌کنم که دیگران سعی می‌کنند به من آسیب برسانند.',
      type: 'true-false'
    },
    {
      id: 13,
      text: 'من معمولاً از تغییرات ناگهانی در زندگی‌ام ناراحت می‌شوم.',
      type: 'true-false'
    },
    {
      id: 14,
      text: 'من اغلب کارهایی را انجام می‌دهم که بعداً از آن‌ها پشیمان می‌شوم.',
      type: 'true-false'
    },
    {
      id: 15,
      text: 'من اغلب احساس می‌کنم که زندگی‌ام خالی و بی‌معنی است.',
      type: 'true-false'
    }
    // در واقعیت، MCMI-III دارای 175 سؤال است که به دلیل محدودیت فضا، فقط 15 سؤال نمونه آورده شده است
  ],
  scales: [
    {
      id: 'schizoid',
      name: 'اسکیزوئید',
      description: 'کمبود میل و توانایی برای روابط اجتماعی و بین‌فردی',
      minScore: 0,
      maxScore: 100
    },
    {
      id: 'avoidant',
      name: 'اجتنابی',
      description: 'اجتناب از روابط اجتماعی به دلیل ترس از طرد شدن',
      minScore: 0,
      maxScore: 100
    },
    {
      id: 'dependent',
      name: 'وابسته',
      description: 'نیاز به مراقبت و حمایت از سوی دیگران',
      minScore: 0,
      maxScore: 100
    },
    {
      id: 'depressive',
      name: 'افسرده',
      description: 'احساس غم، ناامیدی و بی‌ارزشی',
      minScore: 0,
      maxScore: 100
    },
    {
      id: 'paranoid',
      name: 'پارانوئید',
      description: 'بدگمانی و سوءظن نسبت به دیگران',
      minScore: 0,
      maxScore: 100
    }
  ],
  interpretations: [
    {
      scaleId: 'schizoid',
      rangeMin: 0,
      rangeMax: 60,
      text: 'تمایل طبیعی به تنهایی و استقلال',
      severity: 'low'
    },
    {
      scaleId: 'schizoid',
      rangeMin: 61,
      rangeMax: 74,
      text: 'ویژگی‌های اسکیزوئید، تمایل به انزوا و محدودیت در بیان احساسات',
      severity: 'moderate'
    },
    {
      scaleId: 'schizoid',
      rangeMin: 75,
      rangeMax: 100,
      text: 'الگوی شخصیتی اسکیزوئید، انزوای اجتماعی قابل توجه و محدودیت شدید در بیان احساسات',
      severity: 'high'
    },
    {
      scaleId: 'avoidant',
      rangeMin: 0,
      rangeMax: 60,
      text: 'اعتماد به نفس اجتماعی طبیعی',
      severity: 'low'
    },
    {
      scaleId: 'avoidant',
      rangeMin: 61,
      rangeMax: 74,
      text: 'ویژگی‌های اجتنابی، ترس از طرد شدن و اجتناب از موقعیت‌های اجتماعی',
      severity: 'moderate'
    },
    {
      scaleId: 'avoidant',
      rangeMin: 75,
      rangeMax: 100,
      text: 'الگوی شخصیتی اجتنابی، ترس شدید از طرد شدن و اجتناب قابل توجه از روابط اجتماعی',
      severity: 'high'
    },
    {
      scaleId: 'dependent',
      rangeMin: 0,
      rangeMax: 60,
      text: 'استقلال طبیعی در تصمیم‌گیری و عملکرد',
      severity: 'low'
    },
    {
      scaleId: 'dependent',
      rangeMin: 61,
      rangeMax: 74,
      text: 'ویژگی‌های وابسته، نیاز به تأیید و حمایت دیگران',
      severity: 'moderate'
    },
    {
      scaleId: 'dependent',
      rangeMin: 75,
      rangeMax: 100,
      text: 'الگوی شخصیتی وابسته، نیاز شدید به مراقبت و حمایت از سوی دیگران',
      severity: 'high'
    },
    {
      scaleId: 'depressive',
      rangeMin: 0,
      rangeMax: 60,
      text: 'خلق طبیعی، بدون علائم افسردگی قابل توجه',
      severity: 'low'
    },
    {
      scaleId: 'depressive',
      rangeMin: 61,
      rangeMax: 74,
      text: 'ویژگی‌های افسرده، احساس غم و ناامیدی',
      severity: 'moderate'
    },
    {
      scaleId: 'depressive',
      rangeMin: 75,
      rangeMax: 100,
      text: 'الگوی شخصیتی افسرده، احساس شدید غم، ناامیدی و بی‌ارزشی',
      severity: 'high'
    },
    {
      scaleId: 'paranoid',
      rangeMin: 0,
      rangeMax: 60,
      text: 'اعتماد طبیعی به دیگران',
      severity: 'low'
    },
    {
      scaleId: 'paranoid',
      rangeMin: 61,
      rangeMax: 74,
      text: 'ویژگی‌های پارانوئید، بدگمانی و سوءظن نسبت به دیگران',
      severity: 'moderate'
    },
    {
      scaleId: 'paranoid',
      rangeMin: 75,
      rangeMax: 100,
      text: 'الگوی شخصیتی پارانوئید، بدگمانی شدید و سوءظن قابل توجه نسبت به دیگران',
      severity: 'high'
    }
  ],
  calculateResults: (answers: Record<number, string>): TestResult => {
    // در یک پیاده‌سازی واقعی، محاسبه نمرات MCMI-III بسیار پیچیده‌تر است
    // این یک نمونه ساده‌سازی شده است
    
    // تعریف کلیدهای پاسخ برای هر مقیاس (در واقعیت پیچیده‌تر است)
    const scoringKeys = {
      schizoid: { 
        true: [11], 
        false: [3, 5] 
      },
      avoidant: { 
        true: [9, 13], 
        false: [] 
      },
      dependent: { 
        true: [2, 3], 
        false: [] 
      },
      depressive: { 
        true: [4, 8, 15], 
        false: [] 
      },
      paranoid: { 
        true: [6, 10, 12], 
        false: [] 
      }
    };
    
    // محاسبه نمرات خام
    const rawScores: Record<string, number> = {
      schizoid: 0,
      avoidant: 0,
      dependent: 0,
      depressive: 0,
      paranoid: 0
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
    
    // تبدیل نمرات خام به نمرات BR (در واقعیت پیچیده‌تر است)
    // برای این مثال، ما فقط نمرات را به مقیاس 0-100 تبدیل می‌کنیم
    const maxPossibleRawScores = {
      schizoid: 3,
      avoidant: 2,
      dependent: 2,
      depressive: 3,
      paranoid: 3
    };
    
    const brScores: Record<string, number> = {};
    Object.entries(rawScores).forEach(([scale, score]) => {
      // تبدیل به مقیاس 0-100
      brScores[scale] = Math.round((score / maxPossibleRawScores[scale as keyof typeof maxPossibleRawScores]) * 100);
    });
    
    // یافتن تفسیرها برای هر مقیاس
    const interpretations: Record<string, { text: string; severity?: 'low' | 'moderate' | 'high' | 'severe' }> = {};
    
    Object.entries(brScores).forEach(([scale, score]) => {
      const interpretation = millonData.interpretations?.find(
        i => i.scaleId === scale && score >= i.rangeMin && score <= i.rangeMax
      );
      
      interpretations[scale] = {
        text: interpretation?.text || 'نتیجه نامشخص',
        severity: interpretation?.severity
      };
    });
    
    // ایجاد خلاصه
    const highestScale = Object.entries(brScores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
    const highestScaleName = millonData.scales?.find(s => s.id === highestScale)?.name || highestScale;
    
    return {
      scores: brScores,
      interpretations,
      summary: `بر اساس پاسخ‌های شما، بالاترین نمره در مقیاس ${highestScaleName} با نمره ${brScores[highestScale]} است. ${interpretations[highestScale].text}`
    };
  }
};