import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  MouseEvent,
} from "react";
import { PopoverPosition } from "@mui/material";

type DropdownContextType = {
  open: boolean;
  anchorPosition: PopoverPosition | null;
  handleContextMenu: (e: MouseEvent) => void;
  handleClose: () => void;
  onSelect: (value: string) => void;
};

const DropdownContext = createContext<DropdownContextType | undefined>(
  undefined
);

export const useDropdown = () => {
  const ctx = useContext(DropdownContext);
  console.log("Triggered");
  if (!ctx) throw new Error("Dropdown components ");
  return ctx;
};

export const Dropdown: React.FC<{
  children: ReactNode;
  onSelect: (value: string) => void;
}> = ({ children, onSelect }) => {
  const [open, setOpen] = useState(false);
  const [anchorPosition, setAnchorPosition] = useState<PopoverPosition | null>(
    null
  );

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    setAnchorPosition({ top: e.clientY, left: e.clientX });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorPosition(null);
  };

  return (
    <DropdownContext.Provider
      value={{ open, anchorPosition, handleContextMenu, handleClose, onSelect }}
    >
      {children}
    </DropdownContext.Provider>
  );
};
