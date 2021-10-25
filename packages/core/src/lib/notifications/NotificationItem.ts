import { Component } from "vue";

export interface NotificationItem {
  id: string;
  component: Component;
  props: any;

  dismissAt: number | null;
  dismissTimeout: ReturnType<typeof setTimeout> | undefined;

  /**
   * Dismiss this notification immediately
   */
  dismiss: () => void;
}
