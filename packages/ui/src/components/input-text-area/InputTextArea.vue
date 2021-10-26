'
<template>
  <textarea
    :id="id"
    class="block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500"
    :aria-describedby="descriptionId"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { useContext } from "~/utils/InputGroupContext";

defineProps({
  type: {
    type: String as PropType<"text" | "email" | "tel">,
    default: "text",
  },
  modelValue: {},
});

defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const { id, descriptionId } = useContext({});
</script>
