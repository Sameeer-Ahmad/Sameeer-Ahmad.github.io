import ChatBot from "react-chatbotify";
import { animatedLogo } from "../../assets/index";
import { useTheme } from "../../context/ThemeContext";

const ANSWERS = {
  aboutSameer:
    "I'm Sameer Ahmad, a MERN Stack Developer. Currently I'm an SDE 1 at Zopping, working on the frontend, and I build across the stack with React, Next.js, Node.js, and MongoDB — always exploring new technologies to sharpen my craft.",
  skills:
    "My key skills include React, Next.js, TypeScript, JavaScript, Node.js, Express, MongoDB, MySQL, Firebase, Chakra UI, Tailwind CSS, and Git/GitHub.",
  experience:
    "I'm currently an SDE 1 at Zopping (Jun 2025 - Present), building frontend features across Admin, Enterprise Admin, the Component Library, and Consumer storefronts. Before that I worked at ZopSmart (Nov 2024 - May 2025) on the same platform before it spun off.",
  projects:
    "A few of my projects:\n1. Audio-Insight — upload audio to get summaries, transcriptions, and Q&A.\n2. Facebook Clone — auth, posting, likes, and comments.\n3. TMETRIC — project, task, and time management for small teams.\n4. The Artline — a platform for artists to showcase and sell artwork.",
  resume:
    "You can view or download my resume from the Resume button in the navbar, or here: https://drive.google.com/file/d/1nPyV0mesa8NCEmJJ4wCaHN6QpRbaRIWM/view",
  contactInfo:
    "You can reach me via email at ahmad17sameer@gmail.com or connect on LinkedIn: https://www.linkedin.com/in/sameer-ahmad-aa985428b/",
};

const MENU_OPTIONS = [
  "About Sameer",
  "Skills",
  "Experience",
  "Projects",
  "Resume",
  "Contact Info",
];

const MENU_ROUTES = {
  "About Sameer": "aboutSameer",
  Skills: "skills",
  Experience: "experience",
  Projects: "projects",
  Resume: "resume",
  "Contact Info": "contactInfo",
};

const flow = {
  start: {
    message: "Hi there! 👋 I'm Sameer's virtual assistant.",
    transition: { duration: 800 },
    path: "greet",
  },
  greet: {
    message: "What would you like to know?",
    transition: { duration: 500 },
    path: "menuOptions",
  },
  menuOptions: {
    message: "Pick an option below, or just type your question.",
    options: MENU_OPTIONS,
    path: (params) => MENU_ROUTES[params.userInput] || "fallback",
  },
  aboutSameer: {
    message: ANSWERS.aboutSameer,
    transition: { duration: 500 },
    path: "mainMenu",
  },
  skills: {
    message: ANSWERS.skills,
    transition: { duration: 500 },
    path: "mainMenu",
  },
  experience: {
    message: ANSWERS.experience,
    transition: { duration: 500 },
    path: "mainMenu",
  },
  projects: {
    message: ANSWERS.projects,
    transition: { duration: 500 },
    path: "mainMenu",
  },
  resume: {
    message: ANSWERS.resume,
    transition: { duration: 500 },
    path: "mainMenu",
  },
  contactInfo: {
    message: ANSWERS.contactInfo,
    transition: { duration: 500 },
    path: "mainMenu",
  },
  fallback: {
    message:
      "I'm not sure about that one — try one of the options below, or ask about my skills, experience, projects, resume, or how to contact me.",
    transition: { duration: 500 },
    path: "mainMenu",
  },
  mainMenu: {
    message: "Is there anything else you'd like to know?",
    options: ["Yes, show me the menu", "No, that's all"],
    path: (params) =>
      params.userInput === "Yes, show me the menu" ? "menuOptions" : "endMessage",
  },
  endMessage: {
    message:
      "Thanks for stopping by! Feel free to reach out anytime. Have a great day! 🙌",
    chatDisabled: true,
  },
};

const ChatBotComponent = () => {
  const { isDark } = useTheme();

  const settings = {
    general: {
      primaryColor: "#701a75",
      secondaryColor: "#701a75",
      fontFamily: "Poppins, Arial, Helvetica, sans-serif",
      showFooter: false,
    },
    header: {
      title: "Chat with Sameer",
      avatar: animatedLogo,
    },
    notification: {
      disabled: true,
      showCount: false,
    },
    chatButton: {
      icon: animatedLogo,
    },
    tooltip: {
      mode: "START",
      text: "Talk to me! 👋",
    },
    chatWindow: {
      showTypingIndicator: true,
      showScrollbar: false,
      defaultOpen: false,
    },
    chatInput: {
      enabledPlaceholderText: "Type your message...",
    },
  };

  const styles = {
    chatWindowStyle: {
      backgroundColor: isDark ? "#1e2024" : "#ffffff",
      border: isDark ? "1px solid #000" : "1px solid #e2e4e9",
    },
    headerStyle: {
      background: "#701a75",
      color: "#ffffff",
    },
    bodyStyle: {
      backgroundColor: isDark ? "#1e2024" : "#ffffff",
    },
    botBubbleStyle: {
      backgroundColor: "#701a75",
      color: "#ffffff",
    },
    userBubbleStyle: {
      backgroundColor: isDark ? "#c4cfde" : "#f7f4f9",
      color: isDark ? "#212428" : "#16181d",
    },
    botOptionStyle: {
      color: "#701a75",
      border: "1px solid #701a75",
      backgroundColor: "transparent",
    },
    botOptionHoveredStyle: {
      backgroundColor: "#701a75",
      color: "#ffffff",
    },
    chatInputContainerStyle: {
      backgroundColor: isDark ? "#1e2024" : "#ffffff",
      borderTop: isDark ? "1px solid #000" : "1px solid #e2e4e9",
    },
    chatInputAreaStyle: {
      backgroundColor: isDark ? "#191b1e" : "#ffffff",
      color: isDark ? "#c4cfde" : "#16181d",
    },
    chatButtonStyle: {
      backgroundColor: "#701a75",
      width: "56px",
      height: "56px",
      right: "32px",
    },
    chatIconStyle: {
      width: "56px",
      height: "56px",
    },
    sendButtonStyle: {
      backgroundColor: "#701a75",
    },
  };

  return <ChatBot flow={flow} settings={settings} styles={styles} />;
};

export default ChatBotComponent;
