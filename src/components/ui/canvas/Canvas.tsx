import React from "react";
import { Frame, Element } from "@craftjs/core";
import { Card } from "@mui/material";
import { Container, Button, Text } from "@/components";

export function Canvas() {
  return (
    <Frame>
      <Element
        canvas
        is={Container}
        padding={5}
        background="#eeeeee"
        data-cy="root-container"
      >
        <Card data-cy="frame-card" />
        <Button size="small" data-cy="frame-button" />
        <Text fontSize={"20px"} text="Hi world!" data-cy="frame-text" />
        <Element
          canvas
          is={Container}
          padding={6}
          background="#999999"
          data-cy="frame-container"
        >
          <Text text="It's me again!" data-cy="frame-container-text" />
        </Element>
      </Element>
    </Frame>
  );
}
