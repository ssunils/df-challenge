import { ListItemButton, Popover, Stack } from "@mui/material";
import { FC } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

/**
 * TODO: Pending creating sub menu
 * */

interface DropdownSubmenuProps {
  label: string;
  children: React.ReactNode;
}
export const DropdownSubmenu: FC<DropdownSubmenuProps> = ({
  label,
  children,
}) => {
  const expandMenu = () => {
    console.log("Handle Sub Menu");
  };
  return (
    <>
      <ListItemButton onClick={expandMenu}>
        <Stack
          justifyContent={"space-between"}
          direction={"row"}
          width={"100%"}
        >
          <Stack
            alignContent={"flex-start"}
            sx={{
              textAlign: "left",
            }}
          >
            {label}
          </Stack>
          <ArrowForwardIosIcon fontSize='small' />
        </Stack>
      </ListItemButton>
    </>
  );
};
