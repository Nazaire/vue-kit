import { makeStringEnum } from "@nazaire/vue-kit";

export const ModalSize = makeStringEnum({
  // XS: "xs",
  SM: "sm",
  MD: "md",
  LG: "lg",
  XL: "xl",
  "2XL": "2xl",
  "3XL": "3xl",
  "4XL": "4xl",
});

export type ModalSize = typeof ModalSize[keyof typeof ModalSize];
