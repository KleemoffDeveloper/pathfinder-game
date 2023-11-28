import React, { useEffect, useState } from "react";
import OpenAI from "openai";
import { v4 as uuidv4 } from "uuid";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function StartGame() {
  const filteredResponse = (response) =>
    response.split("\n").filter((e) => e && e !== "Choices:");

  const [messages, setMessages] = useState([
    {
      role: "system",
      content:
        "We are playing an adventure game. Label the title and the plot. Give me 3 choices to progress through the story. Make each choice a single sentence.",
    },
    { role: "user", content: "Start the game." },
  ]);

  const [generating, setGenerating] = useState(false);

  const [title, setTitle] = useState();
  const [plot, setPlot] = useState();
  const [choices, setChoices] = useState();

  async function initialize() {
    setGenerating(true);

    const request = await openai.chat.completions.create({
      messages: messages,
      temperature: 0.8,
      model: "gpt-3.5-turbo",
      stream: true,
    });

    let str = "";
    for await (const chunk of request) {
      let chunkText = chunk.choices[0]?.delta?.content || "";
      str += chunkText;
      document.querySelector("#generating").textContent = str;
    }
    const filtered = filteredResponse(str);

    let m_title = filtered
      .find((e) => e.substring(0, 5) === "Title")
      .substring(6)
      .trim();

    let m_plot = filtered
      .find((e) => e.substring(0, 4) === "Plot")
      .substring(5)
      .trim();

    let m_choices = filtered.filter(
      (e) =>
        e.includes("1.") ||
        e.includes("2.") ||
        e.includes("3.") ||
        (e.includes("Choice ") && e.length > 10)
    );

    console.log([title, plot, choices]);

    setTitle(m_title);
    setPlot(m_plot);
    setChoices(m_choices);

    setGenerating(false);
  }

  function continueStory() {
    // Remind ChatGPT of the context by [...messages, { role: "user", content: userChoice }]
  }

  useEffect(() => {
    // Begin requesting to OpenAI
    initialize();
  }, []);

  return (
    <div>
      {generating ? (
        <h1 id="generating"></h1>
      ) : (
        <div>
          <h1 id="game-title">{title}</h1>
          <h6 id="game-plot">{plot}</h6>
          {choices
            ? choices.map((choice, index) => (
                <div key={uuidv4()}>
                  <button onClick={() => handleChoice(choice)}>{`Choice ${
                    index + 1
                  }`}</button>
                  <p>{choice}</p>
                </div>
              ))
            : null}
        </div>
      )}
    </div>
  );
}

//testing
