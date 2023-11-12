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
            
        }
    }
}