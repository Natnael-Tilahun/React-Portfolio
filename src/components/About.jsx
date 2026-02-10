import React from "react";

function About() {
  return (
    <section
      id="about"
      className="flex flex-col text-xl px-0 md:px-12 md:py-20 bg-background dark:text-foreground"
    >
      <div className="container mx-auto">
        {/* Header Section */}
        <div data-aos="fade-up" className="mb-16">
          <h2 className="text-primary font-semibold tracking-wider text-sm uppercase mb-2">
            The Professional Behind the Code
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            About Me
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-xl text-foreground leading-relaxed">
                I am a Senior Full-Stack Developer with over 4 years of experience delivering high-performance, enterprise-grade applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My career has been defined by building complex systems from the ground up—including mobile banking admin consoles, merchant transaction platforms, and robust SaaS architectures. I thrive on solving technical challenges related to high-volume data processing, secure RBAC implementations, and real-time system monitoring.
              </p>
            </div>
            <div className="bg-muted/50 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-4">Core Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed italic">
                "I believe in building software that is not just functional, but enterprise-ready—meaning it's scalable, secure, and maintainable by design. My focus is always on delivering measurable business value through technical excellence."
              </p>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Technical Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Frontend Engineering",
                skills: ["React / Next.js", "Vue.js / Nuxt",
                  "Flutter / React Native", "TypeScript", "Tailwind CSS", "State Management (Redux, Zustand, Jotai)", "Performance Optimization"]
              },
              {
                title: "Backend Development",
                skills: ["Node.js / Express", "RESTful & GraphQL APIs", "Microservices Architecture", "Authentication (JWT, OAuth)", "Serverless Functions"]
              },
              {
                title: "Data & Infrastructure",
                skills: ["PostgreSQL / MySQL", "MongoDB", "Redis", "Docker / DevOps", "CI/CD Pipelines"]
              },
              {
                title: "Enterprise Solutions",
                skills: ["RBAC & Security", "Audit Logs & Workflows", "Real-time Monitoring", "Fintech Compliance", "Admin Dashboards"]
              }
            ].map((category, i) => (
              <div 
                key={i} 
                data-aos="fade-up" 
                data-aos-delay={i * 100}
                className="p-6 bg-card border border-border rounded-xl shadow-sm hover:border-primary/50 transition-colors"
              >
                <h3 className="font-bold text-foreground mb-4 border-b border-border pb-2">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, si) => (
                    <li key={si} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Journey/Experience */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Professional Journey</h2>
          <div className="space-y-8">
            {[
              {
                company: "Upwork (Global Freelance)",
                role: "Senior Full-Stack Developer",
                period: "2021 — Present",
                description: "Delivered 15+ high-stakes projects for international startups and established agencies. Specialized in fintech admin panels and complex SaaS dashboards.",
                achievements: ["Top-Rated status with 100% Job Success Score", "Architected 5+ enterprise platforms from scratch"]
              },
              {
                company: "Commercial Bank of Ethiopia",
                role: "Software Developer",
                period: "2021 — 2023",
                description: "Developed and maintained in-house systems, saving the bank significant licensing fees. Focused on user-centric designs and secure banking workflows.",
                achievements: ["Improved navigation and aesthetic appeal of core systems", "Handled confidential data with high discretion"]
              },
              {
                company: "Hawassa University",
                role: "B.Sc. in Computer Science",
                period: "Graduate",
                description: "Specialized in software engineering, algorithm design, and database systems.",
                achievements: ["Strong foundation in CS fundamentals", "CCNA Certified Professional"]
              }
            ].map((exp, i) => (
              <div 
                key={i}
                data-aos="fade-up"
                className="relative pl-8 border-l-2 border-border pb-8 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-background border-2 border-primary rounded-full"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm font-semibold bg-muted px-4 py-1 rounded-full text-muted-foreground self-start">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 max-w-3xl">{exp.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {exp.achievements.map((ach, ai) => (
                    <li key={ai} className="text-sm font-medium flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
