import { PropType } from "vue";
import { SwitchConfig, SwitchValue } from "./types";

export const switchProps = () => ({
  config: {
    type: Object as PropType<SwitchConfig>,
    required: true as true,
  },

  active: {
    type: [Object, String] as PropType<SwitchValue>,
    required: false,
  },
});
