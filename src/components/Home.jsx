import React from "react";
import About from "./About";
import Hero from "./Hero";
import { Routes, Route } from "react-router-dom";
import Projects from "./Projects";

function Home() {
  const text_balck_700_Light = "504e70";
  const text_balck_900_Light = "302e4d";
  return (
    <div className="w-full h-full  dark:bg-[#302e4d] dark:text-[#f2f2fc] bg-[#f2f2fc] text-[text_balck_900_Light] ">
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </div>
  );
}

export default Home;
