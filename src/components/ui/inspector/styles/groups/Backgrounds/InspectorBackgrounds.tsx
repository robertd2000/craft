import { useNode } from "@craftjs/core";
import React from "react";
import { MuiColorInput } from "mui-color-input";
import { FormControl, FormLabel, Typography } from "@mui/material";

export function InspectorBackgrounds() {
  const {
    actions: { setProp },
    background,
  } = useNode((node) => ({
    background: node.data.props.background,
    props: node.data.props,
  }));

  return (
    <div>
      <Typography>Background</Typography>

      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Color</FormLabel>
        <MuiColorInput
          name="background-color"
          value={background}
          onChange={(color) => {
            setProp(
              (props: { background: string }) => (props.background = color),
              500
            );
          }}
        />
      </FormControl>
    </div>
  );
}
