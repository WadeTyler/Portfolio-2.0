export type Project = {
  title: string,
  subtitle: string,
  techStack: string[],
  images: string[],
  description: string,
  link?: string
}

export const projects: Project[] = [
  {
    title: "Career Glyph",
    subtitle: "All in one Platform for Career Management",
    techStack: [
      "Java",
      "Spring Boot",
      "TypeScript",
      "React",
      "AWS"
    ],
    images: [
      "/projects/career-glyph-1.png",
      "/projects/career-glyph-2.png",
      "/projects/career-glyph-3.png",
      "/projects/career-glyph-4.png",
    ],
    description: `Career Glyph is your all-in-one platform to track job applications, optimize your resume, and plan interviews. Land your dream job faster with powerful, AI-driven tools and a beautiful, intuitive interface. Career Glyph's Application Tracker helps you organize, monitor, and plan your job applications from wishlist to interview. Stay on top of your job hunt and never miss an opportunity. Career Glyph's Resume Scoring tool analyzes your resume against any job description. Get actionable, AI-powered feedback to optimize your resume and boost your chances of landing interviews. Career Glyph's Interview Planner helps you organize your interview schedule, so you can walk into every interview with confidence.`,
    link: "https://careerglyph.com"
  },
  {
    title: "Guided Gospel",
    subtitle: "Christian AI Resource Hub",
    techStack: [
      "TypeScript",
      "React",
      "Node.js",
      "MySQL"
    ],
    images: [
      "/projects/guided-gospel-1.png",
      "/projects/guided-gospel-2.png",
      "/projects/guided-gospel-3.png"
    ],
    description: `A Christian AI Based Resource Hub that provides users with Faith-Based guidance. AI ChatBot, Christian Social Media, Mobile Bible all in one!
      \nGuided Gospel is your AI companion for exploring the Christian Bible. Whether you're seeking answers to life's questions or simply looking to deepen your understanding of Scripture, Guided is here to help you with biblical insights, any time of the day.`,
    link: 'https://guidedgospel.net'
  },
  {
    title: "Learn Norsk",
    subtitle: "Norwegian Language Learning Application",
    techStack: [
      "TypeScript",
      "React",
      "Java",
      "Spring Boot",
      "MySQL"
    ],
    images: [
      "/projects/learn-norsk-1.png",
      "/projects/learn-norsk-2.png"
    ],
    description: `A modern web application designed to help users learn, practice, and master the Norwegian language. Built with TypeScript and Java, Learn Norsk provides an interactive platform for language learners at all levels.
    \nEngaging lessons designed to cater to all learning styles, ensuring an effective grasp of Norwegian language fundamentals. Fun and challenging quizzes that reinforce your knowledge and track your progress as you learn Norwegian. Advanced tracking features to monitor your learning journey and celebrate milestones as you advance in your Norwegian skills.`,
    link: "https://github.com/WadeTyler/Learn-Norsk"
  },
  {
    title: "Crypto Portfolio Tracker",
    subtitle: "Track and Manage Your Crypto Investments",
    techStack: [
      "Java",
      "Spring Boot",
      "TypeScript",
      "React",
    ],
    images: [
      "/projects/crypto-1.png",
      "/projects/crypto-2.png",
      "/projects/crypto-3.png",
      "/projects/crypto-4.png",
    ],
    description: `Track your favorite cryptocurrencies and manage your portfolio with ease. Stay updated with real-time prices and market trends. This app allows users to view the latest prices and market data for various cryptocurrencies.`,
    link: "https://crypto.tylerwade.net"
  },
  {
    title: "USHO Pro",
    subtitle: "Fast and Reliable URL Shortener",
    techStack: [
      "TypeScript",
      "Angular",
      "Java",
      "Spring Boot",
      "MongoDB"
    ],
    images: [
      "/projects/usho-pro-1.png"
    ],
    description: `A fast, simple, and reliable URL shortening service built with TypeScript, Angular, and Spring Boot Java.
    \nConvert long URLs into short, memorable codes. Efficient URL validation and redirection system. Recent and Most used URLs are cached in memory for faster access.`,
    link: "https://github.com/WadeTyler/URL-Shortener"
  },
]