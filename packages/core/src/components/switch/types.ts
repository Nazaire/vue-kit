import { Component, DefineComponent } from "vue";

export type SwitchConfig = {
  default: Component;
  [id: string]: Component | undefined;
};

export type SwitchValue =
  | string
  | {
      id: string;
      props?: Record<string, any>;
    };
