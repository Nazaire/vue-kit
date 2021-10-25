import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/vue3";

import {
  Button,
  ButtonColor,
  ButtonFocus,
  ButtonProps,
  ButtonSize,
} from "~/components/button";
import { table, enumTable } from "@docs/utils/args";
import { buttonArgTypes } from "./shared/buttonArgTypes";

const buttonMeta: Meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    ...buttonArgTypes,
  },
};

const Template: Story<ButtonProps> = (args) => {
  console.log({ args });

  return {
    // Components used in your story `template` are defined in the `components` object
    components: { Button },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args, onClick: action("@click") };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: `<Button v-bind="args" @click="onClick">My Button</Button>`,
  };
};

export const Default = Template.bind({});
Default.args = {};

export const Colored = Template.bind({});
Colored.args = {
  color: ButtonColor.BLUE,
};

export const Round = Template.bind({});
Round.args = {
  color: ButtonColor.BLUE,
  round: true,
};

export const Transparent = Template.bind({});
Transparent.args = {
  // color: ButtonColor.BLUE,
  transparent: true,
};

export const Text = Template.bind({});
Text.args = {
  text: true,
};

export default buttonMeta;
