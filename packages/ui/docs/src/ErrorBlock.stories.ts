import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/vue3";

import { ErrorBlock } from "~/components/error-block";
import { InputGroup } from "~/components/input-group";
import { table, enumTable } from "@docs/utils/args";
import { buttonArgTypes } from "./shared/buttonArgTypes";

const meta: Meta = {
  title: "Components/ErrorBlock",
  component: ErrorBlock,
  argTypes: {
    title: {
      type: "text",
      defaultValue: "An Error Occurred",
    },
  },
};

const Template: Story = (args) => {
  return {
    // Components used in your story `template` are defined in the `components` object
    components: { ErrorBlock },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      const errors = [
        "This component can take an array of errors (1)",
        "Here's another error. (2)",
      ];
      return { args, errors };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: `
    <ErrorBlock v-bind="args" :errors="errors">
    </ErrorBlock>`,
  };
};

export const Default = Template.bind({});
Default.args = {};

const SlotTemplate: Story = (args) => {
  return {
    // Components used in your story `template` are defined in the `components` object
    components: { ErrorBlock },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      const errors = [
        "This component can take an array of errors (1)",
        "Here's another error. (2)",
      ];
      return { args, errors };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: `
    <ErrorBlock v-bind="args" :errors="errors">
      <p>Optional default slot that can be used to add more detail.</p> 
    </ErrorBlock>`,
  };
};

export const WithSlot = SlotTemplate.bind({});
WithSlot.args = {};

export default meta;
