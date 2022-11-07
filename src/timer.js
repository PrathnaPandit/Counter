import React from "react";

export default function Timer() {
  const startTimer = () => {};

  const stopTimer = () => {};

  const resetTimer = () => {};

  return (
    <div className="container">
      <button className="start" onclick={startTimer}>
        Start
      </button>
      <button className="stop" onclick={stopTimer}>
        Stop
      </button>
      <button className="reset" onclick={resetTimer}>
        Reset
      </button>
    </div>
  );
}
