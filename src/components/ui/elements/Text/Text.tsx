"use client";

import React, { useEffect, useState } from "react";
import { TextProps } from "./Text.interface";
import { useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import { FormControl, FormLabel, Slider } from "@mui/material";

export function Text({ text = "Hello!", fontSize, ...props }: TextProps) {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (selected) {
      return;
    }

    setEditable(false);
  }, [selected]);

  return (
    <div
      {...props}
      ref={(ref) => connect(drag(ref))}
      onClick={() => selected && setEditable(true)}
    >
      <ContentEditable
        html={text}
        disabled={!editable}
        onChange={(e) =>
          setProp(
            (props: { text: string }) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")),
            500
          )
        }
        tagName="p"
        style={{ fontSize: `${fontSize}px` }}
      />
    </div>
  );
}

const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
  } = useNode((node) => ({
    text: node.data.props.text,
    fontSize: node.data.props.fontSize,
  }));

  return (
    <>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Font size</FormLabel>
        <Slider
          value={fontSize || 7}
          step={7}
          min={1}
          max={50}
          onChange={(_, value) => {
            setProp(
              (props: { fontSize: number | number[] }) =>
                (props.fontSize = value),
              1000
            );
          }}
        />
      </FormControl>
    </>
  );
};

export const TextDefaultProps = {
  text: "Hi",
  fontSize: 20,
};

Text.craft = {
  props: TextDefaultProps,
  related: {
    settings: TextSettings,
  },
};
