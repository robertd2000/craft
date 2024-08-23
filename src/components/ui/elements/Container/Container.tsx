"use client";

import { Paper } from "@mui/material";
import React from "react";
import { ContainerProps } from "./Container.interface";
import { useNode } from "@craftjs/core";

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
