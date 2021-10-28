import { defineComponent, h } from "vue";

/**
 * Simply provides a basic component with a default slot. Useful for quickly defining providers.
 * @param setup
 * @returns
 */
export function defineProviderComponent<T>(setup: () => T) {
  const component = defineComponent({
    setup(componentProps, { slots }) {
      // capture the returned value and provide it as a prop
      let result = setup();
      return () => h("div", slots.default!(result));
    },
  });
  return component;
}
