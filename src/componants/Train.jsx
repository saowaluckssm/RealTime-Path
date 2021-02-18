import React from "react";
import Traindetail from "./Traindetail";

function Train({ items, isLoading }) {
  // console.log(items);
  return isLoading ? (
    <h1> Loading </h1>
  ) : (
    <div>
      {items.map((item, index) => (
        <Traindetail key={index} item={item}></Traindetail>
      ))}
    </div>
  );
}

export default Train;
