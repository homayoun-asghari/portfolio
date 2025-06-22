"use client";

import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiCode,
  FiMessageSquare,
} from "react-icons/fi";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="container mx-auto px-6 py-24 md:py-36">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hi, I&apos;m Homayoun
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
              I build exceptional digital experiences with modern web
              technologies. Currently focused on creating beautiful, responsive,
              and accessible web applications.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="#projects"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <FiCode className="w-5 h-5" />
                View My Work
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <FiMessageSquare className="w-5 h-5" />
                Contact Me
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-12">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
                aria-label="Email"
              >
                <FiMail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I&apos;m a passionate web developer with expertise in modern
              JavaScript frameworks and a keen eye for design. With a strong
              foundation in computer science and years of hands-on experience, I
              create efficient, scalable, and user-friendly applications.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or enjoying
              outdoor activities.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-900 ">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

          <div className="flex justify-center flex-wrap gap-8">
            <div className="w-full sm:w-[500px]">
              <ProjectCard
                title="Portfolio"
                description="A modern web application built with Next.js and TypeScript that showcases my skills in frontend development."
                tags={["Next.js", "TypeScript", "Tailwind CSS"]}
                githubLink="#"
                liveLink="#"
              />
            </div>
            <div className="w-full sm:w-[500px]">
              <ProjectCard
                title="E-commerce"
                description="Full-stack e-commerce marketplace with product listings, cart functionality, and secure checkout."
                tags={["React", "Node.js", "Express", "PostgreSQL", "Bootstrap"]}
                githubLink="#"
                liveLink="#"
              />
            </div>
            {/* <div className="w-full sm:w-[350px]">
        <ProjectCard
          title="Task Management App"
          description="A productivity application for managing tasks with drag-and-drop functionality and team collaboration."
          tags={["React", "Firebase", "Redux"]}
          githubLink="#"
          liveLink="#"
        />
      </div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Have a project in mind?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I&apos;m always open to discussing product design work or
            partnership opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 dark:hover:text-blue-800 transition-colors"
          >
            <FiMessageSquare className="mr-2 h-5 w-5" />
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
