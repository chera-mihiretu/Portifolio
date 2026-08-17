/** Wrap a gallery index so prev/next stay inside [0, length). */
export function wrapIndex(index: number, length: number): number {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
}
