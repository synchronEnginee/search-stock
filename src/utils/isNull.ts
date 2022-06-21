/**
 * When value is `null` or `undefined`, return `false`.
 */
const isNonNull = <T>(value: T): value is NonNullable<T> => {
  if (value === null || value === undefined) return false;
  return true;
};

export default isNonNull;
