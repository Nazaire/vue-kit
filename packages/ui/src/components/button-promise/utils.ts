import { promiseContextProps } from "@vtw-toolkit/core";
import { buttonProps } from "~/components/button";

export const buttonPromiseProps = () => ({
  ...promiseContextProps(),
  ...buttonProps(),
});
