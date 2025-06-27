'use server'
import { GoogleGenAI } from "@google/genai";

const AI = new GoogleGenAI({ apiKey: process.env.GEMINI_API });
const getPrompt = (code: string, language: string) => {
    return `"Please review this ${language} code for:
                - Code readability and structure
                - Variable Naming
                - Optimization issues
                - Best Possible Code
                Code:
                    ${code}
                Also, please rate the overall code quality out of 10
                each part should have only 1 point and point should be simple and straight
                output should be in below format 

• Code Readability⁃The code uses clear modern JavaScript syntax (arrow functions, const), making its structure easy to follow. However, the name  is highly misleading given the trivial functionality, which severely diminishes the readability of its actual purpose.
• Performance⁃ There are no performance or optimization issues. The code performs negligible operations, creating two function instances when called, which has an imperceptible impact on performance.
• Best Practices⁃ The use of  and arrow functions aligns with modern JavaScript best practices. However, the most significant violation is the naming convention:  implies functionality it does not provide, which is a fundamental breach of the principle of clear and accurate naming.
• Suggestions⁃ To make the code maintainable, testable, and scalable in a meaningful way, it must either be renamed to accurately reflect its current no-operation behavior (e.g., ) or, if the intent is to implement a debounce utility, it should be fully developed to include actual debouncing logic.
• Overall Code Quality Rating⁃ 2
                "`
}

export const getCodeReviewAI = async (code: string, language = "javascript") => {
    try {

        const response = await AI.models.generateContent({
            model: "gemini-2.5-flash",
            contents: getPrompt(code, language)
        });
        return {
            success: true,
            data: response.text
        }
    } catch (error) {
        return {
            success: false,
            data: "",
            error: 'Something went wrong.'
        }
    }
}