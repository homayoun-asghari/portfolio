"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import i18n from '@/i18n/i18n';

export default function DirectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dir, setDir] = useState('ltr');
  const [isRTL, setIsRTL] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Get the current language from localStorage or default to 'en'
      const savedLang = localStorage.getItem('i18nextLng') || 'en';
      const isRtlLang = savedLang === 'fa';
      setDir(isRtlLang ? 'rtl' : 'ltr');
      setIsRTL(isRtlLang);
      
      // Update document attributes
      document.documentElement.dir = isRtlLang ? 'rtl' : 'ltr';
      document.documentElement.lang = savedLang;
      
      // Add RTL class to body for global styles
      if (isRtlLang) {
        document.body.classList.add('rtl');
      } else {
        document.body.classList.remove('rtl');
      }
      
      // Update direction if language changes
      const handleLanguageChange = (lng: string) => {
        const newIsRtl = lng === 'fa';
        setDir(newIsRtl ? 'rtl' : 'ltr');
        setIsRTL(newIsRtl);
        document.documentElement.dir = newIsRtl ? 'rtl' : 'ltr';
        document.documentElement.lang = lng;
        
        // Update body class
        if (newIsRtl) {
          document.body.classList.add('rtl');
        } else {
          document.body.classList.remove('rtl');
        }
      };
      
      // Listen for language changes
      i18n.on('languageChanged', handleLanguageChange);
      
      // Cleanup
      return () => {
        i18n.off('languageChanged', handleLanguageChange);
      };
    }
  }, [pathname]);

  return (
    <div 
      dir={dir}
      className={`transition-all duration-300 ${isRTL ? 'rtl' : 'ltr'}`}
    >
      {children}
    </div>
  );
}
