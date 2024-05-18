import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const ChatBotComponent = () => {
  const steps = [
    {
      id: "0",
      message: "Welcome to Sameer Ahmad's Portfolio Chatbot!",
      trigger: "1",
    },
    {
      id: "1",
      message: "How can I assist you today?",
      trigger: "2",
    },
    {
      id: "2",
      options: [
        { value: 1, label: "About Sameer", trigger: "aboutSameer" },
        { value: 2, label: "Skills", trigger: "skills" },
        { value: 3, label: "Projects", trigger: "projects" },
        { value: 4, label: "Contact Information", trigger: "contactInfo" },
      ],
    },
    {
      id: "aboutSameer",
      message:
        "I am Sameer Ahmad, a passionate web developer specializing in full-stack development. I continuously explore new technologies to enhance my skills.",
      trigger: "mainMenu",
    },
    {
      id: "skills",
      message:
        "My key skills include:\n- React\n- Node.js\n- Express\n- MongoDB\n- My SQL\n- Firebase\n- Chakra UI\n- JavaScript\n- HTML/CSS\n- Git/GitHub",
      trigger: "mainMenu",
    },
    {
      id: "projects",
      message:
        "Here are some of my projects:\n1. Facebook Clone: A project that replicates essential Facebook features such as user authentication, posting updates, and interacting with posts.\n2. TMETRIC: A web application designed to help small businesses manage projects, assign tasks, and track time efficiently.\n3. The Artline: A platform for artists to showcase their work and for users to explore and purchase art pieces securely.",
      trigger: "mainMenu",
    },
    {
      id: "contactInfo",
      message:
        "You can reach me via email at    ahmad17sameer@gmail.com or connect with me on LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/sameer-ahmad-aa985428b/).",
      trigger: "mainMenu",
    },
    {
      id: "mainMenu",
      message: "Is there anything else you would like to know?",
      trigger: "menuOptions",
    },
    {
      id: "menuOptions",
      options: [
        { value: 1, label: "Yes, tell me more", trigger: "2" },
        { value: 2, label: "No, that's all", trigger: "endMessage" },
      ],
    },
    {
      id: "endMessage",
      message: "Thank you for visiting my portfolio. Have a great day!",
      end: true,
    },
  ];

  const theme = {
    background: "#faf8f4",
    headerBgColor: "#701a75",
    headerFontSize: "20px",
    botBubbleColor: "#701a75",
    headerFontColor: "white",
    
    botFontColor: "white",
    userBubbleColor: "#212428",
    userFontColor: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  const config = {
    headerTitle: "Connect with Sameer",
    floating: true,
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
