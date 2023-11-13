import React, { useEffect } from 'react';
import OpenAI from "openai";
import dotenv from "dotenv";
import promptSync from "prompt-sync";


//dotenv.config(); <--I don't know if we're going to need this...

const prompt = promptSync();

const openai = new OpenAI({ apiKey: import.meta.env.VITE_API_KEY, dangerouslyAllowBrowser: true });

let program = true;

//Removes the \n
const filteredResponse = (response) => response.split("\n").filter((element) => element);

const game = {
    context: "",
    choice: "",
    currentChoice: 0,
    maxChoices: 3,
};

export default function StartGame(){
    console.log("Starting Game...")

    function firstPrompt(){
        async function firstPromptRequest(){
            const initialRequest = await openai.chat.completions.create({
                messages: [
                    {
                        role: "system",
                        content: `We are playing an adventure game. Label the title and the plot. Give me 3 choices to progress through the story. Make each choice a single sentence.`
                    },
                    {
                        role: "user",
                        content: `Start the game.`
                    },
                ],
                temperature: 0.8,
                max_tokens: 500,
                model: "gpt-3.5-turbo"
            });

            const response = filteredResponse(initialRequest.choices[0].message.content);

            //Set our game context
            let title = response
                .find((element) => element.substring(0, 5) === "Title")
                .substring(6)
                .trim();

            let plot = response
                .find((element) => element.substring(0, 4) === "Plot")
                .substring(5)
                .trim();

            let choices = response.filter(
               (element) =>
                element.includes("1.") ||
                element.includes("2.") ||
                element.includes("3.") ||
                element.includes("Choices ") && element.length > 10
            );

            console.log(title, plot, choices);
        }
        firstPromptRequest()
    }
    useEffect(firstPrompt, [])

    return;
}