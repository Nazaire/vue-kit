import { defineComponent, h } from "vue";

/**
 * Simply provides a basic component with a default slot. Useful for quickly defining providers.
 * @param setup
 * @returns
 */
export function defineProviderComponent<T>(setup: () => void) {
  const component = defineComponent({
    render() {
      return h("div", this.$slots.default!());
    },
    setup,
  });
  return component;
}
