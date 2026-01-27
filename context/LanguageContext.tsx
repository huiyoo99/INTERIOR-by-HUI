import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';

interface Translations {
  nav: { [key: string]: string };
  hero: { [key: string]: string };
  about: { [key: string]: string | { [key: string]: string } };
  portfolio: { title: string; categories: { [key: string]: string } };
  contact: {
    title: string;
    subtitle: string;
    whatsapp: string;
    footer: string;
  };
  ai: {
    title: string;
    subtitle: string;
    welcome: string;
    error: string;
    placeholder: string;
    disclaimer: string;
  };
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const translations: Record<Language, Translations> = {
  zh: {
    nav: {
      home: '首页',
      about: '关于我',
      portfolio: '作品集',
      contact: '联系方式',
    },
    hero: {
      subtitle: '室内建筑与设计',
      title1: '设计生活',
      title2: '重塑空间',
      description: '我们在极简主义与实用美学之间寻找平衡，为您打造独一无二的居住体验。',
      cta: '浏览作品',
    },
    about: {
      title: '关于设计师',
      name: 'Hui',
      p1: '在三年的职业生涯中，我始终坚持“设计应随时代而进化”。我喜欢在经典的美学框架中融入最前沿的设计元素，让空间既有深度又不失新鲜感。',
      p2: '我擅长挑战不同的风格边界，通过新颖的软装搭配和创新的动线规划，为客户创造出超越预期的居住体验。保持好奇，勇于不同，这是我的设计准则。',
      stats: {
        experience: '年经验',
        delivered: '完美交付',
        awards: '设计奖项',
      }
    },
    portfolio: {
      title: '精选作品',
      categories: {
        ALL: '全部',
        RESIDENTIAL: '住宅设计',
        COMMERCIAL: '商业空间',
        MINIMALIST: '极简主义',
        RENOVATION: '旧房改造',
      }
    },
    contact: {
      title: '开启您的空间改造之旅',
      subtitle: '无论是单间改造还是整体设计，欢迎随时通过 WhatsApp 与我们联系。',
      whatsapp: 'WhatsApp 咨询',
      footer: '© 2026 INTERIORS by HUI. All Rights Reserved.'
    },
    ai: {
      title: 'Hui AI 助手',
      subtitle: '您的专属设计顾问',
      welcome: '你好！我是Hui，很高兴为您服务。关于室内设计，您有什么想了解的吗？',
      error: '抱歉，网络似乎开了小差。请稍后再试。',
      placeholder: '请输入您的问题...',
      disclaimer: 'AI 建议仅供参考，具体实施请咨询专业人士。',
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      contact: 'Contact',
    },
    hero: {
      subtitle: 'Interior Architecture & Design',
      title1: 'Designing Life',
      title2: 'Reshaping Space',
      description: 'We find balance between minimalism and practical aesthetics to create unique living experiences for you.',
      cta: 'View Portfolio',
    },
    about: {
      title: 'About The Designer',
      name: 'Hui',
      p1: 'Throughout my three-year career, I’ve stayed true to one belief: Design must evolve. My work blends timeless aesthetic principles with cutting-edge elements, ensuring every space feels both grounded and excitingly new.',
      p2: 'I specialize in challenging stylistic boundaries—using innovative materials and creative layouts to exceed expectations. Staying curious and daring to be different are the hallmarks of my practice.',
      stats: {
        experience: 'Years Exp',
        delivered: 'Delivered',
        awards: 'Awards',
      }
    },
    portfolio: {
      title: 'Selected Works',
      categories: {
        ALL: 'All',
        RESIDENTIAL: 'Residential',
        COMMERCIAL: 'Commercial',
        MINIMALIST: 'Minimalist',
        RENOVATION: 'Renovation',
      }
    },
    contact: {
      title: 'Start Your Journey',
      subtitle: 'Whether it is a room renovation or a whole villa design, feel free to contact us via WhatsApp.',
      whatsapp: 'Chat on WhatsApp',
      footer: '© 2026 INTERIORS by HUI. All Rights Reserved.'
    },
    ai: {
      title: 'Hui AI Assistant',
      subtitle: 'Your Personal Design Consultant',
      welcome: 'Hello! I am Hui, happy to help. What would you like to know about interior design?',
      error: 'Sorry, I encountered an error. Please try again later.',
      placeholder: 'Ask a question...',
      disclaimer: 'AI advice is for reference only. Consult professionals for implementation.',
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};