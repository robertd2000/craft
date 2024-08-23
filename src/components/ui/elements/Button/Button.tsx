"use client";

import React from "react";
import {
  ButtonProps,
  FormControl,
  FormControlLabel,
  FormLabel,
  Button as MaterialButton,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useNode } from "@craftjs/core";
import { Inspector } from "../../inspector";
import { ToolbarItem } from "../../controls/Toolbar/ToolbarItem";

export function Button({ children = "Click me!", ...props }: ButtonProps) {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <button ref={(ref) => connect(drag(ref))} {...props}>
      {children}
    </button>
  );
}

const ButtonSettings = function () {
  return (
    <>
      <>
        <ToolbarItem
          full={true}
          propKey="background"
          type="bg"
          label="Background"
        />
        <ToolbarItem full={true} propKey="color" type="color" label="Text" />
      </>
    </>
  );
};
export const ButtonDefaultProps = {};

Button.craft = {
  props: ButtonDefaultProps,
  related: {
    settings: ButtonSettings,
  },
};
