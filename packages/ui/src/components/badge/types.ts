import { makeStringEnum } from "@vtw-toolkit/core";

export const BadgeColor = makeStringEnum({
  GRAY: "gray",
  RED: "red",
  BLUE: "blue",
  YELLOW: "yellow",
  GREEN: "green",
  INDIGO: "indigo",
  PURPLE: "purple",
  PINK: "pink",
});
export type BadgeColor = typeof BadgeColor[keyof typeof BadgeColor];

export const BadgeSize = makeStringEnum({
  MD: "md",
  LG: "lg",
});
export type BadgeSize = typeof BadgeSize[keyof typeof BadgeSize];

export interface BadgeProps {
  /**
   * Color style
   */
  color: BadgeColor;

  /**
   * Button size
   */
  size: BadgeSize;
}
