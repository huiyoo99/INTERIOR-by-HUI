import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProjectDetailPage from './components/ProjectDetailPage';
import BrutalistHome from './components/BrutalistHome';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router basename="/INTERIOR-by-HUI/">
      <ThemeProvider>
        <LanguageProvider>
          <div className="font-sans selection:bg-stone-300 selection:text-stone-900 dark:selection:bg-stone-700 dark:selection:text-stone-100 transition-colors duration-300">
            <Routes>
              {/* 这里讲整个首页替换为你的粗野主义风格设计 */}
              <Route path="/" element={<BrutalistHome />} />
              <Route path="/project/:id" element={<ProjectDetailPage />} />
            </Routes>
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;