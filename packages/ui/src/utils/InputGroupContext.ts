import { Ref, ref } from "vue";
import { defineContext } from "@nazaire/vue-kit";

interface InputGroupContext {
  id?: Ref<string>;
  descriptionId?: Ref<string | undefined>;
}

const [provideContext, useContext] = defineContext<InputGroupContext>(
  "input-group"
);

export { provideContext, useContext };
