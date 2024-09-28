import { IconButton } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import "./popoverButton.scss";
import React from "react";
import { GeneralPopover } from "../GeneralPopover";
import Filter from "../../../filter/Filter";

interface popoverButtonProps{
  handleAdult: () => void;
  handleYear: (year:number) => void;
}
const PopoverButton = ({handleAdult, handleYear}:popoverButtonProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <div className="popover-button-container">
      {" "}
      <IconButton
        onClick={handleClick}
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
      >
        <FilterListIcon />
      </IconButton>
      {anchorEl && ( 
        <GeneralPopover
          anchorOriginVertical={"bottom"}
          anchorOriginHorizontal={"left"}
          transformOriginVertical={"top"}
          transformOriginHorizontal={"left"}
          component={<Filter handleClose={handleClose} handleAdult = {handleAdult} handleYear = {handleYear}/>}
          anchor={anchorEl} 
          isOpen={open}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default PopoverButton;
