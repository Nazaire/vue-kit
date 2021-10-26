<template>
  <ModalBase
    :open="open"
    @update:open="$emit('update:open', $event)"
    :dialog-class="[maxWidth]"
  >
    <slot name="header" v-if="$slots.header"></slot>
    <div
      v-else
      class="flex items-center justify-between px-4 pt-4 md:px-6 md:pt-6 pb-4"
    >
      <div>
        <DialogTitle class="font-semibold text-lg text-gray-900" v-if="title">{{
          title
        }}</DialogTitle>
        <DialogDescription class="text-gray-600" v-if="subtitle">{{
          subtitle
        }}</DialogDescription>
      </div>
      <div>
        <Button class="group" text @click="$emit('update:open', false)">
          <XIcon
            class="w-6 h-6 text-gray-600 group-hover:text-gray-900"
          ></XIcon>
        </Button>
      </div>
    </div>
    <div class="block px-4 md:px-6 pb-4" v-if="bodyPadding">
      <slot></slot>
    </div>
    <slot v-else> </slot>

    <div
      class="block bg-gray-100 px-4 md:px-6 py-3 text-right"
      v-if="$slots.actions"
    >
      <slot name="actions" :close="() => $emit('update:open', false)"></slot>
    </div>
  </ModalBase>
</template>

<script lang="ts" setup>
import { computed, defineComponent, PropType } from "vue";
import { ModalBase } from "~/components/modal-base";
import { DialogTitle, DialogDescription } from "@headlessui/vue";
import { XIcon } from "@heroicons/vue/solid";
import { Button, ButtonColor, ButtonSize } from "~/components/button";

import { ModalSize } from "./types";

const props = defineProps({
  open: {
    type: Boolean,
  },
  size: {
    type: String as PropType<ModalSize>,
    default: ModalSize.SM,
  },
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  bodyPadding: {
    type: Boolean,
    default: true,
  },
});

defineEmits<{
  (e: "update:open", value: boolean): void;
}>();

const maxWidth = computed(() => {
  switch (props.size) {
    case ModalSize.SM:
      return "sm:max-w-sm";
    case ModalSize.MD:
      return "sm:max-w-md";
    case ModalSize.LG:
      return "sm:max-w-lg";
    case ModalSize.XL:
      return "sm:max-w-xl";
    case ModalSize["2XL"]:
      return "sm:max-w-2xl";
    case ModalSize["3XL"]:
      return "sm:max-w-3xl";
    case ModalSize["4XL"]:
      return "sm:max-w-4xl";
  }
});
</script>

<style></style>
