import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <section
      id="projects"
      className="w-full pt-8 pb-8 border-b-[1px] border-b-black "
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="flex justify-between gap-14">
        <div>
          <p className="text-xl pt-4">Crafted with ❤️ by Sameer</p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex gap-8">
            <span className="bannerIcon">
              <a
                href="https://github.com/Sameeer-Ahmad"
                target="_blank"
                rel="noreferrer"
                id="contact-github"
              >
                <FaGithub />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-linkedin"
              >
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
