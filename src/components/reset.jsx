import React from "react";

const Reset = ({
  gridData,
  setGridData,
  player,
  setPlayer,
  countPlaced,
  setCountPlaced,
  size,
}) => {
  const handleReset = () => {
    let newGridData = Array.from({ length: size }, () =>
      Array.from({ length: size }, () => null)
    );
    const max = Math.floor(size / 2);
    const min = max - 1;
    newGridData[min][min] = "⚪";
    newGridData[min][max] = "⚫";
    newGridData[max][min] = "⚫";
    newGridData[max][max] = "⚪";
    setGridData(newGridData);
    setPlayer("black");
    setCountPlaced(4);
    console.log("reset");
  };

  return (
    <div className="w-fit flex items-center justify-end mb-20">
      <button
        onClick={() => handleReset()}
        className="border-1 rounded-md p-3 w-fit h-10 bg-red-500 hover:bg-red-200 border-black border-2 text-black text-2xl font-mono font-black flex items-center justify-center"
      >
        Reset
      </button>
    </div>
  );
};

export default Reset;
