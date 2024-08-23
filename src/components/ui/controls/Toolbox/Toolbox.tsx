import React from "react";
import { Box, Typography, Grid, Button as MaterialButton } from "@mui/material";
import { useEditor, Element } from "@craftjs/core";
import { Button, Container, Text } from "@/components";
import { Layers } from "@craftjs/layers";

export function Toolbox() {
  const { connectors, query } = useEditor();

  return (
    <Box px={2} py={2}>
      <Grid container direction="column" alignItems="center" spacing={1}>
        <Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) =>
              connectors.create(ref, <Button size="small">Buttom</Button>)
            }
            variant="contained"
          >
            Button
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) =>
              connectors.create(ref, <Text fontSize="small" text="Hi world" />)
            }
            variant="contained"
          >
            Text
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) =>
              connectors.create(
                ref,
                <Element is={Container} padding={20} canvas />
              )
            }
            variant="contained"
          >
            Container
          </MaterialButton>
        </Grid>
      </Grid>
      <Layers expandRootOnLoad={true} />
    </Box>
  );
}
