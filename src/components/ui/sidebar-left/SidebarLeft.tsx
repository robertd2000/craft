import { Box, Tabs, Tab, Typography } from "@mui/material";
import React from "react";
import { sidebarLeftTabs } from "./constants";
import { a11yProps } from "./utils";
import { TabPanel, Navigator } from "./features";

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
        sx={{
          borderRight: 1,
          borderColor: "divider",
          "& .MuiTab-root": {
            minWidth: 0,
          },
        }}
        scrollButtons={false}
      >
        {sidebarLeftTabs.map((tab, index) => {
          return <Tab {...tab} {...a11yProps(index)} />;
        })}
      </Tabs>
      <TabPanel value={value} index={"components"}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={"navigator"}>
        <Navigator />
      </TabPanel>
    </Box>
  );
}
