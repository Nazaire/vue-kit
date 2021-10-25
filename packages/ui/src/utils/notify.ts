import { defineProvider, NotificationController } from "@nazaire/vue-kit";
import { Notification, NotificationProps } from "~/components/notification";

/**
 * Generate a default Notify context
 */
const [NotifyProvider, useNotify] = defineProvider("notify", () => {
  // Use 'Notification' as the default Notification component;
  return new NotificationController<NotificationProps>(Notification);
});

export { NotifyProvider, useNotify };
