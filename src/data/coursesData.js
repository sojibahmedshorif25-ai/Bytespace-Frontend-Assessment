export const categories = [
  { id: 'all', name: 'All Courses', icon: 'Sparkles', count: 48 },
  { id: 'web-dev', name: 'Web Development', icon: 'Code', count: 16 },
  { id: 'ui-ux', name: 'UI/UX Design', icon: 'Palette', count: 12 },
  { id: 'data-ai', name: 'AI & Data Science', icon: 'Brain', count: 9 },
  { id: 'mobile', name: 'Mobile Apps', icon: 'Smartphone', count: 6 },
  { id: 'cloud', name: 'Cloud & DevOps', icon: 'Cloud', count: 5 }
];

export const courses = [
  {
    id: 'full-stack-web-mastery',
    title: 'Full-Stack Web Development Bootcamp 2026',
    slug: 'full-stack-web-mastery',
    category: 'web-dev',
    categoryLabel: 'Web Development',
    level: 'Beginner to Advanced',
    duration: '42 hours',
    lessonsCount: 164,
    studentsCount: '18,420',
    rating: 4.9,
    reviewCount: 1240,
    price: 49.99,
    originalPrice: 129.99,
    badge: 'Bestseller',
    thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop&q=80',
    videoPreview: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    instructor: {
      name: 'Sarah Jenkins',
      role: 'Senior Staff Engineer @ Google',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80',
      bio: 'Ex-Google staff engineer with 10+ years of experience training over 100k developers worldwide in React, Node.js, and Cloud architectures.',
      coursesCount: 8,
      rating: 4.95
    },
    description: 'Master HTML5, CSS3, Modern JavaScript (ES6+), React 19, Next.js, Node.js, PostgreSQL, and deploy full-stack production-ready applications with zero downtime.',
    whatYouWillLearn: [
      'Build 10+ real-world production projects from scratch',
      'Master modern React 19 hooks, Server Actions, and SSR',
      'Design robust RESTful and GraphQL APIs with Node.js & Express',
      'Deploy full-stack applications to AWS and Vercel with CI/CD pipelines',
      'Best practices in automated testing with Jest and Playwright'
    ],
    requirements: [
      'Basic understanding of how computers and the web work',
      'No previous programming experience required — we start from scratch'
    ],
    curriculum: [
      {
        title: 'Module 1: Modern Web Foundations & Semantic HTML5',
        duration: '6 hrs • 22 lessons',
        lessons: [
          { title: 'Welcome to ByteSpace & Course Roadmap', duration: '12:30', isPreview: true },
          { title: 'Setting Up Modern Dev Environment (VS Code, Git)', duration: '18:45', isPreview: true },
          { title: 'Semantic HTML5 Architecture & Accessibility (a11y)', duration: '24:10', isPreview: false },
          { title: 'SEO Optimization & Social Graph Metadata', duration: '16:20', isPreview: false }
        ]
      },
      {
        title: 'Module 2: Advanced Modern CSS, Flexbox & Grid Systems',
        duration: '9 hrs • 34 lessons',
        lessons: [
          { title: 'CSS Box Model & Custom Properties Architecture', duration: '19:15', isPreview: true },
          { title: 'Mastering CSS Grid 2.0 & Complex Responsive Layouts', duration: '32:40', isPreview: false },
          { title: 'Micro-interactions & Smooth Transitions with CSS Animations', duration: '28:10', isPreview: false }
        ]
      },
      {
        title: 'Module 3: React 19, State Management & Server Components',
        duration: '14 hrs • 56 lessons',
        lessons: [
          { title: 'React 19 Core Mental Model & JSX Deep Dive', duration: '25:30', isPreview: true },
          { title: 'Custom Hooks Architecture & Clean Code Patterns', duration: '35:20', isPreview: false },
          { title: 'High-Performance State Management with Zustand', duration: '29:45', isPreview: false }
        ]
      },
      {
        title: 'Module 4: Full-Stack Backend, Database Design & Deployment',
        duration: '13 hrs • 52 lessons',
        lessons: [
          { title: 'Node.js Event Loop, Express & REST API Standards', duration: '34:10', isPreview: false },
          { title: 'PostgreSQL, Prisma ORM & Database Indexing', duration: '42:15', isPreview: false },
          { title: 'Production Deployment & Monitoring on Vercel & AWS', duration: '31:50', isPreview: false }
        ]
      }
    ]
  },
  {
    id: 'figma-uiux-design-system',
    title: 'UI/UX Masterclass & Design Systems in Figma',
    slug: 'figma-uiux-design-system',
    category: 'ui-ux',
    categoryLabel: 'UI/UX Design',
    level: 'Intermediate',
    duration: '28 hours',
    lessonsCount: 98,
    studentsCount: '12,850',
    rating: 4.88,
    reviewCount: 890,
    price: 39.99,
    originalPrice: 99.99,
    badge: 'Popular',
    thumbnail: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80',
    videoPreview: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    instructor: {
      name: 'Alex Rivera',
      role: 'Principal Product Designer @ Airbnb',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
      bio: 'Lead designer who created enterprise design systems used by millions of users daily. Passionate about typography, motion, and user psychology.',
      coursesCount: 5,
      rating: 4.92
    },
    description: 'Learn wireframing, high-fidelity UI design, user research, interactive micro-prototyping, variables, and scalable enterprise design systems in Figma.',
    whatYouWillLearn: [
      'Design high-converting SaaS landing pages and mobile apps',
      'Build scalable Design Systems using Figma variables & tokens',
      'Conduct user interviews, usability tests, and heuristic analysis',
      'Create realistic interactive animations and micro-prototypes'
    ],
    requirements: [
      'A free Figma account',
      'A passion for visual aesthetics and human-centered design'
    ],
    curriculum: [
      {
        title: 'Module 1: Visual Design Fundamentals & Typography',
        duration: '5 hrs • 18 lessons',
        lessons: [
          { title: 'Design Thinking & UX Psychology Principles', duration: '18:20', isPreview: true },
          { title: 'Visual Hierarchy, Contrast & Modern Typography', duration: '24:40', isPreview: false }
        ]
      },
      {
        title: 'Module 2: Figma Pro-Workflow, Auto Layout & Variables',
        duration: '11 hrs • 42 lessons',
        lessons: [
          { title: 'Deep Dive into Auto Layout 5.0 and Responsive Frames', duration: '31:10', isPreview: true },
          { title: 'Building Multi-Brand Design Token Architecture', duration: '40:25', isPreview: false }
        ]
      }
    ]
  },
  {
    id: 'python-ai-data-science',
    title: 'Python for AI, Machine Learning & Data Science',
    slug: 'python-ai-data-science',
    category: 'data-ai',
    categoryLabel: 'AI & Data Science',
    level: 'Beginner to Intermediate',
    duration: '36 hours',
    lessonsCount: 140,
    studentsCount: '15,200',
    rating: 4.92,
    reviewCount: 1105,
    price: 54.99,
    originalPrice: 149.99,
    badge: 'Trending',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop&q=80',
    videoPreview: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    instructor: {
      name: 'Dr. Marcus Vance',
      role: 'AI Research Lead @ OpenAI',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
      bio: 'Ph.D. in Machine Learning from Stanford with over 15 publications in NeurIPS and ICML. Specializes in LLM fine-tuning and computer vision.',
      coursesCount: 6,
      rating: 4.96
    },
    description: 'Practical guide to NumPy, Pandas, Scikit-Learn, PyTorch, Large Language Model prompt engineering, fine-tuning, and building production AI agents.',
    whatYouWillLearn: [
      'Analyze and clean complex multi-million row datasets with Pandas',
      'Train supervised & unsupervised Machine Learning models',
      'Build neural networks with PyTorch and deploy LLM agents',
      'Integrate OpenAI APIs and vector databases (Pinecone, ChromaDB)'
    ],
    requirements: [
      'Basic math and algebra fundamentals',
      'Any computer capable of running Python or Google Colab'
    ],
    curriculum: [
      {
        title: 'Module 1: Python for Data Analysis & Visualization',
        duration: '8 hrs • 28 lessons',
        lessons: [
          { title: 'Pythonic Code, Vectorization & NumPy Arrays', duration: '22:15', isPreview: true },
          { title: 'Data Cleaning and Wrangling with Pandas', duration: '35:40', isPreview: false }
        ]
      }
    ]
  },
  {
    id: 'react-native-cross-platform',
    title: 'Cross-Platform Mobile Apps with React Native & Expo',
    slug: 'react-native-cross-platform',
    category: 'mobile',
    categoryLabel: 'Mobile Apps',
    level: 'Intermediate',
    duration: '26 hours',
    lessonsCount: 88,
    studentsCount: '8,400',
    rating: 4.85,
    reviewCount: 620,
    price: 44.99,
    originalPrice: 119.99,
    badge: 'Hot',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
    videoPreview: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    instructor: {
      name: 'David Chen',
      role: 'Lead Mobile Architect @ Spotify',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
      bio: 'Mobile engineer building seamless high-performance iOS and Android applications using React Native, Swift, and Kotlin.',
      coursesCount: 4,
      rating: 4.89
    },
    description: 'Build native iOS and Android apps with a single JavaScript/TypeScript codebase using Expo Router, native gestures, push notifications, and app store deployment.',
    whatYouWillLearn: [
      'Build 5 cross-platform mobile apps published to App Store & Google Play',
      'Integrate device camera, geolocation, biometric auth, and offline storage',
      'Smooth 60fps animations with React Native Reanimated 3'
    ],
    requirements: [
      'Familiarity with React and JavaScript basics',
      'Mac or Windows PC with iOS Simulator or Android Emulator (or physical phone)'
    ],
    curriculum: [
      {
        title: 'Module 1: Expo Setup & Native Navigation',
        duration: '6 hrs • 20 lessons',
        lessons: [
          { title: 'Expo Router File-Based Routing Deep Dive', duration: '20:10', isPreview: true }
        ]
      }
    ]
  },
  {
    id: 'cloud-devops-kubernetes-aws',
    title: 'Cloud DevOps Architecture with AWS, Docker & Kubernetes',
    slug: 'cloud-devops-kubernetes-aws',
    category: 'cloud',
    categoryLabel: 'Cloud & DevOps',
    level: 'Advanced',
    duration: '32 hours',
    lessonsCount: 110,
    studentsCount: '7,150',
    rating: 4.91,
    reviewCount: 540,
    price: 59.99,
    originalPrice: 139.99,
    badge: 'Enterprise',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
    videoPreview: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    instructor: {
      name: 'Elena Rostova',
      role: 'Principal Cloud Architect @ AWS',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
      bio: 'Certified AWS Solutions Architect Professional helping organizations transition to cloud-native microservices and Kubernetes clusters.',
      coursesCount: 4,
      rating: 4.94
    },
    description: 'Master Infrastructure as Code (Terraform), Docker containerization, Kubernetes cluster orchestration, GitHub Actions CI/CD, and AWS cloud security.',
    whatYouWillLearn: [
      'Containerize enterprise microservices with multi-stage Dockerfiles',
      'Provision scalable AWS infrastructure using Terraform IaC',
      'Deploy and scale resilient Kubernetes clusters (EKS)',
      'Implement zero-downtime Blue/Green and Canary deployment pipelines'
    ],
    requirements: [
      'Basic Linux command line knowledge',
      'Free-tier AWS account for hands-on labs'
    ],
    curriculum: [
      {
        title: 'Module 1: Docker Containers & Optimization',
        duration: '7 hrs • 24 lessons',
        lessons: [
          { title: 'Container Isolation & Kernel Namespaces', duration: '18:50', isPreview: true }
        ]
      }
    ]
  },
  {
    id: 'modern-javascript-mastery',
    title: 'Modern JavaScript & TypeScript from Zero to Pro',
    slug: 'modern-javascript-mastery',
    category: 'web-dev',
    categoryLabel: 'Web Development',
    level: 'All Levels',
    duration: '24 hours',
    lessonsCount: 92,
    studentsCount: '21,000',
    rating: 4.94,
    reviewCount: 1820,
    price: 34.99,
    originalPrice: 89.99,
    badge: 'Top Rated',
    thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&auto=format&fit=crop&q=80',
    videoPreview: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    instructor: {
      name: 'Sarah Jenkins',
      role: 'Senior Staff Engineer @ Google',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80',
      bio: 'Ex-Google staff engineer with 10+ years of experience training developers worldwide.',
      coursesCount: 8,
      rating: 4.95
    },
    description: 'Deep dive into asynchronous JavaScript, Event Loop, Closures, Prototypal Inheritance, TypeScript generics, strict typing, and modern ES2026 features.',
    whatYouWillLearn: [
      'Understand closures, scopes, and memory management under the hood',
      'Write rock-solid TypeScript with advanced generics and utility types',
      'Master Promises, async/await, and event-driven patterns'
    ],
    requirements: [
      'No previous programming experience required'
    ],
    curriculum: [
      {
        title: 'Module 1: Core JavaScript Fundamentals',
        duration: '6 hrs • 22 lessons',
        lessons: [
          { title: 'Variables, Memory Allocation & Data Types', duration: '15:20', isPreview: true }
        ]
      }
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Tanzir Rahman',
    role: 'Frontend Engineer @ Shopee',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'ByteSpace transformed my career trajectory! The project-oriented React & Figma courses allowed me to land my dream junior frontend position within 3 months.'
  },
  {
    id: 2,
    name: 'Farhana Kabir',
    role: 'UI/UX Product Designer @ Pathao',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'The design system masterclass is world-class. It taught me practical Figma components, token architectures, and how to effectively collaborate with engineering teams.'
  },
  {
    id: 3,
    name: 'Mahmudul Hasan',
    role: 'Full-Stack Developer @ Brain Station 23',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'The video player quality, interactive code exercises, and top-tier instructors are unmatched. ByteSpace is hands down the best learning platform I have ever used.'
  }
];
