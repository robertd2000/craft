"use client";

import { Paper } from "@mui/material";
import React from "react";
import { ContainerProps } from "./Container.interface";
import { useNode } from "@craftjs/core";
import { Inspector } from "../../inspector";

export function Container({
  margin,
  background,
  padding,
  children,
  ...props
}: ContainerProps) {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <Paper
      ref={(ref) => connect(drag(ref))}
      style={{ background, padding: `${padding}px` }}
      {...props}
    >
      {children}
    </Paper>
  );
}

const ContainerSettings = function () {
  return <Inspector />;
};
export const ContainerDefaultProps = {
  size: "small",
  variant: "contained",
  color: "primary",
  text: "Click me",
  width: 100,
};

Container.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings,
  },
};
