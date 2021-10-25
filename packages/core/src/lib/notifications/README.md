# Notification System

```
// ~/providers/notify.ts

import { defineProvider } from "../defineProvider";
import { NotificationController } from "./NotiicationController";
import { Notification, NotificationProps } from "~/components/notification";


const [NotifyProvider, useNotify] = defineProvider("notify", () => {
  // Use 'Notification' as the default Notification component;
  return new NotificationController<NotificationProps>(Notification);
});

export { NotifyProvider, useNotify };
```
