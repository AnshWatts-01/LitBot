import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;
const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-002:generateContent?key=${API_KEY}`;

export async function generateBookRecommendation(prompt) {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: prompt }]
        }]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API error:", errorText);
      throw new Error("Gemini API request failed");
    }

    const data = await response.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No recommendation found.';
  } catch (error) {
    console.error("Error in generateBookRecommendation:", error);
    throw error;
  }
}
