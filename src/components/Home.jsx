import React, { useEffect } from "react";
import About from "./About";
import Hero from "./Hero";
import { Routes, Route } from "react-router-dom";
import Projects from "./Projects";
import Contact from "./Contact";
import Aos from "aos";

function Home({ toggleMenu, collapsed, toggleTheme, darkTheme }) {
  const text_balck_700_Light = "504e70";
  const text_balck_900_Light = "302e4d";
  const { pathname, hash } = window.location;
  useEffect(() => {
    if (hash) window.location.href = `${pathname}${hash}`;
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="w-full h-full overflow-y-scroll  dark:bg-[#302e4d] dark:text-[#f2f2fc] bg-[#f2f2fc] text-[text_balck_900_Light] ">
      {/* <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes> */}
      <div
        className={` fixed z-50 md:bg-transparent  w-full h-12 justify-center items-center flex ${
          collapsed ? "bg-inherit" : ""
        }`}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className={`${
              collapsed ? "" : "hidden"
            } lg:hidden fixed top-3 right-5 dark:fill-gray-300`}
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
            className={`${
              collapsed ? "hidden" : ""
            } lg:hidden fixed left-[280px] z-50 top-4 fill-black dark:fill-gray-300`}
            onClick={toggleMenu}
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
          </svg>
          {/* </div> */}
        </span>
        <span className="fixed left-3 lg:left-[97%] top-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleTheme}
            className={`${darkTheme ? "hidden" : ""} `}
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleTheme}
            className={`${darkTheme ? "" : "hidden"} fill-white`}
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
          </svg>
        </span>
      </div>

      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
