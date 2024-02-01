import React, { useState } from "react";

const GridItem = ({ row, col, props }) => {
  const {
    gridData,
    setGridData,
    player,
    setPlayer,
    countPlaced,
    setCountPlaced,
    size,
  } = props;

  const checkFlip = (row, col) => {
    var playerColor = "⚫";
    var enemyColor = "⚪";

    if (player === "white") {
      playerColor = "⚪";
      enemyColor = "⚫";
    }

    // check right
    {
      var newRight = JSON.parse(JSON.stringify(gridData));

      for (let i = col + 1; i < size; i++) {
        if (newRight[row][i] === null || i === size - 1) {
          newRight = JSON.parse(JSON.stringify(gridData));
          break;
        } else if (newRight[row][i] === enemyColor && i !== 7) {
          newRight[row][i] = playerColor;
        } else if (newRight[row][i] === playerColor) {
          break;
        }
      }
    }

    // check left
    {
      var newLeft = JSON.parse(JSON.stringify(newRight));

      for (let i = col - 1; i >= 0; i--) {
        if (newLeft[row][i] === null || i === 0) {
          newLeft = JSON.parse(JSON.stringify(newRight));
          break;
        } else if (newLeft[row][i] === enemyColor && i !== 0) {
          newLeft[row][i] = playerColor;
        } else if (newLeft[row][i] === playerColor) {
          break;
        }
      }
    }

    // check up
    {
      var newUp = JSON.parse(JSON.stringify(newLeft));

      for (let i = row - 1; i >= 0; i--) {
        if (newUp[i][col] === null || i === 0) {
          newUp = JSON.parse(JSON.stringify(newLeft));
          break;
        } else if (newUp[i][col] === enemyColor && i !== 0) {
          newUp[i][col] = playerColor;
        } else if (newUp[i][col] === playerColor) {
          break;
        }
      }
    }

    // check down
    {
      var newDown = JSON.parse(JSON.stringify(newUp));

      for (let i = row + 1; i < size; i++) {
        if (newDown[i][col] === null || i === size - 1) {
          newDown = JSON.parse(JSON.stringify(newUp));
          break;
        } else if (newDown[i][col] === enemyColor && i !== 7) {
          newDown[i][col] = playerColor;
        } else if (newDown[i][col] === playerColor) {
          break;
        }
      }
    }

    // check up-right
    {
      var newUpRight = JSON.parse(JSON.stringify(newDown));

      for (let i = row - 1, j = col + 1; i >= 0 && j < size; i--, j++) {
        if (newUpRight[i][j] === null || i === 0 || j === size - 1) {
          newUpRight = JSON.parse(JSON.stringify(newDown));
          break;
        } else if (newUpRight[i][j] === enemyColor && i !== 0 && j !== 7) {
          newUpRight[i][j] = playerColor;
        } else if (newUpRight[i][j] === playerColor) {
          break;
        }
      }
    }

    // check up-left
    {
      var newUpLeft = JSON.parse(JSON.stringify(newUpRight));

      for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (newUpLeft[i][j] === null || i === 0 || j === 0) {
          newUpLeft = JSON.parse(JSON.stringify(newUpRight));
          break;
        } else if (newUpLeft[i][j] === enemyColor && i !== 0 && j !== 0) {
          newUpLeft[i][j] = playerColor;
        } else if (newUpLeft[i][j] === playerColor) {
          break;
        }
      }
    }

    // check down-right
    {
      var newDownRight = JSON.parse(JSON.stringify(newUpLeft));

      for (let i = row + 1, j = col + 1; i < size && j < size; i++, j++) {
        if (newDownRight[i][j] === null || i === size - 1 || j === size - 1) {
          newDownRight = JSON.parse(JSON.stringify(newUpLeft));
          break;
        } else if (newDownRight[i][j] === enemyColor && i !== 7 && j !== 7) {
          newDownRight[i][j] = playerColor;
        } else if (newDownRight[i][j] === playerColor) {
          break;
        }
      }
    }

    // check down-left
    {
      var newDownLeft = JSON.parse(JSON.stringify(newDownRight));

      for (let i = row + 1, j = col - 1; i < size && j >= 0; i++, j--) {
        if (newDownLeft[i][j] === null || i === size - 1 || j === 0) {
          newDownLeft = JSON.parse(JSON.stringify(newDownRight));
          break;
        } else if (newDownLeft[i][j] === enemyColor && i !== 7 && j !== 0) {
          newDownLeft[i][j] = playerColor;
        } else if (newDownLeft[i][j] === playerColor) {
          break;
        }
      }
    }

    setGridData(newDownLeft);
  };

  const handleClick = (row, col) => () => {
    // console.log(`clicked row: ${row}, col: ${col}`);

    if (gridData[row][col] !== null) {
      return;
    }

    let newRight = [...gridData];
    if (player === "black") {
      newRight[row][col] = "⚫";
      setPlayer("white");
    } else {
      newRight[row][col] = "⚪";
      setPlayer("black");
    }
    setGridData(newRight);
    setCountPlaced(countPlaced + 1);

    checkFlip(row, col);
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="w-10 h-10 bg-green-400 hover:bg-green-600 border-black border-2 text-black text-2xl font-mono font-black flex items-center justify-center"
      onClick={handleClick(row, col)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && gridData[row][col] === null
        ? player === "black"
          ? "⚫"
          : "⚪"
        : gridData[row][col]}
    </button>
  );
};

export default GridItem;
