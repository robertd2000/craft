import { PaperProps } from "@mui/material";
import { ReactNode } from "react";

export interface ContainerProps extends PaperProps {
  margin?: string | number;
  background?: string;
  padding?: string | number;
  children: ReactNode;
}
