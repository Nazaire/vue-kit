<template>
  <!-- Global notification live region, render this permanently at the end of the document -->
  <div
    aria-live="assertive"
    class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
  >
    <div
      class="w-full flex flex-col items-center space-y-4 sm:items-end"
      v-if="notify"
    >
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition-group
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <component
          v-for="item in notify.items.value"
          :key="item.id"
          :is="item.component"
          v-bind="item.props"
          @dismiss="item.dismiss()"
          @mouseover="onMouseoverNotification(item)"
          @mouseleave="onMouseleaveNotification(item)"
        ></component>
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { max } from "lodash";
import { NotificationItem } from "@vtw-toolkit/core";
import { useNotify } from "~/utils/notify";

const notify = useNotify();

const onMouseoverNotification = (item: NotificationItem) => {
  if (item.dismissTimeout) {
    clearTimeout(item.dismissTimeout);
    item.dismissTimeout = undefined;
  }
};

const onMouseleaveNotification = (item: NotificationItem) => {
  if (item.dismissTimeout) return;

  // Set a minimum of 1s
  let timeout = max([(item.dismissAt || 0) - Date.now(), 1000]);

  item.dismissTimeout = setTimeout(item.dismiss, timeout);
};
</script>

<style></style>
