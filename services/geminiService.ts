
import { GoogleGenAI } from "@google/genai";

export const generateCaption = async (topic: string, tone: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate 3 viral-ready social media captions for an influencer in the MENA region.
      Topic: ${topic}
      Tone: ${tone}
      Include relevant emojis and regional cultural nuances where appropriate. Use English with occasional Arabic slang/transliteration for authenticity.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sorry, I couldn't generate captions right now. Please try again later.";
  }
};
