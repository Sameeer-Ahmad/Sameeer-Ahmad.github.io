import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <section
      id="footer"
      className="w-full pt-4 pb-6 border-b-[1px] border-b-themeBorder"
    >
      <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-6 xs:gap-4 gap-12">
        <div>
          <p className="sm:text-md xs:text-sm ">
            Crafted with ❤️ by Sameer
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex gap-4">
            <span className="bannerIcon  xs:size-12 sm:size-12">
              <a
                href="https://github.com/Sameeer-Ahmad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sameer Ahmad on GitHub"
                id="contact-github"
              >
                <FaGithub />
              </a>
            </span>
            <span className="bannerIcon xs:size-12 sm:size-12">
              <a
                href="https://www.linkedin.com/in/sameer-ahmad-aa985428b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sameer Ahmad on LinkedIn"
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
