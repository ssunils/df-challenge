import { ListItemButton } from "@mui/material";
import { FC } from "react";

interface DropDownItemProps {
  label: string;
  onClick: () => void;
}
export const DropDownItem: FC<DropDownItemProps> = ({ label, onClick }) => {
  return <ListItemButton onClick={onClick}>{label}</ListItemButton>;
};
