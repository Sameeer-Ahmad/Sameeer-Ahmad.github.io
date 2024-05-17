import Title from "../Layouts/Title";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
function GithubCalender() {
  return (
    <>
      <section
        data-aos="zoom-in"
        data-aos-anchor-placement="center-bottom"
        id="statistics"
        className=" pt-20 pb-20 items-center border-b-[1px] font-titleFont border-b-black"
      >
        <div className="flex justify-center items-center text-center mb-[-30px]">
          <Title des="Github Statistics" />
        </div>
        <div className=" flex flex-wrap justify-center gap-4  ">
          <img
            className=" sm:w-46 sm:h-32  md:h-60 md:w-62 xl:h-60 xl:w-70"
            id="github-top-langs"
            src="https://github-readme-streak-stats.herokuapp.com/?user=Sameeer-Ahmad&theme=tokyonight&hide_border=false"
            alt="github-top-langs"
          />
          <img
            className="h-60 sm:h-32 md:h-60 md:w-62 xl:h-60 xl:w-70"
            id="github-streak-stats"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Sameeer-Ahmad&theme=tokyonight&hide_border=false&include_all_commits=true&count_private=true&layout=compact"
            alt="react-activity-calender"
          />
        </div>
        <div className=" mt-6 ">
          <img
            style={{ width: "100%" }}
            id="github-stats-card"
            src="https://ghchart.rshah.org/Sameeer-Ahmad?theme=dark"
            alt="github-stats-card"
          />
        </div>
      </section>
    </>
  );
}

export default GithubCalender;
