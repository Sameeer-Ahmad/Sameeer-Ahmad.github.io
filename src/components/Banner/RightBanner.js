import { bannerImg } from "../../assets/index";
import { useEffect, useState } from "react";

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
    <div className="relative w-[300px] h-[300px] lgl:w-[500px] lgl:h-[500px] p-3 lgl:p-5 bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne overflow-hidden">
      <img
    className="home-img w-full h-full object-cover object-center"
    src={bannerImg}
    alt="Sameer Ahmad"
    data-aos={isDesktop ? "fade-left" : undefined}
    data-aos-anchor-placement="top"
  />
    </div>
  </div>
    );
  };

export default RightBanner;
