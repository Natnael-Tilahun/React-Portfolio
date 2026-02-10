import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { CardBody } from "./Card";
import { CardContainer } from "./Card";
import { CardItem } from "./Card";
// import { Boxes } from "./background-boxes";
import { TypeAnimation } from "react-type-animation";
import { BackgroundLines } from "@/components/ui/background-lines";

function Hero() {
  return (
    <section
      id="hero"
      className="flex h-full min-h-screen justify-center items-center flex-col gap-8 md:flex-row text-xl py-20 md:py-0 relative w-full overflow-hidden enterprise-grid"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex flex-col basis-full md:basis-3/5 gap-6">
          <div className="space-y-2" data-aos="fade-up">
            <h2 className="text-primary font-semibold tracking-wider text-sm uppercase">
              Senior Full-Stack Developer
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Specializing in <span className="text-primary">Fintech</span> & Enterprise Platforms
            </h1>
          </div>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
          >
            I architect and build large-scale, enterprise-grade systems. From mobile banking admin consoles to real-time merchant transaction platforms, I deliver robust solutions for complex business needs.
          </p>

          <div 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="flex flex-wrap gap-10 py-6 border-y border-border/50"
          >
            <div>
              <p className="text-3xl font-bold text-foreground">4+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">15+</p>
              <p className="text-sm text-muted-foreground">Systems Built</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">10+</p>
              <p className="text-sm text-muted-foreground">Global Clients</p>
            </div>
          </div>

          <div 
            data-aos="fade-up" 
            data-aos-delay="300"
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <HashLink to="/#projects" smooth>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 w-full sm:w-auto">
                View Enterprise Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </HashLink>
            <HashLink to="/#contact" smooth>
              <button className="bg-secondary hover:bg-accent text-secondary-foreground border border-border px-8 py-4 rounded-lg font-medium transition-all w-full sm:w-auto">
                Contact Me
              </button>
            </HashLink>
          </div>
        </div>

        <div 
          data-aos="fade-left"
          className="flex-1 w-full max-w-md md:max-w-none"
        >
          <CardContainer className="py-0">
            <CardItem
              translateZ="50"
              className="relative aspect-square w-full rounded-2xl overflow-hidden bg-muted border border-border/50 shadow-2xl shadow-primary/5"
            >
              <img
                src="/pic.webp"
                loading="lazy"
                alt="Natnael Tilahun"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                  <p className="text-xs text-gray-600/70 dark:text-gray-100/60 uppercase tracking-widest mb-1 font-medium">Core Stack</p>
                  <p className="text-sm text-gray-600/60 dark:text-gray-50/50 font-semibold flex flex-wrap gap-2">
                    Next.js • React • Vue.js • Nuxt • Node.js • TypeScript • Flutter
                  </p>
                </div>
              </div>
            </CardItem>
          </CardContainer>
        </div>
      </div>
    </section>
  );
}

export default Hero;
