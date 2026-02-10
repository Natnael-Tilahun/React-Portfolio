import React from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header({ toggleMenu, collapsed, toggleTheme, darkTheme }) {
  const route = useLocation();
  const currentRoute = route.hash;

  return (
    <div
      className={`${
        collapsed ? "hidden" : "flex"
      } w-80 h-screen fixed lg:sticky lg:top-0 z-50 overflow-y-auto bg-background/80 backdrop-blur-xl border-r border-border lg:flex flex-col items-center px-8 py-10 transition-all text-foreground`}
    >
      <HashLink
        to="/#hero"
        smooth
        onClick={toggleMenu}
        className="flex items-center space-x-2 pt-5 md:py-0 z-50"
      >
        <h1 className="font-bold text-xl text-primary tracking-tight">
          Natnael Tilahun
        </h1>
      </HashLink>
      <ul className="flex flex-col space-y-7 my-16 lg:my-auto font-medium z-50 w-full">
        <li onClick={toggleMenu}>
          <HashLink
            className={`flex gap-5 transition-colors duration-200 ${
              currentRoute === "#hero" || route.hash === ""
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
            to="/#hero"
            smooth
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zm-6-2h5V9.157l-6-5.454-6 5.454V19h5v-6h2v6z"
                  className={`dark:fill-white fill-slate-700 ${
                    currentRoute === "#hero" || route.hash === "" ? "fill-primary" : ""
                  }`}
                />
              </svg>
            </span>
            Home
          </HashLink>
        </li>
        <hr className="opacity-10" />
        <li onClick={toggleMenu}>
          <HashLink
            className={`flex gap-5 transition-colors duration-200 ${
              currentRoute === "#about" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
            to="/#about"
            smooth
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  className={`dark:fill-white fill-slate-700 ${currentRoute === "#about" ? "fill-primary" : ""}`}
                  d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                />
              </svg>
            </span>
            About
          </HashLink>
        </li>
        <hr className="opacity-10" />
        <li onClick={toggleMenu}>
          <HashLink
            className={`flex gap-5 transition-colors duration-200 ${
              currentRoute === "#projects" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
            to="/#projects"
            smooth
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  className={`dark:fill-white fill-slate-700 ${currentRoute === "#projects" ? "fill-primary" : ""}`}
                  d="M8 4h13v2H8V4zm-5-.5h3v3H3v-3zm0 7h3v3H3v-3zm0 7h3v3H3v-3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z"
                />
              </svg>
            </span>
            Projects
          </HashLink>
        </li>
        <hr className="opacity-10" />
        <li onClick={toggleMenu}>
          <HashLink
            className={`flex gap-5 transition-colors duration-200 ${
              currentRoute === "#contact" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
            to="/#contact"
            smooth
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  className={`dark:fill-white fill-slate-700 ${currentRoute === "#contact" ? "fill-primary" : ""}`}
                  d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zm-.692-2H20V5H4v13.385L5.763 17zM11 10h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2z"
                />
              </svg>
            </span>
            Contact
          </HashLink>
        </li>
        <hr className="opacity-10" />
      </ul>

      {/* Theme Toggle at the bottom */}
      <div className="mt-auto pt-10 border-t border-border w-full">
        <button
          onClick={toggleTheme}
          className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-muted/50 hover:bg-muted border border-border transition-all group pointer-events-auto"
          aria-label="Toggle Theme"
        >
          <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
            {darkTheme ? "Dark Mode" : "Light Mode"}
          </span>
          <div className="p-1.5 rounded-lg bg-background border border-border shadow-sm text-primary">
            {darkTheme ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            )}
          </div>
        </button>
      </div>
    </div>
  );
}

export default Header;
