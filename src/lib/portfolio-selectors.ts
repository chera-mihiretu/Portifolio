export function splitFeatured<T>(items: readonly T[]): {
  featured: T | undefined;
  rest: T[];
} {
  const [featured, ...rest] = items;
  return { featured, rest };
}

export function uniqueIds(ids: readonly string[]): string[] {
  return [...new Set(ids)];
}
