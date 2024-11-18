import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header({ toggleMenu, collapsed }) {
  const text_balck_700_Light = "504e70";
  const text_balck_900_Light = "302e4d";
  const route = useLocation();
  const currentRoute = route.hash;
  return (
    <div
      className={`${
        collapsed ? "hidden" : "w-80"
      } w-80 h-screen absolute lg:static z-50 overflow-hidden dark:bg-[#504e70  bg-clip-padding backdrop-filter backdrop-blur-2xl brightness-100 dark:text-white bg-transparent dark:bg-transparent text-black lg:flex flex-col items-center px-8 py-16 md:py-10 md:px-5  border-r-[0.5px] border-slate-400 dark:border-slate-700`}
    >
      <HashLink
        to="/#hero"
        smooth
        onClick={toggleMenu}
        className="flex items-center space-x-2 pt-5 md:py-0 z-50"
      >
        <h1 className="font-bold text-xl text-red-700">
          &lt; Nhatty Tech /&gt;
        </h1>
      </HashLink>
      <ul className="flex flex-col space-y-7 my-16 lg:my-auto font-medium z-50">
        <li onClick={toggleMenu}>
          <HashLink
            className={`flex gap-5 ${
              currentRoute === "#hero" || route.hash === ""
                ? "text-red-700"
                : ""
            }`}
            to="/#hero"
            smooth
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zm-6-2h5V9.157l-6-5.454-6 5.454V19h5v-6h2v6z"
                  className={`dark:fill-white fill-slate-700 ${
                    currentRoute === "#hero" || route.hash === ""
                      ? "fill-red-700"
                      : ""
                  }`}
                />
              </svg>
            </span>
            Home
          </HashLink>
        </li>
        <hr />{" "}
        <li onClick={toggleMenu}>
          <HashLink
            className={`flex gap-5 ${
              currentRoute === "#about" ? "text-red-700" : ""
            }`}
            to="/#about"
            smooth
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  className={`dark:fill-white fill-slate-700 ${
                    currentRoute === "#about" ? "fill-red-700" : ""
                  }`}
                  d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                />
              </svg>
            </span>
            About
          </HashLink>
        </li>
        <hr />
        <li onClick={toggleMenu}>
          <HashLink
            className={`flex gap-5 ${
              currentRoute === "#projects" ? "text-red-700" : ""
            }`}
            to="/#projects"
            smooth
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  className={`dark:fill-white fill-slate-700 ${
                    currentRoute === "#projects" ? "fill-red-700" : ""
                  }`}
                  d="M8 4h13v2H8V4zm-5-.5h3v3H3v-3zm0 7h3v3H3v-3zm0 7h3v3H3v-3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z"
                />
              </svg>
            </span>
            Projects
          </HashLink>
        </li>
        <hr />
        <li onClick={toggleMenu}>
          <HashLink
            className={`flex gap-5 ${
              currentRoute === "#contact" ? "text-red-700" : ""
            }`}
            to="/#contact"
            smooth
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  className={`dark:fill-white fill-slate-700 ${
                    currentRoute === "#contact" ? "fill-red-700" : ""
                  }`}
                  d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zm-.692-2H20V5H4v13.385L5.763 17zM11 10h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2z"
                />
              </svg>
            </span>
            Contact
          </HashLink>
        </li>
        <hr />
      </ul>
    </div>
  );
}

export default Header;
