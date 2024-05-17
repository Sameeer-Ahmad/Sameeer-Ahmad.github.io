import { bannerImg } from "../../assets/index";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

AOS.init();

const RightBanner = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative pt-14">
      <img
        className="home-img w-[300px] h-[350px] lgl:w-[450px] lgl:h-[500px] z-10"
        src={bannerImg}
        alt="bannerImg"
        data-aos={isDesktop ? "fade-left" : undefined}
        data-aos-anchor-placement="top"
      />
      <div className="absolute bottom-0 w-[300px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
