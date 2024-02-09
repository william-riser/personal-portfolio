import React, { useState } from "react";
// Replace with your actual Gemini interaction function
import { generateGeminiText } from "../geminiapi.tsx";

interface GeminiPromptProps {
  // Add any additional props you might need here
}

const GeminiPrompt: React.FC<GeminiPromptProps> = () => {
  const [userPrompt, setUserPrompt] = useState("");
  const [geminiResponse, setGeminiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const response = await generateGeminiText(userPrompt);
      setGeminiResponse(response.text);
    } catch (error) {
      console.error("Error getting Gemini response:", error);
      // Handle error gracefully, e.g., display an error message
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="prompt" className="block text-white font-bold mb-2">
            Enter your prompt:
          </label>
          <textarea
            id="prompt"
            rows={4}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={userPrompt}
            onChange={(e) => setUserPrompt(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={isLoading}
        >
          {isLoading ? "Thinking..." : "Submit"}
        </button>
      </form>

      {geminiResponse && (
        <div className="mt-4 p-4 border border-gray-200 rounded bg-white">
          <p className="text-gray-700">Gemini's Response:</p>
          <p>{geminiResponse}</p>
        </div>
      )}
    </div>
  );
};

export default GeminiPrompt;
