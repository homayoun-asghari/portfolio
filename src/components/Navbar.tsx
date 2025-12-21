"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FiMenu, FiX, FiGlobe } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n/i18n";

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "#about" },
    { name: t("projects"), href: "#projects" },
    { name: t("contact"), href: "/contact" },
  ];

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isMobile: boolean = false
  ) => {
    e.preventDefault();
    if (isMobile) setIsOpen(false);
    if (href.startsWith("#")) {
      if (pathname === "/") {
        const targetElement = document.getElementById(href.substring(1));
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push(`/#${href.substring(1)}`);
      }
    } else {
      router.push(href);
    }
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("#")) {
      if (typeof window === "undefined") return false;
      return pathname === "/" && window.location.hash === href;
    }
    return pathname === href;
  };

  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languages = [
    { code: "en", name: "English" },
    { code: "tr", name: "Türkçe" },
    { code: "fa", name: "فارسی" },
  ];

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
    setIsLanguageMenuOpen(false);
    
    // Update the URL to reflect the language change without full page reload
    const url = new URL(window.location.href);
    url.searchParams.set('lng', lng);
    window.history.pushState({}, '', url);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm bg-transparent">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Profile Picture */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center rtl:space-x-reverse space-x-3">
              <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-blue-500 flex-shrink-0 relative">
                <Image
                  src="/images/profile.jpg"
                  alt="Profile"
                  fill
                  sizes="40px"
                  className="object-cover"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=Homayoun+Asghari&background=2563eb&color=fff&size=128`;
                  }}
                  unoptimized={process.env.NODE_ENV !== 'production'}
                />
              </div>
              <span className="rtl:mr-3 ltr:ml-3 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {i18n.language === 'fa' ? 'همایون اصغری' : 'Homayoun Asghari'}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavigation(e, item.href)}
                className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium ${
                  isActive(item.href) ? "text-blue-600 dark:text-blue-400" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="relative ml-4">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
                aria-label="Change language"
              >
                <FiGlobe className="h-5 w-5" />
                <span className="rtl:mr-1 ltr:ml-1 text-sm inline-block w-[19px] text-center">
                  {currentLanguage === 'fa' ? 'فا' : currentLanguage.toUpperCase()}
                </span>
              </button>

              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`block w-full text-right px-4 py-2 text-sm ${
                        currentLanguage === lang.code
                          ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                      dir={lang.code === "fa" ? "rtl" : "ltr"}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            >
              {isOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href, true)}
                  className={`block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors ${
                    isActive(item.href)
                      ? "text-blue-600 dark:text-blue-400"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="px-4 py-2">
                <div className="relative">
                  <button
                    onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                    className="flex items-center justify-between w-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
                    aria-label="Change language"
                  >
                    <FiGlobe className="h-5 w-5 flex-shrink-0" />
                    <span className="rtl:mr-3 ltr:ml-3 flex-grow text-left rtl:text-right">
                      {languages.find(lang => lang.code === currentLanguage)?.name}
                    </span>
                  </button>

                  {isLanguageMenuOpen && (
                    <div className="mt-2 w-full bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            changeLanguage(lang.code);
                            setIsOpen(false);
                          }}
                          className={`block w-full text-left px-4 py-2 text-sm ${
                            currentLanguage === lang.code
                              ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                          dir={lang.code === "fa" ? "rtl" : "ltr"}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
