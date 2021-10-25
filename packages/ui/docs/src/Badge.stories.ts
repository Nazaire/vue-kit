import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/vue3";

import { Badge, BadgeProps, BadgeColor, BadgeSize } from "~/components/badge";

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

const badgeMeta: Meta = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    size: {
      control: { type: "select", options: Object.values(BadgeSize) },
      table: enumTable("BadgeSize", BadgeSize, BadgeSize.MD),
    },
    color: {
      control: { type: "select", options: Object.values(BadgeColor) },
      table: enumTable("BadgeColor", BadgeColor, BadgeColor.GRAY),
    },
  },
};

const Template: Story<BadgeProps> = (args) => {
  return {
    // Components used in your story `template` are defined in the `components` object
    components: { Badge },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: `<Badge v-bind="args">Badge</Badge>`,
  };
};

export const Default = Template.bind({});
Default.args = {};

export const Colored = Template.bind({});
Colored.args = {
  color: BadgeColor.BLUE,
};

export const Large = Template.bind({});
Large.args = {
  size: BadgeSize.LG,
};

export default badgeMeta;
