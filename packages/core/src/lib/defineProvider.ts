import {
  Component,
  DefineComponent,
  inject as injectVue,
  provide as provideVue,
} from "vue";

import { defineProviderComponent } from "./defineProviderComponent";

type Provider<T> = [Component, () => T];

/**
 * Creates a provider component and 'use' function from a simple provider function
 * Usage:
 * ```
 * // UserProvider.ts
 * const [UserProvider, useUser] = defineProvider("user",
 * () => {
 *  // this is run during the compnoents `setup` method. T.f you can inject other deps if needed
 *  const user = getUser():
 *  return user;
 * })
 * ```
 * ```
 * // App.vue
 * <template>
 *  <UserProvider>
 *    <Child></Child>
 *  <UserProvider>
 * </template>
 * ```
 * ```
 * // Child.vue
 * <script>
 * import { useUser } from '../UserProvider.ts'
 * const user = useUser();
 * </script>
 * ```
 * @param id
 * @param provide
 * @returns
 */
export function defineProvider<T>(id: string, provide: () => T): Provider<T> {
  const Component = defineProviderComponent(() => {
    provideVue(id, provide());
  });
  return [
    Component,
    () => {
      let value = injectVue(id) as T;
      if (value === undefined)
        throw `Couldn't find provided value "${id}", make sure this component is a child of the specific Provider.`;
      return value;
    },
  ];
}
