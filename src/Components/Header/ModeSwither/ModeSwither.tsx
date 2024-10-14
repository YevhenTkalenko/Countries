import { IoMoon } from "react-icons/io5";
import "./ModeSwither.css";
import { useEffect, useState } from "react";

const ModeSwither = () => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className="header__theme" onClick={toggleTheme}>
      <IoMoon />
      <span>{theme} theme</span>
    </div>
  );
};
export default ModeSwither;
