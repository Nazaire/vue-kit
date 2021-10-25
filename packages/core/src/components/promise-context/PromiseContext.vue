<template>
  <slot
    :execute="doOperation"
    :variables="variables"
    :is-disabled="disabled"
    :is-active="isActive"
    :result="result"
    :error="error"
  ></slot>
</template>

<script setup lang="ts">
import { PropType, ref, Ref, useAttrs } from "vue";
import { promiseContextProps } from "./utils";

const props = defineProps({
  ...promiseContextProps(),
});

const emit = defineEmits<{
  (e: "update:isActive", isActive: boolean): void;
  (e: "then", result: any): void;
  (e: "catch", error: any): void;
}>();

const result = ref(undefined as any);
const error = ref(undefined as any);
const isActive = ref(false);

const doOperation = async () => {
  if (props.disabled) return;

  isActive.value = true;
  emit("update:isActive", true);

  error.value = undefined;
  result.value = undefined;

  try {
    let actionResult = await props.operation(props.variables);

    result.value = actionResult;

    emit("then", actionResult);
  } catch (actionError: any) {
    console.error(actionError);
    error.value = actionError;
    emit("catch", error);
  } finally {
    isActive.value = false;
    emit("update:isActive", false);
  }
};
</script>

<style></style>
