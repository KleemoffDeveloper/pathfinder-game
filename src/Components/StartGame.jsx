import React, { useEffect, useState } from 'react';
import OpenAI from "openai";
import dotenv from "dotenv";
import promptSync from "prompt-sync";
import { v4 as uuidv4 } from 'uuid'


//dotenv.config(); <--I don't know if we're going to need this...

const prompt = promptSync();

const openai = new OpenAI({ apiKey: import.meta.env.VITE_API_KEY, dangerouslyAllowBrowser: true });

let program = true;

//Removes the \n
const filteredResponse = (response) => response.split("\n").filter((element) => element);

export default function StartGame(){
    const [scenario, setScenario] = useState('')
    const [choices, setChoices] = useState([])
    const [plot, setPlot] = useState('')
    const [title, setTitle] = useState('')
    


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

            // console.log(title, plot, choices);
            // console.log(initialRequest)

            setTitle(title)
            setPlot(plot)
            setChoices(choices)
        }
        firstPromptRequest()
    }
    useEffect(() => {firstPrompt()}, [])


    const game = {
        context: "",
        choice: "",
        currentChoice: 0,
        maxChoices: 3,
    };

    
        // State for storing the choice
        const [aChoice, setAChoice] = useState(null);
    
        // Your handleChoice function
        async function handleChoice(choice) {
            try {
                const dynamicChoice = await openai.chat.completions.create({
                    messages: [
                        // {
                        //     role: "system",
                        //     content: "Still playing the adventure game",
                        // },
                        {
                            role: "user",
                            content: `I pick choice ${choice}`,
                        },
                    ],
                    temperature: 0.08,
                    max_tokens: 500,
                    model: "gpt-3.5-turbo",
                });
    
                const dynamicResponse = filteredResponse(dynamicChoice.choices[0].message.content);
                // console.log(dynamicResponse);
    
                // Update the state with the chosen value
                setAChoice(choice);
            } catch (error) {
                console.error("Error while handling choice:", error);
            }
        }
    //     // setAChoice(game.choice)
    
    return (
        <div>
            <h1>{title}</h1>
            <h6>{plot}</h6>
            {choices.map((choice, index) => (
                <div key={uuidv4()}>
                    <button onClick={() => handleChoice(choice)}>{`Choice ${index + 1}`}</button>
                    <p>{choice}</p>
                </div>
            ))}
        </div>
    );
    
}