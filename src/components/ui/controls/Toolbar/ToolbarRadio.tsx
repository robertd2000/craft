import { FormControlLabel, Radio } from "@mui/material";
import classnames from "classnames";
import React from "react";

// Inspired by blueprintjs
function StyledRadio(props: any) {
  const classes = {
    icon: {
      borderRadius: "100%",
      width: 15,
      height: 15,
      background: "transparent",
      position: "relative",
      padding: "3px",
      border: "2px solid rgb(142, 142, 142)",
      transition: "0.4s cubic-bezier(0.19, 1, 0.22, 1)",
    } as React.CSSProperties,
    checkedIcon: {
      background: "rgb(19, 115, 230)",
      borderColor: "transparent",
      "&:before": {
        content: '""',
        display: "block",
        width: "100%",
        height: "100%",
        borderRadius: "100%",
        background: "#fff",
      },
    },
  };

  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={
        <span className={classnames(classes.icon, classes.checkedIcon)} />
      }
      icon={<span style={{ ...classes.icon }} />}
      {...props}
    />
  );
}

export const ToolbarRadio = ({ value, label }: any) => {
  return (
    <FormControlLabel
      sx={{
        icon: {
          borderRadius: "100%",
          width: 15,
          height: 15,
          background: "transparent",
          position: "relative",
          padding: "3px",
          border: "2px solid rgb(142, 142, 142)",
          transition: "0.4s cubic-bezier(0.19, 1, 0.22, 1)",
        },
        checkedIcon: {
          background: "rgb(19, 115, 230)",
          borderColor: "transparent",
          "&:before": {
            content: '""',
            display: "block",
            width: "100%",
            height: "100%",
            borderRadius: "100%",
            background: "#fff",
          },
        },
      }}
      value={value}
      control={<StyledRadio />}
      label={label}
    />
  );
};
