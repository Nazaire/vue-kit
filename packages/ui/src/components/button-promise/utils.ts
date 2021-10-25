import { promiseContextProps } from "@nazaire/vue-kit";
import { buttonProps } from "~/components/button";

export const buttonPromiseProps = () => ({
  ...promiseContextProps(),
  ...buttonProps(),
});
