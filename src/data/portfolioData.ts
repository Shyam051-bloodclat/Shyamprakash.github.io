import { Certification, Education, Experience, Project, SkillCategory } from '../types.ts';

export const PERSONAL_INFO = {
  name: "Shyamprakash K",
  title: "AI & Machine Learning Developer",
  headline: "AI & Machine Learning Developer",
  tagline: "Building practical AI solutions for real-world problems.",
  location: "Thrissur, Kerala, India",
  email: "shyamprakash.k2003@gmail.com",
  phone: "+91 9645849073",
  linkedin: "http://www.linkedin.com/in/shyam-prakashk",
  github: "YOUR_GITHUB_URL",
  objective: "AI & Machine Learning engineering student interested in building practical AI solutions for real-world problems. Experienced with Python, Flask, SQL, APIs, and LLMs, with hands-on projects in AI tutoring and agentic AI travel planning. Also gained exposure to cybersecurity, ethical hacking, and IoT through internships."
};

export const ABOUT_HIGHLIGHTS = {
  coreInterests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Python",
    "Flask",
    "SQL",
    "APIs",
    "Large Language Models",
    "AI tutoring",
    "Agentic AI travel planning"
  ],
  internshipExposure: [
    "Cybersecurity",
    "Ethical hacking",
    "IoT"
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    name: "Programming",
    description: "Core programming language for software & machine learning systems",
    skills: ["Python"]
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    description: "Machine learning algorithms, neural architectures & foundational modeling",
    skills: [
      "Deep Learning",
      "Scikit-learn",
      "TensorFlow",
      "Large Language Models (LLMs)",
      "CNN"
    ]
  },
  {
    id: "data-analysis",
    name: "Data Analysis",
    description: "Data manipulation, statistical analysis and numerical computing",
    skills: ["Pandas", "NumPy"]
  },
  {
    id: "ai-tools",
    name: "AI & LLM Tools",
    description: "Local inference runtimes, developer models and foundation API services",
    skills: [
      "Ollama",
      "Qwen2.5-Coder",
      "OpenAI API",
      "Gemini API"
    ]
  },
  {
    id: "web-apis",
    name: "Web Development & APIs",
    description: "Application frameworks, data pipelines and integration interfaces",
    skills: [
      "Flask",
      "Streamlit",
      "RESTful APIs",
      "API Integration",
      "Web Scraping"
    ]
  },
  {
    id: "databases",
    name: "Databases",
    description: "Relational database engines and structured querying systems",
    skills: ["MySQL", "SQLite"]
  },
  {
    id: "tools",
    name: "Tools & Platforms",
    description: "Version control workflows, development environments and research notebooks",
    skills: [
      "Git",
      "GitHub",
      "Jupyter Notebook",
      "Google Colab",
      "VS Code"
    ]
  },
  {
    id: "other",
    name: "Other Technologies",
    description: "Interoperability bridges, text-to-speech synthesis and voice input modules",
    skills: [
      "rpy2",
      "pyttsx3",
      "Speech Recognition"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "voyagr-bot",
    name: "VoyagrBot – Agentic AI-Powered Travel Assistant",
    category: "Agentic AI / LLMs & RAG",
    description: "Developed an AI-powered travel assistant using a multi-agent architecture to generate personalized, budget-aware travel itineraries using Streamlit, LLMs, RAG, and real-time travel APIs.",
    technologies: [
      "Streamlit",
      "LLMs",
      "RAG",
      "Real-time travel APIs",
      "Multi-agent architecture"
    ],
    keyFeatures: [
      "Multi-agent collaborative architecture",
      "Personalized & budget-aware travel itineraries",
      "Retrieval-Augmented Generation (RAG)",
      "Real-time travel API integrations",
      "Interactive Streamlit interface"
    ],
    githubUrl: "YOUR_GITHUB_PROJECT_URL",
    liveDemoUrl: "YOUR_LIVE_DEMO_URL",
    isFeatured: true,
    architectureHighlights: [
      "Multi-Agent Coordination",
      "RAG Knowledge Retrieval",
      "Live API Grounding",
      "Budget Constraint Optimization"
    ],
    details: {
      problem: "Travelers face cognitive overload trying to research disparate destinations, match complex flight/hotel availability, and balance tight budget constraints simultaneously without a unified intelligent planning pipeline.",
      solution: "VoyagrBot addresses this with an agentic multi-agent architecture that orchestrates specialized AI agents to generate structured, tailored, and budget-conscious travel itineraries grounded in live travel API data and retrieval-augmented context.",
      features: [
        "Multi-agent architecture coordinating specific planning steps",
        "Personalized itinerary synthesis tailored to user preferences",
        "Budget-aware itinerary recommendation engine",
        "Retrieval-Augmented Generation (RAG) for localized contextual grounding",
        "Integration with real-time travel APIs for dynamic scheduling"
      ],
      technologiesUsed: [
        "Streamlit",
        "LLMs (Large Language Models)",
        "RAG (Retrieval-Augmented Generation)",
        "Real-time travel APIs",
        "Multi-agent architecture"
      ],
      myContribution: "Architected the multi-agent pipeline and user interface using Streamlit, engineered prompt and reasoning workflows for LLM agents, integrated RAG mechanisms for contextual grounding, and connected live travel APIs for real-time travel planning."
    }
  },
  {
    id: "ai-tutor-r",
    name: "AI Tutor for Learning R Programming",
    category: "EdTech / Code Intelligence & Local LLMs",
    description: "Developed an AI-powered learning platform with interactive R coding, real-time code execution, AI-based explanations, and debugging assistance using Flask, SQLite, rpy2, Ollama, and Qwen2.5-Coder.",
    technologies: [
      "Flask",
      "SQLite",
      "rpy2",
      "Ollama",
      "Qwen2.5-Coder"
    ],
    keyFeatures: [
      "Interactive R coding environment",
      "Real-time code execution via rpy2 bridge",
      "AI-based explanations of concepts & syntax",
      "Intelligent debugging assistance with Qwen2.5-Coder"
    ],
    githubUrl: "YOUR_GITHUB_PROJECT_URL",
    liveDemoUrl: "YOUR_LIVE_DEMO_URL",
    isFeatured: false,
    architectureHighlights: [
      "Local LLM Inference with Ollama",
      "Qwen2.5-Coder Code Intelligence",
      "rpy2 Python-R Bridge",
      "Flask Backend & SQLite Persistence"
    ],
    details: {
      problem: "Students and beginners starting with R programming often struggle with cryptic error outputs, vectorization nuances, and syntax issues without having immediate access to debugging feedback or guided explanations.",
      solution: "Built a web-based educational platform that couples an interactive R code sandbox with an on-demand AI tutor powered by a dedicated coding model (Qwen2.5-Coder via Ollama) to inspect, execute, explain, and debug code in real time.",
      features: [
        "Interactive browser-based R programming interface",
        "Real-time R execution environment bridged using rpy2",
        "AI-based concept walkthroughs and syntax explanations",
        "Automated debugging assistance targeting specific runtime errors",
        "Lightweight session and interaction tracking with SQLite"
      ],
      technologiesUsed: [
        "Flask",
        "SQLite",
        "rpy2",
        "Ollama",
        "Qwen2.5-Coder"
      ],
      myContribution: "Engineered the Flask web application backend and SQLite storage, implemented Python-to-R execution utilizing the rpy2 library, and integrated Ollama running Qwen2.5-Coder to deliver contextual debugging assistance and code explanations."
    }
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "torc-infotech",
    role: "AI Intern",
    company: "Torc Infotech",
    location: "Kochi",
    period: "2026",
    points: [
      "Assisted in developing Python-based applications and gained practical exposure to databases, RESTful APIs, Git and debugging."
    ]
  },
  {
    id: "smec-technologies",
    role: "Data Science and AI/ML Intern",
    company: "SMEC Technologies",
    period: "7 Months",
    points: [
      "Gained hands-on experience in Data Science, Advanced AI/ML and Generative AI through real-world datasets and projects.",
      "Worked with machine learning workflows, Git/GitHub, AI tools and cloud deployment practices."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-1",
    title: "Machine Learning Tools in Python"
  },
  {
    id: "cert-2",
    title: "What is Datascience",
    issuer: "IBM, Coursera"
  },
  {
    id: "cert-3",
    title: "Introduction to AI",
    issuer: "Google, Coursera"
  },
  {
    id: "cert-4",
    title: "Advanced Python Programming"
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    id: "btech",
    degree: "B.Tech in Artificial Intelligence and Machine Learning",
    institution: "Vidya Academy of Science and Technology",
    year: "2026",
    gradeType: "CGPA",
    grade: "6.79"
  },
  {
    id: "class-12",
    degree: "Higher Secondary Education — Class XII",
    institution: "Chaldean Syrian HSS",
    year: "2022",
    gradeType: "Percentage",
    grade: "86%"
  },
  {
    id: "class-10",
    degree: "Matriculation — Class X",
    institution: "CNN BHS Cherpu",
    year: "2020",
    gradeType: "Percentage",
    grade: "86%"
  }
];
