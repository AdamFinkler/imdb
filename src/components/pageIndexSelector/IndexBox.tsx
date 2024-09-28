import React, { useState } from "react";
import "./indexBox.scss";

interface indexProps {
  index: number;
  selectedPage: number;
  handlePage: (index: number) => void;
}
const IndexBox = ({ index, selectedPage, handlePage }: indexProps) => {
  return (
    <div
      className="index-box-container" // Use className for static styling
      style={{
        border: `3px solid ${selectedPage === index ? "#FF7517" : "black"}`, // Use style for dynamic styling
      }}
      onClick={() => {
        handlePage(index);
        console.log("page index is: ", index);
      }}
    >
      {index}
    </div>
  );
};

export default IndexBox;
