import { useContext } from "react";
import ThemeContext from "../context/theme"; // Ensure the correct import path

const ThemeBtn = () => {
  const { themeMode, lightTheme, darkTheme } = useContext(ThemeContext);

  return (
    <button onClick={themeMode === "light" ? darkTheme : lightTheme}>
      Toggle Theme
    </button>
  );
};

export default ThemeBtn;
