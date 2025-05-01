import { Mail, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import profilePic from "./me.jpg";

const links = [
  {
    href: "mailto:cameronnimmo@hotmail.co.uk",
    icon: <Mail className="text-inherit" />,
  },
  {
    href: "https://www.linkedin.com/in/cameron-nimmo/",
    icon: <Linkedin className="text-inherit" />,
  },
  {
    href: "https://github.com/cnimmo16",
    icon: <Github className="text-inherit" />,
  },
];

const experience = [
  {
    title: "Machine Learning Engineer",
    company: {
      name: "Machine Learning Institute",
      href: "https://ml.institute/",
    },
    location: "London, UK",
    date: "2025",
    summary:
      "I completed an intensive two-month bootcamp focused on modern machine learning. The program covered key deep learning concepts including feature fusion, multi-modal transformers, fine-tuning strategies, and reinforcement learning. In the final phase, I applied these skills to build a transformer-based recommendation system that curated RSS feeds, simulating a real-world product development cycle.",
  },
  {
    title: "Senior Full Stack Engineer",
    company: {
      name: "Blackbullion",
      href: "https://blackbullion.com/",
    },
    location: "Hybrid",
    date: "2021 - 2024",
    summary:
      "As the lead developer on the platform squad, I managed a team of mid-level engineers and spearheaded several high-impact projects. I architected a robust data pipeline for client-facing analytics dashboards, integrating Kafka, Debezium, and Clickhouse, and deploying a custom admin UI on AWS. I mentored two frontend developers into full-stack roles and introduced an open banking integration that reduced applicant-reviewer communication by 35% per application.",
  },
  {
    title: "Web Developer",
    company: {
      name: "Calibrate Consulting",
      href: "https://calibrateconsulting.com/",
    },
    location: "London, UK",
    date: "2019 - 2021",
    summary:
      "At Calibrate Consulting, I launched and ran a junior web developer training program, helping early-career talent transition into capable frontend engineers within months. I also led the frontend development of complex analytics dashboards for a global bank, collaborating closely with data analysts and integrating Qlik-based data via a JSON-RPC API.",
  },
];

export default function Home() {
  return (
    <div className="flex justify-center px-5 py-5 md:py-12">
      <div className="min-h-[90vh] max-w-[690px]">
        <header className="mb-10 flex flex-col-reverse items-start justify-between gap-5 md:flex-row md:gap-20">
          <div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Cameron Nimmo
            </h1>
            <p className="mb-2.5 text-lg">
              Generalist Full Stack Engineer with 5+ years of experience
            </p>
            <div className="text-neutral mb-4 text-lg">London, UK</div>
            <div className="flex gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:border-primary border-primary-light hover:text-primary-dark rounded-md border p-1.5 transition-all"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <Image
            src={profilePic}
            alt="Cameron Nimmo"
            className="aspect-square h-auto w-30 rounded-2xl object-cover md:w-40"
          />
        </header>
        <main>
          <section className="mb-9">
            <h2 className="mb-3 text-2xl font-bold uppercase">About me</h2>
            <p className="text-lg">
              A generalist full stack engineer with a pragmatic approach to
              delivery and a focus on maintainability. Praised for my
              leadership, communication and mentoring skills, as well as my
              strong understanding of commercial concerns and user needs.
              Building products that deliver real value to real people.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="mb-5 text-2xl font-bold uppercase">Experience</h2>
            {experience.map((exp) => (
              <article key={exp.title} className="mb-7">
                <header className="mb-2 flex flex-col-reverse justify-between md:flex-row">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-neutral text-lg">{exp.date}</p>
                </header>
                <p className="mb-2 text-lg">
                  <a
                    href={exp.company.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-dark underline"
                  >
                    {exp.company.name}
                  </a>{" "}
                  · {exp.location}
                </p>
                <p className="text-neutral text-lg">{exp.summary}</p>
              </article>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
