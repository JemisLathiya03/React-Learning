import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => store.count);

  return <p className="lead mb-4">The Counter Value is : {counter}</p>;
};

export default DisplayCounter;
