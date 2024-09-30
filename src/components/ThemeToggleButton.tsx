import { useEffect, useState } from "react";

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState<string>(() => {
    // Recuperamos el tema de localStorage si existe, sino tomamos el sistema
    return (
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  });

  // Función para cambiar entre temas
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    // Aplicamos la clase correspondiente al tema
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 transition-all duration-300 bg-gray-200 rounded-full  dark:bg-gray-800 dark:text-white"
    >
      {theme === "dark" ? "🌙 " : "☀️ "}
    </button>
  );
};

export default ThemeToggleButton;
