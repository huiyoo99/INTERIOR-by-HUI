import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const formLabels = t.contact.form as { [key: string]: string };

  return (
    <section id="contact" className="py-24 bg-stone-900 text-stone-300">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif text-white mb-4">{t.contact.title as string}</h2>
        <p className="text-stone-400 mb-12 font-light">
          {t.contact.subtitle as string}
        </p>

        <form className="space-y-6 max-w-lg mx-auto text-left" onSubmit={(e) => e.preventDefault()}>
          <div>
             <label htmlFor="name" className="block text-xs uppercase tracking-widest mb-2">{formLabels.name}</label>
             <input type="text" id="name" className="w-full bg-stone-800 border-b border-stone-700 focus:border-white outline-none px-4 py-3 transition-colors text-white" />
          </div>
          <div>
             <label htmlFor="email" className="block text-xs uppercase tracking-widest mb-2">{formLabels.email}</label>
             <input type="email" id="email" className="w-full bg-stone-800 border-b border-stone-700 focus:border-white outline-none px-4 py-3 transition-colors text-white" placeholder="your@email.com" />
          </div>
          <div>
             <label htmlFor="message" className="block text-xs uppercase tracking-widest mb-2">{formLabels.message}</label>
             <textarea id="message" rows={4} className="w-full bg-stone-800 border-b border-stone-700 focus:border-white outline-none px-4 py-3 transition-colors text-white resize-none"></textarea>
          </div>
          
          <button type="submit" className="w-full bg-white text-stone-900 py-4 text-sm uppercase tracking-widest font-bold hover:bg-stone-200 transition-colors mt-8">
            {formLabels.submit}
          </button>
        </form>

        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
           <p>{t.contact.footer as string}</p>
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