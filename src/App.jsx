import React, { useState, useEffect } from "react";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import HowToPlay from "./pages/HowToPlay";
import StartGame from "./Components/StartGame";

function App() {
  const [startGame, setStartGame] = useState(false)

  const handleStartButtonClick = () =>{
    setStartGame(true)
  }


  return (
    <div className="App">
      {/* <HowToPlay /> */}
      {/* <GamePage /> */}
      {startGame ? (
        <StartGame />
      ) : (
        <button onClick={handleStartButtonClick}>Start Game</button>
      )}

      {/* <Footer /> */}
    </div>
  );
}
export default App;

