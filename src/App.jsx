import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="w-screen h-screen flex">
      <Header />
      <Home />
    </div>
  );
}

export default App;
