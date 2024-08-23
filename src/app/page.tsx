"use client";

import { Grid, Card, Paper } from "@mui/material";
import {
  SettingsPanel,
  Container,
  Button,
  Text,
  SidebarLeft,
  Canvas,
} from "@/components";
import { Editor } from "@craftjs/core";

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
              <Canvas />
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
