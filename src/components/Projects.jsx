import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Projects() {
  const [api, setApi] = useState(); // State for Carousel API
  const [current, setCurrent] = useState(0); // State for current slide
  const [count, setCount] = useState(0); // State for total slides

  // const [imageApi, setImageApi] = useState(); // State for Carousel API
  // const [imageCurrent, setImageCurrent] = useState(0); // State for current slide
  // const [imageCount, setImageCount] = useState(0); // State for total slides

  const projects = [
    {
      id: 0,
      title: "Admin Panel for Paint App iPad App",
      description:
        "An admin panel for the Paint App iPad application. It has been converted from Figma design and is connected to a backend API.",
      languages: [
        "React.js",
        "Tailwind css",
        "RTK Query",
        "Shadcn UI",
        "Yup",
        "React Formik",
      ],
      images: [
        {
          src: "/paint app.png",
          alt: "paint app website image",
        },
        {
          src: "/neodeliver.png",
          alt: "paint app website image",
        },
        {
          src: "/paint app.png",
          alt: "paint app website image",
        },
      ],
      siteLink: "https://paintapp.m2mbeta.com/",
      githubLink:
        "https://gitlab.com/m2m-node-react-projects/paint-app-web-and-api",
    },
    {
      id: 11,
      title:
        "National Board for Health and Wellness Coaching Role-Based Dashboard",
      description:
        "A role-based dashboard for the National Board for Health and Wellness Coaching, designed for Admin, Super Admin, and Instructor roles to manage users, track courses, and oversee certification processes.",
      languages: ["React.js", "Bootstrap"],
      images: [
        {
          src: "/nbhwc.png",
          alt: "nbhwc website image",
        },
      ],
      siteLink: "https://nbhwc-dashboard.m2mbeta.com/login",
      githubLink:
        "https://gitlab.com/m2m-node-react-projects/nbhwc-dashboard-and-api/",
    },
    {
      id: 111,
      title: "Service.ai SMS Agent Creator",
      description:
        "Developed an SMS agent creation platform at Service.ai, enabling users to build and deploy SMS agents with ease.",
      languages: [
        "Next.js",
        "Typescript",
        "Tailwind css",
        "Shadcn",
        "Jotai",
        "Firebase",
        "Zod",
      ],
      images: [
        {
          src: "/servicerepai.png",
          alt: "servicerep ai website image",
        },
      ],
      siteLink: "https://www.servicerep.ai/",
      githubLink: "https://github.com/jeffdh5/servicerepai",
    },
    {
      id: 1,
      title: "Neodeliver SaaS Project",
      description:
        "Neodeliver is a US-based SaaS project that has been converted from Figma design and is connected to a backend API using Vue.js, Nuxt.js, Tailwind CSS, and GraphQL.",
      languages: ["Vue.js", "Nuxt.js", "Tailwind css", "GraphQL"],
      images: [
        {
          src: "/neodeliver.png",
          alt: "neodeliver website image",
        },
      ],
      siteLink: "https://neodeliver-ui.pages.dev/",
      githubLink: "https://gitlab.com/neodeliver-ui.pages.dev",
    },
    {
      id: 22,
      title: "Walia Jobs Job Portal",
      description:
        "Walia Jobs Job Portal connects companies with job seekers. Companies can post job ads, while job seekers can filter available vacancies based on their preferences, build standard CVs, and submit reviews for companies.",
      languages: [
        "React.js",
        "Tailwind Css",
        "Yup",
        "React Formik",
        "RTK Query",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      images: [
        {
          src: "/walia jobs.png",
          alt: "waliajobs website image",
        },
      ],
      siteLink: "https://walia-jobs.vercel.app/",
      githubLink: "https://github.com/Natnael-Tilahun/WaliaJobs",
    },
    {
      id: 33,
      title: "Walia Jobs Admin Panel",
      description:
        "The Walia Jobs Admin Panel allows administrators to manage the job portal effectively. It includes features for registering companies, posting job listings, managing user accounts, and adding new CV templates.",
      languages: [
        "Next.js",
        "Tailwind Css",
        "Typescript",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      images: [
        {
          src: "/walia jobs admin.png",
          alt: "waliajobs admin panel website image",
        },
      ],
      siteLink: "https://walia-backend.vercel.app/",
      githubLink: "https://github.com/Natnael-Tilahun/walia-backend",
    },
    {
      id: 44,
      title: "The Givers Donation Website",
      description:
        "The Givers is a platform that connects donors with individuals in need. Users can donate items they no longer need and requesters can browse available donations, fostering a community of giving.",
      languages: [
        "Next.js",
        "Tailwind Css",
        "TypeScript",
        "Shadcn",
        "Jotai",
        "Supabase",
      ],
      images: [
        {
          src: "/the givers.png",
          alt: "the givers donation website image",
        },
      ],
      siteLink: "https://the-givers.vercel.app/",
      githubLink: "https://github.com/Natnael-Tilahun/the-givers",
    },
    {
      id: 2,
      title: "A food delivery startup landing page",
      description:
        "A landing page for a food delivery startup company. It show cases the main services, pricing and a contact page. It's responsive and clean code that follows best coding practices.",
      languages: ["Tailwind css", "React.js"],
      images: [
        {
          src: "/tekusmesa-screenshot.png",
          alt: "tekus mesa website image",
        },
      ],
      siteLink: "https://tekusmesa.com",
      githubLink: "https://github.com/Natnael-Tilahun/TekusMesa",
    },
    {
      id: 3,
      title: "A journal and handy crafts online shoping landing page",
      description:
        "A Journal and handy craft product online shoping landing page. It displays a product list, a contact list to order online. It's a responsive and pixel perfect.",
      languages: ["Tailwind css", "React.js"],
      images: [
        {
          src: "/setadess.png",
          alt: "setadess website image",
        },
      ],
      siteLink: "https://setadess.com",
      githubLink: "https://github.com/Natnael-Tilahun/setades",
    },
    {
      id: 4,
      title: "A Landing Page and Admin Panel",
      description:
        "A landing page and admin dashboard for a construction management company. The landing page show cases the full information of the company and the admin dashboard consists of the different features used to manage the business. It's responsive and clean code that follows best coding practices.",
      languages: ["Html", "Bootstrap", "Javascript", "PHP"],
      images: [
        {
          src: "/fny landing page.png",
          alt: "fny landing page website image",
        },
      ],
      siteLink: "https://fny-five.vercel.app/",
      githubLink: "https://github.com/Natnael-Tilahun/fny",
    },
    {
      id: 5,
      title: "Personalized Dashboard Chrome Extension",
      description:
        "A Chrome extension to help you focus and stay up-to-date. It gives you an overview over the current time, how the wheather is like, how bitcoin is performing and display different motivational quotes. Interacts with multiple APIs using async JS.",
      languages: ["Html", "CSS", "Javascript", "External APIs"],
      images: [
        {
          src: "/chrome-extension-image.png",
          alt: "chrome extension image",
        },
      ],
      siteLink: "",
      githubLink:
        "https://github.com/Natnael-Tilahun/Dashboard-Chrome-Extension",
    },
    {
      id: 6,
      title: "Quizzical App",
      description:
        "A quiz app which built from figma design using react.js, tailwindcss, and makes API calls to the open Trivia Database.",
      languages: ["React.js", "Tailwind css", "Travia API"],
      images: [
        {
          src: "quizzical.png",
          alt: "quizzical quiz site image",
        },
      ],
      siteLink: "https://qizzical-app.vercel.app/",
      githubLink: "https://github.com/Natnael-Tilahun/Qizzical-App",
    },
    {
      id: 7,
      title: "Movie search and watchlist app",
      description:
        "A Movie search and watchlist which built from figma design using javascript, tailwind css and used localStorage api also makes API calls to the OMDB API.",
      languages: ["Javascript", "Tailwind css", "OMDB API"],
      images: [
        {
          src: "movie watchlist.png",
          alt: "movie watchlist site image",
        },
      ],
      siteLink: "https://movie-watchlist-theta.vercel.app/",
      githubLink: "https://github.com/Natnael-Tilahun/Movie-Watchlist",
    },
    {
      id: 8,
      title: "Tenzies Game",
      description:
        "A Tenzies Game which built from figma design using react.js, tailwind css, and local storage api. It has a features like track a roll number, game score, best score.",
      languages: ["Javascript", "Tailwind css", "Local Storage API"],
      images: [
        {
          src: "tenzies.png",
          alt: "tenzies game image",
        },
      ],
      siteLink: "https://tenzies-game-tau-wheat.vercel.app/",
      githubLink: "https://github.com/Natnael-Tilahun/Tenzies-Game",
    },
    {
      id: 9,
      title: "Password Generator",
      description:
        "An app that generates two secure 15 characters password and can be copied to clipboard for ease of use.",
      languages: ["Html", "CSS", "JavaScript"],
      images: [
        {
          src: "password generator.png",
          alt: "password generator site image",
        },
      ],
      siteLink: "https://password-generator-three-ashy.vercel.app/",
      githubLink: "https://github.com/Natnael-Tilahun/Password-Generator",
    },
    {
      id: 10,
      title: "Color Scheme Generator",
      description:
        "A color scheme generator accepts a 'seed-color' or a brand color and a color scheme mode then brings data from the color API, display the schemes of the color and their hex values.",
      languages: ["Html", "CSS", "JavaScript"],
      images: [
        {
          src: "color scheme generator.png",
          alt: "color scheme generator site image",
        },
      ],
      siteLink: "https://color-scheme-generator-wine.vercel.app/",
      githubLink: "https://github.com/Natnael-Tilahun/Color-Scheme-Generator",
    },
    {
      id: 11,
      title: "Note App",
      description:
        "A Note app which is used to add new note, edit existing note, delete the exsiting note and different text stylings. It built using React.js, localStorage api and many external libraries.",
      languages: ["React.js", "Local Storage API", "External APIs"],
      images: [
        {
          src: "note app.png",
          alt: "note app site image",
        },
      ],
      siteLink: "https://note-f3xyjjag2-natnael-tilahun.vercel.app/",
      githubLink: "https://github.com/Natnael-Tilahun/Note-App",
    },
  ];

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length); // Set total slides
    setCurrent(api.selectedScrollSnap() + 1); // Set current slide

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1); // Update current slide on selection
    });
  }, [api]);

  // React.useEffect(() => {
  //   if (!imageApi) {
  //     return;
  //   }

  //   setImageCount(imageApi.scrollSnapList().length); // Set total slides
  //   setImageCurrent(imageApi.selectedScrollSnap() + 1); // Set current slide

  //   imageApi.on("select", () => {
  //     setImageCurrent(imageApi.selectedScrollSnap() + 1); // Update current slide on selection
  //   });
  // }, [imageApi]);

  const handleDotClick = (index) => {
    api?.scrollTo(index); // Scroll to the selected index
  };

  // const handleImageDotClick = (index) => {
  //   imageApi?.scrollTo(index); // Scroll to the selected index
  // };

  return (
    <section
      id="projects"
      className=" overflow-y-scroll flex flex-col text-xl px-8 md:px-12 py-10 dark:text-[#f2f2fc]"
    >
      <h1 className="text-4xl font-bold w-60 py-1 ">
        <TypeAnimation
          style={{
            display: "block",
          }}
          sequence={["My Projects", 3000, ""]}
          speed={{ type: "keyStrokeDelayInMs", value: 250 }}
          // speed={40}
          repeat={Infinity}
        />
      </h1>
      <div>
        <hr className="border-2 border-red-500 h-1 w-28 rounded-lg animate-pulse" />
        <hr className="border-2 border-red-500 h-1 w-16 mt-1 rounded-lg animate-pulse" />
        <hr className="border-2 border-red-500 h-1 w-8 my-1 rounded-lg animate-pulse" />
      </div>
      <div className="md:px-10 px-5 pt-10">
        <Carousel setApi={setApi} className=" w-full">
          <CarouselContent className="p-0 m-0">
            {projects?.map(
              (
                {
                  id,
                  title,
                  description,
                  images,
                  githubLink,
                  languages,
                  siteLink,
                },
                index
              ) => (
                <CarouselItem
                  key={index}
                  className=" h-full flex flex-col-reverse md:flex-row p-0 rounded-xl border border-gray-300 dark:border-gray-600 "
                >
                  <div className="flex flex-col gap-4 rounded-xl basis-1/2 p-5 ">
                    <h1 className="font-bold text-2xl">{title} </h1>
                    <p className="text-lg dark:text-gray-400 text-gray-500">
                      {description}
                    </p>
                    <ul className="list-disc dark:text-gray-400 text-gray-500 text-lg px-5">
                      {languages?.map((language) => (
                        <li key={language}>{language}</li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-10">
                      <a
                        href={siteLink}
                        target="_blank"
                        className="border-b-2 border-red-500 dark:text-gray-400"
                      >
                        Visit Site{" "}
                      </a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="dark:fill-gray-400"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                      </svg>
                      <a
                        href={githubLink}
                        target="_blank"
                        alt="a food delivery company github link"
                      >
                        <svg
                          className="dark:fill-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="32"
                          height="32"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <img
                    src={images[0].src}
                    alt="chrome extension dashboard image"
                    className="md:w-1/2 md:basis-1/2 rounded-xl bg-cover"
                  />
                  {/* Nested Carousel for Images */}
                </CarouselItem>
              )
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* Dots Indicator */}
        <div className="flex justify-center mt-4">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full mx-2 cursor-pointer ${
                current === index + 1 ? "bg-red-500" : "bg-gray-300"
              }`}
              onClick={() => handleDotClick(index)} // Update state on dot click
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
