import { defaults, findIndex } from "lodash";
import { Component, markRaw, Ref, ref, shallowReadonly } from "vue";
import { id } from "~/lib/id";

import { NotificationItem } from "./NotificationItem";
import { NotificationOptions } from "./NotificationOptions";

const defaultOptions = (): NotificationOptions => ({
  ttl: 3000,
});

export class NotificationController<TDefault = any> {
  #items: Ref<NotificationItem[]> = ref([] as NotificationItem[]);

  constructor(public readonly defaultComponent: Component) {}

  public get items(): Ref<Readonly<NotificationItem[]>> {
    return shallowReadonly(this.#items);
  }

  push(
    props: TDefault,
    notificationOptions?: Omit<NotificationOptions, "component">
  ): string;
  push(props: any, notificationOptions?: NotificationOptions): string;
  push(props: any, notificationOptions?: NotificationOptions) {
    console.log("NotificationController.push", { props, notificationOptions });

    let options = defaults(notificationOptions || {}, defaultOptions());

    const notificationId = id();
    const notification: NotificationItem = markRaw({
      id: notificationId,
      component: options?.component || this.defaultComponent,
      props,
      dismiss: () => this.dismiss(notificationId),
      dismissAt: options.ttl ? Date.now() + options.ttl : null,
      dismissTimeout: undefined,
    });

    if (options.ttl) {
      notification.dismissTimeout = setTimeout(
        notification.dismiss,
        options.ttl
      );
    }

    this.#items.value.push(notification);

    return notificationId;
  }

  dismiss(id: string): void;
  dismiss(notification: { id: string }): void;
  dismiss(arg1: { id: string } | string) {
    let id = typeof arg1 === "string" ? arg1 : arg1.id;
    let i = findIndex(this.#items.value, { id });

    if (i >= 0) this.#items.value.splice(i, 1);
  }
}
