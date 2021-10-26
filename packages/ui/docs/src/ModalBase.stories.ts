import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/vue3";

import { ModalBase } from "~/components/modal-base";
import { table, enumTable } from "@docs/utils/args";
import { buttonArgTypes } from "./shared/buttonArgTypes";

const meta: Meta = {
  title: "Components/ModalBase",
  component: ModalBase,
  argTypes: {
    dialogClass: {
      type: "text",
      defaultValue: "max-w-sm p-4",
    },
  },
};

const Template: Story = (args) => {
  console.log({ args });

  return {
    // Components used in your story `template` are defined in the `components` object
    components: { ModalBase },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args, onUpdateOpen: action("@update:open") };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: `<ModalBase :open="true" @update:open="onUpdateOpen" v-bind="args">

    <h1 class="font-bold">ModalBase</h1>
    An unstyled Modal. Set a max width with: dialogClass="max-w-sm".
    </ModalBase>`,
  };
};

export const Default = Template.bind({});
Default.args = {};

export default meta;
