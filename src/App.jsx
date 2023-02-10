import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleMenu = () => {
    setCollapsed((prevState) => !prevState);
  };
  return (
    <div className="w-screen h-screen flex">
      <Header  collapsed = {collapsed} toggleMenu = {toggleMenu} />
      <Home  collapsed = {collapsed} toggleMenu ={toggleMenu}/>
    </div>
  );
}

export default App;
