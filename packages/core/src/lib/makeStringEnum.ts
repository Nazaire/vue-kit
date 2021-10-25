export function makeStringEnum<
  T extends { [index: string]: U },
  U extends string
>(x: T) {
  return x;
}
