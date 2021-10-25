import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/vue3";

import { Notification, NotificationProps } from "~/components/notification";

import { CheckCircleIcon } from "@heroicons/vue/outline";
import { defineComponent, h } from "vue";
import { Button } from "~/components/button";

const notificationMeta: Meta = {
  title: "Components/Notification",
  component: Notification,
  argTypes: {
    title: {
      type: "text",
      defaultValue: "Title",
    },
    body: {
      type: "text",
      defaultValue: "Body",
    },
  },
};

const Template: Story = (args) => {
  return {
    // Components used in your story `template` are defined in the `components` object
    components: { Notification },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args, onDismiss: action("@dismiss") };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: `<Notification v-bind="args" @dismiss="onDismiss"></Notification>`,
  };
};

export const Default = Template.bind({});
Default.args = {};

export const Icon = Template.bind({});
Icon.args = {
  title: "Successfullly saved!",
  body: "Anyone with a link can now view this file.",
  aside: {
    is: CheckCircleIcon,
    class: "w-6 h-6 text-green-400",
  },
};

export const Image = Template.bind({});
Image.args = {
  title: "Emilia Gates",
  body: "Sure! 8:30pm works great!",
  aside: {
    is: defineComponent(() => {
      return () =>
        h("img", {
          src:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
          class: "h-10 w-10 rounded-full",
        });
    }),
  },
};

const ExtendedTemplate: Story = (args) => {
  return {
    // Components used in your story `template` are defined in the `components` object
    components: { Notification, Button },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args, onDismiss: action("@dismiss") };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: `
    <Notification v-bind="args" @dismiss="onDismiss">
      <template #aside>
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" class="h-10 w-10 rounded-full" />
      </template>

      <div class="block space-x-4">
        <Button color="blue">Accept</Button>
        <Button>Decline</Button>
      </div>
    </Notification>`,
  };
};

export const Extended = ExtendedTemplate.bind({});
Extended.args = {
  title: "Emilia Gates",
  body: "Sent you an invite to connect.",
};

export default notificationMeta;
