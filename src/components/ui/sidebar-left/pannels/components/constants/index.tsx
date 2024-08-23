import CropSquareIcon from "@mui/icons-material/CropSquare";
import SegmentIcon from "@mui/icons-material/Segment";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import { Button, Container, Text } from "@/components";

const textComponentsGroup = [
  {
    component: Text,
    label: "Paragraph",
    icon: (
      <SegmentIcon
        style={{
          width: 50,
          height: 50,
        }}
      />
    ),
  },
  {
    component: Text,
    label: "Paragraph",
    icon: (
      <SegmentIcon
        style={{
          width: 50,
          height: 50,
        }}
      />
    ),
  },
  {
    component: Text,
    label: "Paragraph",
    icon: (
      <SegmentIcon
        style={{
          width: 50,
          height: 50,
        }}
      />
    ),
  },
  {
    component: Text,
    label: "Paragraph",
    icon: (
      <SegmentIcon
        style={{
          width: 50,
          height: 50,
        }}
      />
    ),
  },
];

const basicComponentsGroup = [
  {
    component: Button,
    label: "Button",
    icon: (
      <IndeterminateCheckBoxIcon
        style={{
          width: 50,
          height: 50,
        }}
      />
    ),
  },
];

const structureComponentsGroup = [
  {
    component: Container,
    label: "Container",
    icon: (
      <CropSquareIcon
        style={{
          width: 50,
          height: 50,
        }}
      />
    ),
  },
];

export const componentsGroups = [
  {
    title: "Typography",
    components: textComponentsGroup,
  },
  {
    title: "Basic",
    components: basicComponentsGroup,
  },
  {
    title: "Structure",
    components: structureComponentsGroup,
  },
];
