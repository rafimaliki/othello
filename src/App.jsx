import "./App.css";
import { useState, useEffect } from "react";

import Grid from "./components/grid";
import Stat from "./components/stat";
import Reset from "./components/reset";

function App() {
  const size = 8;
  const [gridData, setGridData] = useState(
    Array.from({ length: size }, () => Array.from({ length: size }, () => null))
  );
  const [player, setPlayer] = useState("black");

  useEffect(() => {
    let newGridData = [...gridData];
    const max = Math.floor(size / 2);
    const min = max - 1;
    newGridData[min][min] = "⚪";
    newGridData[min][max] = "⚫";
    newGridData[max][min] = "⚫";
    newGridData[max][max] = "⚪";
    setGridData(newGridData);
  }, []);

  const [countPlaced, setCountPlaced] = useState(4);

  useEffect(() => {
    // console.log("countPlaced: ", countPlaced);
  }, [gridData]);

  useEffect(() => {
    if (countPlaced === size * size) {
      // renderFinalBoard();
      console.log("game finished!");
    }
  }, [countPlaced]);

  const renderFinalBoard = () => {
    let newGridData = Array.from({ length: size }, () =>
      Array.from({ length: size }, () => null)
    );
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

    let i = 0;
    let j = 0;

    while (i !== size) {
      if (countBlack > 0) {
        newGridData[i][j] = "⚫";
        countBlack--;
      } else {
        newGridData[i][j] = "⚪";
        countWhite--;
      }
      setGridData(newGridData);
      j++;
      if (j === size) {
        j = 0;
        i++;
      }
    }
  };

  const countWinner = () => {
    if (countPlaced !== size * size) {
      return "";
    }
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

    if (countWhite > countBlack) {
      return "White Wins!";
    } else if (countBlack > countWhite) {
      return "Black Wins!";
    } else {
      console.log("draw");
      return "Draw";
    }
  };

  return (
    <>
      <div className="bg-gray-100 border w-screen h-screen flex justify-center items-center">
        <div className="w-96 h-screen bg-white flex flex-col justify-center items-center">
          <p className="font-bold text-4xl"> OTHELLO </p>
          <Stat gridData={gridData} size={size} player={player} />
          <Grid
            gridData={gridData}
            setGridData={setGridData}
            player={player}
            setPlayer={setPlayer}
            countPlaced={countPlaced}
            setCountPlaced={setCountPlaced}
            size={size}
          />
          <div className="flex w-80  mt-7 items-center">
            <p className="w-full text-2xl font-bold">{countWinner()}</p>
            <Reset
              gridData={gridData}
              setGridData={setGridData}
              player={player}
              setPlayer={setPlayer}
              countPlaced={countPlaced}
              setCountPlaced={setCountPlaced}
              size={size}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
