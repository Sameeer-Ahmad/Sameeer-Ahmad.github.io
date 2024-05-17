import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { resume } from "../../assets";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "MERN Developer."],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1JNYpOgqvo2eOrKxeEuRiIfmYQIRDvUVT/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <div
      data-aos="fade-right"
      data-aos-anchor-placement="top"
      className="w-full lgl:w-1/2 flex flex-col gap-20"
    >
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">
          EXPERIENCE MY PROFESSIONAL WORLD
        </h4>
        <h1 className="sm:text-5xl text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="user-detail-name text-designColor capitalize">
            Sameer
          </span>
        </h1>
        <h2 className="sm:text-2xl text-4xl  font-bold text-white">
          a <span className="sm:text-md">{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <div className="flex text-2xl pt-4 items-center text-center mb-[-10px] ">
          <p className="font-bodyFont leading-6 tracking-wide underline">
            About Me
          </p>
        </div>  
        <p className="user-detail-intro text-sm font-bodyFont leading-6 tracking-wide">
          Hi! i'm Sameer, and I'm passionate about crafting web applications
          that are as easy to use as they are visually stunning. I love taking
          your ideas and sprinkling them with creativity to bring them to life!
          Challenges excite me, and I'm a pro at finding clever solutions to
          keep projects on track. The world of web development is always
          changing, so I'm constantly learning new things to stay ahead of the
          curve. Let's build something amazing together!
        </p>
        <div
          onClick={openResume}
          className="w-40 h-10 bg-white font-bold text-black text-sm inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-gradient-to-r from-[#1e2024] to-[#202327] hover:text-white cursor-pointer duration-300"
        >
          <a
            href={resume}
            download="Sameer-Ahmad-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-4 lgl:gap-0 justify-between ">
        <div className="mt-[-30px]">
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a
                href="  https://github.com/Sameeer-Ahmad"
                target="_blank"
                rel="Sameer-Ahmad"
              >
                <FaGithub />
              </a>
            </span>

            <span className="bannerIcon">
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
