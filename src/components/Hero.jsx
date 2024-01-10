import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";

function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col gap-4 md:gap-0 md:flex-row h-full md:h-screen text-xl px-6 py-12 md:px-14 md:py-52"
    >
      <img
        src="/pic.JPG"
        data-aos="zoom-in"
        alt="Image"
        className="h-[50%] w-full content-center bg-contain rounded-3xl md:hidden"
      />
      <div className="flex flex-col items-start md:basis-[60%] gap-3 md:gap-7 ">
        <h1 data-aos="fade-up" className="md:text-4xl font-bold pt-3 md:pt-0">
          Hello, My name is{" "}
          <span className="text-red-500">Natnael Tilahun</span>
        </h1>
        <h1
          data-aos="fade-up"
          className="md:text-3xl font-semibold py-1 md:py-0"
        >
          I'm a <span className="text-red-500">fullstack developer</span>
        </h1>
        <h1
          data-aos="fade-up"
          className="leading-9 text-{text_balck_700_Light} dark:text-gray-400 text-base md:text-xl py-3"
        >
          I'm a fullstack developer with more than 3+ years of experience. I
          love building apps that solve real-world problems, and that are
          delightful to use. My specialties include Javascript, React JS,
          Tailwind CSS,Node.js and JAMSTACK development.
        </h1>
        <HashLink
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          to="/#about"
          smooth
        >
          <button className="bg-red-500 text-white  rounded-lg px-5 py-2 mt-2 md:mt-7">
            More about me
          </button>
        </HashLink>
      </div>
      <div
        data-aos="fade-up-left"
        className="basis-[35%] ml-20 md:flex border-r-8 border-b-8 border-red-500 relative hidden"
      >
        <img
          src="/pic.JPG"
          data-aos="fade-up"
          alt="Image"
          className=" absolute border-red-500 -left-10 bottom-10 rounded-3xl"
        />
      </div>
    </section>
  );
}

export default Hero;
