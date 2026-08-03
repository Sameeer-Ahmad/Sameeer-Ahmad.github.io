import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Skill from "./components/Skill/Skill";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ChatBotComponent from "./components/ChatBot/ChatBot";
import GoToTop from "./components/GoToTop/GoToTop";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />{" "}
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Skill />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
        <GoToTop />{" "}
        <ChatBotComponent />
      </div>
    </div>
  );
}

export default App;
