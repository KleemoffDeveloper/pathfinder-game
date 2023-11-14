import React, { useState } from 'react';
import StartGame from './StartGame';
// import AnotherComponent from './AnotherComponent'; // Import the component you want to render

const GamePage = () => {
  const [showAnotherComponent, setShowAnotherComponent] = useState(false);

  const handleClick = () => {
    // Toggle the state to show/hide AnotherComponent
    setShowAnotherComponent(!showAnotherComponent);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>

      {showAnotherComponent && <StartGame />}
    </div>
  );
};

export default GamePage;








// export default function GamePage(){
    
// }