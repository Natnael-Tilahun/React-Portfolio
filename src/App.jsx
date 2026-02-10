import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [collapsed, setCollapsed] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);
  let savedTheme = localStorage.getItem("theme");
  useEffect(() => {
    setDarkTheme(savedTheme == "dark" ? true : false);
    if (savedTheme == "dark") {
      document.getElementById("root").classList.add("dark");
      document.getElementById("root").classList.remove("light");
    } else {
      document.getElementById("root").classList.add("light");
      document.getElementById("root").classList.remove("dark");
    }
    // document.getElementById("root").classList.toggle(savedTheme)
  }, [darkTheme]);

  const toggleMenu = () => {
    setCollapsed((prevState) => !prevState);
  };

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
    
    const newTheme = !darkTheme ? "dark" : "light";
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.getElementById("root").classList.add("dark");
      document.getElementById("root").classList.remove("light");
    } else {
      document.getElementById("root").classList.add("light");
      document.getElementById("root").classList.remove("dark");
    }
  };
  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row">
      <div className="fixed inset-0 -z-10 h-full w-full pointer-events-none">
        <div className="absolute opacity-0 dark:opacity-100 inset-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute opacity-100 dark:opacity-0 inset-0 z-[-2] rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(124,161,164,0.5)_100%)]"></div>
      </div>
      <Header 
        collapsed={collapsed} 
        toggleMenu={toggleMenu} 
        toggleTheme={toggleTheme}
        darkTheme={darkTheme}
      />
      <div className="flex-1">
        <Home
          collapsed={collapsed}
          toggleMenu={toggleMenu}
          toggleTheme={toggleTheme}
          darkTheme={darkTheme}
        />
      </div>
    </div>
  );
}

export default App;
