<template>
  <PromiseContext
    :operation="operation"
    :variables="variables"
    :disabled="disabled"
    @update:is-active="$emit('update:isActive', $event)"
    @then="$emit('then', $event)"
    @catch="$emit('catch', $event)"
  >
    <template v-slot="{ execute, isActive, isDisabled, result, error }">
      <Button
        :type="type"
        :color="color"
        :focus="focus"
        :size="size"
        :transparent="transparent"
        :text="text"
        :base="base"
        :round="round"
        :disabled="isActive || isDisabled"
        v-bind="$attrs"
        @click="execute"
      >
        <slot
          :variables="variables"
          :is-disabled="disabled"
          :is-active="isActive"
          :result="result"
          :error="error"
        ></slot>
      </Button>
    </template>
  </PromiseContext>
</template>

<script setup lang="ts">
import { defineComponent, PropType } from "vue";
import { buttonPromiseProps } from "./utils";
import { PromiseContext } from "@vtw-toolkit/core";
import { Button } from "~/components/button";

defineProps({
  ...buttonPromiseProps(),
});

const emit = defineEmits<{
  (e: "update:isActive", isActive: boolean): void;
  (e: "then", result: any): void;
  (e: "catch", error: any): void;
}>();
</script>

<style></style>
