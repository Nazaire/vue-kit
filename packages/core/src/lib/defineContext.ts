import { inject, provide } from "vue";
import { id } from "./id";

/**
 * Generates a **typed** provide and a use function for a context that be shared across the component tree.
 * Usage:
 * ```
 * // user.context.ts
 * const [provideUser, useUser] = defineContext<User>()
 * export { provideUser, useUser };
 * ```
 * ```
 * // parent.vue
 * import { provideUser } from "../contexts/user.context.ts"
 * const user = provideUser({ id: "123", username: "john" })
 * ```
 * ```
 * // child.vue
 * import { useUser } from "../contexts/user.context.ts"
 * const user = useUser();
 * ```
 * @param key
 * @param value
 * @returns
 */
export function defineContext<T>(key = id()) {
  return [
    (value: T) => {
      provide(key, value);
      return value;
    },
    (fallback?: T) => inject(key, fallback) as T,
  ] as [(value: T) => T, (fallback?: T) => T];
}
