import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/vue3";
import { ButtonPromise } from "~/components/button-promise";
import { Spinner } from "~/components/spinner";

import { buttonArgTypes } from "./shared/buttonArgTypes";

const componentMeta: Meta = {
  title: "Components/ButtonPromise",
  component: ButtonPromise,
  argTypes: {
    ...buttonArgTypes,
  },
};

const wait = (time: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const DefaultTemplate: Story = (args) => {
  return {
    // Components used in your story `template` are defined in the `components` object
    components: { ButtonPromise, Spinner },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      /**
       * Waits for some time before returning 'OK'
       * @returns 'OK'
       */
      const waitOperation = async () => {
        await wait(2000);
        return "OK";
      };

      return {
        waitOperation,
        args,
        onUpdateIsActive: action("@update:is-active"),
        onThen: action("@then"),
        onCatch: action("@catch"),
      };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: `
      <ButtonPromise v-bind="args" :operation="waitOperation" @update:is-active="onUpdateIsActive" @then="onThen" @catch="onCatch">
      <template v-slot="{ isActive, result }">

          <Spinner class="w-5 h-5 -ml-1 mr-2" v-if="isActive"></Spinner>

          <span v-if="result">
            {{ result }}
          </span>
          <span v-else-if="error">
            ! {{ error }}
          </span>
          <span v-else>
          Execute
          </span>

      </template>
      </ButtonPromise>`,
  };
};

export const Default = DefaultTemplate.bind({});
Default.args = {};

export default componentMeta;
