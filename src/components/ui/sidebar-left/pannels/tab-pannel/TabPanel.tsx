import { Box, Typography } from "@mui/material";
import { TabPanelProps } from "./TabPanel.interface";

export function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value != index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{
        width: "100%",
      }}
      {...other}
    >
      {value == index && (
        <Box sx={{ p: 0 }} width={"100%"}>
          <Typography color={"black"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
