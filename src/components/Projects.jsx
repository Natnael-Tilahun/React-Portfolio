import React, { useState, useEffect } from "react";

const PROJECTS_DATA = [
    {
    id: "cbe-admin-console",
    title: "Mobile Banking Admin Console — Enterprise Operations Platform",
    category: "Fintech",
    role: "Senior Frontend Developer",
    description: "Enterprise-grade admin console for managing mobile banking operations with role-based access control, maker–checker workflows, audit logs, and configurable service modules.",
    impact: "Enabled secure and auditable management of banking operations across multiple service domains.",
    stack: ["Vue.js", "Nuxt", "Tailwind", "Shadcn","Pinia","Charting & dashboard libraries", "API-driven architecture"],
    image: "/adminconsole1.png",
    links: {
      site: "",
    },
    features: ["RBAC", "Audit Logs", "Maker–checker approval system", "User & Staff Management", "Service & Channel Management", "Workflow & Operations" ]
  },
  {
    id: "cbe-merchant",
    title: "Merchant Platform — Real-Time Transaction & Operations System",
    category: "Fintech",
    role: "Senior Full-Stack Developer",
    description: "Enterprise merchant platform supporting real-time transactions, operator and sales management, mobile access, and advanced monitoring dashboards with high-availability architecture.",
    impact: "Enabled real-time visibility and control over merchant operations at scale",
    stack: ["Vue.js", "Nuxt", "Tailwind", "Shadcn", "Web Socket","Pinia","Charting & dashboard libraries", "API-driven architecture"],
    image: "/merchantweb.png",
    links: {
      site: "",
    },
    features: ["RBAC", "Real-Time Transaction System", "Merchant & Operator Management","Sales & Performance Management", "Multi-Interface Platform", "Monitoring & Analytics" ]
  },
    {
    id: "mobile-detailing",
    title: "Mobile Car Detailing Booking Platform",
    category: "SaaS",
    role: "Full-Stack Engineer",
    description: "A multilingual comprehensive booking platform for mobile car detailing, featuring high-fidelity Figma-to-code conversion and that supports service selection, slot booking, location selection, and automated email notifications.",
    impact: "Designed and implemented a production booking workflow with slot management and automated email confirmations.",
    stack: ["Next.js", "Tailwind CSS", "Zustand", "Node.js", "MongoDb", "TanStack Query", "Hostinger + Vercel Deployment", "Email Service Integration"],
    image: "/swiftAddis.png",
    links: {
      site: "https://swiftaddis.com",
    },
    features: ["Figma to Code", "API Integration", "Real-time Booking","Multi-language support", "Map-based location input", "Image uploads for vehicle condition","Blog + SEO pages" ]
  },
    {
    id: "mobile-detailing-admin-portal",
    title: "Mobile Car Detailing Booking Admin Portal",
    category: "SaaS",
    role: "Full-Stack Engineer",
    description: "An admin dashboard for managing bookings, services, add-ons, galleries, and content with role-based access.",
    impact: "Centralized bookings, services, and content operations into a secure admin dashboard, improving operational efficiency, visibility, and self-service management for staff.",
    stack: ["Next.js", "Tailwind CSS", "Zustand", "Node.js", "MongoDb", "TanStack Query", "Hostinger + Vercel Deployment", "Email Service Integration", "Charting libraries"],
    image: "/swiftAdmin.png",
    links: {
      site: "https://swiftaddis.com",
    },
    features: ["Role-based auth (staff/admin)", "Revenue dashboard", "Booking analytics charts", "Service management", "Add-ons management", "Blog & gallery CMS", "Multi-language support"]
  },
  {
    id: "nbhwc",
    title: "NBHWC: Certification & Training Platform",
    category: "Enterprise",
    role: "Lead Developer",
    description: "A robust dashboard for the National Board for Health and Wellness Coaching to manage international certification, instructor workflows, and student tracking.",
    impact: "Centralized certification for 10,000+ coaches; automated compliance reporting.",
    stack: ["React", "Bootstrap", "Node.js", "Express", "Redux"],
    image: "/nbhwc.png",
    links: {
      site: "https://nbhwc-dashboard.m2mbeta.com/login",
      // github: "https://gitlab.com/m2m-node-react-projects/nbhwc-dashboard-and-api/"
    },
    features: ["Instructor Portal", "Course Tracking", "Certification PDFs", "Role-based auth (Instructor/admin)"]
  },

  {
    id: "service-ai",
    title: "Service.ai: SMS Agent Orchestrator",
    category: "SaaS",
    role: "Full-Stack Engineer",
    description: "An AI-driven platform for creating and managing automated SMS agents, featuring real-time conversation tracking and complex webhook integrations.",
    impact: "Empowered 100+ businesses to automate customer support via SMS.",
    stack: ["Next.js", "TypeScript", "Firebase", "Jotai", "Tailwind", "Shadcn", "Vercel", "LLMs"],
    image: "/servicerepai.png",
    links: {
      site: "https://www.servicerep.ai/",
      // github: "https://github.com/jeffdh5/servicerepai"
    },
    features: ["Agent Builder", "Real-time Logging", "Stripe Integration"]
  },
  {
    id: "walia-jobs",
    title: "Walia Jobs: National Employment Hub",
    category: "Platform",
    role: "Full-Stack Architect",
    description: "A job marketplace platform where companies can post openings, candidates can search and filter jobs, build CVs, and review companies.",
    impact: "Facilitated matches for 5,000+ job seekers; 500+ registered companies.",
    stack: ["React", "MongoDB", "Node.js", "Tailwind CSS", "Redux", "RTK Query"],
    image: "/walia jobs.png",
    links: {
      site: "https://walia-jobs.vercel.app/",
      github: "https://github.com/Natnael-Tilahun/WaliaJobs"
    },
    features: ["CV Builder", "Employer Dashboard", "Advanced Search"]
  },
  {
    id: "neodeliver",
    title: "Neodeliver SaaS",
    category: "SaaS",
    role: "Frontend Developer",
    description: "A US-based SaaS project focusing on logistics and delivery management with a high-performance GraphQL backend.",
    impact: "Successfully delivered pixel-perfect UI for enterprise clients.",
    stack: ["Vue.js", "Nuxt.js", "Tailwind CSS", "GraphQL"],
    image: "/neodeliver.png",
    links: {
      // site: "https://neodeliver.com",
    },
    features: ["GraphQL Integration", "Role-based Dashboards"]
  },
  {
    id: "the-givers",
    title: "The Givers: Donation Platform",
    category: "Platform",
    role: "Lead Developer ( Founder)",
    description: "A full-stack donation and item-sharing platform that enables users to post unused items, request donations, communicate with donors, and manage delivery logistics.",
    impact: "Enabled thousands of item donations across diverse communities.",
    stack: ["Next.js", "Tailwind CSS", "Shadcn", "Supabase", "TanStack Query"],
    image: "/the givers.png",
    links: {
      site: "https://the-givers.vercel.app/",
    },
    features: ["Real-time Matching", "Impact Tracking"]
  },
    {
    id: "dashboard-ipad",
    title: "Paint App Admin Console",
    category: "Enterprise",
    role: "Full-Stack Engineer",
    description: "An admin panel for the Paint App iPad application, featuring role-based access and data analytics.",
    impact: "Centralized device management for 50+ enterprise users.",
    stack: ["React.js", "RTK Query","Tailwind", "Shadcn UI", "Redux"],
    image: "/paint app.png",
    links: {
      github: "https://github.com/Natnael-Tilahun/admin-panel"
    },
    features: ["Role Based Access Control", "Visual Analytics"]
  },
  {
    id: "tekusmesa",
    title: "TekusMesa: Food Delivery",
    category: "Platform",
    role: "Frontend Developer",
    description: "A modern landing page for a food delivery startup, showcasing services and pricing with a clean, responsive design.",
    impact: "Boosted early-stage user engagement by 25%.",
    stack: ["React.js", "Tailwind CSS"],
    image: "/tekusmesa-screenshot.png",
    links: {
      github: "https://github.com/Natnael-Tilahun/TekusMesa"
    },
    features: ["Responsive Design", "Interactive Menu"]
  },
  {
    id: "setadess",
    title: "Setadess: Artisan Shop",
    category: "E-Commerce",
    role: "Full-Stack Developer",
    description: "An online marketplace for journal and handicraft products, featuring pixel-perfect design and order tracking.",
    impact: "Helped local artisans digitalize their storefronts.",
    stack: ["React.js", "Tailwind CSS"],
    image: "/setadess.png",
    links: {
      github: "https://github.com/Natnael-Tilahun/setades"
    },
    features: ["E-commerce integration", "Product Gallery"]
  },
  {
    id: "chrome-extension",
    title: "Personal Dashboard Extension",
    category: "Utility",
    role: "Creator",
    description: "A Chromium extension to help focus and stay up-to-date with weather, crypto, and motivational quotes.",
    impact: "Creating utility for personal use.",
    stack: ["JavaScript", "HTML/CSS", "External APIs"],
    image: "/chrome-extension-image.png",
    links: {
      github: "https://github.com/Natnael-Tilahun/Dashboard-Chrome-Extension"
    },
    features: ["Weather API", "Crypto Tracking"]
  },
  {
    id: "quizzical",
    title: "Quizzical App",
    category: "Education",
    role: "Developer",
    description: "Interactive trivia game pulling from the Open Trivia Database, featuring custom scoring and feedback.",
    impact: "Used for educational testing in local coding camps.",
    stack: ["React", "Tailwind CSS", "Trivia API"],
    image: "/quizzical.png",
    links: {
      github: "https://github.com/Natnael-Tilahun/Quizzical"
    },
    features: ["Dynamic Questioning", "Scoring Logic"]
  },
  {
    id: "movie-watchlist",
    title: "Movie Watchlist Pro",
    category: "Entertainment",
    role: "Full-Stack Developer",
    description: "A sleek tool for searching and managing your favorite movie watchlist using the OMDB API.",
    impact: "Simplified movie tracking for hundreds of users.",
    stack: ["JavaScript", "Tailwind CSS", "OMDB API"],
    image: "/movie watchlist.png",
    links: {
      github: "https://github.com/Natnael-Tilahun/Movie-Watchlist"
    },
    features: ["Search API", "Local Storage persistence"]
  },
  {
    id: "tenzies",
    title: "Tenzies Game",
    category: "Entertainment",
    role: "Developer",
    description: "A fast-paced digital version of the popular Tenzies dice game with performance tracking.",
    impact: "Showcased high-performance state management in React.",
    stack: ["React", "Tailwind CSS"],
    image: "/tenzies.png",
    links: {
      github: "https://github.com/Natnael-Tilahun/tenzies-game"
    },
    features: ["Sound Effects", "Game Statistics"]
  },

  {
    id: "password-gen",
    title: "Stealth Password Generator",
    category: "Utility",
    role: "Creator",
    description: "A high-security password generation tool with customizable constraints and copy functionality.",
    impact: "Helped users generate secure, unique credentials easily.",
    stack: ["JavaScript", "CSS"],
    image: "/password generator.png",
    links: {
      github: "https://github.com/Natnael-Tilahun/password-generator"
    },
    features: ["Entropy Calculation", "One-click Copy"]
  },
  {
    id: "note-app",
    title: "Streamline Note App",
    category: "Utility",
    role: "Full-Stack Developer",
    description: "A minimal, lightning-fast note-taking app with real-time sync and markdown support.",
    impact: "Simplified professional documentation workflows.",
    stack: ["React", "Firebase"],
    image: "/note app.png",
    links: {
      github: "https://github.com/Natnael-Tilahun/notes-app"
    },
    features: ["Markdown Preview", "Cloud Sync"]
  }
];

