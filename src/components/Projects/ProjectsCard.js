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
  const tags = [tag1, tag2, tag3, tag4, tag5].filter(Boolean);

  return (
    <div
      data-aos="zoom-in"
      data-aos-anchor-placement="top"
      className="project-card w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
    >
      <div className="w-full h-[80%] overflow-hidden ">
        <img
          className=" w-[500px] max-h-[300px] object-contain group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt={title}
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="project-title text-md uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <a
                href={link1}
                className="project-github-link text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} source code`}
              >
                {icon1}
              </a>
              <a
                href={link2}
                className="project-deployed text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live site`}
              >
                {icon2}
              </a>
            </div>
          </div>
          <p className="project-description text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="project-tech-stack text-lg h-10 rounded-lg inline-flex justify-center items-center text-gray-300 hover:text-designColor duration-300 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
