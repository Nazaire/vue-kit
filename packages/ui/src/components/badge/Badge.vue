<template>
  <span
    class="inline-flex items-center rounded-full font-medium"
    :class="[badgeClass]"
  >
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { BadgeProps, BadgeColor, BadgeSize } from "./types";

const props: BadgeProps = defineProps({
  color: {
    type: String as PropType<BadgeColor>,
    default: BadgeColor.GRAY,
  },

  size: {
    type: String as PropType<BadgeSize>,
    default: BadgeSize.MD,
  },
});

/**
 * Style configurations
 */
const colorStyles: Record<BadgeColor, string> = {
  gray: "bg-gray-100 text-gray-800",
  red: "bg-red-100 text-red-800",
  blue: "bg-blue-100 text-blue-800",
  yellow: "bg-yellow-100 text-yellow-800",
  green: "bg-green-100 text-green-800",
  indigo: "bg-indigo-100 text-indigo-800",
  purple: "bg-purple-100 text-purple-800",
  pink: "bg-pink-100 text-pink-800",
};

/**
 * Size configurations
 */
const sizeStyles: Record<BadgeSize, string> = {
  md: "px-2.5 py-0.5 text-xs",
  lg: "px-3 py-0.5 text-sm",
};

const badgeClass = computed(() => {
  let classes: string[] = [];

  // size class
  classes.push(colorStyles[props.color], sizeStyles[props.size]);

  // color
  return classes;
});
</script>
