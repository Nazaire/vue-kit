import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/vue3";

import { InputTextArea } from "~/components/input-text-area";
import { InputGroup } from "~/components/input-group";
import { table, enumTable } from "@docs/utils/args";
import { buttonArgTypes } from "./shared/buttonArgTypes";

const meta: Meta = {
  title: "Components/InputTextArea",
  component: InputTextArea,
  argTypes: {
    placeholder: {
      type: "text",
      defaultValue: "Placeholder",
    },
  },
};

const Template: Story = (args) => {
  console.log({ args });

  return {
    // Components used in your story `template` are defined in the `components` object
    components: { InputTextArea, InputGroup },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args, onUpdateModelValue: action("@update:model-value") };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: `
    <InputGroup id="test" label="InputTextArea">
      <InputTextArea @update:model-value="onUpdateModelValue" v-bind="args">
      </InputTextArea>
    </InputGroup>`,
  };
};

export const Default = Template.bind({});
Default.args = {};

export default meta;
