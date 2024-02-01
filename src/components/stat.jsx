import React from "react";

const Stat = ({ gridData, size, player }) => {
  var countWhite = 0;
  var countBlack = 0;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (gridData[i][j] === "⚪") {
        countWhite++;
      } else if (gridData[i][j] === "⚫") {
        countBlack++;
      }
    }
  }

  const renderTurnWhite = () => {
    if (player === "white") {
      return <div className="mt-2 w-full h-1 bg-black"> </div>;
    }
  };

  return (
    <>
      <div className="px-2 pt-4 flex items-center w-80 h-fit my-4 bg-gray-100 rounded-xl font-bold">
        <div className="w-1/2 text-center flex-col items-center justify-center">
          <div className="w-fit mx-auto"> WHITE </div>
          <div className="text-6xl w-fit mx-auto"> {countWhite} </div>
          <div
            className={`mt-2 w-full h-1 ${
              player === "white" ? "bg-black" : "bg-gray-100"
            }`}
          ></div>
        </div>
        {/* <div className="w-1 h-full bg-black"></div> */}
        <div className="w-1/2 text-center flex-col items-center justify-center">
          <div className="w-fit mx-auto"> BLACK </div>
          <div className="text-6xl w-fit mx-auto"> {countBlack} </div>
          <div
            className={`mt-2 w-full h-1 ${
              player === "black" ? "bg-black" : "bg-gray-100"
            }`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Stat;
