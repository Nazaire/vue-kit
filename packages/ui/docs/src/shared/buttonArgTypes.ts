import { enumTable, table } from "@docs/utils/args";
import { ButtonColor, ButtonFocus, ButtonSize } from "~/components/button";

export const buttonArgTypes = {
  size: {
    control: { type: "select", options: Object.values(ButtonSize) },
    table: enumTable("ButtonSize", ButtonSize, ButtonSize.SM),
  },
  color: {
    control: { type: "select", options: Object.values(ButtonColor) },
    table: enumTable("ButtonColor", ButtonColor, ButtonColor.WHITE),
  },
  focus: {
    control: { type: "select", options: Object.values(ButtonFocus) },
    table: enumTable("ButtonFocus", ButtonFocus, ButtonFocus.BLUE),
  },
  disabled: {
    control: { type: "boolean" },
    table: table("boolean", "false"),
  },
  base: {
    description:
      "Set this to true to remove non-essential styles. Useful for creating input groups.",
    control: { type: "boolean" },
    table: table("boolean", "false"),
  },
  transparent: {
    control: { type: "boolean" },
    table: table("boolean", "false"),
  },
  text: {
    control: { type: "boolean" },
    table: table("boolean", "false"),
  },
  round: {
    control: { type: "boolean" },
    table: table("boolean", "false"),
  },
};
