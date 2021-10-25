import { ButtonColor, ButtonFocus, ButtonProps, ButtonSize } from "./types";
import { PropType } from "vue";

export const buttonProps = () => ({
  color: {
    type: String as PropType<ButtonColor>,
    default: ButtonColor.WHITE,
  },

  focus: {
    type: String as PropType<ButtonFocus>,
    default: ButtonFocus.BLUE,
  },

  size: {
    type: String as PropType<ButtonSize>,
    default: ButtonSize.SM,
  },

  transparent: Boolean,

  text: Boolean,

  base: Boolean,

  round: Boolean,

  disabled: Boolean,

  type: {
    type: String,
    default: "button",
  },
});
