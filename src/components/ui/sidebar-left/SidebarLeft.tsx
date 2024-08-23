import { Box, Tabs, Tab, Typography } from "@mui/material";
import React from "react";
import { sidebarLeftTabs } from "./constants";
import { a11yProps } from "./utils";

interface TabPanelProps {
  children?: React.ReactNode;
  index: string;
  value: string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value != index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value == index && (
        <Box sx={{ p: 3 }}>
          <Typography color={"black"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export function SidebarLeft() {
  const [value, setValue] = React.useState("navigation");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100%",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {sidebarLeftTabs.map((tab, index) => {
          return <Tab {...tab} {...a11yProps(index)} />;
        })}
      </Tabs>
      <TabPanel value={value} index={"components"}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={"navigator"}>
        Item Two
      </TabPanel>
    </Box>
  );
}
