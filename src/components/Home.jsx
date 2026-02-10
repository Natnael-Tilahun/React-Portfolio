import React, { useEffect } from "react";
import About from "./About";
import Hero from "./Hero";
import Projects from "./Projects";
import Contact from "./Contact";
import Aos from "aos";

function Home({ toggleMenu, collapsed, toggleTheme, darkTheme }) {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full bg-background text-foreground">
      {/* Mobile Menu & Theme Toggle Header */}
      <div
        className={`fixed z-[100] w-full h-16 flex items-center justify-between px-6 lg:px-12 pointer-events-none top-0`}
      >
        <div className="flex items-center gap-4 pointer-events-auto">
          {/* Mobile Menu Trigger */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-xl bg-background/80 backdrop-blur-md border border-border shadow-sm text-foreground active:scale-95 transition-transform"
            aria-label="Toggle Menu"
          >
            {collapsed ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>

      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
