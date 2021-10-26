import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/vue3";

import { Modal, ModalSize } from "~/components/modal";
import { table, enumTable } from "@docs/utils/args";
import { Button } from "~/components/button";

const meta: Meta = {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    size: {
      control: { type: "select", options: Object.values(ModalSize) },
      table: enumTable("ModalSize", ModalSize, ModalSize.SM),
    },
    title: {
      type: "text",
      defaultValue: "Modal Title",
    },
    subtitle: {
      type: "text",
      defaultValue: "Lorem ipsum dolor sit amet",
    },
    bodyPadding: {
      control: { type: "boolean" },
      table: table("boolean", "true"),
    },
  },
};

const Template: Story = (args) => {
  console.log({ args });

  return {
    // Components used in your story `template` are defined in the `components` object
    components: { Modal, Button },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args, onUpdateOpen: action("@update:open") };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: `<Modal :open="true"  @update:open="onUpdateOpen" v-bind="args">
    <h1 class="font-bold">Modal</h1>

        A modal with styled header and actions.

        <template #actions="{close}">
          <Button @click="close">Close</Button>
          <Button color="blue" class="ml-2">Confirm</Button>
        </template>
    </Modal>`,
  };
};

export const Default = Template.bind({});
Default.args = {};

const NoActionsTemplate: Story = (args) => {
  return {
    // Components used in your story `template` are defined in the `components` object
    components: { Modal, Button },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args, onUpdateOpen: action("@update:open") };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: `<Modal :open="true"  @update:open="onUpdateOpen" v-bind="args">
    <h1 class="font-bold">Modal</h1>

        A modal with styled header.
    </Modal>`,
  };
};

const CustomHeaderTemplate: Story = (args) => {
  console.log({ args });

  return {
    // Components used in your story `template` are defined in the `components` object
    components: { Modal, Button },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args, onUpdateOpen: action("@update:open") };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: `<Modal :open="true"  @update:open="onUpdateOpen" v-bind="args">
        <template #header>
        <div class="p-4 text-center">
          <h1 class="font-bold">Modal</h1>
        </div>
        </template>

        <p class="text-center">
          A modal with styled header and actions.
        </p>

        <template #actions="{close}">
          <Button @click="close">Close</Button>
          <Button color="blue" class="ml-2">Confirm</Button>
        </template>
    </Modal>`,
  };
};

export const NoActions = NoActionsTemplate.bind({});
NoActions.args = {};

export const CustomHeader = CustomHeaderTemplate.bind({});
CustomHeader.args = {};

export default meta;
