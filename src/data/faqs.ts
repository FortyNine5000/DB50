export interface FAQ {
  question: string;
  answer: string;
}

export const allFaqs: FAQ[] = [
  {
    question: 'How long are the sessions?',
    answer: '20 to 40 minutes. Some days are shorter and heavier. Some are longer and worse. Every session gets done in under 45 minutes.',
  },
  {
    question: 'Is this actually hard?',
    answer: 'At 50 lbs, yes. A pair of 50s is a serious load for pressing, squatting, rowing, and carrying under fatigue. The sessions are accessible but they are not easy. Week 4 is significantly harder than Week 1.',
  },
  {
    question: "I don't have 50 lb dumbbells.",
    answer: 'The program works with 25–50 lb dumbbells. Every session is the same regardless of weight. Scaling notes are included. It will be hard at any weight in that range.',
  },
  {
    question: 'How is this different from free workouts online?',
    answer: "This is a single coherent program that ramps over four weeks. The progression is designed, the pacing is intentional, and the whole thing has a finish line. Free workouts don't have a Day 30.",
  },
  {
    question: 'What if I miss a day?',
    answer: 'Log what you did. Pick up where you left off. The goal is to complete all 30 sessions, not to be perfect about the schedule.',
  },
  {
    question: 'Can I do this more than once?',
    answer: 'Yes. Some people will run it once and move on. Some will come back every year as a personal benchmark. Both are the point.',
  },
  {
    question: 'What equipment do I need?',
    answer: 'One pair of dumbbells (25–50 lbs) and enough floor space to do a burpee. No pull-up bar. No bench. No rack.',
  },
  {
    question: 'Is there a warm-up included?',
    answer: 'Yes. Every session includes a structured warm-up. You show up, open the PDF, and follow what it says.',
  },
  {
    question: 'What format is the program?',
    answer: 'A premium PDF. Print it, load it on your phone, or use a tablet in your garage. No app required, no account to create.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: "Yes. 30-day money-back guarantee, no questions asked. If it's not for you, you get your money back.",
  },
  {
    question: 'When does the printed field manual ship?',
    answer: 'The printed edition is coming soon. Sign up for email notifications and we\'ll let you know when it\'s available.',
  },
];

export const homepageFaqs = allFaqs.slice(0, 6);
