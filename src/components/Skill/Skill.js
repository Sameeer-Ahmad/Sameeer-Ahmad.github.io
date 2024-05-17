import React, { useState, useEffect } from "react";
import Title from "../Layouts/Title";
import { skillsDetails } from "./SkillsDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import "./skill.css";

function Skill() {
  const [activeTab, setActiveTab] = useState("skills");
  const [selectedItem, setSelectedItem] = useState(null);
  const skills = skillsDetails.Skills;
  const tools = skillsDetails.Tools;

  useEffect(() => {
    AOS.init();
  }, []);

  const handleClicks = (tab) => {
    setActiveTab(tab);
    AOS.refresh();
  };

  return (
    <div
      id="skills"
      className="pt-20 pb-20 gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="A showcase of my proficiency and expertise in various technologies and tools." />
      </div>
      <div className="flex justify-center ">
        <div className="relative inline-flex p-2 bg-[#020617] rounded-full">
          <div className="flex space-x-2">
            <button
              onClick={() => handleClicks("skills")}
              className={`px-6 py-1 transition-colors duration-400 rounded-full ${
                activeTab === "skills"
                  ? "bg-designColor text-white"
                  : "bg-#1e293b text-white"
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => handleClicks("tools")}
              className={`px-6 py-2 transition-colors duration-400 rounded-full ${
                activeTab === "tools"
                  ? "bg-designColor text-white"
                  : "bg-#020617 text-white"
              }`}
            >
              Tools
            </button>
          </div>
        </div>
      </div>
      <div className="mt-14 transition-opacity duration-300 text-white flex justify-center flex-wrap">
        {activeTab === "skills" &&
          skills.map((skill, index) => (
            <span
              key={index}
              className="skills-card skillsIcon flex flex-col items-center justify-center mobile-margins m-1 relative"
              data-aos="zoom-in-down"
              data-aos-anchor-placement="center-bottom"
              onMouseEnter={() => setSelectedItem(skill.name)}
              onMouseLeave={() => setSelectedItem(null)}
            >
              <img
                className="skills-card-img w-16 h-16"
                src={skill.img}
                alt={skill.name}
              />
              {selectedItem === skill.name && (
                <div className="overlay">{skill.name}</div>
              )}
            </span>
          ))}
        {activeTab === "tools" &&
          tools.map((tool, index) => (
            <span
              key={index}
              className="skills-card skillsIcon flex flex-col items-center justify-center m-2 relative mobile-margins"
              data-aos="zoom-in-down"
              data-aos-anchor-placement="center-bottom"
              onMouseEnter={() => setSelectedItem(tool.name)}
              onMouseLeave={() => setSelectedItem(null)}
            >
              <img
                className="skills-card-img w-16 h-16"
                src={tool.img}
                alt={tool.name}
              />
              {selectedItem === tool.name && (
                <div className="overlay">{tool.name}</div>
              )}
            </span>
          ))}
      </div>
    </div>
  );
}

export default Skill;
