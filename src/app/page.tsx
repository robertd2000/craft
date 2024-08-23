"use client";

import { Grid, Card, Paper } from "@mui/material";
import {
  SettingsPanel,
  Container,
  Button,
  Text,
  SidebarLeft,
} from "@/components";
import { Editor, Frame, Element } from "@craftjs/core";

export default function Home() {
  return (
    <div style={{ margin: "0 auto", height: "100vh" }}>
      <Grid
        xs="auto"
        style={{
          height: "100%",
        }}
      >
        <Editor
          resolver={{
            Card,
            Button,
            Text,
            Container,
          }}
        >
          {/* <Topbar /> */}
          <Grid
            container
            style={{
              height: "100%",
            }}
          >
            <Grid item width={"300px"}>
              <SidebarLeft />
            </Grid>
            <Grid
              item
              xs
              padding={1}
              style={{
                backgroundColor: "grey",
              }}
            >
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
            <Grid item xs={2}>
              <Paper>
                <SettingsPanel />
              </Paper>
            </Grid>
          </Grid>
        </Editor>
      </Grid>
    </div>
  );
}
