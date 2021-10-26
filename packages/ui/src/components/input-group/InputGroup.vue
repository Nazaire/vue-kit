<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-700">{{
      label
    }}</label>
    <div class="mt-1">
      <slot :id="id" :aria-describedby="descriptionId"></slot>
    </div>
    <p
      :id="descriptionId"
      class="mt-2 text-sm text-gray-500"
      v-if="description"
    >
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType, provide, ref } from "vue";
import { provideContext } from "~/utils/InputGroupContext";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: String,
  description: String,

  modelValue: {},
});

defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const { descriptionId } = provideContext({
  id: ref(props.id),
  descriptionId: computed(() => {
    if (!props.description) return undefined;
    return props.id + "-desc";
  }),
});
</script>
