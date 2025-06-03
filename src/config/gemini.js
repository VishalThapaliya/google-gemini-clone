const API_KEY=`AIzaSyCrSweKK26S0QQJFI-ta_kXuB9iXczQAH4`;

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: API_KEY });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  console.log(response.text);
  return response.text;
}

export default main;