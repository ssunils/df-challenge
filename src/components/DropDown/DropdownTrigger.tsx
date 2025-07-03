import React from "react";
import { useDropdown } from "./DropDown";

export const DropdownTrigger: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { handleContextMenu } = useDropdown();
  return (
    <div
      style={{
        border: "1px solid #333",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        backgroundColor: "#f0f0f0",
      }}
      onContextMenu={handleContextMenu}
    >
      {children}
    </div>
  );
};
