import React from "react";

export const Buttons = ({
  isRunning,
  startStopWatch,
  resetStopwatch,
  addTimeToList,
}) => {
  return (
    <div className="text-center me-3">
      <button
        className="bg-amber-400 text-white font-bold py-3 px-6 mx-3 rounded-xl"
        onClick={startStopWatch}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      <button
        className="bg-amber-400 text-white font-bold py-3 px-6 mx-3 rounded-xl"
        onClick={resetStopwatch}
      >
        Reset
      </button>
      <button
        className="bg-amber-400 text-white font-bold py-3 px-6 mx-3 rounded-xl"
        onClick={addTimeToList}
      >
        Interval
      </button>
    </div>
  );
};
