<template>
  <component :is="component" v-bind="componentProps">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed, DefineComponent, defineProps, PropType } from "vue";
import { SwitchConfig, SwitchValue } from "./types";
import { switchProps } from "./utils";

const props = defineProps({
  ...switchProps(),
});

const component = computed(() => {
  let active = props.active;

  let id: string | undefined;
  if (typeof active === "string") {
    id = active;
  } else if (typeof active === "object") {
    id = active.id;
  }

  if (!id) {
    return props.config.default;
  }

  let component = props.config[id];
  if (!component) {
    if (process.env.NODE_ENV !== "production")
      throw `Component with id "${id}" not found. Did you specific it in the config?`;
    return props.config.default;
  } else {
    return component;
  }
});

const componentProps = computed(() => {
  let active = props.active;

  if (typeof active === "object") {
    return active.props || {};
  } else {
    return {};
  }
});
</script>

<style></style>
