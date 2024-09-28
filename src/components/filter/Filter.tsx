import { Button, Switch, TextField } from "@mui/material";
import React, { useRef } from "react";
import "./filter.scss";

interface filterProps {
  handleClose: () => void;
  handleAdult: () => void;
  handleYear: (year: number) => void;
}
const Filter = ({ handleClose, handleAdult, handleYear }: filterProps) => {
  const isAdultRef = useRef<boolean>(false);
  const yearInputRef = useRef<HTMLInputElement | null>(null);

  const handleApply = () => {
    const yearValue = yearInputRef.current?.value;
    if (yearValue && !isNaN(Number(yearValue))) {
      handleYear(Number(yearValue));
    }

    handleAdult();

    handleClose();
  };

  return (
    <div className="filter-popup-container">
      <p className="filter-by-text">filter by:</p>
      <div className="filter-property-container">
        <TextField
          id="standard-basic"
          label="Year"
          variant="standard"
          inputRef={yearInputRef}
        />
      </div>

      <div className="include-18-container">
        <p>include 18+</p>
        <Switch defaultChecked onClick={handleAdult} inputRef={isAdultRef} />
      </div>
      <div className="apply-button-container">
        <Button variant="contained" onClick={handleApply}>
          Apply
        </Button>
      </div>
    </div>
  );
};

export default Filter;
