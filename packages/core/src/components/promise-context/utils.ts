import { PropType } from "vue";

export const promiseContextProps = () => ({
  operation: {
    type: Function as PropType<(variables: any) => Promise<any>>,
    required: true as true,
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  variables: Object as PropType<any>,
});
