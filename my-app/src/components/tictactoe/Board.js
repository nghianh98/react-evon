import React from "react";
import Cell from "./Cell";
import { calculateWinner } from "../helpers";

const Board = (props) => {
  const cells = [null, null, null, "X", "X", "X", null, null, null];
  console.log(calculateWinner(cells));
  return (
    <div className="game-board">
      {props.cell.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
