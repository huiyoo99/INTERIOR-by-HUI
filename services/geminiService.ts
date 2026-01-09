import { GoogleGenAI } from "@google/genai";
import { Language } from "../types";

// Initialize Gemini Client
// IMPORTANT: The API key is assumed to be available in process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const streamDesignAdvice = async (
  prompt: string,
  language: Language,
  onChunk: (text: string) => void
): Promise<void> => {
  try {
    const model = 'gemini-3-flash-preview'; // Good balance of speed and capability for chat
    
    // System instruction to guide the persona
    const systemInstructions = {
      zh: `
        你是一位名叫 "Hui" 的专业资深室内设计师助手。
        你的任务是为用户提供专业的室内设计建议、色彩搭配方案、家具布局思路以及风格指导。
        
        你的回答风格应该是：
        1. 专业且优雅 (Professional and Elegant).
        2. 简洁明了 (Concise).
        3. 富有启发性 (Inspiring).
        
        如果用户问及非设计相关的问题，请礼貌地将话题引回室内设计。
        用中文回答。
      `,
      en: `
        You are "Hui", a professional and senior interior design assistant.
        Your task is to provide professional interior design advice, color schemes, furniture layout ideas, and style guidance.
        
        Your response style should be:
        1. Professional and Elegant.
        2. Concise.
        3. Inspiring.
        
        If the user asks about non-design related topics, politely bring the topic back to interior design.
        Answer in English.
      `
    };

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstructions[language],
        temperature: 0.7, 
      }
    });

    const result = await chat.sendMessageStream({ message: prompt });

    for await (const chunk of result) {
      if (chunk.text) {
        onChunk(chunk.text);
      }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};