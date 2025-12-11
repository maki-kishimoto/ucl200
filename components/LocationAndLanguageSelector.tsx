import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../constants/translations';

const LocationAndLanguageSelector: React.FC = () => {
  // const [language, setLanguage] = useState<Language>('en');
  const initialLang = (typeof window !== 'undefined' && (window as any).__DEFAULT_LANGUAGE) ? (window as any).__DEFAULT_LANGUAGE as Language : 'en'; const [language, setLanguage] = useState<Language>(initialLang);
  const t = translations[language];

  const handleStartChat = () => {
    // Redirect to the language-specific page on GitHub Pages
    const base = 'https://maki-kishimoto.github.io/ucl200';
    const path = language === 'ja' ? '/ja' : '/en';
    window.location.href = `${base}${path}`;
  };
  
  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-14 bg-white text-stone-800">
        <div className="max-w-md w-full flex flex-col items-center">
            
            <div className="text-center mb-3 w-full">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-indigo-950 tracking-tight mb-2 whitespace-nowrap">{t.selectorTitle}</h1>
                <div className="h-1 w-20 bg-indigo-200 mx-auto rounded-full mt-4 mb-6"></div>
                
                <div className="min-h-[10rem] flex flex-col justify-center text-xs text-stone-500 text-left space-y-2 mb-8 bg-stone-50 p-4 rounded-lg border border-stone-100">
                    <p>{t.disclaimerPrivacy}</p>
                    <p>{t.disclaimerCookies}</p>
                </div>

                <p className="text-stone-600 font-medium h-6">{t.selectorDescription}</p>
            </div>

            <div className="w-full space-y-8 mt-2">
                <div className="flex justify-center items-center gap-8">
                    <button 
                        onClick={() => setLanguage('en')} 
                        className={`text-sm tracking-wide transition-all duration-300 pb-1 border-b ${language === 'en' ? 'text-indigo-900 font-bold border-indigo-900' : 'text-stone-400 font-medium border-transparent'}`}
                    >
                        English
                    </button>
                    <span className="text-stone-300 text-sm font-light">|</span>
                    <button 
                        onClick={() => setLanguage('ja')} 
                        className={`text-sm tracking-wide transition-all duration-300 pb-1 border-b ${language === 'ja' ? 'text-indigo-900 font-bold border-indigo-900' : 'text-stone-400 font-medium border-transparent'}`}
                    >
                        日本語
                    </button>
                </div>

                <button
                    onClick={handleStartChat}
                    className="w-full bg-indigo-900 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-indigo-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                    <span>{t.startChat}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 12l14 0"></path>
                        <path d="M13 18l6 -6"></path>
                        <path d="M13 6l6 6"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
  );
};

export default LocationAndLanguageSelector;
