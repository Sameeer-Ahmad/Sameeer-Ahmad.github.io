import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { animatedLogo, resume } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Sameer-Ahmad-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="nav-menu"
      className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 px-3"
    >
      <div>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={600}
          className="cursor-pointer"
        >
          <div className="flex">
            <img className="h-20 mt-4" src={animatedLogo} alt="animatedLogo" />
            <p className="text-white font-bold text-3xl pt-8 xs:hidden sm:hidden md:block lg:block">
              {"<SAMEER/>"}
            </p>
          </div>
        </Link>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-300 tracking-wide cursor-pointer hover:text-designColor duration-300 "
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                {title}
              </Link>
            </li>
          ))}
          <a
            className="text-base font-normal text-gray-300 tracking-wide cursor-pointer hover:text-designColor duration-300 button"
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleResumeDownload}
          >
            Resume
          </a>
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        <div
          className={`sidebar-menu ${showMenu ? "show" : ""} scrollbar-hide`}
        >
          <div className="flex flex-col gap-8 py-2 relative">
            <div>
              <p className="text-white font-bold text-1xl">{"<SAMEER/>"}</p>
              <p className="text-sm text-gray-400 mt-2">
                Dedicated developer focused on creating efficient and innovative
                solutions to real-world problems.
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              {navLinksdata.map((item) => (
                <li
                  key={item._id}
                  className="text-base font-normal text-gray-300 tracking-wide cursor-pointer hover:text-designColor duration-300"
                >
                  <Link
                    onClick={() => setShowMenu(false)}
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <a
                className="text-base font-normal text-gray-300 tracking-wide cursor-pointer hover:text-designColor duration-300 button"
                id="resume-link-1"
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleResumeDownload}
              >
                Resume
              </a>
            </ul>
            <div className="flex flex-col gap-4">
              <h2 className="text-base uppercase font-titleFont mb-4">
                Find me in
              </h2>
              <div className="flex gap-4">
                <span className="bannerIcon">
                  <a
                    href="https://github.com/Sameeer-Ahmad"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Sameer Ahmad on GitHub"
                  >
                    <FaGithub />
                  </a>
                </span>
                <span className="bannerIcon">
                  <a
                    href="https://www.linkedin.com/in/sameer-ahmad-aa985428b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Sameer Ahmad on LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </span>
              </div>
            </div>
            <span
              onClick={() => setShowMenu(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-designColor duration-300 text-2xl cursor-pointer"
            >
              <MdClose />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
