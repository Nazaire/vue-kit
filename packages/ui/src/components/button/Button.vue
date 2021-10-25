<template>
  <button :type="type" :class="buttonClass" :disabled="disabled">
    <!-- TEST: BUTTON -->
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { ButtonFocus, ButtonProps, ButtonSize, ButtonColor } from "./types";
import { buttonProps } from "./utils";

const props: ButtonProps = defineProps({
  ...buttonProps(),
});

// const sizeClass = computed(() => {
//   if (props.text && !props.size) return "";

//   switch (props.size) {
//     case "1":
//       return "px-2.5 py-1.5 text-xs rounded";
//     case "2":
//       return "px-3 py-2 text-xs leading-4 rounded-md";
//     default:
//     case "3":
//       return "px-4 py-2 text-sm rounded-md";
//     case "4":
//       return "px-4 py-2 text-base rounded-md";
//     case "5":
//       return "px-6 py-3 text-base rounded-md";
//   }
// });

const commonStyles = {
  common: "border font-semibold transition-all",
  display: "inline-flex items-center",
  focus: "focus:outline-none focus:ring-2 focus:ring-offset-2",
};

/**
 * Definitions required for each color, describes
 */
interface ButtonStyleEntry {
  default: string;
  transparent: string;
  defaultBorder: string;
  transparentBorder: string;
}

/**
 * Style configurations
 */
const styleConfigs: Record<ButtonColor, ButtonStyleEntry> = {
  inherit: {
    default: "",
    transparent: "",
    defaultBorder: "",
    transparentBorder: "",
  },
  white: {
    default: "bg-white hover:bg-gray-50 text-gray-700",
    transparent: "text-gray-700 hover:text-gray-900",
    defaultBorder: "border-gray-300 shadow-sm",
    transparentBorder: "border-transparent hover:border-gray-300",
  },
  red: {
    default: "bg-red-600 hover:bg-red-700 text-white",
    transparent: "text-red-600 hover:text-red-900",
    defaultBorder: "border-transparent",
    transparentBorder: "border-transparent hover:border-red-900",
  },
  blue: {
    default: "bg-blue-600 hover:bg-blue-700 text-white",
    transparent: "text-blue-600 hover:text-blue-900",
    defaultBorder: "border-transparent",
    transparentBorder: "border-transparent hover:border-blue-300",
  },
};

/**
 * Focus style configurations
 */
const focusStyleConfigs: Record<ButtonFocus, string[]> = {
  none: [],
  blue: [commonStyles.focus, "focus:ring-blue-500"],
  red: [commonStyles.focus, "focus:ring-red-500"],
};

/**
 * Style evalutations
 */
const styles = {
  display({ base }: ButtonProps) {
    if (base) return "";
    else return commonStyles.display;
  },
  size({ size, round, text, base }: ButtonProps) {
    if (text) {
      if (!base) return "px-0.5";
      else return "";
    }
    switch (size) {
      case ButtonSize.XS:
        return "text-xs py-1.5 " + (!round ? "px-2.5" : "px-3");
      case ButtonSize.SM:
        return "text-xs leading-4 py-2 " + (!round ? "px-3" : "px-3.5");
      case ButtonSize.MD:
        return "text-sm px-4 py-2";
      case ButtonSize.LG:
        return "text-base px-4 py-2";

      case ButtonSize.XL:
        return "text-base px-6 py-3";
    }
  },
  borderRadius({ round, size, base }: ButtonProps) {
    if (round) return "rounded-full";
    if (base) return "";
    switch (size) {
      case ButtonSize.XS:
        return "rounded";
      default:
        return "rounded-md";
    }
  },
  border({ color, transparent, text, base }: ButtonProps) {
    if (text || base) return "border-transparent";
    if (transparent) return styleConfigs[color].transparentBorder;
    return styleConfigs[color].defaultBorder;
  },
  style({ color, text, transparent }: ButtonProps): string {
    if (text || transparent) return styleConfigs[color].transparent;
    return styleConfigs[color].default;
  },
  focus({ focus }: ButtonProps) {
    return focusStyleConfigs[focus];
  },
  disabled({ disabled }: ButtonProps) {
    if (disabled) return "opacity-50 cursor-default";
    return "cursor-pointer";
  },
};

const buttonClass = computed(() => {
  let classes: string[] = [commonStyles.common];

  // size class
  classes.push(
    styles.display(props),
    styles.size(props),
    styles.style(props),
    styles.border(props),
    styles.borderRadius(props),
    ...styles.focus(props),
    styles.disabled(props)
  );

  // color
  return classes;
});
</script>
