import React, { useEffect, useState } from "react";
import AccordionLayout from "./AccordionLayout";

function About() {
  const text_balck_700_light = "504e70";
  const [activeIndex, setActiveIndex] = useState(0);
  // useEffect(() => {
  //   Aos.init();
  //   Aos.refresh();
  // });

  return (
    <section
      id="about"
      className="overflow-y-scroll flex flex-col text-xl px-8 md:px-12 py-20 md:py-10 dark:text-[#f2f2fc]"
    >
      <h1 className="text-4xl font-bold w-60 ">About Me</h1>
      <hr className="border-2 border-red-500 h-1 w-28 rounded-lg" />
      <hr className="border-2 border-red-500 h-1 w-16 mt-1 rounded-lg" />
      <hr className="border-2 border-red-500 h-1 w-8 my-1 rounded-lg" />

      <div className="h-auto flex flex-col py-3 md:py-10 gap-10">
        <div>
          <h1 className="text-2xl font-bold py-4">
            I'm Natnael Tilaun and{" "}
            <span className="text-red-500">fullstack developer</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            I'm a fullstack developer with more than 3+ years of experience. I
            have a bachelors degree in Computer Science. I love building apps
            that solve real-world problems, and that are delightful to use. My
            specialties include Javascript, React JS, Tailwind CSS,Node.js and
            JAMSTACK development.
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
                    {/* <h1>90%</h1> */}
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
              </AccordionLayout>
            </div>
            <div className="flex flex-col basis-[100%] md:basis-[40%] lg:basis-[30%] shrink-0">
              <AccordionLayout
                title="UI/UX"
                index={2}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              >
                {/* <h1 className="text-lg font-semibold py-4 text-center text-gray-800">
                    UI/UX
                  </h1> */}

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
                {/* <div className="flex flex-col overflow-auto "> */}
                {/* <h1 className="text-lg font-semibold py-4 text-center text-gray-800">
                    Backend
                  </h1> */}

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
                      Bitbucket
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
              {" "}
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
                {/* </div> */}
              </AccordionLayout>
            </div>
            <div className="flex flex-col basis-[100%] md:basis-[40%] lg:basis-[30%] shrink-0">
              {" "}
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
                {/* </div> */}
              </AccordionLayout>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-7 ">
          <div className="">
            <h1 className="text-3xl font-medium py-5">Experience</h1>
            <div className="relative w-full flex flex-col space-y-0 gap-y-12  rounded-lg shadow-lg px-8 md:px-12 py-10 md:py-20 md:pb-24  border-2 dark:border-gray-800">
              <div className="border-2-2 absolute border-opacity-20 border-gray-700 dark:border-gray-600 h-[80%] border left-4 z-10"></div>

              <div className="">
                <p className=" w-5 h-5 rounded-full bg-red-500 absolute left-2 z-20"></p>

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

                <div className="flex justify-between py-1 ">
                  <h1 className="text-xl text-none-800 font-bold">
                    Freelancer
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Remote
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-base py-4">
                  I am working as a freelancer on upwork. I have worked with
                  different international individuals and companies in a short
                  and long term contract basis.
                </p>
              </div>

              <div className="">
                <p className=" w-5 h-5 rounded-full bg-red-500 absolute left-2 z-20"></p>

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

                <div className="flex justify-between py-1">
                  <h1 className="text-xl text-none-800 font-bold">
                    Software Developer
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Addis Abeba, Ethiopia
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-base py-4">
                  Currently, I am working as a software engineer at Commercial
                  Bank of Ethiopia. CBE is one of the biggest commercial bank in
                  the country Ethiopia with Trillions on asset value. I am
                  working their with the roles of: - Full-stack developer in the
                  In-House Development team for internal and external customers
                  use based on different business requirements. - Customize new
                  projects that bought from external vendors like adding new
                  features based on the company requirements.
                </p>
              </div>

              <div className="">
                <p className=" w-5 h-5 rounded-full bg-red-500 absolute left-2 z-20"></p>

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

                <div className="flex justify-between py-1">
                  <h1 className="text-xl font-bold">
                    Evaluate Software Engineering Exercises
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Indianapolis, United States
                  </p>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-base py-4">
                  Woven is a technical interview software that is radically
                  transforming the engineering hiring experience. I was working
                  remotely. What l was doing : Read and interpret complex
                  written English responses to communication and collaboration
                  scenarios, Read and evaluate code in a variety of common
                  languages and frameworks, Communicate with the team in Slack
                  and Trello, Video chat with other team members to resolve
                  scoring differences and training
                </p>
              </div>

              <div className="">
                <p className=" w-5 h-5 rounded-full bg-red-500 absolute left-2 z-20"></p>

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

                <div className="flex justify-between py-1">
                  <h1 className="text-xl font-bold">
                    Full Stack Web Developer
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Addis Abeba, Ethiopia
                  </p>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-base py-4">
                  I worked as a full time full stack web developer at Dagi's
                  spa. - Discuss on the business requirement of the company -
                  Decide the best architecture that fits with the requirement -
                  Develop from the user interface design to fully functional
                  product
                </p>
              </div>
            </div>
          </div>
          <div className="pt-7 md:pt-0">
            <h1 className="text-3xl font-medium py-5">
              Education and certification
            </h1>
            <div className="relative w-full flex flex-col space-y-0 gap-y-12  rounded-lg shadow-lg px-8 md:px-12 py-10 md:py-20  border-2 dark:border-gray-800">
              <div className="border-2-2 absolute border-opacity-20 border-gray-700 dark:border-gray-600 h-[80%] border left-4 z-10"></div>

              <div className="">
                <p className=" w-5 h-5 rounded-full bg-red-500 absolute left-2 z-20"></p>

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
                  Sep 2022 - Feb 2023 (Scrimba)
                </p>

                <div className="flex justify-between py-1 ">
                  <h1 className="text-xl text-none-800 font-bold">
                    Frontend carrier path
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Online
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-base py-4">
                  I studied frontend carrier path from Scrimba.It contains all
                  the necessary skills that are essential to be a frontend
                  developer. It includes basic html, css, Javascript, advanced
                  Javascript, web design, react basics, advanced react and code
                  review modules. It has 70+ hours of top-notch tutorials, 100+
                  coding challenges, 15+ real-world projects.
                </p>
              </div>

              <div className="">
                <p className=" w-5 h-5 rounded-full bg-red-500 absolute left-2 z-20"></p>

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
                  Oct 2016 - 2020 (Hawassa University)
                </p>

                <div className="flex justify-between py-1">
                  <h1 className="text-xl text-none-800 font-bold">
                    Computer Science
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Hawassa, Ethiopia
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-base py-4">
                  I took my bachelor degree in Computer Science from hawassa
                  university. It was a four year class with different intense
                  modules. It consists introduction to comuter science, problem
                  solving, data structure and algorithm, different programming
                  languages like C++, Java, C#, html, css, Javascript classes.
                </p>
              </div>

              <div className="">
                <p className=" w-5 h-5 rounded-full bg-red-500 absolute left-2 z-20"></p>

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
                  Mar 2019 (Cisco Networking Academy)
                </p>

                <div className="flex justify-between py-1">
                  <h1 className="text-xl font-bold">
                    CCNA Networking and Routing
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Hawassa University
                  </p>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-base py-4">
                  By taking this course, i am able to: - Explain network
                  technologies - Explain how devices access local and remote
                  network resources - Describe router hardware - Explain how
                  switching operates in a small to medium-sized business network
                  - Design an IP addressing scheme to provide network
                  connectivity for a small to medium-sized business network -
                  Configure initial settings on a network devices - Implement
                  basic network connectivity between devices
                </p>
              </div>

              <div className="">
                <p className=" w-5 h-5 rounded-full bg-red-500 absolute left-2 z-20"></p>

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
                  Sep 2020 (Cisco Networking Academy)
                </p>

                <div className="flex justify-between py-1">
                  <h1 className="text-xl font-bold">
                    Introduction to Cybersecurity
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Online
                  </p>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-base py-4">
                  By taking this course, I am able to understand: - Global
                  implications of cyber threats - Ways in which networks are
                  vulnerable to attack - Impact of cyber-attack on industries -
                  Cisco's approach to threat detection adn defense - Why
                  Cybersecurity is a growing profession - Opportunities
                  available for pursuing network security certifications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
