import { Component } from "vue";

export interface NotificationOptions {
  /**
   * how long to show the notification before dismissing it,
   * if it's undefined then the notification will not be automatically dismissed
   */
  ttl?: number;
  component?: Component;
}
