import React, { useState, useRef, useEffect } from 'react';
import { streamDesignAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';
import { useLanguage } from '../context/LanguageContext';

const AIChat: React.FC = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize welcome message when language changes or first load
  useEffect(() => {
    setMessages([{ role: 'model', text: t.ai.welcome }]);
  }, [language, t.ai.welcome]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      let fullResponse = '';
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      await streamDesignAdvice(userText, language, (chunk) => {
        fullResponse += chunk;
        setMessages(prev => {
          const newMessages = [...prev];
          const lastMsg = newMessages[newMessages.length - 1];
          if (lastMsg.role === 'model') {
            lastMsg.text = fullResponse;
          }
          return newMessages;
        });
      });
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: t.ai.error, isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'bg-stone-800 rotate-90 scale-0 opacity-0' : 'bg-stone-900 hover:scale-110 scale-100 opacity-100'
        } text-white`}
        aria-label="Open AI Design Assistant"
      >
        <i className="fas fa-magic text-xl"></i>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-stone-200 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-stone-900 p-4 flex items-center justify-between text-white">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center border border-stone-600">
                <i className="fas fa-robot text-sm"></i>
              </div>
              <div>
                <h3 className="font-serif font-medium text-sm">{t.ai.title}</h3>
                <p className="text-xs text-stone-400">{t.ai.subtitle}</p>
              </div>
            </div>
            {/* Close/Minimize Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-white transition-colors p-1"
            >
              <i className="fas fa-times text-lg"></i>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-stone-50 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-stone-800 text-white rounded-br-none'
                      : 'bg-white text-stone-800 border border-stone-200 shadow-sm rounded-bl-none'
                  } ${msg.isError ? 'text-red-500' : ''}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && messages[messages.length - 1]?.role === 'user' && (
              <div className="flex justify-start">
                 <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-stone-200 shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-75"></div>
                      <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-150"></div>
                    </div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-stone-100">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t.ai.placeholder}
                className="w-full bg-stone-50 border border-stone-200 rounded-full py-3 pl-4 pr-12 text-sm text-stone-800 focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-all"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-stone-900 rounded-full flex items-center justify-center text-white hover:bg-stone-700 disabled:opacity-50 transition-colors"
              >
                <i className="fas fa-paper-plane text-xs"></i>
              </button>
            </div>
            <p className="text-[10px] text-center text-stone-400 mt-2">
              {t.ai.disclaimer}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;