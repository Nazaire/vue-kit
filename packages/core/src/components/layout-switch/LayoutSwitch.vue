<template>
  <Switch :config="config" :active="active">
    <router-view></router-view>
  </Switch>
</template>

<script setup lang="ts">
import { computed, DefineComponent, defineProps, PropType } from "vue";
import { Switch, switchProps } from "~/components/switch";
import { omit } from "lodash";
import { useRoute } from "vue-router";
import { LayoutSwitchValue } from "./types";

defineProps({
  ...omit(switchProps(), "active"),
});

const route = useRoute();

const active = computed(() => route.meta.layout as LayoutSwitchValue);
</script>

<style></style>
