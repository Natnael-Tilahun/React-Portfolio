import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { CardBody } from "./Card";
import { CardContainer } from "./Card";
import { CardItem } from "./Card";
// import { Boxes } from "./background-boxes";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="hero"
      className="flex h-full justify-center  items-center  flex-col gap-4 md:gap-16 md:flex-row  md:h-screen text-xl px-6 py-12 md:px-14 md:py-52 relative w-full overflow-hidden
        "
    >
      <div className="absolute inset-0 w-full h-full flex flex-col-reverse md:flex-row dark:bg-slate-900  z-20 [mask-image:radial-gradient(transparent,whit)]  pb-8">
        {/* <Boxes className="z-0" /> */}

        <div className="flex  flex-col justify-center px-10 md:basis-[60%] gap-3 md:gap-7 ">
          <h1
            data-aos="fade-up"
            className="md:text-4xl font-bold tracking-wider pt-3 md:pt-0"
          >
            Hello, My name is{" "}
            <span className="text-red-500">Natnael Tilahun</span>
          </h1>
          <h1
            data-aos="fade-up"
            className="md:text-3xl font-semibold tracking-wider py-1 md:py-0"
          >
            I'm a{" "}
            <span className="text-red-500">
              {" "}
              <TypeAnimation
                sequence={[
                  "Front-end developer",
                  1000,
                  "Back-end developer",
                  1000,
                  "Full-stack developer",
                  1000,
                ]}
                // style={{ fontSize: "2em" }}
                repeat={Infinity}
              />
            </span>
          </h1>

          <h1
            data-aos="fade-up"
            className="leading-9 text-black/70 dark:text-gray-200 text-base md:text-xl py-3 tracking-wider"
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
            <button className="bg-red-500 text-white  rounded-xl px-5 py-2 mt-2 ">
              More about me
            </button>
          </HashLink>
        </div>
        <div
          // data-aos="fade-up-left"
          className="md:basis-[35%]  h-full justify-center items-center   md:flex rounded-3xl bg-[#B1C2FA "
        >
          <CardContainer className="inter-var w-full flex justify-center  h-full">
            {/* <CardBody className="bg-gray-50 flex justify-center  group/card   dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border-4 border-red-500  "> */}
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-fit mt-4"
            >
              <img
                src="/pic.JPG"
                // data-aos="fade-up"
                height="1000"
                width="1000"
                alt="Image"
                className="h-80 w-fit  object-contain  rounded-3xl group-hover/card:shadow-xl"
              />
            </CardItem>
            {/* </CardBody> */}
          </CardContainer>
        </div>
      </div>
    </section>
  );
}

export default Hero;
