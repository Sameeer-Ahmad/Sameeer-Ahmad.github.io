import Title from "../Layouts/Title";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full pt-10 pb-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center mt-10">
        <Title des="MY PROFESSIONAL JOURNEY AND THE EXPERIENCE I HAVE GAINED ALONG THE WAY." />
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-3xl">
          <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="SDE 1 — Zopping"
              subTitle="Jun 2025 - Present · Bengaluru, Karnataka, India"
              des="Building and shipping frontend features across the Zopping platform's Admin, Enterprise Admin, Component Library, and Consumer storefronts using React, Next.js, and TypeScript — focusing on performance, reusable UI, and stable production releases."
            />
            <ResumeCard
              title="SDE 1 — ZopSmart"
              subTitle="Nov 2024 - May 2025 · Bengaluru, Karnataka, India"
              des="Worked on Zopping, a Shopify-like retail e-commerce platform, contributing to the SME Admin, Enterprise Admin, and Component Library. Built responsive, user-friendly interfaces with React and Next.js and helped improve platform performance and reliability. (Zopping later spun off from ZopSmart as an independent entity.)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
