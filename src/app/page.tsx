"use client";

import { Grid, Card } from "@mui/material";
import {
  Container,
  Button,
  Text,
  SidebarLeft,
  Canvas,
  SettingsPanel,
} from "@/components";
import { Editor } from "@craftjs/core";
import { RenderNode } from "@/components/ui/render-node";

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
          onRender={RenderNode}
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
              style={{
                backgroundColor: "rgb(237, 237, 237)",
              }}
            >
              <Canvas />
            </Grid>
            <Grid item xs={2}>
              <SettingsPanel />
            </Grid>
          </Grid>
        </Editor>
      </Grid>
    </div>
  );
}
