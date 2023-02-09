import React from "react";

function Hero() {
  return (
    <section id="home" className="flex h-screen text-xl px-12 py-52">
      <div className="flex flex-col items-start basis-[60%] gap-7 ">
        <h1 className="text-4xl font-bold">
          Hello, My name is{" "}
          <span className="text-red-500">Natnael Tilahun</span>
        </h1>
        <h1 className="text-3xl font-semibold">
          I'm a <span className="text-red-500">fullstack developer</span>
        </h1>
        <h1 className="leading-9 text-{text_balck_700_Light} dark:text-gray-400">
          I'm a fullstack developer with more than 3+ years of experience. I
          love building apps that solve real-world problems, and that are
          delightful to use. My specialties include Javascript, React JS,
          Tailwind CSS, and JAMSTACK development.
        </h1>
        <button className="bg-red-500 text-white  rounded-lg px-5 py-2 mt-7">
          More about me
        </button>
      </div>
      <div className="basis-[35%] ml-20 flex border-r-8 border-b-8 border-red-500 relative">
        <img
          src="/public/pic2.JPG"
          alt="Image"
          className=" absolute border-red-500 -left-10 bottom-10 rounded-3xl"
        />
      </div>
    </section>
  );
}

export default Hero;
