export const projects = [
  {
    num: '01',
    title: 'PawPal+ AI Pet Care Advisor',
    desc: 'Production-grade AI pet care advisor with conversation history, context-aware pet profile prompts, and a confidence scoring system that auto-rejects off-topic queries via guardrails. Achieved 15/15 evaluation harness tests across 5 categories with 89% avg confidence on legitimate inputs and 100% guardrail trigger rate.',
    stack: ['Python', 'Groq API', 'LLaMA 3.3', 'Streamlit', 'LLM Integration'],
    github: 'https://github.com/dinakarbl00/applied-ai-system-project',
    demo: 'https://pawpal-plus-axsgn2plvys4jshtkmhk47.streamlit.app/',
  },
  {
    num: '02',
    title: 'Penalty Shootout Game',
    desc: 'Interactive football penalty game built with TypeScript and Vite. Test your shooting skills against a goalkeeper — pick your spot and take the shot.',
    stack: ['TypeScript', 'Vite', 'CSS'],
    github: 'https://github.com/dinakarbl/penalty-shootout-game',
    demo: 'https://penalty-shootout-game-seven.vercel.app/',
  },
  {
    num: '03',
    title: 'Music Recommender System',
    desc: 'Content-based music recommendation engine using multi-dimensional audio features (energy, tempo, valence, danceability, acousticness). Implements weighted scoring with three configurable ranking modes — balanced, genre-first, energy-first — and a diversity penalty to reduce artist/genre repetition in top-N results.',
    stack: ['Python', 'Feature Engineering', 'Recommender Systems'],
    github: 'https://github.com/dinakarbl00/ai110-music_recommender',
    demo: null,
  },
  {
    num: '04',
    title: 'Real-Time AI Personal Trainer',
    desc: 'Computer vision app that detects and corrects exercise form in real time using pose estimation on live user data. Built with a Flask backend and OpenCV for frame-by-frame processing.',
    stack: ['Python', 'Flask', 'OpenCV', 'ML'],
    github: 'https://github.com/rtsh13/AI-Gym-Trainer',
    demo: null,
  },
  {
    num: '05',
    title: 'Used Cars Price Prediction',
    desc: 'Compared Linear Regression and Random Forest Regressor models for car price prediction. Applied EDA to surface key pricing drivers and evaluate model tradeoffs.',
    stack: ['Python', 'scikit-learn', 'pandas'],
    github: 'https://github.com/dinakarbl/Used-car-price-prediction',
    demo: null,
  },
  {
    num: '06',
    title: 'ASU SAILS Record Automation',
    desc: 'Automated Excel record updates for 2000+ student records using Python — replacing a multi-day manual process with a sub-10-second script, eliminating human error completely.',
    stack: ['Python', 'Excel Automation'],
    github: null,
    demo: null,
  },
]

export const experience = [
  {
    date: 'Oct 2025 – May 2026',
    company: 'Arizona State University, SAILS',
    role: 'Testing Accommodations & Office Assistant',
    location: 'Tempe, AZ',
    bullets: [
      'Automated Excel record updates using Python, processing 2000+ student records in under 10 seconds — replacing a multi-day manual process and freeing staff hours weekly for higher-value work.',
    ],
  },
  {
    date: 'Aug 2022 – Feb 2024',
    company: 'Amadeus Labs',
    role: 'Software Development Engineer',
    location: 'Bangalore, India',
    bullets: [
      'Migrated internal web applications to Angular 14, reducing average page load times by 50% and improving long-term maintainability.',
      'Diagnosed and resolved bugs across internal tools and ticketing workflows, improving request completion speed by 3% and reducing repeat issue rates.',
    ],
  },
  {
    date: 'Feb 2022 – Jul 2022',
    company: 'Amadeus Labs',
    role: 'Software Engineer Intern',
    location: 'Bangalore, India',
    bullets: [
      'Designed and built a Flask + Angular reporting app, enabling non-technical users to generate custom reports without SQL — significantly reducing ad hoc engineering requests.',
    ],
  },
]

export const skills = [
  {
    group: 'Languages',
    items: ['Python', 'SQL', 'C/C++'],
  },
  {
    group: 'Machine Learning & AI',
    items: ['scikit-learn', 'pandas', 'NumPy', 'Feature Engineering', 'Model Evaluation', 'LLM Integration', 'Prompt Engineering'],
  },
  {
    group: 'Web Technologies',
    items: ['React', 'Angular', 'Flask', 'HTML5', 'CSS3', 'JavaScript'],
  },
  {
    group: 'Tools',
    items: ['Git / GitHub', 'MySQL', 'PowerBI', 'Tableau', 'AWS', 'Streamlit', 'Groq API', 'MS Office'],
  },
]

export const certifications = [
  {
    id: 'ai110',
    title: 'Foundations of AI Engineering',
    issuer: 'CodePath',
    date: 'Spring 2026',
    note: null,
    image: '/certs/cert_ai110.png',
  },
  {
    id: 'web101',
    title: 'Intro to Web Development',
    issuer: 'CodePath',
    date: 'Spring 2026',
    note: null,
    image: '/certs/cert_web101.png',
  },
  {
    id: 'ai_fluency',
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    date: '2026',
    note: null,
    image: '/certs/cert_ai_fluency.png',
  },
  {
    id: 'claude101',
    title: 'Claude 101',
    issuer: 'Anthropic',
    date: '2026',
    note: null,
    image: '/certs/cert_claude101.png',
  },
]

export const education = [
  {
    school: 'Arizona State University',
    degree: 'M.S. Data Science, Analytics and Engineering',
    period: 'Aug 2024 – May 2026',
    gpa: '3.97',
    location: 'Tempe, AZ',
  },
  {
    school: 'PES College of Engineering',
    degree: 'B.E. Computer Science and Engineering',
    period: 'Aug 2018 – Jul 2022',
    gpa: '8.77 CGPA',
    location: 'Mandya, India',
  },
]