const CATEGORIES = ["All", "Fintech", "Enterprise", "SaaS", "Platform", "E-Commerce", "Utility", "Education", "Entertainment"];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredProjects = activeCategory === "All" 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  return (
    <section id="projects" className="px-0 md:px-12 py-20 bg-background">
      <div className="container mx-auto">
        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-primary font-semibold tracking-wider text-sm uppercase mb-2">
            Selected Works
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Professional Portfolio
          </h1>
          
          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-muted text-muted-foreground hover:bg-muted-foreground/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {paginatedProjects.map((project, i) => (
            <div 
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group relative flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Project Image */}
              <div className="aspect-video w-full overflow-hidden bg-muted relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-background/90 text-foreground backdrop-blur-sm border border-border">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    {project.role}
                  </p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Features/Impact */}
                <div className="mb-6 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <span key={tech} className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 bg-muted rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg border border-border/50">
                    <p className="text-xs italic text-muted-foreground">
                      <span className="font-bold text-foreground not-italic">Impact: </span>
                      {project.impact}
                    </p>
                  </div>
                </div>

                {/* Links */}
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-border/50">
                  <div className="flex gap-4">
                    {project.links.site && (
                      <a 
                        href={project.links.site} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-bold flex items-center gap-1.5 hover:text-primary transition-colors"
                      >
                        Live System
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      </a>
                    )}
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-bold flex items-center gap-1.5 hover:text-primary transition-colors"
                      >
                        Resources
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`p-2 rounded-xl border border-border transition-all ${
                currentPage === 1 
                  ? "opacity-50 cursor-not-allowed" 
                  : "hover:bg-muted hover:border-primary/50 text-foreground"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-xl border text-sm font-bold transition-all ${
                    currentPage === i + 1
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                      : "bg-background border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-xl border border-border transition-all ${
                currentPage === totalPages 
                  ? "opacity-50 cursor-not-allowed" 
                  : "hover:bg-muted hover:border-primary/50 text-foreground"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
