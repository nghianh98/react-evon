import React from "react";

const Cell = ({ value, onClick }) => {
  // const { value, onClick } = props;
  // not using props.value
  return (
    <div className="game-cell" onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
