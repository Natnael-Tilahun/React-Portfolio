import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [collapsed, setCollapsed] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false)
  let savedTheme = localStorage.getItem("theme")
  useEffect(() => {
    setDarkTheme(savedTheme == "dark" ? true : false)
    if (savedTheme == "dark") {
      document.getElementById("root").classList.add('dark')
      document.getElementById("root").classList.remove('light')
    }
    else {
      document.getElementById("root").classList.add('light')
      document.getElementById("root").classList.remove('dark')
    }
    // document.getElementById("root").classList.toggle(savedTheme)
  }, [darkTheme])

  const toggleMenu = () => {
    setCollapsed((prevState) => !prevState);
  };

  const toggleTheme = () => {
      setDarkTheme(prevTheme => { !prevTheme })

    if (!darkTheme) {
      document.getElementById("root").classList.add('dark')
      document.getElementById("root").classList.remove('light')
    }
    else {
      document.getElementById("root").classList.add('light')
      document.getElementById("root").classList.remove('dark')
    }
    darkTheme ? localStorage.setItem("theme", 'light') : localStorage.setItem("theme", 'dark')
  }
  return (
    <div className="w-screen h-screen flex ">
      <Header collapsed={collapsed} toggleMenu={toggleMenu} />
      <Home collapsed={collapsed} toggleMenu={toggleMenu} toggleTheme={toggleTheme} darkTheme={darkTheme} />
    </div>
  );
}

export default App;
