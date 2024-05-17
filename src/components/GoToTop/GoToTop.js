import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 260;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "100px",
        right: "32px",
        zIndex: "9999",
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
      }}
    >
      <div
        className="top-btn bg-[#701a75] rounded-full w-14 h-14 flex items-center justify-center shadow-md cursor-pointer animate-bounce"
        onClick={goToBtn}
      >
        <FaArrowUp className="text-black text-2xl" />
      </div>
    </div>
  );
};

export default GoToTop;
