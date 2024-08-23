import React from "react";
import { componentsGroups } from "./constants";
import { useEditor, Element } from "@craftjs/core";
import { Typography, Grid, Box, Divider } from "@mui/material";

export function Components() {
  const { connectors } = useEditor();

  return (
    <div>
      <Box pb={2} p={2}>
        <Typography>Drag to add</Typography>
      </Box>
      <Divider />
      {componentsGroups.map((group) => (
        <div key={group.title}>
          <Typography
            sx={{
              padding: [1, 2],
            }}
          >
            {group.title}
          </Typography>

          <Grid
            container
            spacing={4}
            sx={{
              padding: 2,
            }}
          >
            {group.components.map((component, i) => (
              <Grid xs={4} item key={component.label + i}>
                <Box
                  ref={(ref) =>
                    connectors.create(
                      ref,
                      <Element is={component.component} padding={20} canvas />
                    )
                  }
                >
                  {component.icon}
                </Box>
                <Typography fontSize={12} align="center">
                  {component.label}
                </Typography>
              </Grid>
            ))}
          </Grid>

          <Divider />
        </div>
      ))}
    </div>
  );
}
