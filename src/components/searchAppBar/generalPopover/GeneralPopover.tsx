


import { Popover } from "@mui/material";
import React from "react";
import Filter from "../../filter/Filter";

interface PopoverProps {
  anchorOriginVertical: number | "center" | "top" | "bottom";
  anchorOriginHorizontal: number | "center" | "left" | "right";
  transformOriginVertical: number | "center" | "top" | "bottom";
  transformOriginHorizontal: number | "center" | "left" | "right";
  component: React.ReactElement;
  anchor: HTMLElement;
  isOpen: boolean;
  handleClose: () => void;
}
export function GeneralPopover({
  anchorOriginVertical,
  anchorOriginHorizontal,
  transformOriginVertical,
  transformOriginHorizontal,
  component,
  anchor,
  isOpen,
  handleClose,
}: PopoverProps) {
  const test = "top";
  console.log("anchor is in generalPopover: ", anchor);

  return (
    <div>
      <Popover
        className="popover"
        open={isOpen}
        onClose={handleClose}
        anchorEl={anchor}
        anchorOrigin={{
          vertical: anchorOriginVertical,
          horizontal: anchorOriginHorizontal,
        }}
        transformOrigin={{
          vertical: transformOriginVertical,
          horizontal: transformOriginHorizontal,
        }}
      >
        {React.cloneElement(component)}
      </Popover>
    </div>
  );
}
