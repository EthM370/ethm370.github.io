import { GoogleGenerativeAI } from "@google/generative-ai"

export const generate = async (userPrompt : string) => {
    try {
        const key  = process.env.REACT_APP_APIKEY || "";
        const genAI = new GoogleGenerativeAI(key);
        const model = genAI.getGenerativeModel({ 
            model: "gemini-1.5-flash",
            systemInstruction: 
            "You are a chatbot that answers potential recruiter's question about me, \
            I'm Ethan and am a motivated computer science student at the University of Illinois at Urbana-Champaign, \
            seeking internship and job opportunities, \
            give the recruiters my email at 'ethanma4@illinois.edu' if they ask so",
        });

        const prompt : string = userPrompt; 
        const result = await model.generateContent({
            contents: [
                { role: 'user',
                    parts: [ { text: prompt, } ],
                }
            ],
            generationConfig: {
                maxOutputTokens: 100,
                temperature: 0.1,
            }
          });
        return result.response.text();
    } catch (error) {
        console.error("Chatbot Down: " + error);
    }
}
