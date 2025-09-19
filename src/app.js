require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

async function runGeminiQuery(prompt) {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return null;
  }
}

// Example usage
const prompt = "Explain quantum computing in simple terms";
runGeminiQuery(prompt).then(response => {
  console.log("Gemini response:", response);
});

module.exports = { runGeminiQuery };