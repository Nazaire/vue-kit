import { Component } from "vue";

export interface NotificationProps {
  title: string;
  body?: string;
  aside?: { is: string | Component; [key: string]: any };
}
