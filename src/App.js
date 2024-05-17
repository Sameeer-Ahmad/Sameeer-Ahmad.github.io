import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Skill from "./components/Skill/Skill";
import Projects from "./components/Projects/Projects";
import GithubCalender from "./components/GithubCalender/GithubCalender";
import Contact from "./components/Contact/Contact";
import ChatBotComponent from "./components/ChatBot/ChatBot";
import GoToTop from "./components/GoToTop/GoToTop";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />{" "}
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Skill />
        <Projects />
        <GithubCalender />
        <Contact />
        <Footer />
        <GoToTop />{" "}
        <ChatBotComponent />
      </div>
    </div>
  );
}

export default App;
