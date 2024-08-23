"use client";

import { Typography, Grid, Card, Paper } from "@mui/material";
import {
  Topbar,
  Toolbox,
  SettingsPanel,
  Container,
  Button,
  Text,
} from "@/components";
import { Editor, Frame, Element } from "@craftjs/core";

export default function Home() {
  return (
    <div style={{ margin: "0 auto", width: "800px" }}>
      <Typography style={{ margin: "20px 0" }} variant="h5" align="center">
        Basic Page Editor
      </Typography>
      <Editor
        resolver={{
          Card,
          Button,
          Text,
          Container,
        }}
      >
        <Topbar />
        <Grid container spacing={5} style={{ paddingTop: "10px" }}>
          <Grid item xs>
            <Frame>
              <Element
                canvas
                is={Container}
                padding={5}
                background="#eeeeee"
                data-cy="root-container"
              >
                <Card data-cy="frame-card" />
                <Button text="Click me" size="small" data-cy="frame-button" />
                <Text fontSize={20} text="Hi world!" data-cy="frame-text" />
                <Element
                  canvas
                  is={Container}
                  padding={6}
                  background="#999999"
                  data-cy="frame-container"
                >
                  <Text
                    size="small"
                    text="It's me again!"
                    data-cy="frame-container-text"
                  />
                </Element>
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={4}>
            <Paper>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}
