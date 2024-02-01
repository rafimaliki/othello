import React from "react";
import GridItem from "./gridItem";

const GridRow = ({ row, props }) => {
  const renderGridItem = Array.from({ length: props.size }, (_, index) => (
    <GridItem key={index} row={row} col={index} props={props} />
  ));

  return <div className="flex w-fit h-10">{renderGridItem}</div>;
};

export default GridRow;
