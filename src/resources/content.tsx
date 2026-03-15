import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Hrikshesh",
  lastName: "Kumar",
  name: `Hrikshesh Kumar`,
  role: "AI Engineer & Full Stack Developer",
  avatar: "/images/avatar.png",
  email: "atulhere7@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/whoisatul",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/hrikshesh-kumar/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/whoisatull/",
    essential: false,
  },
  {
    name: "LeetCode",
    icon: "leetcode",
    link: "https://leetcode.com/u/atulhere/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/avatar.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning AI ideas into real web products</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Neurovision AI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I’m Hrikshesh, a developer who builds modern web applications and integrates AI to create intelligent digital experiences.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
       Hrikshesh is a Next.js full-stack developer and AI engineer 
       crafting intelligent, scalable applications powered by LLMs, 
       RAG systems, vector databases, and AI agent workflows that turn complex 
       AI capabilities into real-world products.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "SHS AI Solutions",
        timeframe: "Dec 2025 - Feb 2026",
        role: "Full stack developer",
        achievements: [
         <>
    Architected and developed the official website for SHS AI Solutions using Next.js, delivering a scalable full-stack application with &lt;2s page load time and 10k+ monthly visitor capacity.
  </>,
  <>
  Deployed production infrastructure with secure environment configuration, reducing deployment time from ~20 minutes to under 5 minute.
  </>,
  <>
    Optimized SEO, accessibility, and performance, achieving 80+ Lighthouse scores and improving load performance by ~40%.
  </>,
        ],
      },
    ],
  },
  Education: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Indian Institute of Information Technology Vadodara (2023-27)",
        description: <>B.Tech Information Technology</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Artificial Intelligence & Machine Learning",
        description: (
          <>Designing and training machine learning and deep learning models for computer vision, data analysis, and intelligent prediction systems.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "",
          }, {
            name: "Numpy",
            icon: "",
          }, {
            name: "Pandas",
            icon: "",
          }, {
            name: "Scikit-learn",
            icon: "",
          }, {
            name: "TensorFlow",
            icon: "",
          }, {
            name: "PyTorch",
            icon: "",
          }, {
            name: "OpenCV",
            icon: "",
          },{
            name: "Keras",
            icon: "",
          },{
            name: "Matplotlib",
            icon: "",
          },{
            name: "Seaborn",
            icon: "",
          },
        ],
      },
      {
        title: "Generative AI & LLM Engineering",
        description: (
          <>Building intelligent applications powered by LLMs, RAG pipelines, vector databases, and agentic workflows for real-world AI systems.</>
        ),
        tags: [
          {
            name: "LangChain",
            icon: "",
          },
          {
            name: "LangGraph",
            icon: "",
          },
          {
            name: "LangSmith",
            icon: "",
          },{
            name: "HuggingFace",
            icon: "",
          },{
            name: "RAG",
            icon: "",
          },{
            name: "Pinecone",
            icon: "",
          },{
            name: "Chroma",
            icon: "",
          },{
            name: "LlamaIndex",
            icon: "",
          },{
            name: "MCP",
            icon: "",
          },{
            name: "FastAPI",
            icon: "",
          },{
            name: "Prompt Engineering",
            icon: "",
          },
        ],
      },{
        title: "Next.js Developer",
        description: (
          <>Building next gen apps with Next.js.</>
        ),
        tags: [
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Node.js",
            icon: "",
          },
          {
            name: "AWS",
            icon: "",
          },
        ],
      },{
        title: "MERN Stack Developer",
        description: (
          <>Building full stack apps using MongoDB, Express.js, React, and Node.js with REST APIs and modern JavaScript.</>
        ),
        tags: [
          {
            name: "Javascript",
            icon: "",
          },
          {
            name: "MongoDB",
            icon: "",
          },
          {
            name: "Express.js",
            icon: "",
          },
          {
            name: "React.js",
            icon: "",
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};



export { person, social, newsletter, home, about, blog, work, };
