const ResumeCard = ({ title, subTitle, des }) => {
  return (
    <div className="w-full group flex">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-cardBgHover">
          <span className="w-3 h-3 rounded-full inline-flex bg-bodyColor group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-cardBg hover:bg-cardBgHover duration-300 rounded-lg p-4 lgl:px-10 lgl:py-8 flex flex-col justify-center gap-6 shadow-shadowOne">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-lightText group-hover:text-textPrimary duration-300">
            {title}
          </h3>
          <p className="text-sm mt-2 text-textMuted group-hover:text-textPrimary duration-300">
            {subTitle}
          </p>
        </div>
        <p className="text-sm md:text-base font-medium text-textMuted leading-relaxed group-hover:text-lightText duration-300">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
