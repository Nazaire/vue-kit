import { Component, PropType } from "vue";
export const notificationProps = () => ({
  title: {
    type: String,
    required: true as true,
  },

  body: String,

  aside: {
    type: [String, Object] as PropType<{
      is: string | Component;
      [key: string]: any;
    }>,
  },
});
