import { sizeUnits } from "@/constants";
import { useNode } from "@craftjs/core";
import {
  Box,
  TextField,
  MenuItem,
  Typography,
  FormControl,
  FormLabel,
} from "@mui/material";
import React from "react";

export function InspectorSize() {
  const {
    actions: { setProp },
    width,
    height,
  } = useNode((node) => ({
    width: node.data.props.width,
    height: node.data.props.height,
    props: node.data.props,
  }));

  return (
    <Box
      component="form"
      border={"none"}
      sx={{
        "& .MuiTextField-root": { mt: 1 },
      }}
      noValidate
    >
      <Typography>Size</Typography>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Width</FormLabel>
        <TextField
          id="outlined-select-width"
          size="small"
          value={width}
          onChange={(e) => {
            setProp(
              (props: { width: string | number }) =>
                (props.width = e.target.value),
              500
            );
          }}
        >
          {sizeUnits.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>{" "}
      </FormControl>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Height</FormLabel>
        <TextField
          id="outlined-select-height"
          value={height}
          size="small"
          onChange={(e) => {
            setProp(
              (props: { height: string | number }) =>
                (props.height = e.target.value),
              500
            );
          }}
        >
          {sizeUnits.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </FormControl>
    </Box>
  );
}
