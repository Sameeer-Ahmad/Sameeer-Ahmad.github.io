import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const ProjectsCard = ({
  title,
  des,
  src,
  icon1,
  icon2,
  link1,
  link2,
  tag1,
  tag2,
  tag3,
  tag4,
  tag5,
}) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-anchor-placement="top"
      className="project-card w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
    >
      <div className="w-full h-[80%] overflow-hidden ">
        <img
          className="w-full h-full object-contain group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="project-title text-md uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <a
                  href={link1}
                  className="project-github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    {icon1}
                  </span>
                </a>
              </span>
              <span className="project-deployed text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <a href={link2} target="_blank" rel="noopener noreferrer">
                  <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    {icon2}
                  </span>
                </a>
              </span>
            </div>
          </div>
          <p className="project-description text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
          <span className="project-tech-stack text-lg mr-5 h-10 rounded-lg inline-flex justify-center items-center text-gray-300 hover:text-designColor duration-300 cursor-pointer mt-2">
            {tag1}
          </span>
          <span className="project-tech-stack text-lg mr-5 h-10 rounded-lg inline-flex justify-center items-center text-gray-300 hover:text-designColor duration-300 cursor-pointer mt-2">
            {tag2}
          </span>
          <span className="project-tech-stack text-lg mr-5 h-10 rounded-lg inline-flex justify-center items-center text-gray-300 hover:text-designColor duration-300 cursor-pointer mt-2">
            {tag3}
          </span>
          <span className="project-tech-stack text-lg mr-5 h-10 rounded-lg inline-flex justify-center items-center text-gray-300 hover:text-designColor duration-300 cursor-pointer mt-2">
            {tag4}
          </span>
          <span className="project-tech-stack text-lg mr-5 h-10 rounded-lg inline-flex justify-center items-center text-gray-300 hover:text-designColor duration-300 cursor-pointer mt-2">
            {tag5}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
