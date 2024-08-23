"use client";

import React from "react";
import { ButtonProps, Button as MaterialButton } from "@mui/material";
import { useNode } from "@craftjs/core";

export function Button({ children, ...props }: ButtonProps) {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <MaterialButton ref={(ref) => connect(drag(ref))} {...props}>
      {children}
    </MaterialButton>
  );
}
