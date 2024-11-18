import React, { useEffect, useState } from "react";
import AccordionLayout from "./AccordionLayout";
import { TypeAnimation } from "react-type-animation";

function About() {
  const text_balck_700_light = "504e70";
  const [activeIndex, setActiveIndex] = useState(0);
  // useEffect(() => {
  //   Aos.init();
  //   Aos.refresh();
  // });

  const certifications = [
    {
      title: "Frontend carrier path",
      description:
        "I studied frontend carrier path from Scrimba.It contains all the necessary skills that are essential to be a frontend developer. It includes basic html, css, Javascript, advanced Javascript, web design, react basics, advanced react and code review modules. It has 70+ hours of top-notch tutorials, 100+ coding challenges, 15+ real-world projects.",
      place: "Online",
    },
    {
      title: "Computer Science",
      description:
        "I took my bachelor degree in Computer Science from hawassa university. It was a four year class with different intense modules. It consists introduction to comuter science, problem solving, data structure and algorithm, different programming languages like C++, Java, C#, html, css, Javascript classes.",
      place: "Hawassa, Ethiopia",
    },
    {
      title: "CCNA Networking and Routing",
      description:
        " By taking this course, i am able to: - Explain network technologies - Explain how devices access local and remote network resources - Describe router hardware - Explain how switching operates in a small to medium-sized business network - Design an IP addressing scheme to provide network connectivity for a small to medium-sized business network - Configure initial settings on a network devices - Implement basic network connectivity between devices",
      place: "Hawassa, Ethiopia",
    },
    {
      title: "Introduction to Cybersecurity",
      description:
        " By taking this course, I am able to understand: - Global implications of cyber threats - Ways in which networks are vulnerable to attack - Impact of cyber-attack on industries - Cisco's approach to threat detection adn defense - Why Cybersecurity is a growing profession - Opportunities available for pursuing network security certifications",
      place: "Online",
    },
  ];

  return (
    <section
      id="about"
      className="overflow-y-scroll flex flex-col text-xl px-8 md:px-12 pt-20 md:py-10 dark:text-[#f2f2fc]"
    >
      <h1 className="text-4xl font-bold w-60 ">
        <TypeAnimation
          style={{
            display: "block",
          }}
          sequence={["About Me", 3000, ""]}
          // speed={5}
          speed={{ type: "keyStrokeDelayInMs", value: 250 }}
          repeat={Infinity}
        />
      </h1>
      <div>
        <hr className="border-2 border-red-500 h-1 w-28 rounded-lg animate-pulse" />
        <hr className="border-2 border-red-500 h-1 w-16 mt-1 rounded-lg animate-pulse" />
        <hr className="border-2 border-red-500 h-1 w-8 my-1 rounded-lg animate-pulse" />
      </div>

      <div className="h-full flex flex-col  md:p-12 gap-16  bg-teal-50 dark:bg-neutral-950 border dark:border-slate-700 p-5 my-8 rounded-lg md:rounded-xl">
        <div className="py-5 md:py-0">
          <h1 className="text-2xl font-bold pb-4">
            I'm Natnael Tilaun and{" "}
            <span className="text-red-500">fullstack developer</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-xl">
            I'm a fullstack developer with more than 4 years of experience. I
            have a bachelors degree in Computer Science. I love building apps
            that solve real-world problems, and that are delightful to use. My
            specialties include Javascript, Typescript, React JS, Next.js,
            Tailwind CSS, Shadcn Ui, Node.js and JAMSTACK development.
          </p>
        </div>

        <div className="">
          <h1 className="text-3xl font-medium py-5">My Skills</h1>

          <div className=" flex flex-wrap space-y-0 gap-10">
            <div className=" flex flex-col basis-[100%] md:basis-[40%] lg:basis-[30%] shrink-0">
              <AccordionLayout
                title="Frontend"
                index={1}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              >
                {/* <h1 className="text-lg font-semibold py-4 text-center text-gray-800">
                Frontend
              </h1> */}
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      HTML
                    </div>
                    {/* <h1>97%</h1> */}
                  </div>

                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[95%]"></div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">CSS</div>
                    {/* <h1>90%</h1> */}
                  </div>

                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[95%]"></div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Tailwind css
                    </div>
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[95%]"></div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Shadcn
                    </div>
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[95%]"></div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Bootstrap
                    </div>
                    {/* <h1>90%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[95%]"></div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Material UI
                    </div>
                    {/* <h1>90%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Javascript
                    </div>
                    {/* <h1>90%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[95%]"></div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      TypeScript
                    </div>
                    {/* <h1>75%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      React.js
                    </div>
                    {/* <h1>85%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[95%]"></div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Next.js
                    </div>
                    {/* <h1>85%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Vue.js
                    </div>
                    {/* <h1>80%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Gridsome
                    </div>
                    {/* <h1>85%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Nuxt.js
                    </div>
                    {/* <h1>75%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Redux Toolkit
                    </div>
                    {/* <h1>75%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      RTK Query
                    </div>
                    {/* <h1>75%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Pinia
                    </div>
                    {/* <h1>75%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>
              </AccordionLayout>
            </div>
            <div className="flex flex-col basis-[100%] md:basis-[40%] lg:basis-[30%] shrink-0">
              <AccordionLayout
                title="UI/UX"
                index={2}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              >
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Figma
                    </div>
                    {/* <h1>85%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Adobe XD
                    </div>
                    {/* <h1>70%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Photoshop
                    </div>
                    {/* <h1>70%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[80%]"></div>
                  </div>
                </div>
              </AccordionLayout>
            </div>
            <div className="flex flex-col basis-[100%] md:basis-[40%] lg:basis-[30%] shrink-0">
              {" "}
              <AccordionLayout
                title="Backend"
                index={3}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              >
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Node.js
                    </div>
                    {/* <h1>75%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Express.js
                    </div>
                    {/* <h1>90%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Firebase Functions
                    </div>
                    {/* <h1>90%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">PHP</div>
                    {/* <h1>80%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[80%]"></div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Java
                    </div>
                    {/* <h1>85%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[85%]"></div>
                  </div>
                </div>
                {/* </div> */}
              </AccordionLayout>
            </div>
            <div className="flex flex-col basis-[100%] md:basis-[40%] lg:basis-[30%] shrink-0">
              {" "}
              <AccordionLayout
                title="Database"
                index={4}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              >
                {/* <div className="flex flex-col    "> */}
                {/* <h1 className="text-lg font-semibold py-4 text-center text-gray-800">
                    Database
                  </h1> */}
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Mysql
                    </div>
                    {/* <h1>85%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      MongoDb
                    </div>
                    {/* <h1>90%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Firebase
                    </div>
                    {/* <h1>70%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      PostgreSQL
                    </div>
                    {/* <h1>70%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Supabase
                    </div>
                    {/* <h1>70%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>
                {/* </div> */}
              </AccordionLayout>
            </div>
            <div className="flex flex-col basis-[100%] md:basis-[40%] lg:basis-[30%] shrink-0">
              <AccordionLayout
                title="Version Control"
                index={5}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              >
                {/* <div className="flex flex-col    "> */}
                {/* <h1 className="text-lg font-semibold py-4 text-center text-gray-800">
                    Version Control
                  </h1> */}
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">Git</div>
                    {/* <h1>90%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[95%]"></div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Github
                    </div>
                    {/* <h1>90%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[95%]"></div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      GitLab
                    </div>
                    {/* <h1>90%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[95%]"></div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Bitbucket
                    </div>
                    {/* <h1>70%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      SourceTree
                    </div>
                    {/* <h1>70%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>
                {/* </div> */}
              </AccordionLayout>
            </div>
            <div className="flex flex-col  basis-[100%] md:basis-[40%] lg:basis-[30%] shrink-0">
              {" "}
              <AccordionLayout
                title="Headless CMS"
                index={6}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              >
                {/* <div className="flex flex-col   overflow-auto "> */}
                {/* <h1 className="text-lg font-semibold py-4 text-center text-gray-800">
                    Headless CMS
                  </h1> */}
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Strapi
                    </div>
                    {/* <h1>90%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Contentful
                    </div>
                    {/* <h1>70%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Netlify
                    </div>
                    {/* <h1>70%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>
                {/* </div> */}
              </AccordionLayout>
            </div>
            <div className="flex flex-col basis-[100%] md:basis-[40%] lg:basis-[30%] shrink-0">
              <AccordionLayout
                title="API"
                index={7}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              >
                {" "}
                {/* <div className="flex flex-col    "> */}
                {/* <h1 className="text-lg font-semibold py-4 text-center text-gray-800">
                  API
                </h1> */}
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      RESTful Api
                    </div>
                    {/* <h1>85%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[95%]"></div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      GraphQl
                    </div>
                    {/* <h1>85%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      SOAP Api
                    </div>
                    {/* <h1>85%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>
                {/* </div> */}
              </AccordionLayout>
            </div>
            <div className="flex flex-col basis-[100%] md:basis-[40%] lg:basis-[30%] shrink-0">
              <AccordionLayout
                title="Cloud Technologies"
                index={8}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              >
                {/* <div className="flex flex-col    "> */}
                {/* <h1 className="text-lg font-semibold py-4 text-center text-gray-800">
                    Cloud Technologies
                  </h1> */}
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Vercel
                    </div>
                    {/* <h1>95%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[95%]"></div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Netlify
                    </div>
                    {/* <h1>90%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[95%]"></div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Heroku
                    </div>
                    {/* <h1>80%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Firebase Hosting
                    </div>
                    {/* <h1>70%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Digital Ocean
                    </div>
                    {/* <h1>70%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="mb-1  font-medium dark:text-white">
                      Render
                    </div>
                    {/* <h1>70%</h1> */}
                  </div>
                  <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
                    <div className="bg-red-600 h-3 rounded-lg dark:bg-red-400 w-[90%]"></div>
                  </div>
                </div>
                {/* </div> */}
              </AccordionLayout>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-7 w-full h-full mt-10">
          <div className="basis-1/2 min-h-full border dark:border-gray-800 dark:bg-transparent rounded-lg shadow  px-8 md:px-12 py-8 relative  space-y-12">
            <h1 className="text-3xl font-medium mb-8 text-center">
              Experience
            </h1>
            <div className="w-full flex flex-col space-y-0 gap-y-6   ">
              <div className="border-2-2 absolute border-opacity-20 border-red-500 dark:border-red-900 h-[80%] border left-2 md:left-4 z-10"></div>

              <div className="">
                <p className=" w-5 h-5 rounded-full bg-red-500 absolute left-0 md:left-2 z-20"></p>

                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="gray"
                    className="inline mr-3"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zM4 9v10h16V9H4zm2 4h5v4H6v-4z" />
                  </svg>
                  Mar 2021 - Present (Upwork)
                </p>

                <div className="flex  flex-col md:flex-row justify-between py-1 ">
                  <h1 className="text-xl text-none-800 font-bold">
                    Top-Rated FullStack Developer (Freelancer)
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Remote (International)
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-6  py-4">
                  - Achieved a 5-star rating and 100% Job Success Score (JSS),
                  calculated based on client feedback. <br />
                  - Collaborated with 10+ international clients and completed
                  10+ projects. <br />
                  - Worked seamlessly with startups, fully remote international
                  teams, software development agencies, and individual product
                  owners. <br />- Participated in Agile Scrum sessions, daily
                  stand-ups, and utilized tools like Notion, Trello, Jira,
                  Slack, Zoom, Google Meet, and Skype for effective project
                  management and team collaboration.
                </p>
              </div>

              <div className="">
                <p className=" w-5 h-5 rounded-full bg-red-500 absolute left-0 md:left-2 z-20"></p>

                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="gray"
                    className="inline mr-3"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zM4 9v10h16V9H4zm2 4h5v4H6v-4z" />
                  </svg>
                  Nov 2021 - Present (Commercial bank of Ethiopia)
                </p>

                <div className="flex flex-col md:flex-row justify-between py-1">
                  <h1 className="text-xl text-none-800 font-bold">
                    Software Developer
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Addis Abeba, Ethiopia
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-6 py-4">
                  - Saved the bank millions of dollars per year in licensing
                  fees by developing in-house projects. <br />
                  - Developed and participated as a full-stack developer in
                  various in- house projects used by internal and external
                  customers. <br />
                  - Crafted user-centric designs that streamlined navigation and
                  improved overall aesthetic appeal. <br />- Handled
                  confidential information and documents with discretion and
                  maintained their proper organization.
                </p>
              </div>

              <div className="">
                <p className=" w-5 h-5 rounded-full bg-red-500 absolute left-0 md:left-2 z-20"></p>

                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="gray"
                    className="inline mr-3"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zM4 9v10h16V9H4zm2 4h5v4H6v-4z" />
                  </svg>
                  June 2022 - Oct 2022 (Woven Teams)
                </p>

                <div className="flex  flex-col md:flex-row justify-between py-1">
                  <h1 className="text-xl font-bold">
                    Evaluate Software Engineering Exercises
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Indianapolis, United States
                  </p>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-6 py-4">
                  - Evaluated 200+ programming and system design exercises in
                  various languages and frameworks, including JavaScript,
                  React.js, Python, Angular.js, Java, and Vue.js. <br />
                  - Interpreted complex written English responses to
                  communication and collaboration scenarios. <br />-
                  Communicated with the team via Slack and Trello, and resolved
                  scoring differences and training issues through video chats
                  with team members
                </p>
              </div>

              <div className="">
                <p className=" w-5 h-5 rounded-full bg-red-500 absolute left-0 md:left-2 z-20"></p>

                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="gray"
                    className="inline mr-3"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zM4 9v10h16V9H4zm2 4h5v4H6v-4z" />
                  </svg>
                  Feb 2021 - June 2021 (Dagi's Spa)
                </p>

                <div className="flex flex-col md:flex-row justify-between py-1">
                  <h1 className="text-xl font-bold">
                    Full Stack Web Developer
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Addis Abeba, Ethiopia
                  </p>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-6 py-4">
                  - Gathered and discussed business requirements with the
                  product owner and internal staff. <br />
                  - Analyzed and determined the best architecture for the
                  product to meet the requirements. <br />- Developed the
                  product from user interface design to full functionality.
                </p>
              </div>
            </div>
          </div>
          <div className="basis-1/2 min-h-full border dark:border-gray-800 dark:bg-transparent rounded-lg shadow  px-8 md:px-12 py-8 relative space-y-12">
            <h1 className="text-3xl font-medium mb-8 text-center">
              Education and certification
            </h1>
            <div className=" w-full flex flex-col space-y-0 gap-y-6 ">
              <div className="border-2-2 absolute border-opacity-20 border-red-500 dark:border-red-900 h-[80%] border left-2 md:left-4 z-10"></div>

              {certifications.map(({ title, description, place }, index) => (
                <div className="" key={index}>
                  <p className=" w-5 h-5 rounded-full bg-red-500 absolute left-0 md:left-2 z-20"></p>

                  {/* <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="gray"
                      className="inline mr-3"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zM4 9v10h16V9H4zm2 4h5v4H6v-4z" />
                    </svg>
                    Sep 2020 (Cisco Networking Academy)
                  </p> */}

                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-1 py-1">
                    <h1 className="text-xl font-bold">{title}</h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {place}
                    </p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-6 py-4">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
