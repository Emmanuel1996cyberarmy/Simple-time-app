import React, { useState } from "react";

function App() {
  setInterval(getTime, 1000);
  let time = new Date().toLocaleTimeString();
  const [setTime, currentTime] = useState(time);
  function getTime() {
    const timer = new Date().toLocaleTimeString();
    currentTime(timer);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
