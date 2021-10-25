import { makeStringEnum } from "@nazaire/vue-kit";

export const ButtonColor = makeStringEnum({
  INHERIT: "inherit",
  WHITE: "white",
  RED: "red",
  BLUE: "blue",
});

export type ButtonColor = typeof ButtonColor[keyof typeof ButtonColor];

export const ButtonFocus = makeStringEnum({
  NONE: "none",
  RED: "red",
  BLUE: "blue",
});
export type ButtonFocus = typeof ButtonFocus[keyof typeof ButtonFocus];

export const ButtonSize = makeStringEnum({
  XS: "xs",
  SM: "sm",
  MD: "md",
  LG: "lg",
  XL: "xl",
});
export type ButtonSize = typeof ButtonSize[keyof typeof ButtonSize];

export interface ButtonProps {
  /**
   * Color style
   */
  color: ButtonColor;

  /**
   * Focus Style
   */
  focus: ButtonFocus;

  /**
   * Button size
   */
  size: ButtonSize;

  /**
   * Base modifier
   */
  base: boolean;

  /**
   * Transparent modifier
   */
  transparent: boolean;

  /**
   * Text modifier
   */
  text: boolean;

  /**
   * Round modifier
   */
  round: boolean;

  /**
   * Disabled modifier
   */
  disabled: boolean;
}
