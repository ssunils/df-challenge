import React from "react";
import { Popover, List } from "@mui/material";
import { useDropdown } from "./DropDown";

export const DropdownMenu: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { open, anchorPosition, handleClose } = useDropdown();

  return (
    <Popover
      open={open}
      onClose={handleClose}
      anchorReference='anchorPosition'
      anchorPosition={anchorPosition || undefined}
      disableAutoFocus
    >
      <List>{children}</List>
    </Popover>
  );
};
