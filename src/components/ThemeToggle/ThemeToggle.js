import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = ({ className = "" }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`w-10 h-10 inline-flex items-center justify-center rounded-full bg-cardBg text-textMuted hover:text-designColor hover:bg-cardBgHover transition-colors duration-300 cursor-pointer ${className}`}
    >
      {isDark ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default ThemeToggle;
