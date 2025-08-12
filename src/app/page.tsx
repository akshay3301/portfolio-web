import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Home() {
  return (
    <div id="home" className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24 md:pb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Open for opportunities
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center">
            {/* Left side - Text content */}
            <div>
              <h1 className="text-4xl leading-tight text-zinc-100 md:text-6xl md:leading-[1.1] font-bold">
                <span className="text-zinc-100">
                  Transforming Data
                </span>
                <br />
                <span className="text-zinc-100">
                  into Elegant, High-Performance Software
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
                I design and ship scalable software applications with a focus on performance, user experience, and clean code architecture.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="group relative rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:brightness-110 hover:scale-105">
                  View projects
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a href="#contact" className="group rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-200 transition-all duration-300 hover:border-white/30 hover:bg-white/5">
                  Contact me
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Right side - Professional photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-xl overflow-hidden border-4 border-white/10 bg-gradient-to-br from-accent/20 to-transparent">
                  {/* Placeholder for your photo - replace src with your actual photo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                    <div className="text-center text-zinc-400">
                      <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                      <p className="text-sm">Add your photo here</p>
                      <p className="text-xs opacity-75">400x400px recommended</p>
                    </div>
                  </div>
                  {/* Uncomment and replace with your actual photo */}
                   <Image
                     src="/projects/akshay.png"
                     alt="Akshay H S - Software Developer"
                     fill
                     className="object-cover"
                     priority
                   /> 
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-accent/30 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-accent/20 blur-lg"></div>
                
                {/* Name below image */}
                <div className="mt-4 text-center">
                  <p className="text-xl font-semibold text-accent">HS Akshay</p>
                  <p className="text-sm text-zinc-400 mt-1">Software Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <SectionTitle label="Selected work" title="Projects" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Onlinemandi"
            description="Online marketplace for farmers and vendors."
            tags={["Next.js", "TypeScript", "Charts", "Tailwind", "Shadcn","Firebase","Github Actions","Open-meteo API","Google Analytics","CloudFlare"]}
            href="https://onlinemandi.in"
            imageSrc="/projects/onlinemandi.png"
            imageAlt="Onlinemandi"
          />
          <ProjectCard
            title="Patient Registration System"
            description="Offline patient registration system for hospitals syncs between tabs with real-time updates."
            tags={["Next.js", "Pglite", "Tailwind","Firebase"]}
            href="https://patientsreg-b748a.web.app"
            imageSrc="/projects/patient.png"
            imageAlt="Patient preview"
          />
          <ProjectCard
            title="OCR Software"
            description="A software that extracts text data from scanned pay receipts and saves it in a database."
            tags={["Python", "FastAPI", "Tesseract","Poppler","OCR SPACE API","SQLAlchemy"]}
            href="https://github.com/akshay3301/Ocr_project"
            imageSrc="/projects/ocr.png"
            imageAlt="OCR Software preview"
          />
          <ProjectCard
            title="Carbon Footprint Analysis of L'Oréal"
            description="Jupyter notebook analysis with data visualization and statistical insights to reduce carbon footprint for L'Oréal."
            tags={["Python", "Pandas", "Matplotlib", "Jupyter", "Data Analysis"]}
            href="/projects/notebooks/perfumec.html"
            imageSrc="/projects/perfumec.png"
            imageAlt="Data Analysis Project 1"
          />
          <ProjectCard
            title="Data Center Optimization using ML"
            description="ML model development and evaluation with comprehensive analysis and results."
            tags={["Python", "Scikit-learn", "NumPy", "Jupyter","Anomaly Detection","Machine Learning"]}
            href="/projects/notebooks/power_optimization.html"
            imageSrc="/projects/power.png"
            imageAlt="Machine Learning Project"
          />
            <ProjectCard
            title="Hospital Backend"
            description="Complete backend for a hospital with features like patient registration, appointment scheduling, and more."
            tags={["Node.js", "Express.js", "JWT", "Postman", "MongoDB","SMTP","Socket.io","bcrypt","REST API","MVC","Docker"]}
            href="https://github.com/akshay3301/health_management"
            imageSrc="/projects/hospital.png"
            imageAlt="Hospital Backend"
          />
        </div>
      </section>

      {/* Experience & Skills */}
      <section id="experience" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <SectionTitle label="Background" title="Experience & Skills" />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">
            <h3 className="text-lg font-semibold text-zinc-100">ITC Infotech (2023-2025)</h3>
            <h4 className="text-lg text-zinc-50">Implementation Consultant - Application Development & Management</h4>

            <ul className="mt-4 space-y-3 text-zinc-400">
              <li>• Completed backend developer training with hands-on experience building a gym application backend using Node.js and Java Spring Boot, covering REST APIs, authentication, database integration, and role-based access.</li>
              <li>• Automated and processed critical refund datasets for Whitbread UK, ensuring accuracy and timely reporting through cross-functional collaboration.</li>
              <li>• Managed ETL workflows for financial data integration across domains like hospitality (Opera Cloud Refunds) and banking, ensuring smooth data flow, high integrity, and compliance with financial standards.</li>
              <li>• Automated city tax posting in Opera Cloud using Python and the Oracle Hospitality Integration Platform (OHIP) REST API, reducing manual effort from 5 resources to 1 and cutting processing time from hours to minutes.</li>
              <li>• Contributed to the Expedia property onboarding process, supporting the production deployment of 60+ properties. Developed Python automation scripts to replace manual Excel-based mapping workflows.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">
            <h3 className="text-lg font-semibold text-zinc-100">Skills</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {[ "Node.js","Express","Java","SpringBoot","REST API","Postman","Next.js", "React", "Tailwind","MYSQL", "PostgreSQL","MongoDB", "Python", "Pandas","Numpy","Machine Learning","Matplotlib"].map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-zinc-300">
                  {skill}
                </span>
              ))}
            </div>
            
            <h3 className="text-lg font-semibold text-zinc-100 mt-8">Education</h3>
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="text-base font-medium text-zinc-100">Bachelor of Engineering in Information Science</h4>
                <p className="text-sm text-zinc-400">JSS Academy of Technical Education, Bengaluru</p>
                <p className="text-xs text-zinc-500">2019 - 2023</p>
                <p className="text-sm text-accent font-medium">CGPA: 8.26/10</p>
              </div>
              <div>
                <h4 className="text-base font-medium text-zinc-100">Higher Secondary </h4>
                <p className="text-sm text-zinc-400">Karnataka PU Board</p>
                <p className="text-xs text-zinc-500">2017 - 2019</p>
                <p className="text-sm text-accent font-medium">Percentage: 94.89%</p>
              </div>
               <div>
                <h4 className="text-base font-medium text-zinc-100">10th </h4>
                <p className="text-sm text-zinc-400">CBSE</p>
                <p className="text-xs text-zinc-500">2017</p>
                <p className="text-sm text-accent font-medium">CGPA: 9.8/10</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <SectionTitle label="Collaborate" title="Get in touch" />
        <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <p className="max-w-2xl text-zinc-400">
              Interested in working together or have a question? Send me an email and I'll get back to you.
            </p>
            <div className="flex gap-3">
              <a href="mailto:hsakshay276@gmail.com" className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-black transition-colors hover:brightness-110">Email me</a>
              <a href="https://www.linkedin.com/in/akshay-h-s" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-zinc-200 hover:border-white/30">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        <Footer />
      </div>
    </div>
  );
}
