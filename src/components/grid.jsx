import React from "react";
import GridRow from "./gridRow";

const Grid = (props) => {
  const renderRow = Array.from({ length: props.size }, (_, index) => (
    <GridRow key={index} row={index} props={props} />
  ));

  return <div className="w-fit border-4 border-black mx-12">{renderRow}</div>;
};

export default Grid;
