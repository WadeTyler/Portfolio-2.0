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
    link: "https://learnnorsk.tylerwade.net"
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
    link: "https://usho.pro"
  },
]