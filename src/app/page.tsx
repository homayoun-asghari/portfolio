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
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="container mx-auto px-6 py-24 md:py-36">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t("heroTitle")}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              {t("heroSubtitle")}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
              {t("heroDescription")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="#projects"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <FiCode className="w-5 h-5" />
                {t("viewWork")}
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <FiMessageSquare className="w-5 h-5" />
                {t("contact")}
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-12">
              <a
                href="https://github.com/homayoun-asghari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/homayoun-asghari-b9769912a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:contact@homayoun.me"
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
          <h2 className="text-3xl font-bold text-center mb-12">{t("about")}</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {t("aboutParagraph1")}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {t("aboutParagraph2")}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t("aboutParagraph3")}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">{t("projects")}</h2>

          <div className="flex justify-center flex-wrap gap-8">
            <div className="w-full sm:w-[500px]">
              <ProjectCard
                title={t("project1.title")}
                description={t("project1.description")}
                tags={["Next.js", "TypeScript", "Tailwind CSS"]}
                githubLink="https://github.com/homayoun-asghari/portfolio"
                liveLink="https://homayoun.me"
              />
            </div>
            <div className="w-full sm:w-[500px]">
              <ProjectCard
                title={t("project2.title")}
                description={t("project2.description")}
                tags={[
                  "React",
                  "Node.js",
                  "Express",
                  "PostgreSQL",
                  "Bootstrap",
                ]}
                githubLink="https://github.com/homayoun-asghari/ecommerce"
                liveLink="https://ecommerce.homayoun.me"
              />
            </div>
            <div className="w-full sm:w-[500px]">
              <ProjectCard
                title={t("project3.title")}
                description={t("project3.description")}
                tags={["In Development"]}
                githubLink="https://github.com/homayoun-asghari"
                liveLink="#"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">{t("ctaTitle")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t("ctaDescription")}</p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 dark:hover:text-blue-800 transition-colors"
          >
            <FiMessageSquare className="mr-2 h-5 w-5" />
            {t("ctaButton")}
          </Link>
        </div>
      </section>
    </main>
  );
}
