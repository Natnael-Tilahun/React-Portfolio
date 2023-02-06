import React from "react";

function About() {
  const text_balck_700_light = "504e70";
  return (
    <section id="about" className="flex flex-col h-screen text-xl px-12 py-10">
      <h1 className="text-3xl font-medium w-40 border-b-2 border-red-600">
        About Me
      </h1>
      <div className="h-full flex flex-col py-10 gap-10">
        <div>
          <h1 className="text-2xl font-bold py-4">
            I'm Natnael Tilaun and{" "}
            <span className="text-red-500">fullstack developer</span>
          </h1>
          <p className="text-gray-600">
            I'm a fullstack developer based out of Addis Abeba, Ethiopia. I have
            a bachelors degree in Computer Science. I love building apps that
            solve real-world problems, and that are delightful to use. My
            specialties include Javascript, React JS, Tailwind CSS, and JAMSTACK
            development.
          </p>
        </div>

        <div>
          <h1 className="text-2xl font-bold py-3">My Skills</h1>

          <div>
            <div className="flex justify-between">
              <div className="mb-1  font-medium dark:text-white">HTML</div>
              <h1>90%</h1>
            </div>

            <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
              <div
                className="bg-red-600 h-3 rounded-lg dark:bg-red-300 w-[90%]"
                //   style="width: 45%"
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <div className="mb-1  font-medium dark:text-white">
                Javascript
              </div>
              <h1>90%</h1>
            </div>

            <div className="w-full bg-gray-300 rounded-lg h-3 mb-4 dark:bg-gray-300">
              <div
                className="bg-red-600 h-3 rounded-lg dark:bg-red-300 w-[90%]"
                //   style="width: 45%"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
