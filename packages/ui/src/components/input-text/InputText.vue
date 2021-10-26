'
<template>
  <input
    :id="id"
    :type="type"
    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
    type: String as PropType<"text" | "email" | "tel" | "search" | "number">,
    default: "text",
  },
  modelValue: {},
});

defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const { id, descriptionId } = useContext({});
</script>
