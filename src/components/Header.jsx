import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header({ toggleMenu, collapsed }) {
  const text_balck_700_Light = "504e70";
  const text_balck_900_Light = "302e4d";
  return (
    <div className={`${collapsed ? "hidden" : "w-80 "} w-80 h-screen absolute lg:static z-40 overflow-hidden dark:bg-[#504e70] dark:text-[#fdf9ff] bg-[#fdf9ff] text-[text_balck_700_Light] lg:flex flex-col items-center py-10 px-5`}>

      <HashLink to="/#hero" smooth onClick={toggleMenu} className="flex items-center space-x-2 pt-5 md:py-0">
        <h1 className="font-bold text-xl text-red-500">
          &lt; Nhatty Tech /&gt;
        </h1>
      </HashLink>
      <ul className="flex flex-col mt-10 md:mt-0 space-y-7 my-auto font-medium">
        <HashLink to="/#hero" smooth>
          <li className="flex gap-5" onClick={toggleMenu}
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
                  className="dark:fill-white fill-slate-700"
                />
              </svg>
            </span>
            Home
          </li>
        </HashLink>
        <hr />{" "}
        <HashLink to="/#about" smooth>
          <li className="flex gap-5" onClick={toggleMenu}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path className="dark:fill-white fill-slate-700" d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
              </svg>
            </span>
            About
          </li>
        </HashLink>
        <hr />
        <HashLink to="/#projects" smooth>
          <li className="flex gap-5" onClick={toggleMenu}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path className="dark:fill-white fill-slate-700" d="M8 4h13v2H8V4zm-5-.5h3v3H3v-3zm0 7h3v3H3v-3zm0 7h3v3H3v-3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z" />
              </svg>
            </span>
            Projects
          </li>
        </HashLink>
        <hr />
        <HashLink to="/#contact" smooth>
          <li className="flex gap-5" onClick={toggleMenu}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path className="dark:fill-white fill-slate-700" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zm-.692-2H20V5H4v13.385L5.763 17zM11 10h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2z" />
              </svg>
            </span>
            Contact
          </li>
        </HashLink>
        <hr />
      </ul>

      {/* <div className="flex items-center space-x-2">
        <img
          src="/pic.JPG"
          alt="Logo avatar"
          className="w-14 h-14 rounded-full border-2 border-red-500"
        />
        <h1 className="font-bold text-2xl">&lt; Nhatty Tech /&gt;</h1>
      </div>
      <div className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className={`${collapsed ? "" : "hidden"}`}
          onClick={toggleMenu}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" />
        </svg>
      </div>
      <div className=" md:flex">
        <ul className="flex flex-col gap-10 text-gray-800 font-medium">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div> */}
      {/* <div
        className={`absolute h-full top-0 ${
          collapsed ? "-right-96" : "right-0"
        } bg-black text-white w-2/5 md:hidden transform duration-500 z-10`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="white"
          className={`${collapsed ? "hidden" : ""} fixed right-5 top-5`}
          onClick={toggleMenu}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
        </svg>
        <ul className="flex flex-col gap-5 px-7 py-20 text-center">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div> */}
    </div>
  );
}

export default Header;
