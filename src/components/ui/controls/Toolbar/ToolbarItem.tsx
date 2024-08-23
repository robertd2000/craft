import { useNode } from "@craftjs/core";
import { Grid, Slider, RadioGroup } from "@mui/material";
import React from "react";

import { ToolbarDropdown } from "./ToolbarDropdown";
import { ToolbarTextInput } from "./ToolbarTextInput";

export type ToolbarItemProps = {
  prefix?: string;
  label?: string;
  full?: boolean;
  propKey?: string;
  index?: number;
  children?: React.ReactNode;
  type: string;
  onChange?: (value: any) => any;
};
export const ToolbarItem = ({
  full = false,
  propKey,
  type,
  onChange,
  index,
  ...props
}: ToolbarItemProps) => {
  const {
    actions: { setProp },
    propValue,
  } = useNode((node) => ({
    propValue: node.data.props?.[propKey as string],
  }));
  const value = Array.isArray(propValue)
    ? propValue[index as number]
    : propValue;

  return (
    <Grid item xs={full ? 12 : 6}>
      <div className="mb-2">
        {["text", "color", "bg", "number"].includes(type) ? (
          <ToolbarTextInput
            {...props}
            type={type}
            value={value}
            onChange={(value) => {
              setProp((props: any) => {
                if (Array.isArray(propValue)) {
                  props[propKey as string][index as number] = onChange
                    ? onChange(value)
                    : value;
                } else {
                  props[propKey as string] = onChange ? onChange(value) : value;
                }
              }, 500);
            }}
          />
        ) : type === "slider" ? (
          <>
            {props.label ? (
              <h4 className="text-sm text-light-gray-2">{props.label}</h4>
            ) : null}
            <Slider
              value={parseInt(value) || 0}
              onChange={
                ((_: any, value: number) => {
                  setProp((props: any) => {
                    if (Array.isArray(propValue)) {
                      props[propKey as string][index as number] = onChange
                        ? onChange(value)
                        : value;
                    } else {
                      props[propKey as string] = onChange
                        ? onChange(value)
                        : value;
                    }
                  }, 1000);
                }) as any
              }
            />
          </>
        ) : type === "radio" ? (
          <>
            {props.label ? (
              <h4 className="text-sm text-light-gray-2">{props.label}</h4>
            ) : null}
            <RadioGroup
              value={value || 0}
              onChange={(e) => {
                const value = e.target.value;
                setProp((props: any) => {
                  props[propKey as string] = onChange ? onChange(value) : value;
                });
              }}
            >
              {props.children}
            </RadioGroup>
          </>
        ) : type === "select" ? (
          <ToolbarDropdown
            value={value || ""}
            onChange={(value: any) =>
              setProp(
                (props: any) =>
                  (props[propKey as string] = onChange
                    ? onChange(value)
                    : value)
              )
            }
            {...props}
          />
        ) : null}
      </div>
    </Grid>
  );
};
