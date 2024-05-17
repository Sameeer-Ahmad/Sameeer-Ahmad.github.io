import { bannerImg } from "../../assets/index";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative pt-14">
      <img
        className="home-img w-[300px] h-[350px] lgl:w-[450px] lgl:h-[500px] z-10"
        src={bannerImg}
        alt="bannerImg"
        data-aos="fade-left"
        data-aos-anchor-placement="top"
        // Check if screen is not in desktop view (less than 1024px)
        data-aos-disable={window.innerWidth < 1024}
      />
      <div className="absolute bottom-0 w-[300px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
