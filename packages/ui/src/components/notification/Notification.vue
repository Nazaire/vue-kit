<template>
  <div
    class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
  >
    <div class="p-4">
      <div class="flex items-start">
        <div class="flex-shrink-0 mr-3" v-if="$slots.aside || aside">
          <template v-if="$slots.aside">
            <slot name="aside"></slot>
          </template>
          <component
            v-else-if="aside"
            v-bind="aside"
            :is="aside.is"
          ></component>
        </div>
        <div class="w-0 flex-1 pt-0.5">
          <p class="text-sm font-medium text-gray-900">{{ title }}</p>
          <p class="mt-1 text-sm text-gray-500" v-if="body">
            {{ body }}
          </p>
          <div class="mt-3" v-if="$slots.default">
            <slot name="default"></slot>
          </div>
        </div>
        <div class="ml-4 flex-shrink-0 flex">
          <button
            @click="$emit('dismiss')"
            class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="sr-only">Close</span>
            <XIcon class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { XIcon } from "@heroicons/vue/solid";
import { NotificationProps } from "./types";
import { notificationProps } from "./utils";

const props: NotificationProps = defineProps({
  ...notificationProps(),
});

defineEmits<{ (e: "dismiss"): void }>();
</script>

<style></style>
