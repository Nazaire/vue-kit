import { Meta, Story } from "@storybook/vue3";

import { Spinner } from "~/components/spinner";

const enumTable = (typeName: string, values: object, defaultValue?: string) => {
  return {
    type: {
      summary: typeName,
      detail: Object.values(values).join(", "),
    },
    defaultValue: { summary: defaultValue },
  };
};

const table = (typeName: string, defaultValue?: string) => {
  return {
    type: {
      summary: typeName,
    },
    defaultValue: defaultValue ? { summary: defaultValue } : {},
  };
};

const spinnerMeta: Meta = {
  title: "Components/Spinner",
  component: Spinner,
  argTypes: {},
};

const Template: Story = (args) => {
  return {
    // Components used in your story `template` are defined in the `components` object
    components: { Spinner },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: `<Spinner class="w-6 h-6 text-gray-600" ></Spinner>`,
  };
};

export const Default = Template.bind({});
Default.args = {};

// export const Colored = Template.bind({});
// Colored.args = {
//   color: BadgeColor.BLUE,
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: BadgeSize.LG,
// };

export default spinnerMeta;
