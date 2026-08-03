import Title from "../Layouts/Title";
import {
  facebook,
  tmetric,
  theArtline,
  AudioInsight,
  sameerPortfolio,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";
import { BsGithub } from "react-icons/bs";
import { SiTypescript, SiChakraui, SiExpress, SiMongodb } from "react-icons/si";
import { FaGlobe, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full  pt-10 pb-20 border-b-[1px] border-b-black "
    >
      <div className="flex justify-center items-center text-center mt-10 ">
        <Title des="CHECK OUT MY WORKS, A BLEND OF CREATIVITY AND FUNCTIONALITY!" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Audio-Insight "
          des="Built Audio-Insight, a platform where users can upload audio, receive summaries and transcriptions in various languages, and ask questions related to the content."
          icon1={<BsGithub />}
          icon2={<FaGlobe />}
          link1="https://github.com/Sameeer-Ahmad/AudioInsight"
          link2="https://audio-insight.vercel.app/"
          src={AudioInsight}
          tag1={<FaReact />}
          tag2={<SiChakraui />}
          tag3={<SiExpress />}
          tag4={<FaNodeJs />}
          tag5={<GrMysql />}
        />

        <ProjectsCard
          title="FACEBOOK "
          des="The Facebook Clone project recreates core functionalities of Facebook, including user authentication, posting updates, and liking and commenting on posts."
          icon1={<BsGithub />}
          icon2={<FaGlobe />}
          link1="https://github.com/Sameeer-Ahmad/Facebook-Clone"
          link2="https://facebook-clone-woad-xi.vercel.app/"
          src={facebook}
          tag1={<FaReact />}
          tag2={<SiTypescript />}
          tag3={<SiChakraui />}
          tag4={<IoLogoFirebase />}
        />
        <ProjectsCard
          title="The Artline"
          des="Artline lets artists showcase artwork and explorers browse and purchase. Features include portfolios, listings, and secure purchasing."
          src={theArtline}
          icon1={<BsGithub />}
          icon2={<FaGlobe />}
          link1={"https://github.com/Sameeer-Ahmad/ArtGallary"}
          link2={"https://art-gallary-do7i.vercel.app/"}
          tag1={<FaReact />}
          tag2={<SiChakraui />}
          tag3={<SiExpress />}
          tag4={<FaNodeJs />}
          tag5={<SiMongodb />}
        />
        <ProjectsCard
          title="TMETRIC "
          des="TMETRICT is a website designed for small businesses to manage their projects, assign tasks to team members, and effectively manage time."
          src={tmetric}
          icon1={<BsGithub />}
          icon2={<FaGlobe />}
          link1={"https://github.com/Sameeer-Ahmad/Tmetric-clone"}
          link2={"https://tmetric-clone-one.vercel.app/"}
          tag1={<FaReact />}
          tag2={<SiChakraui />}
        />
        <ProjectsCard
          title="PORTFOLIO"
          des="Discover my work and technical expertise on my portfolio. See how I bring ideas to life with code!"
          icon1={<BsGithub />}
          icon2={<FaGlobe />}
          link1="https://github.com/Sameeer-Ahmad/Sameeer-Ahmad.github.io"
          link2="https://sameeer-ahmad.github.io/"
          src={sameerPortfolio}
          tag1={<FaReact />}
          tag2={<RiTailwindCssFill />}
          
        />
      </div>
    </section>
  );
};

export default Projects;
