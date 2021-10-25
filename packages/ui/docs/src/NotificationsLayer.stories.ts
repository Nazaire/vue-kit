import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/vue3";

import { Notification, NotificationProps } from "~/components/notification";
import { NotificationsLayer } from "~/components/notifications-layer";

import { CheckCircleIcon } from "@heroicons/vue/outline";
import { defineComponent, h } from "vue";
import { Button } from "~/components/button";
import { NotifyProvider, useNotify } from "~/utils/notify";

const notificationMeta: Meta = {
  title: "Components/NotificationsLayer",
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

const NotificationGenerator = defineComponent(() => {
  const notify = useNotify();

  // notify.push({
  //   title: "Hello World",
  //   body:
  //     "Any component below <NotifyProvider> can call useNotify() to push to the notifications layer.",
  // });

  return () =>
    h(
      Button,
      {
        onClick: ($event: any) =>
          notify.push({
            title: "You clicked a button!",
            body:
              "Any component below <NotifyProvider> can call useNotify() to push to the notification controller.",
            aside: {
              is: CheckCircleIcon,
              class: "w-6 h-6 text-green-400",
            },
          }),
      },
      "Create Notification"
    );
});

const Template: Story = (args) => {
  return {
    // Components used in your story `template` are defined in the `components` object
    components: { NotificationsLayer, NotificationGenerator, NotifyProvider },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args, onDismiss: action("@dismiss") };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: `
    <NotifyProvider>
      <!-- Example component that generates notifications -->
      <NotificationGenerator></NotificationGenerator>
      <NotificationsLayer v-bind="args" @dismiss="onDismiss" class="z-10"></NotificationsLayer>
    </NotifyProvider>`,
  };
};

export const Default = Template.bind({});
Default.args = {};

export default notificationMeta;
