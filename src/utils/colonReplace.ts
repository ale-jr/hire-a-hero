export const colonReplace = (
  string: string,
  replaces: Record<string, string | number>,
): string =>
  Object.keys(replaces).reduce(
    (replaced, key) => replaced.replace(`:${key}`, String(replaces[key])),
    string,
  )
