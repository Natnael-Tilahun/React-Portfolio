import React from "react";
import About from "./About";
import Hero from "./Hero";
import { Routes, Route } from "react-router-dom";
import Projects from "./Projects";
import Contact from "./Contact";

function Home({toggleMenu, collapsed}) {
  const text_balck_700_Light = "504e70";
  const text_balck_900_Light = "302e4d";
  return (
    <div className="w-full h-auto overflow-auto  dark:bg-[#302e4d] dark:text-[#f2f2fc] bg-[#f2f2fc] text-[text_balck_900_Light] ">
      {/* <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes> */}
      <span>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className={`${collapsed ? "" : "hidden"} md:hidden fixed top-3 right-5 dark:fill-gray-300`}
          onClick={toggleMenu}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" />
        </svg>

      {/* <div className="md:hidden fixed top-3 right-5"> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="white"
          className={`${collapsed ? "hidden" : ""} fixed left-[280px] z-50 top-4 fill-black dark:fill-gray-300`}
          onClick={toggleMenu}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
        </svg>
      {/* </div> */}
      </span>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
