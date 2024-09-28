// import * as React from 'react';
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// // interface popoverProps{
// //   handleClose: ()=>void,
// //   handleClick: react
// // }

// export default function BasicPopover() {
//   const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? 'simple-popover' : undefined;

//   return (
//     <div>
//       <Button aria-describedby={id} variant="contained" onClick={handleClick}>
//         Open Popover
//       </Button>
//       <Popover
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'left',
//         }}
//       >
//         <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
//       </Popover>
//     </div>
//   );
// }


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
