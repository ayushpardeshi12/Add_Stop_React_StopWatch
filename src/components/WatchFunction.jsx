import { useState, useRef } from "react";
import { Buttons } from "./Buttons";

const WatchFunction = () => {
  const [isTime, setIsTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [storeTime, setStoreTime] = useState([]);
  let intervalRef = useRef(null);

  const startStopWatch = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
    } else {
      const StartTime = Date.now() - isTime;
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setIsTime(Date.now() - StartTime);
      }, 10);
    }
    setIsRunning(!isRunning);
  };

  const resetStopwatch = () => {
    setIsTime(0);
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const addTimeToList = (e) => {
    setStoreTime((prevTime) => [...prevTime, formatTime(isTime)]);
  };

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60000)
      .toString()
      .padStart(2, "0");
    let seconds = Math.floor((time % 60000) / 1000)
      .toString()
      .padStart(2, "0");
    let milliSeconds = Math.floor((time % 1000) / 10)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}:${milliSeconds}`;
  };
  return (
    <>
      <h1 className="text-6xl text-neutral-700 text-center my-10">
        {formatTime(isTime)}
      </h1>
      <Buttons
        isRunning={isRunning}
        startStopWatch={startStopWatch}
        resetStopwatch={resetStopwatch}
        addTimeToList={addTimeToList}
      />
      <br />
      <h2 className="text-4xl text-center font-semibold my-4">
        Your Interval's
      </h2>
      <ul>
        {storeTime.map((time, index) => (
          <li
            className="text-white text-3xl font-bold bg-slate-700 mx-32 my-3 px-3 py-2 rounded-2xl"
            key={index}
          >
            {index + 1}. {time}
          </li>
        ))}
      </ul>
    </>
  );
};

export default WatchFunction;
