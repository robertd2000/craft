import { Divider } from "@mui/material";
import { InspectorSize } from "./styles/groups/Size";
import { InspectorBackgrounds } from "./styles/groups/Backgrounds";
import { ReactNode } from "react";
import { ToolbarItem } from "../controls/Toolbar/ToolbarItem";

interface InspectorProps {
  specificSettings?: ReactNode;
}
export function Inspector({ specificSettings }: InspectorProps) {
  return (
    <div
      style={{
        color: "black",
      }}
    >
      {specificSettings ? (
        <>
          {specificSettings}

          <Divider />
        </>
      ) : null}
      <ToolbarItem propKey="width" type="text" label="Width" />
      <ToolbarItem propKey="height" type="text" label="Height" />

      <InspectorSize />

      <Divider />

      <InspectorBackgrounds />
    </div>
  );
}
