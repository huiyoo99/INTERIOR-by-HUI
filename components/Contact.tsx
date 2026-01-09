import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  
  // You can replace this number with the actual WhatsApp number
  const whatsappNumber = "+60128856791"; 
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="contact" className="py-24 bg-stone-900 text-stone-300">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif text-white mb-4">{t.contact.title}</h2>
        <p className="text-stone-400 mb-12 font-light max-w-2xl mx-auto">
          {t.contact.subtitle}
        </p>

        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-[#20bd5a] transition-all transform hover:scale-105 shadow-lg"
        >
          <i className="fab fa-whatsapp text-2xl"></i>
          <span>{t.contact.whatsapp}</span>
        </a>

        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
           <p>{t.contact.footer}</p>
           <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors"><i className="fab fa-instagram"></i></a>
             <a href="#" className="hover:text-white transition-colors"><i className="fab fa-pinterest"></i></a>
             <a href="#" className="hover:text-white transition-colors"><i className="fab fa-weixin"></i></a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;