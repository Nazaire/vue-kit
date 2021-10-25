import { computed, defineComponent, h, resolveComponent } from "vue";
import { useRoute } from "vue-router";
import {
  LayoutSwitch,
  LayoutSwitchConfig,
  LayoutSwitchValue,
} from "~/components/layout-switch";

export function createLayoutController(config: LayoutSwitchConfig) {
  return defineComponent({
    setup() {
      return () =>
        h(LayoutSwitch, {
          config,
        });
    },
  });
}
