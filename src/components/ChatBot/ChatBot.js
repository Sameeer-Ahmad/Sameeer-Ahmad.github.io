import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { animatedLogo } from "../../assets/index";

const ChatBotComponent = () => {
  const steps = [
    {
      id: "0",
      message: "Hi there! 👋 I'm Sameer's virtual assistant.",
      trigger: "greet",
    },
    {
      id: "greet",
      message: "What would you like to know?",
      trigger: "menuOptions",
    },
    {
      id: "menuOptions",
      options: [
        { value: "about", label: "About Sameer", trigger: "aboutSameer" },
        { value: "skills", label: "Skills", trigger: "skills" },
        { value: "experience", label: "Experience", trigger: "experience" },
        { value: "projects", label: "Projects", trigger: "projects" },
        { value: "resume", label: "Resume", trigger: "resume" },
        { value: "contact", label: "Contact Info", trigger: "contactInfo" },
      ],
    },
    {
      id: "aboutSameer",
      message:
        "I'm Sameer Ahmad, a MERN Stack Developer. Currently I'm an SDE 1 at Zopping, working on the frontend, and I build across the stack with React, Next.js, Node.js, and MongoDB — always exploring new technologies to sharpen my craft.",
      trigger: "mainMenu",
    },
    {
      id: "skills",
      message:
        "My key skills include React, Next.js, TypeScript, JavaScript, Node.js, Express, MongoDB, MySQL, Firebase, Chakra UI, Tailwind CSS, and Git/GitHub.",
      trigger: "mainMenu",
    },
    {
      id: "experience",
      message:
        "I'm currently an SDE 1 at Zopping (Jun 2025 - Present), building frontend features across Admin, Enterprise Admin, the Component Library, and Consumer storefronts. Before that I worked at ZopSmart (Nov 2024 - May 2025) on the same platform before it spun off.",
      trigger: "mainMenu",
    },
    {
      id: "projects",
      message:
        "A few of my projects:\n1. Audio-Insight — upload audio to get summaries, transcriptions, and Q&A.\n2. Facebook Clone — auth, posting, likes, and comments.\n3. TMETRIC — project, task, and time management for small teams.\n4. The Artline — a platform for artists to showcase and sell artwork.",
      trigger: "mainMenu",
    },
    {
      id: "resume",
      message:
        "You can view or download my resume from the Resume button in the navbar, or here: https://drive.google.com/file/d/1nPyV0mesa8NCEmJJ4wCaHN6QpRbaRIWM/view",
      trigger: "mainMenu",
    },
    {
      id: "contactInfo",
      message:
        "You can reach me via email at ahmad17sameer@gmail.com or connect on LinkedIn: https://www.linkedin.com/in/sameer-ahmad-aa985428b/",
      trigger: "mainMenu",
    },
    {
      id: "mainMenu",
      message: "Is there anything else you'd like to know?",
      trigger: "moreOptions",
    },
    {
      id: "moreOptions",
      options: [
        { value: "yes", label: "Yes, show me the menu", trigger: "menuOptions" },
        { value: "no", label: "No, that's all", trigger: "endMessage" },
      ],
    },
    {
      id: "endMessage",
      message: "Thanks for stopping by! Feel free to reach out anytime. Have a great day! 🙌",
      end: true,
    },
  ];

  const theme = {
    background: "#1e2024",
    headerBgColor: "#701a75",
    headerFontSize: "18px",
    headerFontColor: "#ffffff",
    botBubbleColor: "#701a75",
    botFontColor: "#ffffff",
    userBubbleColor: "#c4cfde",
    userFontColor: "#212428",
    fontFamily: "Poppins, Arial, Helvetica, sans-serif",
  };

  const config = {
    headerTitle: "Chat with Sameer",
    floating: true,
    botAvatar: animatedLogo,
    botDelay: 800,
    placeholder: "Type your message...",
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} {...config} />
      </ThemeProvider>
    </div>
  );
};

export default ChatBotComponent;
