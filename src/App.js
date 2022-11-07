import { useEffect, useState } from "react";
import "./styles.css";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const startTimer = () => {
    setSeconds((seconds) => seconds + 1);
  };

  const startCounter = () => {
    setIsActive(true);
    startTimer();
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    stopTimer();

    setTimeout(() => {
      setSeconds(0);
    }, 1000);
  };

  useEffect(() => {
    if (isActive) {
      setTimeout(startTimer, 1000);
    }
  }, [seconds]);

  return (
    <div className="container">
      <button className="start" onClick={startCounter}>
        Start
      </button>
      <button className="stop" onClick={stopTimer}>
        Stop
      </button>
      <button className="reset" onClick={resetTimer}>
        Reset
      </button>
      <p id="number">{seconds}</p>
    </div>
  );
}
