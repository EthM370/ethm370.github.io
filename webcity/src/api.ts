import { GoogleGenerativeAI } from "@google/generative-ai"

export const generate = async (userPrompt : string) => {
    try {
        const key  = process.env.REACT_APP_APIKEY || "";
        const genAI = new GoogleGenerativeAI(key);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt : string = userPrompt; 
        const result = await model.generateContent(prompt);

        return result.response.text();
    } catch (error) {
        console.error("Chatbot Down: " + error);
    }
}
