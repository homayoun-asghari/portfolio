'use client';

import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="container mx-auto px-6 py-24 md:py-36">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hi, I&apos;m Your Name
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              Full Stack Web Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
              I build exceptional digital experiences with modern web technologies.
              Currently focused on creating beautiful, responsive, and accessible
              web applications.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                View My Work
                <FiArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Contact Me
              </a>
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
              I&apos;m a passionate web developer with expertise in modern JavaScript
              frameworks and a keen eye for design. With a strong foundation in
              computer science and years of hands-on experience, I create
              efficient, scalable, and user-friendly applications.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying outdoor
              activities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
