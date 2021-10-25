export const enumTable = (
  typeName: string,
  values: object,
  defaultValue?: string
) => {
  return {
    type: {
      summary: typeName,
      detail: Object.values(values).join(", "),
    },
    defaultValue: { summary: defaultValue },
  };
};

export const table = (typeName: string, defaultValue?: string) => {
  return {
    type: {
      summary: typeName,
    },
    defaultValue: defaultValue ? { summary: defaultValue } : {},
  };
};
