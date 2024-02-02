import React from "react";

const Winner = ({ gridData, size, countPlaced }) => {
  var winner = "";

  if (!(countPlaced !== size * size)) {
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
      winner = "White Wins!";
    } else if (countBlack > countWhite) {
      winner = "Black Wins!";
    } else {
      winner = "Draw";
    }
  }

  return <p className="w-full font-semibold text-xl">{winner}</p>;
};

export default Winner;
